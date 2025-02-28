import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolioSection" id="MyPortfolio">
      <div className="portfolioContainer-box">
        <div className="portfolioContainer">
          <h2 className="sectionHeading">Recent projects</h2>
        </div>
        <div>
          <button className="btn btn-github"  onClick={()=>window.open("https://github.com/NIYIKIZA20", '_blank')}>
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolioSectionContainer">
        {data?.portfolio?.map((item, index) => (
          <div className="portifolioContainerCard">
              <div key={index} className="portfolioSectionCard" > 
                <div className="portfolioSectionImg" onClick={()=>window.open(`${item.link}`, '_blank') }>
                  <img src={item.src} alt="Placeholder" />
                </div>
                <div className="portfolioSectionCardContent">
                  <div>
                    <h3 className="portfolioSectionTitle">{item.title}</h3>
                    <p className="textName">{item.description}</p>
                  </div>
                  <div className="portfolioLink" >
                    <button className="liveDemoBtn" onClick={()=>window.open(`${item.link}`, '_blank')}>Live demo</button>
                    <button className="githubLinkBtn" onClick={()=>window.open(`${item.github}`, '_blank')}>github</button>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}