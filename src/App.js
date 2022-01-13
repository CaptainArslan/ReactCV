import "./styles.css";

import Interest from "./components/interest";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Expaination from "./components/explaination";
import Language from "./components/language";
import Education from "./components/education";
import Contact from "./components/contact_info";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left_side">
          <div className="profile_text">
            <div className="image_box">
              <img src={{}} alt="true" />
            </div>
            <h2>
              Muhammad Arslan <br /> <span>Web Developer</span>
            </h2>
          </div>
          {/* User Contact Info */}
          <Contact />
          {/* User Education */}
          <Education />
          {/* User Languages */}
          <Language />
        </div>
        <div className="right_side">
          {/* Profile Explaination */}
          <Expaination />
          {/* Experience */}
          <Experience />
          {/* Skills */}
          <Skills />
          {/* Interest */}
          <Interest />
        </div>
      </div>
    </div>
  );
}
