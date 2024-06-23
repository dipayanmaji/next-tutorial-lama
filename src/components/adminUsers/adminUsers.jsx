import { getUsers } from '@/lib/data';
import styles from './adminUsers.module.css';
import { deleteUser } from '@/lib/action';
import Image from 'next/image';

const AdminUsers = async () => {

    const users = await getUsers();
    return (
        <>
            <h1>Users</h1>
            <div className={styles.container}>
                {users.map(user => (
                    user.username === "admin" ? "" : <div className={styles.user} key={user.id}>
                        <div className={styles.detail}>
                            <Image src={user.img || "/noavatar.png"} alt='' width={50} height={50} />
                            <span>{user.username}</span>
                        </div>
                        <form action={deleteUser}>
                            <input type="hidden" name='id' value={user.id} />
                            <button className={styles.userButton}>Delete</button>
                        </form>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AdminUsers;