"use client";
import { addPost } from '@/lib/action';
import styles from './adminPostForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';

const AdminPostForm = ({ userId }) => {

    const [state, formAction] = useFormState(addPost, { postSlug: null });
    const formRef = useRef();

    useEffect(() => {
        state?.postSlug && formRef.current.reset();
    }, [state?.postSlug]);

    return (
        <form action={formAction} ref={formRef} className={styles.container}>
            <h1>Add New Post</h1>
            <input type="hidden" name='userId' value={userId} />
            <input type="text" name='title' placeholder='Title' />
            <input type="text" name='slug' placeholder='Slug' />
            <input type="text" name='img' placeholder='Image URL' />
            <textarea type="text" name='desc' placeholder='Description' rows={10} />
            <button>Add</button>
            <p className='error-msg'>{state && state.error}</p>
        </form>
    )
}

export default AdminPostForm;