import Image from "next/image";
import banner from "../../../public/images/Banner 2.png"

export default function Banner_SummerSale(){
    return(
        <div>
            <Image src={banner} alt="Banner of Summer Sale" className="w-[1440px] h-[448px]"/>
        </div>
    )
}