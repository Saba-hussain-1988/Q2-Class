import Link from "next/link"

export default function Header(){
    return(
        <div className="head">
            <ul className="head_buttons">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={""}><li>Discount</li></Link>
                <Link href={""}><li>Selected Items</li></Link>
                <Link href={""}><li>Contact Us</li></Link>
                <Link href={""}><li>About</li></Link>
            </ul>
        </div>
    )
}