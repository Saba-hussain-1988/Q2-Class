import Header from "@/components/head"
import Animation from "@/components/animation"
import Footer from "@/components/foot"

export default function About_us(){
    return(
        <div className="body">
            <Animation/>
            <div>
                <Header/>
            </div>
            <div className="child">
                <h1>Assalam U Alaekum...!</h1>
                <p>I am S.R.Chohan</p>
            </div>
            

            <div className="footer">
                <Footer/>
            </div>
        </div>
        
    )
}