import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcryptjs from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
    try {
        await connectToDb();
        const user = await User.findOne({ username: credentials.username });

        if (!user) {
            throw new Error("User not exists, try to register.")
        }

        const isPasswordCorrect = await bcryptjs.compare(
            credentials.password,
            user.password
        );

        if (!isPasswordCorrect) {
            throw new Error("Worng password.")
        }

        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to login");
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            // GitHub now sends `iss` in the OAuth callback (RFC 9207); without this,
            // Auth.js compares it to its "https://authjs.dev" placeholder and fails
            // with CallbackRouteError.
            issuer: "https://github.com/login/oauth",
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;

                } catch (err) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user, account, profile);
            if (account.provider === "github") {
                try {
                    await connectToDb();
                    const userFromEmail = await User.findOne({ email: profile.email });

                    const providedUserName = profile.login;
                    const userFromUsername = await User.findOne({ username: providedUserName });

                    if (!userFromEmail && !userFromUsername) {
                        const newUser = new User({
                            username: providedUserName,
                            email: profile.email,
                            img: profile.avatar_url,
                        });

                        await newUser.save();
                    }
                } catch (err) {
                    console.log(err);
                    return false;
                }
            }

            else if (account.provider === "google") {
                try {
                    await connectToDb();
                    const userFromEmail = await User.findOne({ email: profile.email });

                    // family_name is missing on some Google accounts, and names can contain spaces
                    const providedUserName = [profile.given_name, profile.family_name]
                        .filter(Boolean)
                        .join("")
                        .replace(/\s+/g, "")
                        .toLowerCase();
                    const userFromUsername = await User.findOne({ username: providedUserName });


                    if (!userFromEmail && !userFromUsername) {
                        const newUser = new User({
                            username: providedUserName,
                            email: profile.email,
                            img: profile.picture,
                        });

                        await newUser.save();
                    }
                } catch (err) {
                    console.log(err);
                    return false;
                }
            }

            return true;
        },
        ...authConfig.callbacks,
        // For GitHub/Google, `user` is the provider profile, not our DB user,
        // so swap in the DB record to get the real id, username and isAdmin.
        async jwt({ token, user, account, profile }) {
            if (account && account.provider !== "credentials" && profile?.email) {
                await connectToDb();
                const dbUser = await User.findOne({ email: profile.email });
                if (dbUser) user = dbUser;
            }
            return authConfig.callbacks.jwt({ token, user });
        },
    }
})