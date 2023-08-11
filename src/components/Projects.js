import "./Projects.css";
function Projects() {
  return (
    <>
      <div className="project-container" id="projects">
        <h1 className="project-title">
          My <span className="highlight">Projects</span>
        </h1>
        <div className="project-card-container">
          <div className="project-card">
            <a href="https://healthify-web.netlify.app" target="_blank">
              <img src="/healthify.png" alt="" />
              <div className="overlay">
                <h1>Healthify Food Wesite</h1>
                <p>
                  The smart 365-days-per-year food subscription that will make
                  you eat healthy again. Tailored to your personal tastes and
                  nutritional needs. We have delivered 250,000+ meals last year!
                </p>
              </div>
            </a>
          </div>
          <div className="project-card">
            <img src="/travellery.png" alt="" />
            <a href="https://travellery-list.netlify.app/" target="_blank">
              <div className="overlay">
                <h1>Travellery Wesite</h1>
                <p>
                  Make a list of items you want to take with you on your next
                  trip
                </p>
              </div>
            </a>
          </div>
          <div className="project-card">
            <img src="/kozo.png" alt="" />
            <a href="https://kozo-web.netlify.app" target="_blank">
              <div className="overlay">
                <h1>Kozo Wesite</h1>
                <p>
                  Worked on the frontend of the website. Kozo is a platform for
                  expense management system.
                </p>
              </div>
            </a>
          </div>
          <div className="project-card">
            <img src="/cinema.png" alt="" />
            <a
              href="https://github.com/Siddhanth06/laravel-cinema-app"
              target="_blank"
            >
              <div className="overlay">
                <h1>Laravel Cinema App</h1>
                <p>
                  Movies application built using laravel and mysql database.
                </p>
              </div>
            </a>
          </div>
          {/* <div className="project-card">
            sbdlab sfjbdsf sdlfjbsf dslfjsf sfjbsdf
          </div>
          <div className="project-card">
            sbdlab sfjbdsf sdlfjbsf dslfjsf sfjbsdf
          </div>
          <div className="project-card">
            sbdlab sfjbdsf sdlfjbsf dslfjsf sfjbsdf
          </div>
          <div className="project-card">
            sbdlab sfjbdsf sdlfjbsf dslfjsf sfjbsdf
          </div>
          <div className="project-card">
            sbdlab sfjbdsf sdlfjbsf dslfjsf sfjbsdf
          </div>
          <div className="project-card">
            sbdlab sfjbdsf sdlfjbsf dslfjsf sfjbsdf
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Projects;
