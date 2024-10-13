import Image from "next/image";
import styles from "./coffee.module.css";
import pic1 from "../../../public/images/chai3.jpg";
import pic2 from "../../../public/images/coffe.jpg";
import pic3 from "../../../public/images/iceco.jpg";
import pic4 from "../../../public/images/co.jpg"



export default function Coffee(){
    return (
        <div className="bg-cover bg-center w-screen" style={{ backgroundImage: `url('/images/bg_cof.jpg')` }}>
            <div className={styles.home_container}>

                <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                    <div className={styles.slide_fwd_center}>
                        <Image src={pic1} alt="coffee" width={250} height={250} />
                    </div>
                    <div className="w-[95%] md:w-[60%] h-fit text-center">
                        <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                            History of Coffee
                        </h2>
                        <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                            Coffee originated in Ethiopia and was discovered around the 9th century when a goat herder 
                            noticed his goats becoming energetic after eating coffee beans. It spread to the Arab world, 
                            where it became popular in coffeehouses. By the 17th century, coffee had spread to Europe, 
                            and it is now a globally consumed beverage.
                        </p>
                    </div>
                </div>

                <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                    <div className={styles.slide_fwd_center}>
                        <Image src={pic2} alt="coffee" width={250} height={250} />
                    </div>
                    <div className="w-[95%] md:w-[60%] h-fit text-center">
                        <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                            Advantages of Coffee
                        </h2>
                        <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                            Coffee is rich in antioxidants and can help improve focus and mental alertness
                            due to its caffeine content. Studies also suggest that moderate coffee consumption 
                            may reduce the risk of diseases like Parkinson's, Alzheimer's, and certain types of cancer.
                        </p>
                    </div>
                </div>

                <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                    <div className={styles.slide_fwd_center}>
                        <Image src={pic3} alt="coffee" width={250} height={250} />
                    </div>
                    <div className="w-[95%] md:w-[60%] h-fit text-center">
                        <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                            Nutritional Benefits of Coffee
                        </h2>
                        <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                            Black coffee is low in calories and contains essential nutrients like magnesium 
                            and potassium. However, adding sugar, cream, or flavored syrups can turn coffee 
                            into a high-calorie beverage, which may contribute to weight gain and other health issues.
                        </p>
                    </div>
                    
                </div>

                <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                     <div className={styles.slide_fwd_center}>
                        <Image src={pic4} alt="coffee" width={250} height={250} />
                    </div>
                    <div className="w-[95%] md:w-[60%] h-fit text-center">
                        <h2 className="text-white p-5 text-4xl sm:font-bold text-center">
                            Disadvantages of Coffee
                        </h2>
                        <p className="text-white p-5 sm:text-2xl sm:font-bold text-center">
                            Excessive coffee consumption can lead to negative side effects, such as 
                            anxiety, insomnia, and increased heart rate due to high caffeine intake.
                            It may also cause digestive issues like acid reflux and dehydration if 
                            consumed in large amounts.
                        </p>
                    </div>
                   
                </div>

            </div>
        </div>
    );
};