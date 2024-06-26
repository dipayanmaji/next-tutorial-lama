import { Suspense } from 'react';
import styles from './admin.module.css';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import AdminUsers from '@/components/adminUsers/adminUsers';
import AdminUserForm from '@/components/adminUserForm/adminUserForm';
import { auth } from '@/lib/auth';
import { FormSkeleton, ListSkeleton } from '@/components/skeletons/skeletons';


export const metadata = {
    title: "Admin Page",
    description: "Admin description",
};

const AdminPage = async () => {

    const session = await auth();

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<ListSkeleton />}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <Suspense fallback={<FormSkeleton />}>
                        <AdminPostForm userId={session.user.id} />
                    </Suspense>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<ListSkeleton />}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <Suspense fallback={<FormSkeleton />}>
                        <AdminUserForm />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;