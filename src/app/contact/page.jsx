// "use client";
import Image from "next/image";
import styles from './contact.module.css';
import ContactForm from "@/components/contactForm/contactForm";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";
// const HydrationTestNoSSR = dynamic(()=> import("@/components/hydrationTest"), {ssr: false});

export const metadata = {
    title: "Contact Page",
    description: "Contact description",
};

const ContactPage = () => {
    // const a = Math.random();
    // console.log(a);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={'/contact.png'} alt="Contact Image" fill className={styles.img} />
            </div>

            <div className={styles.formContainer}>
                {/* <HydrationTestNoSSR /> */}
                {/* <div suppressHydrationWarning>{a}</div> */}
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage;