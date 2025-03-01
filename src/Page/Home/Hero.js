import React from "react";


export default function HeroSection() {

  const scrollToContact = () => {
    const contactElement = document.getElementById("Contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const openFile = () => {
    const fileUrl = 'https://drive.google.com/file/d/13QtNITpx-66fdZ5unZp0OFrv1YKC22TE/view?usp=drive_link';
    window.open(fileUrl, '_blank');
  }
    return (
      <section id="heroSection" className="heroSection">
        <div className="heroSectionDivContent">
          <div className="heroSectionContent">
            <p className="sectionTitle">Hey, I'm Jean Baptiste N.</p>
            <h1 className="herosectionTitle">
              <span className="heroSectionTitleColor">Full Stack</span>{" "}
              <br />
              Web Dev
            </h1>
            <p className="heroSectionDescription">
              An organised, efficient, innovative, creative and multilinguistic person.
              <br /> On making and producing smart and better quality product in the right time. Hire me!
            </p>
          </div >
          <div  className="helloButton">
            <button className="btn btn-primary" onClick={scrollToContact}>Get In Touch</button>
            <button className="btn btn-success"  onClick={openFile}> View CV</button>
          </div>
        </div>
        <div className="heroSectionImg">
          <img className="myHelloImage" src="./img/profile.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }