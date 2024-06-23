"use client"
import { register } from '@/lib/action';
import styles from './registerForm.module.css';
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending ? true : false}>
            {pending ? "Processing..." : "Register"}
        </button>
    );
}

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter();

    // useEffect(() => {
    //     state?.success && router.push('./login');
    // }, [state?.success, router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="password again" name="passwordRepeat" />
            <SubmitButton />
            <p className={styles.error}>{state?.error}</p>

            <p>Have an account? <Link href={'/login'}><b>Login</b></Link></p>
        </form>
    )
}

export default RegisterForm;