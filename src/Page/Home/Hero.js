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
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src="./img/video.mp4" type="video/mp4" />
        <source src="./img/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Text Content */}
      <div className="text-content">
        <h2>Hello, I am <span className="myName">Jean Baptiste N.</span></h2>
        <h2>A <span> Full Stack</span> Web Developer</h2>
      </div>
      <button className="btn btn-primary get-in-touch-btn" onClick={scrollToContact}>Get In Touch</button>
    </section>
  );
}
