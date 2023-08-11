import { useTypewriter } from "react-simple-typewriter";
import "./LandingPage.css";
function LandingPage() {
  const [text] = useTypewriter({
    words: ["SIDDHANTH CHAUHAN", "A SOFTWARE DEVELOPER"],
    loop: {},
  });
  return (
    <>
      <div className="container grid grid-2 landing-container">
        <div className="img-container">
          <img
            src="/siddhant.png"
            alt="IMG-20210905-123751"
            border="0"
            className="profile-img"
          />
        </div>
        <div className="profile-container">
          <div>
            <h3 className="greeting">HI THERE ! </h3>
          </div>
          <div>
            <h1 className="title">
              I'M <span className="position">{text}</span>
            </h1>
          </div>
          <div>
            <p className="description">
              "Passionate full-stack developer with a knack for crafting
              seamless digital solutions. Bridging creativity and functionality,
              I bring ideas to life through elegant code."
            </p>
          </div>
          <div>
            <button className="btn-primary">
              <a
                href="./SidResume.pdf"
                download
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                <ion-icon name="briefcase"></ion-icon>Download My CV
              </a>
            </button>
            <button className="btn-secondary ">
              <a
                href="#about"
                style={{ textDecoration: "none", color: "#ffb400" }}
              >
                <ion-icon name="person" className="person"></ion-icon>MORE ABOUT
                ME
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
