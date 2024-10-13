import Image from "next/image";
import styles from "./thadal.module.css";
import pic1 from "../../../public/images/thadal.jpg";
import pic2 from "../../../public/images/thadal1.jpg";
import pic3 from "../../../public/images/tha.jpg";



export default function Thadal(){
    return(
        <div className="bg-cover bg-center w=screen" style={{backgroundImage:`url('/images/bg_blog1.jpg')`}}>
            <div className={styles.home_container}>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic3} alt="thadal" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    History of Thadal
                </h2>
                <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                Thadal is a traditional cooling drink from the Sindh region, often consumed 
                during hot summers. It is made from natural ingredients like almonds, fennel seeds, 
                poppy seeds, cardamom, black pepper, and sugar, all blended with water. Known for its
                 refreshing and energizing properties, thadal is a staple in Sindhi households, 
                 especially during festivals and special occasions.
                </p>
            </div>
            </div>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic1} alt="thadal" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    Advantages of Thadal
                </h2>
                <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                Thadal is packed with natural ingredients that provide numerous health benefits. 
                The almonds and poppy seeds in the drink are rich in healthy fats and nutrients that boost energy and promote brain health. 
                Fennel and cardamom help with digestion and cooling the body, making it perfect for hot weather.
                the stomach after spicy meals. However, moderation is important to avoid excessive calorie intake.
                </p>
            </div>
            </div>

            <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
            <div className={styles.flip_scale_2_ver_left}>
                <Image src={pic2} alt="thadal" width={250} height={250}/>
            </div>
            <div className="w-[95%] md:w-[60%] h-fit text-center">
                <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                    Nutritional Benefits of Thadal
                </h2>
                <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                
                Thadal is nutrient-rich, offering essential vitamins, minerals, and antioxidants from
                 its natural ingredients. It promotes hydration and acts as a natural coolant for the body. 
                 However, moderation is recommended to avoid overconsumption of sugar or potential allergies.
                </p>
            </div>
            </div>

        </div>
        </div>
    )
}
    