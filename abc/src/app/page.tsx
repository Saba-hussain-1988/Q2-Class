// import Image from "next/image";
import Hero_section1 from "./component/heroSection1";
import Hero_Section2 from "./component/hero_section2";
import Category from "./component/category";
import Products from "./component/products";
import Banner_SummerSale from "./component/summerBanner";


export default function Home() {
  return (
    <div className="main">
      <Hero_section1/>
      <Hero_Section2/>
      <Category/>
      <Products/>
      <Banner_SummerSale/>
    </div>
  );
}
