import skillsData from "../../data/index.json";

const MySkills = () => {
  return (
    <section className="skills-container" id="skillsId">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-subtitle">DEVELOPMENT SKILLS</p>
      
      <div className="skills-grid">
        {skillsData.skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h2>{skill.category}</h2>
            {skill.credential && (
              <a
              href={skill.credential} 
              target="_blank"
              rel="noopener noreferrer"
              className="credential-link"
            >
              Check Out
            </a>
            )}
            <ul>
              {skill?.skills.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.progress}%` }} 
              >
                {skill.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;