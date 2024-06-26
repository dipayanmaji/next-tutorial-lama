"use client";

import styles from './deleteButton.module.css';
import { useFormStatus } from "react-dom";

export function DeleteButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending ? true : false} className={styles.deleteButton}>
            {pending ? "Processing..." : "Delete"}
        </button>
    );
}