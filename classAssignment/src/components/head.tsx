import Link from "next/link"
import Responsive from "@/app/risponesive/page"

export default function Header(){
    return(
        <div className="head-container">
            <ul className="head-button">
                <Link href={"/risponesive"}><li>Responesive</li></Link>

                <Link href={"/"}><li>Home</li></Link>
                
                <Link href={"/about-us"}><li>About</li></Link>
                
                <Link href={"/contact-us"}><li>Contact Us</li></Link>
                
                <Link href={"/jobs"}><li>Job</li></Link>
                
            </ul>
        </div>
    )
}