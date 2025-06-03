import React, { useState } from "react";
import "./App.css";
import kuromiImg from "./image/kurapika.jpg"; // Kuromi image

const projectData = {
  activities: [
    {
      title: "Calculator",
      link: "calculator/index.html"
    },
    {
      title: "Array",
      link: "array_objects/index.html"
    },
    {
      title: "Loop",
      link: "Loop/index.html"
    },
    {
      title: "Converter",
      link: "converter-activity/index.html"
    },
  ]
  
};

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    setActiveSection(id);
  };

  return (
    <div className="app-wrapper">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            {["home", "about", "activities", "social"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => scrollToSection(section)}
                  className={activeSection === section ? "active" : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {activeSection === "home" && (
          <section id="home" className="profile-section">
            <h1 className="name">MAY LIECEL JOY B. OCA</h1>
            <img src={kuromiImg} alt="Kuromi Dev" className="profile-img" />
            <h1 className="name">Web Programmer 
              <br></br>BSIT-3</h1>
          </section>
        )}

        {activeSection === "about" && (
          <section id="about" className="about-section">
            <h2>ABOUT ME</h2>
            <p>
            Hi! I’m May Liecel Joy Oca, a student at the University of Abra, pursuing a Bachelor of Science 
            in Information Technology (BSIT). I’m passionate about using software, databases, and computer 
            systems to solve real-world problems. I love diving into hands-on projects like web development, 
            mobile apps, and cybersecurity—anything that helps make everyday life more efficient, fun, or 
            secure.<br></br>

            I’m also the kind of girl who gets completely lost in a good Wattpad story. Whether it’s a 
            heart-fluttering romance or a plot-twisting mystery, I’m all in—feeling every emotion right 
            along with the characters. When I’m not reading, you’ll likely find me watching K-dramas, 
            totally absorbed in the emotional highs and lows they bring. There’s something about the mix
            of love, drama, and suspense that pulls me in and keeps me hooked until the final episode.

            </p>
          </section>
        )}

        {activeSection === "activities" && (
          <section id="activities" className="activities-section">
            <h2>MY ACTIVITIES</h2>
            <ul className="activities-list">
              {projectData.activities.map((activity, index) => (
                <li key={index} className="project-item">
                  <a href={activity.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <h3>{activity.title}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeSection === "social" && (
          <section id="social" className="social-section">
            <h2>SOCIAL LINKS</h2>
            <div className="social-links">
              <a href="https://github.com/Mayliecel oca" target="_blank" rel="noopener noreferrer">
                🐙 GitHub
              </a>
              <a href="https://www.facebook.com/May Liecel Joy Oca" target="_blank" rel="noopener noreferrer">
                📘 Facebook
              </a>
              <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
