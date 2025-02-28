export default function AboutMe() {
    return (
      <section id="AboutMe" className="aboutSection">
        <div className="aboutSectionImg">
          <img src="./img/myprofile.jpg" alt="About Me" />
        </div>
        <div className="heroSectionDivContent aboutSectionBox">
          <div className="heroSectionContent">
            <h1 className="skills-sectionHeading">About Me</h1>
            <p className="heroSectionDescription">
            I'm a seasoned web developer with expertise in front-end and back-end technologies like HTML, CSS, JavaScript, React, and Node.js, along with database management using MongoDB and PostgreSQL. I'm passionate about creating seamless and visually appealing websites that deliver exceptional user experiences.
            </p>
            <p className="heroSectionDescription">
            Additionally, I hold a degree in electronics and telecommunications engineering. My skills include designing circuits, PCBs, implementing IoT solutions, Arduino programming, and basic machine learning. This diverse background allows me to blend technical expertise from web development and electronics to innovate across various domains.
            </p>
          </div>
        </div>
      </section>
    );
  }