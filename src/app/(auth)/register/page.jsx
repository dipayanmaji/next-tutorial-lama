import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";
import { handleGithubLogin, handleGoogleLogin } from "@/lib/action";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.providerBtn}>
                        <FaGithub />
                        Register with Github
                    </button>
                </form>

                <form action={handleGoogleLogin}>
                    <button className={styles.providerBtn}>
                        <FaGoogle />
                        Register with Google
                    </button>
                </form>

                OR

                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage;