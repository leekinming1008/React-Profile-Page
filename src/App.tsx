import Profile from "./components/Profile";
import Contact from "./components/Contact";
import "./App.css";
import LinkButtons from "./components/LinkButtons";

function App() {
  return (
    <div className="container">
      <Profile
        imageUrl="https://media.licdn.com/dms/image/D4E35AQHPaBuBC25TnA/profile-framedphoto-shrink_200_200/0/1709138957285?e=1710007200&v=beta&t=vRuQtZ77y1dMmv7gLaIiHtcNzitxYMO68Lgr2BbnECc"
        bio="Highly motivated individual with a passion for embracing new challenges. Demonstrates a strong work ethic, adaptability, and exceptional interpersonal skills. Proficient in working autonomously and rapidly acquiring new skills. Diligent in providing excellent customer service, adept at multitasking, and efficient in time management.&nbsp;"
      />
      <div className="ContactInfoSection">
        <Contact />
        <div className="LinkButton">
          <h1>More information about Me :))</h1>
          <LinkButtons
            label="LinkedIn"
            url="https://www.linkedin.com/in/leekinming"
          />
          <LinkButtons label="GitHub" url="https://github.com/leekinming1008" />
          <LinkButtons
            label="Resume"
            url="https://anguslee.netlify.app/assets/Angus_CV-cYGodnIY.pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
