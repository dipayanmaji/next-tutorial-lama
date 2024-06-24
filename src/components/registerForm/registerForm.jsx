"use client"
import { register } from '@/lib/action';
import styles from './registerForm.module.css';
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from 'react';
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

    // const router = useRouter();

    const [usernameValue, setUsernameValue] = useState('');

    const handleUsername = (e) => {
        let value = e.target.value;
        value = value.split(/\s+/).join("");
        
        setUsernameValue(value.toLowerCase());
    }

    // useEffect(() => {
    //     state?.success && router.push('./login');
    // }, [state?.success, router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="Username" name="username" value={usernameValue} onChange={handleUsername} />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Password Again" name="passwordRepeat" />
            <SubmitButton />
            <p className={styles.error}>{state?.error}</p>

            <p>Have an account? <Link href={'/login'}><b>Login</b></Link></p>
        </form>
    )
}

export default RegisterForm;