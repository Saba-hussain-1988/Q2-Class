import Image from "next/image"
import profile_pic from "../../../public/images/mspic.jpg"
import styles from "./abou.module.css";
import Link from "next/link";


export default function About(){
    return(
        <div id={styles.container} className="bg-cover bg-center" style={{backgroundImage: `url('/images/cb.jpg')`}}>
        <div>
            <h1 className="text-black p-5 text-6xl sm:font-bold sm:w-screen text-center">Thank You For Visiting My Resume!</h1>
        </div>
        

    {/* <!-- <first row> --> */}
        <div className={styles.row}>
               
            <div id={styles.skill}>
                <h3 className="text-black p-5 text-3xl sm:font-bold sm:w-200 text-center">Skills</h3>
                
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java Script</li>
                    <li>Type Script</li>
                    <li>Tailor Master(Ladies & Gents)</li>
                    <li>Henna Art</li>
                    <li>Wall Hanging Decoration Art</li>
                    <li>Craft Making</li>
                    <li>Urdu Arabic Calligraphy</li>
                    <li>Painting</li>
                </ul>
            </div>
            
            <div id={styles.pic_box}>
                <Image src={profile_pic} alt="Profile picture" id={styles.pic}/>
            </div> 

        </div>

        {/* row second */}
        <div className={styles.row}>
            <div id={styles.personalInformation}>
                {/* <!-- Personal Information--> */}
                
                <h3 className="text-black p-5 text-3xl sm:font-bold sm:w-200 text-center">Personal Information</h3>
                <p><strong>Full Name:</strong> Saba Mustafa</p>
                <p><strong>Status:</strong> Married</p>
                <p><strong>Nationality:</strong> Pakistani</p>
                <p><strong>Phone Number:</strong> 0300-1234567</p>
                <p><strong>Email: </strong>
                <Link className={styles.link} href="mailto:sabamustafa27.88@gmail.com"> sabamustafa27.88@gmail.com</Link></p>
                <p><strong>Linkedin: </strong>
                <Link className={styles.link} href="https://www.linkedin.com/in/saba-mustafa-3aa41a322" target="_blank">linkedin.com/in/saba-mustafa-3aa41a322</Link></p>
            </div>

        {/* Educational Qualification */}
            <div className={styles.education}>
                
                <h3 className="text-black p-5 text-3xl sm:font-bold sm:w-200 text-center">Educational Qualification</h3>

                <ul>
                    <li><b>Under Bachelor(Economics)</b><br/>from Nazareth College(Sindh University) 2011</li>
                    <li><b>HSC Examination(Humanities)</b><br/>from Board of Higher and Secondary Education Hyderabad 2006</li>
                    <li><b>SSC(Science)</b><br/>Board of Secondary Education Hyderabad 2004</li>
                </ul>
               
            </div>

        </div>


        {/* <!--Row third--> */}
        <div className={styles.row}>
            
            <div id={styles.goal}>
                 <h3 className="text-black p-5 text-3xl sm:font-bold sm:w-200 text-center">Goals</h3>
                <p>"Along with fulfilling all my responsibilities, I want to utilize my remaining time and my intellect to make my contribution to the world."</p>
            </div>
            
            {/* <!--Work Experience--> */}
            <div id={styles.experience}>
                <h3 className="text-black p-5 text-3xl sm:font-bold sm:w-200 text-center">Work Experience</h3>
                
                <ul>
                    <li><b>Private Tutor:</b><br/>Class I to VIII since 2005 to 2015</li>
                    <li><b>Particularly in Mathematics:</b><br/>class I to X since 2005 to 2017</li>
                    <li><b>Henna Art:</b><br/>since 2004 to Date</li>
                </ul>
            </div>
            
        </div>

        <div className={styles.row}>

            <div id={styles.award}>
                <h3 className="text-black p-5 text-3xl sm:font-bold sm:w-200 text-center">Awards</h3>
                <p>Cooking Competition Program "<b>Haleeb Kay Gadhray Rishtay</b>" Organized in <b>Pakistan Television Karachi center</b> held on <b>2005</b>.</p>
            </div>
            
            {/* <!--course certification--> */}
            <div id={styles.course}>
                <h3 className="text-black p-5 text-3xl sm:font-bold sm:w-200 text-center">Course Certification</h3>
                <ul>
                    <li><b>Artificial Intelligence, Web 3.0 & Metaverse:(ongoing)</b></li>
                </ul>
            </div>
            
        </div>
    </div>
    
    )
}