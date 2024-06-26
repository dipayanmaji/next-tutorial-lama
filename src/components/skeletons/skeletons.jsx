import styles from './skeletons.module.css';

export const PageSkeleton = () => {
    return (
        <div className={styles.pagewrapper}>
            <div className={styles.pagecontainer}>
                <div className={styles.textContainer}>
                    <p className={styles.subtitle}></p>
                    <p className={styles.title}></p>
                    <p className={styles.desc}></p>
                    <p className={styles.desc}></p>
                    <p className={styles.subtitle}></p>
                </div>
                <div className={styles.imgContainer}></div>
            </div>

            <div className={styles.pagecontainer}>
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


export const FormSkeleton = () => {
    return (
        <div className={styles.form}>
            <div className={styles.inputbox}></div>
            <div className={styles.inputbox}></div>
            <div className={styles.inputbox}></div>
            <div className={styles.textareabox}></div>
        </div>
    )
}

export const ListSkeleton = () => {
    return (
        <div className={styles.listcontainer}>
            <div className={styles.singlelist}>
                <div className={styles.userimage}></div>
                <div className={styles.userdetail}>
                    <div className={styles.shortline}></div>
                    <div className={styles.longline}></div>
                </div>
            </div>

            <div className={styles.singlelist}>
                <div className={styles.userimage}></div>
                <div className={styles.userdetail}>
                    <div className={styles.longline}></div>
                    <div className={styles.shortline}></div>
                </div>
            </div>

            <div className={styles.singlelist}>
                <div className={styles.userimage}></div>
                <div className={styles.userdetail}>
                    <div className={styles.shortline}></div>
                    <div className={styles.longline}></div>
                </div>
            </div>

            <div className={styles.singlelist}>
                <div className={styles.userimage}></div>
                <div className={styles.userdetail}>
                    <div className={styles.longline}></div>
                    <div className={styles.shortline}></div>
                </div>
            </div>

            <div className={styles.singlelist}>
                <div className={styles.userimage}></div>
                <div className={styles.userdetail}>
                    <div className={styles.shortline}></div>
                    <div className={styles.longline}></div>
                </div>
            </div>
        </div>
    )
}

export const AuthorSkeleton = () => {
    return (
        <div className={styles.singlelist}>
            <div className={styles.userimage}></div>
            <div className={styles.userdetail}>
                <div className={styles.shortline}></div>
                <div className={styles.longline}></div>
            </div>
        </div>
    )
}