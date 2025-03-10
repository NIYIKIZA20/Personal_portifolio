import React from "react";

export default function Hero() {
  const scrollToContact = () => {
    const contactElement = document.getElementById("Contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <section className="welcome-section heroSection" id="heroSection">
      <video className="background-video" autoPlay loop muted>
        <source src="./img/video.mp4" type="video/mp4" />
        <source src="./img/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="text-content">
        <h3 > Hello, my name is </h3>
        <h1 className="myName">Jean Baptiste N.</h1>
        <h2>A <span> Full Stack</span> Web Developer</h2>
      </div>
      <button className="btn btn-primary get-in-touch-btn" onClick={scrollToContact}>Get In Touch</button>
    </section>
  );
}
