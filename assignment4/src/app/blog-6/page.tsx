import Image from "next/image";
import pic from "../../../public/gtb.jpg"


export default function Blog_5 (){
    return(
        <div>
            <Image src={pic} alt="profile pic"/>
        </div>
    )
}