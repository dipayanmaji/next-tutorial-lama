"use client";
import { addPost } from '@/lib/action';
import styles from './adminPostForm.module.css';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending ? true : false}>
            {pending ? "Processing..." : "Add"}
        </button>
    );
}

const AdminPostForm = ({ userId }) => {

    const [state, formAction] = useFormState(addPost, { postSlug: null });
    const formRef = useRef();

    const [slugValue, setSlugValue] = useState('');

    const handleSlug = (e) => {
        let value = e.target.value;
        value = value.trim().split(/\s+/).join("-");
        value = value.split('/').join("");

        setSlugValue(value.toLowerCase());
    }

    useEffect(() => {
        state?.postSlug && formRef.current.reset();
        state?.postSlug && setSlugValue('');
    }, [state?.postSlug]);

    return (
        <form action={formAction} ref={formRef} className={styles.container}>
            <h1>Add New Post</h1>
            <input type="hidden" name='userId' value={userId} />
            <input type="text" name='title' placeholder='Title*' />
            <input type="text" name='slug' placeholder='Slug*' value={slugValue} onChange={handleSlug} />
            <input type="text" name='img' placeholder='Image URL (Optional)' />
            <textarea type="text" name='desc' placeholder='Description*' rows={10} />
            <SubmitButton />
            <p className='error-msg'>{state && state.error}</p>
        </form>
    )
}

export default AdminPostForm;