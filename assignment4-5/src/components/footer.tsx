import Link from "next/link"
import styles from "./comp.module.css"

export default function Footer(){
    return (
        <div className={styles.footer}>
            
            <div>
                <ul>
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/contact_us"}><li>Contact us</li></Link>
                    <Link href={"/about"}><li>About</li></Link>
                    <Link href={"mailto:sabamustafa27.88@gmail.com"}><li>email</li></Link>
                </ul>
            </div>
            <div>
                <ul>
                    <Link href={"https://www.linkedin.com/in/saba-mustafa-3aa41a322/"} target="_blank"><li>LinkedIn</li></Link>
                    <Link href={"https://www.facebookzzzzz.com/profile.php?id=61566515126408"} target="_blank"><li>Facebook</li></Link>
                    <Link href={"https://www.instagram.com/invites/contact/?igsh=qu25x6cdzigy&utm_content=vz7jxgp"} target="_blank"><li>Instagram</li></Link>
                    <Link href={"https://github.com/Saba-hussain-1988"} target="_blank"><li>github</li></Link>
                </ul>
            </div>
        </div>
    )
}