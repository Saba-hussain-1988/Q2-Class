import Image from "next/image";
import twitter from "../../../public/images/Twitter.png"
import facebook from "../../../public/images/facebook.png"
import tiktolk from "../../../public/images/tiktolk.png"
import instagram from "../../../public/images/Instagram.png"
import logo_white from "../../../public/images/Logo (1).png"
import Link from "next/link";


export default function Footer() {
  return (
    // footer container
    <div className="w-[1440px] h-[504px] bg-black space-y-[24px] px-[160px] py-[104px] opacity-100 items-center ">
      {/* footer .. info section */}
      <div className="w-[1120px] h-[256px] space-y-113 flex justify-between px-0">
        {/* logo + text */}
        <div className="w-[384px] h-[94.87px] space-y-[24px] justify-start align-top">
          <Image src={logo_white} alt="Logo in white" className="w-[65.4px] h-[22.87px] justify-start align-top"/>
          <p className="w-[384px] h-[48px] text-[#CFCFCF] text-[14px] text-left font-medium text-wrap align-top">
            We are residential interior design firm located in portland. Our boutique-studio offers more then
          </p>
        </div>
        {/* footer navigation section */}
        <div className="w-[623px] h-[256px] flex justify-between opacity-100">
          {/* services section */}
          <div className="w-[295.5px] h-[256px] space-y-[8px] justify-start text-left pl-0 list-none">
            <p className="w-[68px] h-[16px] text-white font-semibold text-[16px] align-top mb-5">
             Services</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] opacity-100 text-left font-normal ">
             Bonus program</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] opacity-100 text-left font-normal ">
             Gift cards</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] opacity-100 text-left font-normal ">
             Credit and payment</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] opacity-100 text-left font-normal ">
             Service contracts</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] opacity-100 text-left font-normal ">
             Non-cash account</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] opacity-100 text-left font-normal ">
              Payment</p>
            </div>
          {/* section Assistance */}
          <div className="w-[295.5px] h-[256px] space-y-[8px]  text-left align-top">
            <p className="w-[184px] h-[16px] text-white font-semibold text-[16px] mb-5">Assistance to the buyer</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] align-top text-left ">Find an order</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] align-top text-left ">Terms of delivery</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] align-top text-left ">Exchange and return of goods</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] align-top text-left ">Guarantee</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] align-top text-left ">Frequently ask questions</p>
            <p className="w-[295.5px] h-[32px] text-[14px] text-[#CFCFCF] align-top text-left ">terms of use of the site</p>
          </div>
        </div>
      </div>
      {/* social media icons section */}
      <div className="w-[173px] h-[16px] flex justify-between">
        <Link href={"#"} target="_blank">
        <Image src={twitter} alt="twitter" className="w-4 h-4"/></Link>
        <Link href={"#"} target="_blank">
        <Image src={facebook} alt="facebook" className="w-4 h-4"/></Link>
        <Link href={"#"} target="_blank">
        <Image src={tiktolk} alt="tiktolk" className="w-4 h-4"/></Link>
        <Link href={"#"} target="_blank">
        <Image src={instagram} alt="instagram" className="w-4 h-4"/></Link>
      </div>
    </div>
  );
}