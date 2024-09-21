
import Image from "next/image";
import profile from"../../image/profile pic.jpg";


export default function Home() {
  return (
    <div className="home">

      <div className="child">
        <h1><b>Assalam U Alaekum...!</b></h1>
        <p>I'm <strong><a target="blank" href="mailto:sabamustafa27.88@gmail.com">S.R.Chohan</a></strong>.<br/>
        I'm a student of <abbr title="Governor Initiative Artificial Intelligence Course">GIAIC</abbr>.<br/>
        I wanna be a good Developer.</p>

        <div>
          <h1><b>S.R.Chohan</b></h1>
          <p>Under Graduate(Economics)</p>
        </div>
      </div>


      <div className="img-cont">
        <img src={profile.src}
        width={250}
        height={250}
        className="pic"/>
      </div>

    </div>
  )
}