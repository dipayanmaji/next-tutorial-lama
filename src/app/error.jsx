"use client"
import Image from 'next/image';
import styles from './error.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Error",
    description: "Something went wrong!",
};

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={'/error.png'} alt="404 Image" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>Oops! Something went wrong.</h2>
                <h1 className={styles.title}>Some Error Occurred!</h1>
                <Link className={styles.link} href={'/'}>Return Home</Link>
            </div>
        </div>
    )
}

export default Error;