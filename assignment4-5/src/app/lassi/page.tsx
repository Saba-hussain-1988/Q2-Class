import Image from "next/image";
import styles from "./lassi.module.css";
import pic1 from "../../../public/images/sl1.jpg";
import pic2 from "../../../public/images/ml1.jpg";
import pic3 from "../../../public/images/L4.jpg";



export default function Lassi(){
    return(
        <div className="bg-cover bg-center w=screen" style={{backgroundImage:`url('/images/bg_blog6.jpg')`}}>
            <div className={styles.home_container}>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic3} alt="lassi" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    History of Lassi
                </h2>
                <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                Lassi is a traditional yogurt-based drink that originated in the Indian subcontinent over
                a thousand years ago. It has long been a staple in Indian households, often consumed to cool 
                the body during hot weather. Over time, lassi evolved into sweet, salty, and flavored varieties, 
                spreading to different parts of the world.
                </p>
            </div>
            
            </div>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic1} alt="lassi" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    Nutritional Benefits of Lassi
                </h2>
                <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                Lassi provides essential nutrients like calcium, protein, and probiotics, supporting 
                bone health and digestion. It also helps hydrate the body and is often used to soothe 
                the stomach after spicy meals. However, moderation is important to avoid excessive calorie intake.
                </p>
            </div>
            </div>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                 <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic2} alt="lassi" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    Advantages of Lassi
                </h2>
                <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                Lassi is rich in probiotics, which promote healthy digestion and improve gut health. 
                It is also a great source of calcium, protein, and vitamins from the yogurt, making 
                it a nutritious and refreshing drink, especially during summer months.
                </p>
            </div>
           
            </div>

        </div>
        </div>
    )
}