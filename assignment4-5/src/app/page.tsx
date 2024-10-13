import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg_coffee from "../../public/images/co.jpg";
import Green_tea from "../../public/images/gtn.jpg";
import tea_cup from "../../public/images/tea_cup.jpg";
import thadal from "../../public/images/tha.jpg";
import sweet_lassi from "../../public/images/sl1.jpg";
import Sikanjbeen from "../../public/images/lemon.jpg"

export default function Home() {
  return (
    <div id="home-container" className="bg-cover bg-center h-screen p-20" style={{backgroundImage:`url('/images/bgpinkyellow.jpg')`
      
    }}>

      <div>
      <h1 className="text-chocolate-brown text-6xl sm:font-bold sm:w-screen text-center"><b>Traditional Drinks</b></h1>
      </div>


      <Link href={'./greentea'} className="blog_box">
      <div className="blog">
        <div className="content">
        <div className="image-box">
          <Image className="image" src={Green_tea} alt="Green Tea" 
          style={{width:"100%", height:"60%", border: "2px solid white", borderRadius: "30px"}} ></Image>
        </div>
        <div className="flex item-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Herbal Green Tea</h1>
        </div>
        <p>
        Herbal green tea is a natural blend made from green tea leaves and various herbs. 
        It is rich in antioxidants, promoting relaxation and overall wellness.
        </p>
        <p>Click anywhere to visit...</p>
        </div>
      </div>
      </Link>

      <Link href={'./coffee'} className="blog_box">
      <div className="blog">
        <div className="content">
        <div className="image-box">
          <Image className="image" src={bg_coffee} alt="Coffee cup" 
          style={{width:"100%", height:"60%", border: "2px solid white", borderRadius: "30px"}} ></Image>
        </div>
        <div className="flex item-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Coffee</h1>
        </div>
        <p>
         Coffee is known for its rich flavor and energizing caffeine content. It's enjoyed worldwide in various forms.
        </p>
        <p>Click anywhere to visit...</p>
        </div>
      </div>
      </Link>

   <Link href={'./chai'} className="blog_box">
   <div className="blog">
  <div className="content">
  <div className="image-box">
    <Image className="image" src={tea_cup} alt="Tea cup"
    style={{width:"100%", height:"60%", border: "2px solid white", borderRadius: "30px"}} ></Image>
  </div>
  <div className="flex item-center justify-center h-full">
  <h1 className="text-white text-4xl font-bold">Milk Tea</h1>
  </div>
  <p>
  Milk tea is a creamy and flavorful drink. It offers a comforting balance of tea's boldness and milk's richness, enjoyed hot or cold.
  </p>
  <p>Click anywhere to visit...</p>
  </div>
</div>
      </Link> 
      

      <Link href={'./lassi'} className="blog_box">
      <div className="blog">
        <div className="content">
        <div className="image-box">
          <Image className="image" src={sweet_lassi} alt="Sweet Lassi" 
          style={{width:"100%", height:"60%", border: "2px solid white", borderRadius: "30px"}} ></Image>
        </div>
        <div className="flex item-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Sweet Lassi</h1>
        </div>
        <p>
        Lassi is a popular traditional yogurt-based drink from the Indian subcontinent. 
        It is celebrated for its refreshing taste and cooling properties, making it a perfect complement to spicy meals.
        </p>
        <p>Click anywhere to visit...</p>
        </div>
      </div>
      </Link>

<Link href={'./thadal'} className="blog_box">
      <div className="blog">
        <div className="content">
        <div className="image-box">
          <Image className="image" src={thadal} alt="Thadal" 
          style={{width:"100%", height:"60%", border: "2px solid white", borderRadius: "30px"}} ></Image>
        </div>
        <div className="flex item-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Thadal</h1>
        </div>
        <p>
        Thadal is a traditional cooling drink from Sindh. It is known for its refreshing and hydrating properties, especially enjoyed during hot summer days.
        </p>
        <p>Click anywhere to visit...</p>
        </div>
      </div>
      </Link>

      <Link href={'./lemon_pani'} className="blog_box">
      <div className="blog">
        <div className="content">
        <div className="image-box">
          <Image className="image" src={Sikanjbeen} alt="Sikanjbeen" 
          style={{width:"100%", height:"60%", border: "2px solid white", borderRadius: "30px"}} ></Image>
        </div>
        <div className="flex item-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Sikanjbeen</h1>
        </div>
        <p>
        Sikanjbeen is a traditional refreshing drink. Known for its tangy and sweet flavor, 
        it is especially popular in summer for its hydrating and cooling properties.
        </p>
        <p>Click anywhere to visit...</p>
        </div>
      </div>
      </Link>

    </div>
   
  );
}
