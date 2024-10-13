import Image from "next/image";
import Link from "next/link";
import { title } from "process";

const data = {title:"ubaid", description:"Hello every one"}
  
type IData = {
  title:string;
  description:string
}

const data_obj:IData[] =[
  {title:"sana", description:"hello"},
  {title:"sana", description:"hello"},
  {title:"sana", description:"hello"},
  {title:"sana", description:"hello"},
  {title:"sana", description:"hello"},
]


export default function Home() {
  const pic ="C:\Users\Hp\Desktop\Governor Initiative\Quarter 2\class Assigment\assignment4\src\app\public\chai3.jpg";
  return (
    <div className="page">
      

      <div className="blogs">
        {data.map((IData)=>)}
        <div className="image-container">

        </div>
        <div className="title">{data.title}</div>
        <div className="description">
          {data.description}
        </div>
      </div>

      

   

    </div>
  );
}
