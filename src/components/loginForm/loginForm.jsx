"use client"
import { login } from '@/lib/action';
import styles from './loginForm.module.css';
import { useFormState } from "react-dom";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);

    const router = useRouter();

    // useEffect(() => {
    //     state?.success && router.push('/');
    // }, [state?.success, router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login with credentials</button>
            <p className={styles.error}>{state?.error}</p>

            <p>Don&apos;t have an account? <Link href={'/register'}><b>Register</b></Link></p>
        </form>
    )
}

export default LoginForm;