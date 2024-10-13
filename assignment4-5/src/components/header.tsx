import Link from "next/link";
import styles from "./comp.module.css";
import Image from "next/image";
import logo from "../../public/images/color_round.png"

export default function Header(){
    return(
        <div className={styles.header} >
            {/* logo */}
            <Image src={logo}
             alt="logo"
              width={50} 
              height={50}
              className={styles.logo}></Image>
            <ul className={styles.nav_buttons}>
                <Link href={"/"}><li className={styles.li}><b>Home</b></li></Link>

                <Link href={"/about"}><li className={styles.li}><b>About</b></li></Link>

                <Link href={"/contact_us"}><li className={styles.li}><b>Contact_Us</b></li></Link>
            </ul>
        </div>
    )
};