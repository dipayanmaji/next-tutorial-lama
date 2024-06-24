import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});
//     if (!res.ok) {
//         throw new Error("sontething went wrong");
//     }

//     return res.json();
// }

const PostUser = async ({ userId }) => {

    // FETCH DATA WITH AN API
    // const user = await getData(userId);

    // FETCH DATA WITHOUT AN API
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <Image
                src={user.img || '/noavatar.png'}
                alt='Single Post'
                width={50} height={50}
                className={styles.avatar}
                placeholder='blur'
                blurDataURL='/noavatar.png'
            />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    )
}

export default PostUser;