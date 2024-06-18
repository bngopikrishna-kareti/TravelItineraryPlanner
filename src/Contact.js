import React from "react";
import { useState } from "react";
const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] =useState();

    const sendEmail = () =>{
        fetch("http://127.0.0.1:8000/sendEmail/",{
            method:"POST",
            headers:{
                'Content-Type':' application/json'},
            body:JSON.stringify({
                name:name,
                email:email,
                message:message,
            }) 
        })
    }
    return (  
        <div className="Contact">
            <div className="mailImage">
                <img src="/mail.jpg" alt="mail" />
            </div>
            <form className="contactUsForm">
                <h2>Get in touch</h2>
                <input placeholder="Name" className="nameInput" onChange={evt => setName(evt.target.value)} required/><br/>
                <input placeholder="Email" type="email" className="emailInput" onChange={evt => setEmail(evt.target.value)} required/><br/>
                <textarea placeholder="Message" cols={40} rows={5} onChange={evt => setMessage(evt.target.value)} required></textarea><br/>
                <button onClick={sendEmail}>
                    Send
                </button>

            </form>
        </div>
    );
}
 
export default Contact;