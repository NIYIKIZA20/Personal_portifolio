import React, { useEffect, useState } from "react";
import projectData from "../../data/index.json"


export default function MyPortfolio() {
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      setProjects(projectData.projects || []);
    }, []);

  return (
    <section className="portfolio-section">
      <div className="portfolio-main-title">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-header">
        <p className="portfolio-description">A sample of the projects I have worked on</p>
        <button className="github-button">Github</button>
      </div>
      <div className="portfolio-grid">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <img
                src={`/img/${project.image}`} 
                alt={project.name}
                className="portfolio-image"
              />
              <h3 className="portfolio-title">{project.name}</h3>
              <div className="portfolio-text-container"> 
                <p className="portfolio-text">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-button"
                >
                  View
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );

  //   <section className="portfolioSection" id="MyPortfolio">
  //     <div className="portfolioContainer-box">
  //       <div className="portfolioContainer">
  //         <h2 className="sectionHeading">Recent projects</h2>
  //       </div>
  //       <div>
  //         <button className="btn btn-github"  onClick={()=>window.open("https://github.com/NIYIKIZA20", '_blank')}>
  //           Visit My GitHub
  //         </button>
  //       </div>
  //     </div>
  //     <div className="portfolioSectionContainer">
  //       {data?.portfolio?.map((item, index) => (
  //         <div className="portifolioContainerCard">
  //             <div key={index} className="portfolioSectionCard" > 
  //               <div className="portfolioSectionImg" onClick={()=>window.open(`${item.link}`, '_blank') }>
  //                 <img src={item.src} alt="Placeholder" />
  //               </div>
  //               <div className="portfolioSectionCardContent">
  //                 <div>
  //                   <h3 className="portfolioSectionTitle">{item.title}</h3>
  //                   <p className="textName">{item.description}</p>
  //                 </div>
  //                 <div className="portfolioLink" >
  //                   <button className="liveDemoBtn" onClick={()=>window.open(`${item.link}`, '_blank')}>Live demo</button>
  //                   <button className="githubLinkBtn" onClick={()=>window.open(`${item.github}`, '_blank')}>github</button>
  //                 </div>
  //               </div>
  //             </div>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
}