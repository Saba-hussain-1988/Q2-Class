import Image from "next/image"
import styles from "./lemon_pani.module.css"
import pic1 from "../../../public/images/lp1.jpg"
import pic2 from "../../../public/images/lp2.jpg"
import pic3 from "../../../public/images/lp3.jpg"


export default function Lemon_Pani(){
    return(
        <div className={styles.home_container}>
            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.kenburns_top}>
                <Image src={pic1} alt="lemon pani" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <p className="text-black p-5 sm:text-2xl sm:font-bold text-center">
                Sikanjbeen is a refreshing traditional Persian drink made with lemon, 
                lime, honey or sugar, and water. Its sweet and tangy flavor makes it 
                perfect for hot summer days, offering both hydration and a burst of energy.
                </p>
            </div>
            </div>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.kenburns_top}>
                <Image src={pic2} alt="Lemon_Pani" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <p className="text-black p-5 sm:text-2xl sm:font-bold text-center">
                Known for its cooling properties, sikanjbeen is often served with grated cucumbers or mint. This classic drink not only quenches thirst but also aids in digestion, making it a beloved choice in many cultures.
                </p>
            </div>
            </div>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.kenburns_top}>
                <Image src={pic3} alt="lemon pani" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <p className="text-black p-5 sm:text-2xl sm:font-bold text-center">
                    Sikanjbeen is low in calories and packed with hydration, making it a great 
                    choice for those looking to refresh without consuming too many calories. The 
                    honey or sugar provides quick energy, while the vinegar offers some antioxidant 
                    benefits.</p>
            </div>
            </div>
        </div>
    )
}