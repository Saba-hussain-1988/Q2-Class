import Image from "next/image";
import styles from "./chai.module.css";
import pic1 from "../../../public/images/chachae.jpg";
import pic2 from "../../../public/images/chai.jpg";
import pic3 from "../../../public/images/chae.jpg";
import pic4 from "../../../public/images/chae4.jpg";


export default function Chai() {
    return (
        <div className="bg-cover bg-center w=screen" style={{ backgroundImage: `url('/images/bg_blog5.jpg')` }}>
            <div className={styles.home_container}>

                <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                    <div className={styles.rotate_in_center}>
                        <Image src={pic4} alt="milk tea" width={250} height={250} />
                    </div>
                    <div className="w-[95%] md:w-[60%] h-fit text-center">
                        <h2 className="text-black p-5 text-4xl sm:font-bold text-center">
                            History of Milk Tea
                        </h2>
                        <p className="text-black p-5 sm:text-2xl sm:font-bold text-center">
                            Milk tea originated in East Asia, where milk was added to balance the strong flavors
                            of tea in the 17th century. It gained global popularity in the 1980s with the
                            invention of bubble tea in Taiwan. Today, milk tea is enjoyed in various forms
                            worldwide, reflecting different cultural influences.
                        </p>
                    </div>
                </div>

                <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                    <div className={styles.rotate_in_center}>
                        <Image src={pic1} alt="milk tea" width={250} height={250} />
                    </div>
                    <div className="w-[95%] md:w-[60%] h-fit text-center">
                        <h2 className="text-black p-5 text-4xl sm:font-bold text-center">
                            Nutritional Benefits of Milk Tea
                        </h2>
                        <p className="text-black p-5 sm:text-2xl sm:font-bold text-center">
                            When made with low-fat or alternative milk options, milk tea can be a relatively healthy
                            beverage. It can provide essential nutrients like calcium, protein, and vitamins from
                            the milk, and the tea itself can aid digestion. For those who prefer a less sweet
                            version, it can be a comforting yet nutritious drink.
                        </p>
                    </div>
                </div>

                <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                    <div className={styles.rotate_in_center}>
                        <Image src={pic2} alt="milk tea" width={250} height={250} />
                    </div>
                    <div className="w-[95%] md:w-[60%] h-fit text-center">
                        <h2 className="text-black p-5 text-4xl sm:font-bold text-center">
                            Advantages of Milk Tea
                        </h2>
                        <p className="text-black p-5 sm:text-2xl sm:font-bold text-center">
                            One of the main benefits of milk tea is its delicious taste, combining the
                            richness of milk with the bold flavor of tea. It also provides a quick
                            energy boost due to the caffeine content in tea, making it a popular
                            choice for an afternoon pick-me-up. Additionally, it can be a source of
                            antioxidants, depending on the type of tea used.
                        </p>
                    </div>
                </div>


                <div className="sm:flex justify-center m-4 p-8 overflow-hidden">
                    <div className={styles.rotate_in_center}>
                        <Image src={pic3} alt="milk tea" width={250} height={250} />
                    </div>
                    <div className="w-[95%] md:w-[60%] h-fit text-center">
                        <h2 className="text-black p-5 text-4xl sm:font-bold text-center">
                            Health Risks of Milk Tea
                        </h2>
                        <p className="text-black p-5 sm:text-2xl sm:font-bold text-center">
                            However, frequent consumption of milk tea with added sugar and creamers can
                            lead to long-term health problems. High sugar intake is linked to obesity, diabetes,
                            and heart disease. Moreover, the caffeine in tea may cause jitters or sleep
                            disturbances when consumed in excess.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}