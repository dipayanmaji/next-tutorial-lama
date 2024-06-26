"use client"
import { login } from '@/lib/action';
import styles from './loginForm.module.css';
import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';

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
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="Username: admin" name="username" />
            <div className={styles.passwordWrapper}>
                <input type={showPassword ? "text" : "password"} placeholder="Password: admin" name="password" />
                <span className={styles.passwordEye} onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
            </div>
            <SubmitButton />
            <p className={styles.error}>{state?.error}</p>

            <p>Don&apos;t have an account? <Link href={'/register'}><b>Register</b></Link></p>
        </form>
    )
}

export default LoginForm;