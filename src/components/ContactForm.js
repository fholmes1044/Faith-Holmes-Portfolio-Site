import React, {useState} from "react";
import axios from 'axios';

function ContactForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    
    const handleContactFormSubmit = async (e) =>{
        e.preventDefault()
        try {
            // Send a POST request to the server
            const response = await axios.post("http://localhost:3002/send", {
              name,
              email,
              message,
            });
            if (response.data.status === "success") {
                setStatus("Message Sent");
                resetForm();
              } else if (response.data.status === "fail") {
                setStatus("Message failed to send");
              }
            } catch (error) {
              console.error(error);
              setStatus("An error occurred");
            }
    };
    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
      };

    
    return(
        <div id="contact-form">
            <form onSubmit={handleContactFormSubmit}>
                <label>Name</label>
                <input type="text" name="Name" value={name} onChange={ e => setName(e.target.value) }/><br/>
                <label>Email</label>
                <input type="text" name="Email" value={email} onChange={ e => setEmail(e.target.value) }/><br/>
                <label>Message</label>
                <input type="text" name="Message" value={message} onChange={ e => setMessage(e.target.value) }/>
            <button type="submit"> Submit</button>
            </form>
        </div>
    )
}

export default ContactForm