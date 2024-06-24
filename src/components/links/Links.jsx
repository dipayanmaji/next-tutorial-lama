"use client";
import { useState } from "react";
import NavLink from "../navLink/navLink";
import styles from './links.module.css';
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { IoMdArrowDropdown } from "react-icons/io";

const Links = ({ session }) => {
    const [open, setOpen] = useState(false);
    const [openLogout, setOpenLogout] = useState(false);

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
    // const isAdmin = true;

    return (
        <div className={styles.container}>

            {/* DESTOP VIEW */}
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} setOpen={setOpen} />
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: '/admin' }} setOpen={setOpen} />}
                        <form action={handleLogout} className={styles.form}>
                            <div
                                className={styles.detail}
                                onClick={() => setOpenLogout(prev => !prev)}
                            >
                                <Image
                                    src={session.user.img || session.user.image || "/noavatar.png"}
                                    alt=''
                                    width={30}
                                    height={30}
                                    placeholder='blur'
                                    blurDataURL='/noavatar.png'
                                />
                                <span>{session.user.username || session.user.name}</span>
                                <IoMdArrowDropdown className={openLogout && styles.arrow} />
                            </div>
                            <button type="submit" className={`${styles.logout} ${openLogout ? styles.active : ""}`}>
                                Logout
                            </button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: '/login' }} setOpen={setOpen} />
                )}
            </div>

            {/* MOBILE VIEW */}
            <Image
                src={'/menu.png'}
                alt="Menu Button"
                width={30}
                height={30}
                onClick={() => setOpen(prev => !prev)}
                className={styles.menuButton}
            />

            <div className={`${styles.mobileLinks} ${open && styles.open}`}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} setOpen={setOpen} />
                ))}
                {session?.user ? (
                    <>
                        {session?.user.isAdmin && <NavLink item={{ title: "Admin", path: '/admin' }} setOpen={setOpen} />}
                        <form action={handleLogout} className={styles.form}>
                            <div
                                className={styles.detail}
                                onClick={() => setOpenLogout(prev => !prev)}
                            >
                                <Image
                                    src={session.user.img || session.user.image || "/noavatar.png"}
                                    alt=''
                                    width={30}
                                    height={30}
                                    placeholder='blur'
                                    blurDataURL='/noavatar.png'
                                />
                                <span>{session.user.username || session.user.name}</span>
                                <IoMdArrowDropdown className={openLogout && styles.arrow} />
                            </div>
                            <button type="submit" className={`${styles.logout} ${openLogout ? styles.active : ""}`}>
                                Logout
                            </button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: '/login' }} setOpen={setOpen} />
                )}
            </div>
        </div>
    )
}

export default Links;