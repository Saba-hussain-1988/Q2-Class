import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const pic ="C:\Users\Hp\Desktop\Governor Initiative\Quarter 2\class Assigment\assignment4\src\app\public\chai3.jpg";
  return (
    <div className="page">
      <div className="blogs"
      style={{ backgroundImage: `url(${pic})` }}>
        <div className="image-container">

        </div>
        <div className="description">
          {/* <h1>hty</h1>
          <p>dfj hyjj hfujk dtfuk cgfjgk</p> */}
          {/* <Link href={"@/blog-1"}></Link> */}
        </div>
      </div>

      <div className="blogs">
        <div className="image-container">

        </div>
        <div className="description">
          <h1>hty</h1>
          <p>dfj hyjj hfujk dtfuk cgfjgk</p>
          <Link href={"@/blog-1"}></Link>
        </div>
      </div>

      <div className="blogs">
        <div className="image-container">

        </div>
        <div className="description">
          <h1>hty</h1>
          <p>dfj hyjj hfujk dtfuk cgfjgk</p>
          <Link href={"@/blog-1"}></Link>
        </div>
      </div>

      <div className="blogs">
        <div className="image-container">

        </div>
        <div className="description">
          <h1>hty</h1>
          <p>dfj hyjj hfujk dtfuk cgfjgk</p>
          <Link href={"@/blog-1"}></Link>
        </div>
      </div>

      <div className="blogs">
        <div className="image-container">

        </div>
        <div className="description">
          <h1>hty</h1>
          <p>dfj hyjj hfujk dtfuk cgfjgk</p>
          <Link href={"@/blog-1"}></Link>
        </div>
      </div>

      <div className="blogs">
        <div className="image-container">

        </div>
        <div className="description">
          <h1>hty</h1>
          <p>dfj hyjj hfujk dtfuk cgfjgk</p>
          <Link href={"@/blog-1"}></Link>
        </div>
      </div>

      <div className="blogs">
        <div className="image-container">

        </div>
        <div className="description">
          <h1>hty</h1>
          <p>dfj hyjj hfujk dtfuk cgfjgk</p>
          <Link href={"@/blog-1"}></Link>
        </div>
      </div>

      <div className="blogs">
        <div className="image-container">

        </div>
        <div className="description">
          <h1>hty</h1>
          <p>dfj hyjj hfujk dtfuk cgfjgk</p>
          <Link href={"@/blog-1"}></Link>
        </div>
      </div>
      
    </div>
  );
}
