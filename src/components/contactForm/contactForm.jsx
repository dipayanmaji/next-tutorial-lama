"use client"
import { contactUs } from '@/lib/action';
import styles from './contactForm.module.css';
import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from 'react';

const ContactForm = () => {
    const [state, formAction] = useFormState(contactUs, { count: 0 });
    const formRef = useRef();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (state?.count) {
            formRef.current.reset();
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }
    }, [state?.count]);

    return (
        <form className={styles.form} action={formAction} ref={formRef}>
            <input type="text" name="name" placeholder="Name and Surname" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone Number (Optional)" />
            <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit">Send</button>
            <p className='error-msg'>{state?.error}</p>
            {success && <p>Email sent successfully! I will contact you soon.</p>}
        </form>
    )
}

export default ContactForm;