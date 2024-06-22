"use client";
import { useState } from "react";
import NavLink from "../navLink/navLink";
import styles from './links.module.css';
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const Links = ({ session }) => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ]

    // Temporary
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: '/admin' }} />}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: '/login' }} />
                )}
            </div>

            <Image
                src={'/menu.png'}
                alt="Menu Button"
                width={30}
                height={30}
                onClick={() => setOpen(prev => !prev)}
                className={styles.menuButton}
            />
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                    {session?.user ? (
                        <>
                            {session?.user.isAdmin && <NavLink item={{ title: "Admin", path: '/admin' }} />}
                            <form action={handleLogout}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: '/login' }} />
                    )}
                </div>
            }
        </div>
    )
}

export default Links;