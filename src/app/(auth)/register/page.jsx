import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";
import { handleGithubLogin } from "@/lib/action";
import { FaGithub } from "react-icons/fa";

const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.github}>
                        <FaGithub />
                        Register with Github
                    </button>
                </form>

                OR

                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage;