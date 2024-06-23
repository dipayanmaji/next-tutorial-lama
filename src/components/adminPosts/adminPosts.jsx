import { getPosts } from '@/lib/data';
import styles from './adminPosts.module.css';
import Image from 'next/image';
import { deletePost } from '@/lib/action';
import Link from 'next/link';

const AdminPosts = async () => {

    const posts = await getPosts();
    return (
        <div className={styles.container}>
            <h1>Posts</h1>
            {
                posts.length === 0 ? "No post available" :
                    posts.map(post => (
                        <div className={styles.post} key={post.id}>
                            <div className={styles.detail}>
                                <Image src={post.img || "/noimage.jpg"} alt='' width={50} height={50} />
                                <span className={styles.postTitle}>{post.title}</span>
                            </div>
                            <form action={deletePost}>
                                <Link href={`/blog/${post.slug}`} className={styles.postLink}>Read</Link>
                                <input type="hidden" name='id' value={post.id} />
                                <button className={styles.postButton}>Delete</button>
                            </form>
                        </div>
                    ))
            }
        </div>
    )
}

export default AdminPosts;