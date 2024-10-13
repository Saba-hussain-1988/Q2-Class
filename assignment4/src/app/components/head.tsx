import Link from "next/link"

export default function Header() {
    return (
        <div className="head">
            <div className="logo-container">

            </div>
            <div className="link-container">
                <ul className="link-items">
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/about"}><li>About</li></Link>
                    <Link href={"/contact_us"}><li>Contact_us</li></Link>
                </ul>
            </div>
        </div>
    )
}