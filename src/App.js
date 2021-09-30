import logo from "./images/balloon.svg";
import "./App.css";

import email from "./images/email.png";
import linkedin from "./images/linkedin.png";
import resume from "./images/resume.png";
import github from "./images/github.png";
import moon from "./images/moon.svg";
import sun from "./images/sun.svg";
import resumePDF from "./files/Flora Chen Resume.pdf";
import img1 from "./images/img1.jpg";
import balloon from "./images/balloons.png";
import img3 from "./images/img3.jpg";
import wave from "./images/wave.gif";

function componentDidMount() {
  document.title = "Flora Chen";
}

function App() {
  componentDidMount();
  return (
    <div className="Balloon">
      <header className="Balloon-header">
        <img src={moon} className="moon" alt="moon" />
        <img src={sun} className="sun" alt="sun" />

        <p className="Info1">
          <img src={img1} className="img1" alt="img1" />
          <p className="Text2">
            Hi there! Welcome to my website. I'm Flora Chen, a student at the
            University of British Columbia. Growing up, I have always been
            interested in all things tech, computers, and gaming! I am quite
            passionate about how amazing software is, and how it's possible use
            technology to build creative solutions to the world's problems. I've
            previously interned at SAP, and am currently seeking Summer 2022
            internship opportunities.
          </p>
        </p>

        <p className="Info2">
          <img
            src={img3}
            className="img3"
            alt="img3"
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=UYL-5n18lh0")
            }
          />

          <p className="Text3">
            In my free time, when I'm not attending hackathons or coding, I
            enjoy singing, playing musical instruments, watching movies and TV
            shows on Netflix, playing Valorant and TFT with my friends, and
            going on long walks. I am also a big fan of musicals, though I have
            never attended one in person before. I starred in one during my
            first year at University! I also sing in the only all-female a
            cappella group at my university. Check us out on YouTube (click
            photo).
          </p>
        </p>

        <p className="Info3">
          <p className="Text6">Thanks for stopping by! :)</p>
          <img src={wave} className="wave" alt="wave" />
        </p>

        <p className="Info4">
          <img src={balloon} className="img2" alt="balloon" />
          <p className="Text5">
            Taken by my sister on her trip to Turkey in 2017.
          </p>
          <p className="Text4">
            You may be interested to know why there are so many hot air balloons
            around this website! Since forever, my dream vacation destination
            has been Turkey. I have always thought the sight of the hot air
            balloons all over the sky in Cappadocia was the most beautiful thing
            I had ever seen even.
          </p>
        </p>
        <img src={logo} className="Balloon-logo1" alt="logo" />
        <p className="Text">
          Flora Chen
          <p className="TextStudent">Computer Science Student</p>
          <p className="divOption">
          <div
            class="socialsy bgfc"
            onClick={() => window.open("mailto:flora1591@hotmail.com")}
          >
            <div>
              <i class="fa fa-facebook"></i>
            </div>
            <img src={email} className="emailIcon" alt="email" />
          </div>
          <div
            class="socialsy bgfc"
            onClick={() =>
              window.open("https://www.linkedin.com/in/flora-chenn/")
            }
          >
            <div>
              <i class="fa fa-facebook"></i>
            </div>
            <img src={linkedin} className="linkedInIcon" alt="linkedin" />
          </div>
          <div
            class="socialsy bgfc"
            onClick={() => window.open("https://github.com/flora-yc")}
          >
            <div>
              <i class="fa fa-facebook"></i>
            </div>
            <img src={github} className="githubIcon" alt="github" />
          </div>
          <div class="socialsy bgfc" onClick={() => window.open(resumePDF)}>
            <div>
              <i class="fa fa-facebook"></i>
            </div>
            <img src={resume} className="resumeIcon" alt="resume" />
          </div>
        </p>
        </p>
        
        <img src={logo} className="Balloon-logo2" alt="logo" />
        <img src={logo} className="Balloon-logo3" alt="logo" />
        <img src={logo} className="Balloon-logo4" alt="logo" />
        <img src={logo} className="Balloon-logo5" alt="logo" />
        <img src={logo} className="Balloon-logo6" alt="logo" />
        <img src={logo} className="Balloon-logo7" alt="logo" />
        <img src={logo} className="Balloon-logo8" alt="logo" />
        <img src={logo} className="Balloon-logo9" alt="logo" />
        <img src={logo} className="Balloon-logo10" alt="logo" />
      </header>
    </div>
  );
}

export default App;
