import Header from "@/components/head"
import Animation from "@/components/animation"
import Footer from "@/components/foot"

export default function Contact_us(){
    return(
        <div className="body">
            <Animation/>
            <div>
                <Header/>
            </div>
            <div className="child">
                <h1>Contact Us with:</h1>
                <a target="_blank" href="https://www.linkedin.com/in/saba-mustafa-3aa41a322
                Email">Linkedin</a>
           
                <br/>
                <a target="_blank" href="mailto:sabamustafa27.88@gmail.com
                ">email</a>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}