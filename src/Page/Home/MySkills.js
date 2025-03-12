import data from "../../data/index.json";

const MySkills = () => {
  return (
    <>
    <section className="skillsSection" id="mySkills">
      <div className="portfolioContainer">
        <h2 className="sectionHeading portifolioSectionHeading">My expertise</h2>
      </div>
      <div className="skillsSectionContainer">
        {data?.skills?.map((item, index) => (
            <div className="skillsContainerCard">
            <div key={index} className="skillsSectionCard">
              <div className="skillsSectionImg">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="skillsSectionCardContent">
                <h3 className="skillsSectionCardTitle">{item.title}</h3>
                <p className="skillsSectionCardDescription">{item.description}</p>
              </div>
            </div>        
            </div>        
                 
        ))}
      </div>
    </section>

    <section className="experiencesContainer">
      <div  className="experiencesSectionDiv">
        <div className="experiencesSection">
          {data?.frontend?.map((item)=>(
            <div className="skillsContainerCard">
            <div key={item.id} className="experienceItemDiv">
              <div className="experienceIconDiv">
                <img src='./img/icon.png' className="icon"></img>
                <p className="experiencesMainParagraph">{item.name}</p>
              </div> 
            </div> 
            </div> 
          ))}     
        </div>
     </div>
    </section>
  </>
  );
}

export default MySkills;