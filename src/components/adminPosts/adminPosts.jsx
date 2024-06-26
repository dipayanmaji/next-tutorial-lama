import { getPosts } from '@/lib/data';
import styles from './adminPosts.module.css';
import Image from 'next/image';
import { deletePost } from '@/lib/action';
import Link from 'next/link';
import { DeleteButton } from '../deleteButton/deleteButton';

const AdminPosts = async () => {

    const posts = await getPosts();
    return (
        <>
            <h1>Posts</h1>
            <div className={styles.container}>
                {
                    posts.length === 0 ? "No post available" :
                        posts.map(post => (
                            <div className={styles.post} key={post.id}>
                                <div className={styles.detail}>
                                    <Image
                                        src={post.img || "/noimage.jpg"}
                                        alt=''
                                        width={50} height={50}
                                        placeholder='blur'
                                        blurDataURL='/noimage.jpg'
                                    />
                                    <span className={styles.postTitle}>{post.title}</span>
                                </div>
                                <form action={deletePost}>
                                    <Link href={`/blog/${post.slug}`} className={styles.postLink}>Read</Link>
                                    <input type="hidden" name='id' value={post.id} />
                                    <DeleteButton />
                                    {/* <button className={styles.postButton}>Delete</button> */}
                                </form>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default AdminPosts;