import Image from "next/image";
import profile from"../../image/Hashir.jpg";
import Animation from "@/components/animation";
import Footer from "@/components/foot";
import Header from "@/components/head";

export default function Home() {
  return (
    <div className="body">
      <Animation/>
      <div>
      <Header/>    
      </div>  
      <div className="home">
      <div className="child">
        <h1><b>Assalam U Alaekum...!</b></h1>
        <p>I am <strong><a target="blank" href="mailto:sabamustafa27.88@gmail.com">S.R.Chohan</a></strong>.<br/>
        I am a student of <abbr title="Governor Initiative Artificial Intelligence Course">GIAIC</abbr>.<br/>
        I wanna be a good Developer.</p>

        <div>
          <h1><b>S.R.Chohan</b></h1>
          <p>Under Graduate(Economics)</p>
        </div>

        <div>
          <h2><b>Skills</b></h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java Script</li>
            <li>Type Script</li>
            <li>Nextjs (ongoing)</li>
            <li>Art & Craft</li>
            <li>Henna Art</li>
            <li>Ladies & Gents Tailor Master</li>
          </ul>
        </div>
     
      </div>
      
      <div className="img-cont">
        <Image src={profile} alt="Profile picture" className="pic"></Image>
      </div>

      </div>

      <div>
      <Footer/>
      </div>
      
    </div>
  )
}


// //?22-9-24

// export default function Home(){
//   return(
//     <div>
//       <Header/>


//       <div>
//         <Footer/>
//       </div>


//     </div>
  
//   )
// }

