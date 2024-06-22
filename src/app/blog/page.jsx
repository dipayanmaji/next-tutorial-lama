import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

export const metadata = {
    title: "Blog Page",
    description: "Blog description",
};

// FETCH DATA WITH AN API
// const getData = async () => {
//     const res = await fetch('http://localhost:3000/api/blog', {next: {revalidate: 3600}});
//     if (!res.ok) {
//         throw new Error("sontething went wrong");
//     }

//     return res.json();
// }

const BlogPage = async () => {
    // FETCH DATA WITH AN API
    // const posts = await getData();

    // FETCH DATA WITHOUT AN API
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            {
                posts.length === 0 ?
                    "No blog available" :
                    posts.map((post) => (
                        <div className={styles.post} key={post.id}>
                            <PostCard post={post} />
                        </div>
                    ))
            }
        </div>
    )
}

export default BlogPage;