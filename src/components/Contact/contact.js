import React,{useRef} from "react";
import './contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import emailjs from '@emailjs/browser';


const Contact =() => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_83c7048', 'template_sfudfan', form.current, 'NYYoBRmmjWWC9uera-ygS',
          )
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent');
            },
            (error) => {
              console.log(error.text);
            },
          );
      };
      
    return(
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <div className="contact-wrapper">
                    <div className="contact-from">
                        <h3>Please fill out the form below to discuss any work opportunities</h3>
                        <from ref={form} onSubmit={sendEmail}>
                            <div className="from-group">
                                <input type="text" name="user_name" placeholder={"your name"}></input>
                            </div>
                            <div className="from-group">
                                <input type="email" name="user_name" placeholder={"your E-mail"}></input>
                            </div>
                            <div className="from-group">
                            <textarea  name="message" placeholder={"Your message"}></textarea>
                        </div>
                        <button type="submit">Send message</button>
                        </from>

                    </div>
                 <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p><span> <FaPhoneAlt size="20px"/></span>+91 8639822170</p>
                    <p><span> <MdEmail size="20px"/></span>Satyanarayanareddykolagatla@gmail.com</p>
                    <p><span> <FaAddressCard size="20px"/></span>Markapur,Andhra pradesh 523316</p>
                 </div>


                </div>

                </div> 

        </section>
    )
}
export default Contact