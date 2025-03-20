import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe= ()=> {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "JBjb12345."; 
    const templateId = "template_v6tycud"; 
    const publicKey = "5pevQjOz7JABcqTVz"; 

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Message sent successfully! I'll get back to you soon.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section" id="Contact">
      <h2 className="contact-title">Let's connect</h2>
      <p className="contact-description">
        Have a project in mind or just want to say hello? Fill out the form
        below and I'll get back to you as soon as possible.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          className="contact-input" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          className="contact-input" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          className="contact-textarea" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
        <button type="submit" className="contact-button" disabled={loading}>
          {loading ? "Sending..." : "Connect"}
        </button>
      </form>
    </section>
  );
}
export default  ContactMe;

// import React from "react";

// const ContactMe= ()=> {

//   const handleSubmit = ()=>{
//     alert("successively submitted your message");
//   }
  
//     return (
//       <section id="Contact" className="contactSection">
//         <div>
//           <h2 className="sectionHeading">Contact Me</h2>
//           <p className="contactMe">
//             Interested working with me? contact me now!
//           </p>
//         </div>
//         <form className="contactFormContainer" onSubmit={handleSubmit}>
//           <div className="containerContact">
//             <label htmlFor="firstName" className="contactLabel">
//               <span className="textName">First Name</span>
//               <input
//                 type="text"
//                 className="contactInput textName"
//                 name="firstName"
//                 id="firstName"
//                 required
//               />
//             </label>
//             <label htmlFor="lastName" className="contactLabel">
//               <span className="textName">Last Name (optional)</span>
//               <input
//                 type="text"
//                 className="contactInput textName"
//                 name="lastName"
//                 id="lastName"
//               />
//             </label>
//             <label htmlFor="email" className="contactLabel">
//               <span className="textName">Email</span>
//               <input
//                 type="email"
//                 className="contactInput textName"
//                 name="email"
//                 id="email"
//                 required
//               />
//             </label>
//             <label htmlFor="phoneNumber" className="contactLabel">
//               <span className="textName">phoneNumber(optional)</span>
//               <input
//                 type="number"
//                 className="contactInput textName"
//                 name="phoneNumber"
//                 id="phoneNumber"
//               />
//             </label>
//           </div>
//           <label htmlFor="chooseTopic" className="contactLabel">
//             <span className="textName">Choose a topic</span>
//             <select id="chooseTopic" className="contactInput textName">
//               <option>Select One...</option>
//               <option>personal information</option>
//               <option> Web design</option>
//               <option>Electronics & telecom</option>
//               <option>job offer</option>
//               <option>Other</option>
//             </select>
//           </label>
//           <label htmlFor="message" className="contactLabel">
//             <span className="textName">Message</span>
//             <textarea
//               className="contactInput textName contactInputText"
//               id="message"
//               rows="8"
//               placeholder="Type your message..."
//             />
//           </label>
//           <div>
//             <button className="btn btn-primary contactForm contactSubmit">Submit</button>
//           </div>
//         </form>
//       </section>
//     );
//   }

//   export default  ContactMe;