"use client";
import { addUser } from '@/lib/action';
import styles from './adminUserForm.module.css';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending ? true : false}>
            {pending ? "Processing..." : "Add"}
        </button>
    );
}

const AdminUserForm = () => {

    const [state, formAction] = useFormState(addUser, { user: null });
    const formRef = useRef();

    const [usernameValue, setUsernameValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleUsername = (e) => {
        let value = e.target.value;
        value = value.split(/\s+/).join("");

        setUsernameValue(value.toLowerCase());
    }

    useEffect(() => {
        if (state?.user) {
            formRef.current.reset();
            setUsernameValue('');
            setShowPassword(false);
        }
    }, [state?.user]);

    return (
        <form action={formAction} ref={formRef} className={styles.container}>
            <h1>Add New User</h1>
            <input type="text" name='username' placeholder='Username*' value={usernameValue} onChange={handleUsername} />
            <input type="email" name='email' placeholder='Email*' />
            {/* <input type="password" name='password' placeholder='Password*' /> */}
            <div className={styles.passwordWrapper}>
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" />
                <span className={styles.passwordEye} onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
            </div>
            <input type="text" name='img' placeholder='Image URL (Optional)' />
            <select name="isAdmin">
                <option value="false">Is Admin? (Optional)</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
            <SubmitButton />
            <p className='error-msg'>{state && state.error}</p>
        </form>
    )
}

export default AdminUserForm;