"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcryptjs from "bcryptjs";


// ADD POST FUNCTION
export const addPost = async (prevState, formData) => {

    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");
    // const id = formData.get("id");

    const { title, desc, slug, userId, img } = Object.fromEntries(formData);

    // console.log(title, desc, slug, userId);

    if (!title.trim()) {
        return { error: "Post title missing" };
    }
    if (!slug.trim()) {
        return { error: "Post slug missing" };
    }
    if (!desc.trim()) {
        return { error: "Post description missing" };
    }

    try {
        connectToDb();

        const post = await Post.findOne({ slug });
        if (post) {
            return { error: "Post already exists with same slug" };
        }

        const newPost = new Post({
            title,
            desc,
            slug,
            img,
            userId
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");

        prevState.postSlug = slug;
        return prevState;
    } catch (err) {
        console.log(err);
        return { error: "Somthing went wrong" };
    }
};


// DELETE POST FUNCTION
export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Somthing went wrong" };
    }
};


// ADD USER FUNCTION
export const addUser = async (prevState, formData) => {
    const { username, email, password, img, isAdmin } = Object.fromEntries(formData);

    if (!username.trim()) return { error: "Username missing" };
    if (!email.trim()) return { error: "Email missing" };
    if (!password.trim()) return { error: "Password missing" };

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    try {
        connectToDb();

        const userFindByUsername = await User.findOne({ username });
        const userFindByEmail = await User.findOne({ email });

        if (userFindByUsername) {
            return { error: "Username already exists." };
        }

        if (userFindByEmail) {
            return { error: "Email already exists." };
        }

        const newUser = new User({
            username, email, password: hashedPassword, img, isAdmin
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin");

        prevState.user = username;
        return prevState;
    } catch (err) {
        console.log(err);
        return { error: "Somthing went wrong" };
    }
};


// DELETE USER FUNCTION
export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Somthing went wrong" };
    }
};


// LOGIN WITH GITHUB FUNCTION
export const handleGithubLogin = async () => {
    await signIn("github");
}


// LOGOUT FUNCTION
export const handleLogout = async () => {
    await signOut();
}


// REGISTER FUNCTION
export const register = async (previousState, formData) => {
    const { username, email, password, passwordRepeat, img } = Object.fromEntries(formData);

    if (!username.trim() || !email.trim() || !password.trim() || !passwordRepeat.trim()) {
        return { error: "Fill up the all field" };
    }

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" };
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    try {
        connectToDb();

        const userFindByUsername = await User.findOne({ username });
        const userFindByEmail = await User.findOne({ email });

        if (userFindByUsername) {
            return { error: "Username already exists, try to login." };
        }

        if (userFindByEmail) {
            return { error: "Email already exists, try to login." };
        }

        const newUser = await User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log("saved to db");

        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}


// LOGIN WITH CREDENTIALS FUNCTION
export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    if (!username.trim() || !password.trim()) {
        return { error: "Fill up the all field" };
    }

    try {

        // I used verification here as well for some 1st time login issue
        // start
        connectToDb();
        const user = await User.findOne({ username });

        if (!user) {
            return { error: "User not exists, try to register." };
        }

        const isPasswordCorrect = await bcryptjs.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return { error: "Worng password." };
        }
        // end


        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
}


export const contactUs = async (prevState, formData) => {
    try {

        formData.append("access_key", "cb747197-5681-4897-968c-933e2ca93460");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        if (!object.name.trim()) return { error: "Name missing" };
        if (!object.email.trim()) return { error: "Email missing" };

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            prevState.count++;
            return prevState;
        }

    } catch (err) {
        console.log(err);
        return { error: "Somthing went wrong" };
    }
}