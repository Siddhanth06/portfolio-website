import "./AboutPage.css";
function AboutPage() {
  return (
    <>
      <div className="container about-container">
        <div>
          <h1 className="about-title">
            ABOUT <span className="highlight">ME</span>
          </h1>
        </div>
        <div className="">
          <h3 className="about-subtitle">
            I Design and code beautiful things,and i love what i do
          </h3>
        </div>
        <div className="about-content">
          <div className="about-img-div">
            <img src="./abt-PhotoRoom.png" alt="ds" />
          </div>
          <div className="about-desc">
            <div className="about-desc1">
              <p>
                <span className="col1">Firstname</span> Siddhanth
              </p>
              <p>
                <span className="col1">Lastname</span> Chauhan
              </p>
              <p>
                <span className="col1">Birthdate</span> 06 Nov 2000
              </p>

              <p>
                <span className="col1">Experience</span> 6 Months
              </p>
            </div>
            {/* <div className="about-desc1">
              <p>
                <span className="col1">Email</span> chauhansid06@gmail.com
              </p>
              <p>
                <span className="col1">Linkedin</span>{" "}
                <a
                  href="https://shorturl.at/lvyCU"
                  style={{ textDecoration: "none", color: "#ffb400" }}
                >
                  https://shorturl.at/lvyCU
                </a>
              </p>
              <p>
                <span className="col1">Nationality</span> Indian
              </p>
              <p>
                <span className="col1">Github</span>
                https://github.com/Siddhanth06
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
