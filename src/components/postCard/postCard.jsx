import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {<div className={styles.imgContainer}>
                    <Image
                        src={post.img || '/noimage.jpg'}
                        alt=''
                        fill
                        className={styles.img}
                    />
                </div>}
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard;