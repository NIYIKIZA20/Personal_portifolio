export default function AboutMe() {
    return (

      <div className="profile-container" id="AboutMe">
        <h1 className="profile-title">Profile</h1>
        <p className="profile-subtitle">I'm a web developer with +3 expertise in front-end and back-end technologies</p>

        <div className="profile-content">
          <div className="about-section">
            <h2>About me</h2>
            <p>
            I am a full stack web developer with over 3+ years of experience in both front-end and back-end development. 
            <span> An embedded system engineer with strong foundations in electronics and telecommunication engineering.</span>
            I am here to build strong,responsive websites that deliver exceptional user experiences.
               

            </p>
          </div>

          <div className="profile-image-container">
            <img src="./img/profile.jpg" alt="Profile" className="profile-image" />
          </div>

          <div className="details-section">
            <h2>Details</h2>
            <p>
              <strong>Name:</strong> Jean Baptiste Niyikiza
            </p>
            <p>
              <strong>Age:</strong> 25 years
            </p>
            <p>
              <strong>Location:</strong> Kigali, Rwanda
            </p>
            <p className="contact-info">
              📞 +2507890992847 <button className="follow-button">Follow</button>
            </p>
          </div>
        </div>
      </div>
   );
};



      // <section id="AboutMe" className="aboutSection">
      //   <div className="aboutSectionImg">
      //     <img src="./img/myprofile.jpg" alt="About Me" />
      //   </div>
      //   <div className="heroSectionDivContent aboutSectionBox">
      //     <div className="heroSectionContent">
      //       <h1 className="skills-sectionHeading">About Me</h1>
      //       <p className="heroSectionDescription">
      //       I'm a seasoned web developer with expertise in front-end and back-end technologies like HTML, CSS, JavaScript, React, and Node.js, along with database management using MongoDB and PostgreSQL. I'm passionate about creating seamless and visually appealing websites that deliver exceptional user experiences.
      //       </p>
      //       <p className="heroSectionDescription">
      //       Additionally, I hold a degree in electronics and telecommunications engineering. My skills include designing circuits, PCBs, implementing IoT solutions, Arduino programming, and basic machine learning. This diverse background allows me to blend technical expertise from web development and electronics to innovate across various domains.
      //       </p>
      //     </div>
      //   </div>
      // </section>
    