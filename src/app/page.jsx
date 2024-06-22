"use client";
import Image from 'next/image';
import styles from './home.module.css';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>

      <div className={styles.textContainer}>

        <h1 className={styles.title}>Creative Thoughts Agency.</h1>

        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda libero eveniet provident. Quia ea, rerum</p>

        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => router.push('/about')}>Learn More</button>
          <button className={styles.button} onClick={() => router.push('/contact')}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image src={'/brands.png'} alt='' fill className={styles.brandImg} />
        </div>

      </div>

      <div className={styles.imgContainer}>
        <Image src={'/hero.gif'} alt='' fill objectFit='contain' className={styles.heroImg} unoptimized />
      </div>

    </div>
  );
}
