import "./Skills.css";
function Skills() {
  return (
    <div className="skills-parent-container" id="skills">
      <h1 className="skill-title">
        My <span className="highlight"> Skills</span>
      </h1>
      <div className="skills-container">
        <div className="skill-img">
          <img src="/html.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
        <div className="skill-img">
          <img src="/css.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
        <div className="skill-img">
          <img src="/javascript.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
        <div className="skill-img">
          <img src="/react.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
        <div className="skill-img">
          <img src="/php.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
        <div className="skill-img">
          <img src="/laravel.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
        <div className="skill-img">
          <img src="/mysql.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
        <div className="skill-img">
          <img src="/git.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
        <div className="skill-img">
          <img src="/bootstrap.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
        <div className="skill-img">
          <img src="/redux.svg" alt="" />
          {/* <p>HTML</p> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
