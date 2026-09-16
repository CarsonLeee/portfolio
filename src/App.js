import React, { useState, useEffect } from "react";
import "typeface-roboto";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import profilePic from "./assets/pic.jpg";
import wavePic from "./assets/wave.png";
import ideaPic from "./assets/idea.png";
import thinkingPic from "./assets/thinking.png";
import computerPic from "./assets/computer.png";
import thumbsUpPic from "./assets/thumbsup.png";
import arrive from "./assets/arrive.gif";
import climateheroes from "./assets/climateheroes.gif";
import personalwebsite from "./assets/personalwebsite.gif";
import aichef from "./assets/aichef.gif";
import investalytics from "./assets/InvestAlytics.gif";
import restaurantfinder from "./assets/restaurantfinder.gif";
import aslearn from "./assets/ASLearn.gif";
// ... and so on for other project images

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });
  const [toggled, setToggled] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "true" : "false");
  };

  const handleScroll = () => {
    if (toggled) return;

    const sections = [
      document.querySelector(".tldr-box.tldr-box-off"),
      document.querySelector(".work-section"),
      document.querySelector(".project-section"),
      document.querySelector(".skills-section"),
    ];

    sections.forEach((section) => {
      if (section && !section.classList.contains("animated")) {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Debugging: Log section info
        console.log(section.className, sectionPosition, screenPosition);

        if (sectionPosition < screenPosition) {
          section.classList.add("animate-on-view");
          section.classList.add("animated");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggled]);

  const handleAnimation = (section) => {
    if (section && !section.classList.contains("animated")) {
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        section.classList.add("animate-on-view");
        section.classList.add("animated"); // Mark as animated
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  const handleToggle = () => {
    setToggled(!toggled);

    // Check if the TLDR section is currently visible when toggling off
    if (toggled) {
      const tldrBoxOff = document.querySelector(".tldr-box.tldr-box-off");
      if (tldrBoxOff) {
        const boxPosition = tldrBoxOff.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (boxPosition < screenPosition) {
          tldrBoxOff.classList.add("animate-on-view");
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggled]);

  useEffect(() => {
    const tldrBoxOff = document.querySelector(".tldr-box.tldr-box-off");
    if (tldrBoxOff) {
      if (!toggled) {
        // Add the animation class
        tldrBoxOff.classList.add("animate-on-view");
      } else {
        // Remove the animation class
        tldrBoxOff.classList.remove("animate-on-view");
      }
    }
  }, [toggled]);

  return (
    <div className={darkMode ? "App dark-mode" : "App light-mode"}>
      <header className="App-header">
        <div className="name" onClick={scrollToTop}>
          Carson
        </div>
        <nav className="navigation">
          <a
            href="https://devpost.com/CarsonLeee?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
          >
            Devpost
          </a>
          <a href="https://www.linkedin.com/in/carson-lee/" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/CarsonLeee" target="_blank">
            GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/16Wy8S_9tEVo-ayxfbH7vc6vgnByTTPio/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
          <div className="mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </div>
        </nav>
      </header>
      <div className="content">
        <div className="intro">
          <h1>
            Hi! My name is Carson Lee and I am seeking new roles in Software
            Development!
          </h1>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-inner">
            <img src={profilePic} alt="Carson Lee" />
          </div>
        </div>
      </div>
      <div className="tldr-container">
        <div className="tldr-content">
          <div className="tldr-title">
            <h2>TLDR Mode</h2>
            <p>Quick summary of who I am</p>
          </div>
          <div
            className={`toggle-button-placeholder ${
              toggled ? "toggled-background" : ""
            }`}
            onClick={handleToggle}
          >
            <div
              className={toggled ? "toggle-button toggled" : "toggle-button"}
            />
          </div>
        </div>
      </div>
      {toggled ? (
        <div className="tldr-box tldr-box-on visible">
          <h2 className="about-me-title">About Me</h2>
          <div className="tldr-bitmoji">
            <img src={thumbsUpPic} alt="Carson Lee Bitmoji" />
          </div>
          <div className="tldr-summaries-container">
            <div className="tldr-summary-left">
              <h3>Software Developer</h3>
              <p>
                Hello, I am a recent graduate with a Bachelor of Science
                majoring in Computer Science from the{" "}
                <span>University of Western Ontario</span>.
              </p>
              &nbsp;
              <p>
                My lifelong fascination with technology guided me to major in
                Computer Science. This academic path not only sharpened my
                innovative skills but also ingrained a strong ability to create
                meaningful impacts through technology.
              </p>
              &nbsp;
              <p>
                In my development career, I've managed key projects and worked
                as a Full-Stack Application Developer at INNoVA and a Software
                Developer Intern at YK Air System. Eager to utilize my skills,
                I'm primarily focused on continual learning and professional
                growth. I seek roles that challenge me, broaden my expertise,
                and foster new professional connections.
              </p>
            </div>
            <div className="tldr-summary-right">
              <ul className="fun-facts">
                <li>
                  <strong>Fun Fact 1:</strong> I am a 2x hackathon winner
                </li>
                <li>
                  <strong>Fun Fact 2:</strong> I have played sports all my life
                  currently active in Brazilian Jiu Jitsu
                </li>
                <li>
                  <strong>Fun Fact 3:</strong> I have built a total of 9
                  desktops in my life
                </li>
                <li>
                  <strong>Fun Fact 4:</strong> My high school CS teacher told me
                  not to pursue computer science
                </li>
                <li>
                  <strong>Fun Fact 5:</strong> I am a huge MMA/Boxing fan
                </li>
              </ul>
              <button
                className="connect-button"
                onClick={() => (window.location = "mailto:carson0@hotmail.com")}
              >
                Let's Connect!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="tldr-box tldr-box-off">
          <div className="tldr-header">
            <h2 className="about-me-title">About Me</h2>
            <div className="tldr-bitmoji">
              <img src={wavePic} alt="Carson Lee Bitmoji" />
            </div>
          </div>
          <div className="tldr-summaries-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-bitmoji">
                    <img src={computerPic} alt="Bitmoji" />
                  </div>
                  <h3>Who I am</h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    A computer science graduate from{" "}
                    <span>The University of Western Ontario</span> with a knack
                    for technology and a passion for software development. My
                    fascination with technology started in childhood, inspired
                    by video games and PC building. This early interest evolved
                    into a career path, blending my technical skills with a
                    creative mindset.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-bitmoji">
                    <img src={ideaPic} alt="Bitmoji" />
                  </div>
                  <h3>What I do</h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    As a <span>Software Developer</span>, I am adept in creating
                    high-performance, user-friendly software. My expertise lies
                    in leveraging cutting-edge technologies to construct
                    applications that are not only technically sound but also
                    intuitive. A prime example of my recent work is the
                    award-winning ARrive app. I excel in simplifying complex
                    technical concepts into accessible, engaging user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-bitmoji">
                    <img src={thinkingPic} alt="Bitmoji" />
                  </div>
                  <h3>Why I do it</h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    My motivation in technology is driven by the potential to
                    <span> positively impact everyday life</span>. From
                    developing educational games like ClimateHeroes to creating
                    practical applications like AI Chef, I enjoy turning complex
                    ideas into accessible realities. My goal is to continue
                    merging technological innovation with daily experiences in
                    meaningful ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="work-section">
            <h2 className="work-title">Work</h2>
            <div className="work-content-1">
              <h3>
                <a
                  href="https://theinnovasolution.ca/"
                  target="_blank"
                  className="company-name"
                >
                  INNoVA
                </a>
              </h3>
              <span className="job-title">
                Full Stack Application Developer
              </span>
              <span className="work-duration">July - November 2023</span>
              <p>
                Architected and lead the full cycle development of a mobile
                application, utilizing React Native, Node.js, and AWS resulting
                in a robust and scalable user-centric platform.
              </p>
            </div>
            <div className="work-content-2">
              <h3>
                <a
                  href="https://www.google.com/search?sca_esv=591053097&rlz=1C1VDKB_enCA1066CA1066&sxsrf=AM9HkKlwvEY8JWm8sWoXWFjb2DGqxN3yAw:1702622683129&q=perfect+marketing+inc+toronto&spell=1&sa=X&ved=2ahUKEwihmtvh65CDAxUItokEHUuGBKIQBSgAegQIBxAC&biw=2133&bih=1012&dpr=0.9#ip=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Perfect Marketing
                </a>
              </h3>
              <span className="job-title">
                Digital Marketing Assistant Intern
              </span>
              <span className="work-duration">May - August 2021</span>
              <p>
                Collaborated cross-functionally with subsidiary crypto company
                and assisted in the expansion of software installations for
                Graphics Processing Units.
              </p>
            </div>
            <div className="work-content-3">
              <h3>
                <a
                  href="https://www.facebook.com/p/Y-K-Air-System-100067125819306/?paipv=0&eav=AfY5PjumOmjMkpaUhaIFPOd99kxu1Qzw2zHflzohC0phSXQq79EvD5prBfPgl1MZR0A&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YK Air System
                </a>
              </h3>
              <span className="job-title">Software Developer Intern</span>
              <span className="work-duration">May - August 2020</span>
              <p>
                Automated workflows with Python, cutting manual data entry by
                30% and boosting database speed by 40% through SQL optimization
                and schema restructuring.
              </p>
            </div>
          </div>
          <div className="project-section">
            <h2 className="project-title">Projects</h2>
            <div className="project-container">
              <div className="project-content-1">
                <div className="project-box-left">
                  <img
                    src={aslearn}
                    alt="Project 1"
                    className="project-image"
                  />
                </div>
                <div className="project-box-right">
                  <h6>Swift Mobile Application</h6>
                  <h3>
                    <a
                      href="https://youtu.be/r_kv72kp82o"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b>ASLearn</b>
                    </a>
                  </h3>
                  <p>
                    Created a <span>Swift</span> mobile application designed to
                    facilitate learning American Sign Language (ASL). The app
                    includes two primary features: 'Gesture Guess', a quiz
                    format that presents multiple-choice questions to users, and
                    'Sign Sculptor', which leverages machine learning to analyze
                    and provide feedback on users' ASL gestures through
                    real-time camera interaction hosted through{" "}
                    <span>Firebase</span>.
                  </p>
                </div>
              </div>
              <div className="project-content-1">
                <div className="project-box-left">
                  <img
                    src={investalytics}
                    alt="Project 1"
                    className="project-image"
                  />
                </div>
                <div className="project-box-right">
                  <h6>Full Stack MERN Web Application</h6>
                  <h3>
                    <a
                      href="https://youtu.be/gZZPqXrzDvs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b>InvestAlytics</b>
                    </a>
                  </h3>
                  <p>
                    Developed a Full Stack application with a <span>MERN</span>{" "}
                    core, enhanced by <span>Python-based machine learning</span>{" "}
                    algorithms for predicting end-of-day stock prices.
                    Incorporates real-time market data, user-specific
                    watchlists, and an intelligent stock evaluation tool,
                    leveraging a sophisticated Weighted Scoring System,
                    Threshold Based Approach, and machine learning insights for
                    informed investment decisions.
                  </p>
                </div>
              </div>
              <div className="project-content-1">
                <div className="project-box-left">
                  <img src={arrive} alt="Project 1" className="project-image" />
                </div>
                <div className="project-box-right">
                  <h6>Augmented Reality Mobile Application</h6>
                  <h3>
                    <a
                      href="https://www.youtube.com/watch?v=9xUEvrdHoP4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b>ARrive</b>
                    </a>
                  </h3>
                  <p>
                    Implemented real time recognition of AC Transit bus signs
                    using ARKit in Xcode and <span>Swift</span>, blending
                    physical and digital realities for improved commuter
                    information access. Project placed{" "}
                    <span>first overall</span> in the hackathon. First place in
                    Hackathon overall.
                  </p>
                </div>
              </div>
              <div className="project-content-2">
                <div className="project-box-left">
                  <img
                    src={climateheroes}
                    alt="Project 1"
                    className="project-image"
                  />
                </div>
                <div className="project-box-right">
                  <h6>Unity Game Development Project</h6>
                  <h3>
                    <a
                      href="https://www.youtube.com/watch?v=Bvs19RVjYaU"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b>ClimateHeroes</b>
                    </a>
                  </h3>
                  <p>
                    Created the game ClimateHeroes, a captivating tower defense
                    game built with <span>C# and Unity</span>. The project
                    emerged as <span>first place</span> in its category in a
                    hackathon, showcasing my ability to create engaging gameplay
                    while educating players about clean energy and empowering
                    them to combat climate change. First place in category.
                  </p>
                </div>
              </div>
              <div className="project-content-3">
                <div className="project-box-left">
                  <img src={aichef} alt="Project 4" className="project-image" />
                </div>
                <div className="project-box-right">
                  <h6>Full Stack Web Application</h6>
                  <h3>
                    <a
                      href="https://github.com/CarsonLeee/AI-Chef"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b>AI Chef</b>
                    </a>
                  </h3>
                  <p>
                    Developed an innovative web application leveraging the
                    machine learning mode,{" "}
                    <span>OpenAI and the Spoonacular API</span> to generate
                    creative recipes based on user defined ingredients. Enhanced
                    the user experience by implementing an interactive design
                    using <span>React</span>.
                  </p>
                </div>
              </div>
              <div className="project-content-4">
                <div className="project-box-left">
                  <img
                    src={restaurantfinder}
                    alt="Project 4"
                    className="project-image"
                  />
                </div>
                <div className="project-box-right">
                  <h6>Full Stack Web Application</h6>
                  <h3>
                    <a
                      href="https://github.com/CarsonLeee/Restaurant-Finder"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b>Restaurant Finder</b>
                    </a>
                  </h3>
                  <p>
                    Constructed a web application designed to help users
                    discover new dining experiences in their vicinity. The
                    application utilizes both a{" "}
                    <span>Google maps and a restaurant finder API</span> to
                    access real-time data and provide accurate results. Built
                    using <span>Javascript</span>
                  </p>
                </div>
              </div>
              <div className="project-content-5">
                <div className="project-box-left">
                  <img
                    src={personalwebsite}
                    alt="Project 5"
                    className="project-image"
                  />
                </div>
                <div className="project-box-right">
                  <h6>Front End Application</h6>
                  <h3>
                    <a
                      href="https://v1.carsonlee.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b>Personal Website v1</b>
                    </a>
                  </h3>
                  <p>
                    Built my first website using{" "}
                    <span>JavaScript, HTML, and CSS</span>, featuring
                    interactive elements and a responsive design. This project
                    was a key milestone in my coding journey, blending aesthetic
                    appeal with functionality and showcasing my proficiency in
                    web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
              <div className="skill-box">
                <h3>Languages</h3>
                <p>
                  JavaScript, TypeScript, HTML, CSS, Java, C, Swift, C#, Python,
                  SQL, C++
                </p>
              </div>
              <div className="skill-box">
                <h3>Frameworks and Services</h3>
                <p>
                  React, AWS, React Native, Node.js, Express.js GitHub,
                  Bootstrap, jQuery, MongoDB, Firebase
                </p>
              </div>
              <div className="skill-box">
                <h3>Tools</h3>
                <p>
                  Unity, Figma, git, Jira, Adobe Photoshop, vscode, vim, npm,
                  pip
                </p>
              </div>
              <div className="skill-box">
                <h3>Relevant Courses</h3>
                <p>
                  Databases, Data Structures and Algorithms, Object-Oriented
                  Design and Analysis, Software Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer className="App-footer">
        <div className="footer-name" onClick={scrollToTop}>
          Carson Lee
        </div>
      </footer>
    </div>
  );
}

export default App;
