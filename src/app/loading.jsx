import styles from './loading.module.css';

const Loading = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <p className={styles.subtitle}></p>
                    <p className={styles.title}></p>
                    <p className={styles.desc}></p>
                    <p className={styles.desc}></p>
                    <p className={styles.subtitle}></p>
                </div>
                <div className={styles.imgContainer}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.imgContainer}></div>
                <div className={styles.textContainer}>
                    <p className={styles.subtitle}></p>
                    <p className={styles.title}></p>
                    <p className={styles.desc}></p>
                    <p className={styles.desc}></p>
                    <p className={styles.subtitle}></p>
                </div>
            </div>
        </div>
    )
}

export default Loading;