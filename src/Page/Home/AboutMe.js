export default function AboutMe() {
    return (

      <div className="profile-container" id="AboutMe">
        <h1 className="profile-title">Profile</h1>
        <p className="profile-subtitle">I'm a web developer with +3 expertise in front-end and back-end technologies</p>

        <div className="profile-content">
          <div className="about-section about-section-div">
            <h2>About me</h2>
            <p>
            I am a full stack web developer with over 3+ years of experience in both front-end and back-end development. 
            <span> An embedded system engineer with strong foundations in electronics and telecommunication engineering.</span>
            I am here to build strong,responsive websites that deliver exceptional user experiences.
               

            </p>
          </div>

          <div className="profile-image-container about-section-div">
            <img src="./img/profile.jpg" alt="Profile" className="profile-image" />
          </div>

          <div className="details-section about-section-div">
            <h2>Details</h2>
            <p>
              <strong>Name:</strong> Jean Baptiste Niyikiza
            </p>
            <p>
              <strong>Email:</strong> <span className="contact-email">jbniyikiza20@gmail.com</span> 
            </p>
            <p>
              <strong>Location:</strong> Kigali, Rwanda
            </p>
            <p className="contact-info">
              📞 +250789092847 <button className="follow-button">Follow</button>
            </p>
          </div>
        </div>
      </div>
   );
};

    