import React from "react";

const ContactMe= ()=> {

  const handleSubmit = ()=>{
    alert("successively submitted your message");
  }
  
    return (
      <section id="Contact" className="contactSection">
        <div>
          <h2 className="sectionHeading">Contact Me</h2>
          <p className="contactMe">
            Interested working with me? contact me now!
          </p>
        </div>
        <form className="contactFormContainer" onSubmit={handleSubmit}>
          <div className="containerContact">
            <label htmlFor="firstName" className="contactLabel">
              <span className="textName">First Name</span>
              <input
                type="text"
                className="contactInput textName"
                name="firstName"
                id="firstName"
                required
              />
            </label>
            <label htmlFor="lastName" className="contactLabel">
              <span className="textName">Last Name (optional)</span>
              <input
                type="text"
                className="contactInput textName"
                name="lastName"
                id="lastName"
              />
            </label>
            <label htmlFor="email" className="contactLabel">
              <span className="textName">Email</span>
              <input
                type="email"
                className="contactInput textName"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phoneNumber" className="contactLabel">
              <span className="textName">phoneNumber(optional)</span>
              <input
                type="number"
                className="contactInput textName"
                name="phoneNumber"
                id="phoneNumber"
              />
            </label>
          </div>
          <label htmlFor="chooseTopic" className="contactLabel">
            <span className="textName">Choose a topic</span>
            <select id="chooseTopic" className="contactInput textName">
              <option>Select One...</option>
              <option>personal information</option>
              <option> Web design</option>
              <option>Electronics & telecom</option>
              <option>job offer</option>
              <option>Other</option>
            </select>
          </label>
          <label htmlFor="message" className="contactLabel">
            <span className="textName">Message</span>
            <textarea
              className="contactInput textName contactInputText"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <div>
            <button className="btn btn-primary contactForm contactSubmit">Submit</button>
          </div>
        </form>
      </section>
    );
  }

  export default  ContactMe;