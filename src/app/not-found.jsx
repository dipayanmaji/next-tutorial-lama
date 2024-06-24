import Link from "next/link";
import styles from './notFound.module.css';
import Image from "next/image";

export const metadata = {
    title: "404",
    description: "Page not found",
};

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={'/404.png'} alt="404 Image" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>Sorry, the page you are looking for does not exist.</h2>
                <h1 className={styles.title}>404-Page Not Found</h1>
                <Link className={styles.link} href={'/'}>Return Home</Link>
            </div>
        </div>
    )
}

export default NotFound;