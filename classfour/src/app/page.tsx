import Image from "next/image";
import pic from "../public/gte.jpg"

export default function Home() {
  return (
    <div className="parent">
    <div className="child">
        <div className="image">
          <Image src={pic} alt="profile pic" />
        </div>
        <h1 className="title">Hello</h1>
        <p className="para">hello every body do you know about me who am i klklkcg cub</p>
        <button className="read-more">Read More</button>
    </div>
    <div className="child">
        <div className="image">

        </div>
        <h1 className="title">Hello</h1>
        <p className="para">hello every body do you know about me who am i klklkcg cub</p>
        <button className="read-more">Read More</button>
        
    </div>
    <div className="child">
        <div className="image">

        </div>
        <h1 className="title">Hello</h1>
        <p className="para">hello every body do you know about me who am i klklkcg cub</p>
        <button className="read-more">Read More</button>
    </div>

</div>
  );
}
