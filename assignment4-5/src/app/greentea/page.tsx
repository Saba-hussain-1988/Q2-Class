import Image from "next/image";
import styles from "./greentea.module.css";
import pic1 from "../../../public/images/gtc.jpg";
import pic2 from "../../../public/images/gtb.jpg";
import pic3 from "../../../public/images/gto.jpg";
import pic4 from "../../../public/images/gtk.jpg";


export default function Chai(){
    return(
        <div className="bg-cover bg-center w=screen" style={{backgroundImage:`url('/images/bg_blog2.jpg')`}}>
            <div className={styles.home_container}>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic4} alt="green tea" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    History of Green Tea
                </h2>
                <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                Green tea originated in China over 4,000 years ago and has been an integral 
                part of Chinese and Japanese culture. It was initially used for medicinal 
                purposes before becoming a popular everyday beverage. Over time, green tea 
                spread to other parts of the world, gaining recognition for its health benefits.
                </p>
            </div>
            </div>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic1} alt="green tea" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    Nutritional Benefits of Green Tea
                </h2>
                <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                Green tea is a low-calorie drink rich in vitamins, minerals, and antioxidants.
                It is believed to improve brain function, enhance mood, and protect against chronic
                 diseases. However, moderation is key, as too much green tea can lead to negative 
                 health effects.
                </p>
            </div>
            </div>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                 <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic2} alt="green tea" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    Advantages of Green Tea
                </h2>
                <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                One of the main benefits of green tea is its high antioxidant content,
                 particularly catechins, which can help reduce inflammation and improve heart health. 
                 It is also known to boost metabolism and promote fat loss, making it a popular choice 
                 for those seeking weight management.
                </p>
            </div>
           
            </div>


            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic3} alt="green tea" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    Disadvantages of Green Tea
                </h2>
                <p className="text-white p-5 text-2xl sm:font-bold text-center">
                Despite its benefits, excessive consumption of green tea can lead to side effects like 
                stomach upset and nausea due to its caffeine content. Some people may also experience iron
                 deficiency, as compounds in green tea can interfere with iron absorption when consumed in 
                 large quantities.
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}