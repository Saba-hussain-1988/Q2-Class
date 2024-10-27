"use client"
import Image from "next/image";
import SearchBar from "./searchBar";
import Link from "next/link";
import logo from "../../../public/images/Logo.png"
import like_icon from '../../../public/images/Vector1.png'
import cart from "../../../public/images/Cart1.png"
import user from "../../../public/images/Vector2.png"


export default function Header() {
  return (
    <div className = "w-[1439px] h-[88px] flex py-[16px] px-[160px] justify-items-center grid-cols-4 gap-[26px] opacity-100 items-center text-black" >
       
        <Image src={logo} alt="logo" className="align-bottom w-[65.4px] h-[22.87px] mr-[26px]"/>
        
       <SearchBar/>
        
            
        <ul className="flex grid-cols-4 gap-10 items-center list-none w-[369px] h-[19px]">
            <Link href={"/"}><li className="w-[46px] h-[19px] text-[16px] mr-[2px] font-medium text-black-500 ">Home</li></Link>
            <Link href={"#"}><li className="w-[47px] h-[19px] text-[16px] mx-[2px] font-medium opacity-30">About</li></Link>
            <Link href={"#"}><li className="w-[86px] h-[19px] text-[16px] mx-[2px] font-medium opacity-30">Contact Us</li></Link>
            <Link href={"#"}><li className="w-[34px] h-[19px] text-[16px] ml-[2px] font-medium opacity-30">Blog</li></Link>
        </ul>

        <div className= "w-[144px] h-[32px] flex ml-[26px] ">
          <div className="h-[32px] w-[32px]">
            <Image src={like_icon} alt="like-icon" className="w-[20px] h-[17.83px]"/>
          </div>
          <div className="h-[32px] w-[32px] mx-[24px]">
            <Image src={cart} alt="cart-icon"className="w-[24.89px] h-[22px]"/>
          </div>
          <div className="h-[32px] w-[32px]">
            <Image src={user} alt="user-icon" className="w-[17px] h-[22px]"/>
          </div>
        </div>

    </div>
  );
}