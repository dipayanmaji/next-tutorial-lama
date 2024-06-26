import { handleGithubLogin, handleGoogleLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.providerBtn}>
                        <FaGithub />
                        Login with Github
                    </button>
                </form>

                <form action={handleGoogleLogin}>
                    <button className={styles.providerBtn}>
                        <FaGoogle />
                        Login with Google
                    </button>
                </form>

                OR

                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;