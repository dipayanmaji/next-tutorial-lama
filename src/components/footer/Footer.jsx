import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <a href='https://github.com/dipayanmaji' target='_blank' className={styles.logo}>DipAYAN Dev</a>
            <a href='https://www.linkedin.com/in/dipayanmaji/' target='_blank' className={styles.text}>
                Dipayan creative thoughts agency © All right reserved.
            </a>
        </div>
    )
}

export default Footer;