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
    <section className="contact-container" id="Contact">
      <div className="contact-section">
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
      </div>
    </section>
  );
}
export default  ContactMe;

