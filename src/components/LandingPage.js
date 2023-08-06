import { useTypewriter } from "react-simple-typewriter";
import "./LandingPage.css";
function LandingPage() {
  const [text] = useTypewriter({
    words: ["SIDDHANTH CHAUHAN", "A SOFTWARE DEVELOPER"],
    loop: {},
  });
  return (
    <>
      <div className="container grid grid-2">
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
              My expertise lies in HTML, CSS, JavaScript, React.js, PHP, and
              MySQL. During my 6-month work experience as a software developer,
              I have actively contributed to the design, development, and
              maintenance of web applications. I possess a solid understanding
              of front-end development, including creating responsive layouts,
              implementing dynamic user interfaces, and optimizing website
              performance
            </p>
          </div>
          <div>
            <button className="btn-primary">
              <ion-icon name="person" className="person"></ion-icon>MORE ABOUT
              ME
            </button>
            <button className="btn-secondary">
              <a
                href="./SidResume.pdf"
                download
                style={{ textDecoration: "none", color: "#ffb400" }}
              >
                <ion-icon name="briefcase"></ion-icon>Download My CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
