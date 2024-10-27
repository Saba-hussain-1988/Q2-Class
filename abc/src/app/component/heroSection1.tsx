import Image from "next/image";
import iPhone1 from "../../../public/images/Iphone Image (1).png"

export default function Hero_section1(){
    return(
        // main section... with two child section
        <div className="w-[1440px] h-[632px] px-[160px] bg-black flex justify-center items-center">
            {/* child sections     */}
            {/* child  1 */}
            <div className="w-[714px] h-[256px] space-y-[24px] text-left">
                {/* grand child section.... with multiple child section */}
                <div className="w-[724px] h-[128px] space-y-[24px]">
                    <div className="w-[714px] h-[32px] text-[#FFFFFF] text-[25px] opacity-40 font-semibold justify-start no-underline">
                        Pro.Beyond.
                    </div>
                    <div className="w-[714px] h-[72px] flex justify-start text-[#FFFFFF] text-[96px] leading-[72px] tracking-[-0.01em] opacity-100">
                        <div className="font-thin pl-0">IPhone 14  <strong>Pro</strong> </div>
                    </div>
                </div>

                <div className="w-[714px] h-[24px] text-[#909090] font-medium text-[18px]">
                    Created to change everything for the better. For everyone
                </div>
                
                <button className="w-[191px] h-[56px] px-[56px] py-[16px] space-x-8 flex items-center justify-center text-white border border-white rounded whitespace-nowrap">Shop Now</button>
            </div>

            {/* child section 2 iphone image */}
            <Image src={iPhone1} alt="I Phone image" className="w-[406px] h-[632px]"/>
        </div>
    )
}