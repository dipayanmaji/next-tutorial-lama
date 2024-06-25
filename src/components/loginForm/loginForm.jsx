"use client"
import { login } from '@/lib/action';
import styles from './loginForm.module.css';
import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending ? true : false}>
            {pending ? "Processing..." : "Login"}
        </button>
    );
}

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="Username: admin" name="username" />
            <input type="password" placeholder="Password: admin" name="password" />
            <SubmitButton />
            <p className={styles.error}>{state?.error}</p>

            <p>Don&apos;t have an account? <Link href={'/register'}><b>Register</b></Link></p>
        </form>
    )
}

export default LoginForm;