import styles from './footer.module.css';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from 'react-icons/fi';


const Footer = () => {
    return (
        <div className={styles.container}>
            <a href='https://github.com/dipayanmaji' target='_blank' className={styles.logo}>DipAYAN Dev</a>
            
            <ul className={styles.socials}>
                <li>
                    <a href="https://github.com/dipayanmaji" target="_blank">
                        <FiGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dipayanmaji/" target="_blank">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/dipayanmaji11" target="_blank">
                        <FaXTwitter />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/dipayan.maji/" target="_blank">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/dip.ayan.716" target="_blank">
                        <FaFacebookF />
                    </a>
                </li>
            </ul>
            
            <a href='https://youtu.be/vCOSTG10Y4o?si=yhMFB5r-6jkpBK-B' target='_blank' className={styles.text}>
                Credit goes to Lama Dev © All right reserved.
            </a>
        </div>
    )
}

export default Footer;