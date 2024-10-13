import styles from "./contact.module.css";
import React from "react";

export default function Contact_Us(){
    return(
        <div className="bg-cover bg-center sm:p-30" style={{backgroundImage:`url('/images/gtg.jpg')`, height:"fit-content"}}>
        <div className={styles.contact_page}>
            <h1 className={styles.heading}>FeedBack</h1>
            <div className={styles.form}>
                <label htmlFor="name"><b>Name:</b></label>
                  <input className={styles.input} id="name" type="text" placeholder="enter your name"></input> 

                <label ><b>Contact:</b></label>
                <input id="contact" className={styles.input} type="tel" placeholder="your contact number"></input>
                
                <label htmlFor="feedback"><b>Feedback:</b></label>
                <textarea  id="feedback" className={styles.input} itemType="text" placeholder="enter you feedback or any complain"></textarea>

                <button className={styles.button}>Send</button>
            </div>
        </div>
        </div>
    )
}