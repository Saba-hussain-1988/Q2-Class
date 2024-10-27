import Image from "next/image"
import left_Arrow from "../../../public/images/leftArrow.png";
import right_Arrow from "../../../public/images/rightArrow.png";
import phones from "../../../public/images/Phones.png"
import smartWatches from   "../../../public/images/Smart Watches.png"
import cameras from  "../../../public/images/Cameras.png"
import headphones from  "../../../public/images/Headphones.png"
import computer from  "../../../public/images/Computers.png"
import gaming from  "../../../public/images/Gaming.png"

export default function Category(){
    return(
        // main container
        <div className="w-[1440px] h-[352px] space-y-[32px] px-[160px] py-[80px] bg-[#FAFAFA] ">
            {/* top section */}
            <div className="w-[1120px] h-[32px] flex justify-between ">
                {/* text */}
                <div className="w-[239px] h-[34px] font-medium text-[24px] text-left text-black align-top">Browse By Category</div>
                {/* Arrow's Icons */}
                <div className="w-[80px] h-[32px] space-x-[16px] align-top flex justify-between">
                    <div className="w-[32px] h-[32px]  justify-center items-center">
                        <Image src={left_Arrow} alt="Arrow icon  side" className="w-[12.66px] h-[23.31px]"/>
                    </div>
                    <div className="w-[32px] h-[32px] justify-center items-center">
                        <Image src={right_Arrow} alt="Arrow icon  side" className="w-[12.66px] h-[23.31px]"/>
                    </div>
                </div>
            </div>
            {/* categories section */}
            <div className="w-[1120px] h-[128px] space-x-[32px] flex justify-between ">
                {/* phones */}
                <div className="w-[160px] h-[128px] space-y-[8px] bg-[#EDEDED] px-[52px] py-[24px] border border-[#EDEDED] rounded-15 justify-center flex flex-col items-center " >
                    <Image src={phones} alt="" className="w-[48px] h-[48px]"/>
                    <div className="w-[58px] h-[24px] text-center align-top text-[16px] font-medium text-black">Phones</div>
                </div>
                {/* Smart watches */}
                <div className="w-[160px] h-[128px] space-y-[8px] bg-[#EDEDED] px-[52px] py-[24px] border border-[#EDEDED] rounded-15 justify-center flex flex-col items-center " >
                    <Image src={smartWatches} alt="" className="w-[48px] h-[48px]"/>
                    <div className="w-[117px] h-[24px] text-center align-top text-[16px] font-medium text-black whitespace-nowrap">Smart Watches</div>
                </div>
                {/* cameras */}
                <div className="w-[160px] h-[128px] space-y-[8px] bg-[#EDEDED] px-[52px] py-[24px] border border-[#EDEDED] rounded-15 justify-center flex flex-col items-center " >
                    <Image src={cameras} alt="" className="w-[48px] h-[48px]"/>
                    <div className="w-[69px] h-[24px] text-center align-top text-[16px] font-medium text-black">Cameras</div>
                </div>
                {/* headphones */}
                <div className="w-[160px] h-[128px] space-y-[8px] bg-[#EDEDED] px-[52px] py-[24px] border border-[#EDEDED] rounded-15 justify-center flex flex-col items-center " >
                    <Image src={headphones} alt="" className="w-[48px] h-[48px]"/>
                    <div className="w-[85px] h-[24px] text-center align-top text-[16px] font-medium text-black">Headphones</div>
                </div>
                {/* computers */}
                <div className="w-[160px] h-[128px] space-y-[8px] bg-[#EDEDED] px-[52px] py-[24px] border border-[#EDEDED] rounded-15 justify-center flex flex-col items-center " >
                    <Image src={computer} alt="" className="w-[48px] h-[48px]"/>
                    <div className="w-[98px] h-[24px] text-center align-top text-[16px] font-medium text-black">Computers</div>
                </div>
                {/* Gaming */}
                <div className="w-[160px] h-[128px] space-y-[8px] bg-[#EDEDED] px-[52px] py-[24px] border border-[#EDEDED] rounded-15 justify-center flex flex-col items-center " >
                    <Image src={gaming} alt="" className="w-[48px] h-[48px]"/>
                    <div className="w-[59px] text-italic  text-center align-top text-[16px] font-medium text-black">Gaming</div>
                </div>
            </div>
        </div>
    )
}