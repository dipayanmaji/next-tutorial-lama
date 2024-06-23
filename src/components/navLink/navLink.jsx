"use client";

import Link from "next/link";
import styles from './navLink.module.css';
import { usePathname } from "next/navigation";

const NavLink = ({ item, setOpen }) => {

    const pathName = usePathname();

    return (
        <Link
            key={item.title}
            href={item.path}
            className={`${styles.container} ${pathName === item.path && styles.active}`}
            onClick={() => setOpen(false)}
        >
            {item.title}
        </Link>
    )
}

export default NavLink;