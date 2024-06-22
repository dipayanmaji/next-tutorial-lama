import Link from "next/link";

export const metadata = {
    title: "404",
    description: "Page not found",
};

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href={'/'}>Return Home</Link>
        </div>
    )
}

export default NotFound;