
import React from "react";
import "./App.css";

const cards = [
  {
    name: "Mudassir",
    role: "AI Engineer",
    price: "$100/hr",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["Deep Learning", "Agentic AI", "Power BI"],
    experience:
      "3 Years experience in AI and Agentic created many handy and useful products for corporate companies",
  },
  {
    name: "Nazeer",
    role: "Data Scientist",
    price: "$150/hr",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    skills: ["Scikit Learning", "Stats", "Data visualization"],
    experience:
      "Strong grip on Data Science giving services to the national body for years",
  },
  {
    name: "Inamullah",
    role: "Android Developer",
    price: "$200/hr",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    skills: ["Maven", "Kotlin", "JetPack Compose"],
    experience:
      "2 years experience in Android Development handled lot projects and also created full flage application for many enterprise companies",
  },
  {
    name: "Ali",
    role: "Web Developer",
    price: "$80/hr",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    skills: ["React", "JavaScript", "CSS"],
    experience:
      "Experienced web developer creating modern and responsive websites for different companies",
  },
];

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="logo">
          Tech<span>Nova</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <button className="getStarted">Get Started</button>
        </nav>
      </header>

      {/* Cards Section */}
      <main className="cardsSection">
        <div className="cardsContainer">

          {cards.map((card, index) => (
            <div className="card" key={index}>

              <div className="price">
                {card.price}
              </div>

              <img
                src={card.image}
                alt={card.name}
                className="profileImage"
              />

              <h2>{card.name}</h2>

              <p className="role">
                {card.role}
              </p>

              <div className="smallIcon">
                💼
              </div>

              {/* Skills */}
              <div className="skills">
                {card.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                  </span>
                ))}

                <span className="more">
                  +4
                </span>
              </div>

              {/* Experience */}
              <p className="experience">
                {card.experience}
              </p>

              <hr />

              <button className="profileBtn">
                VIEW PROFILE
              </button>

            </div>
          ))}

        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <h2>This is footer</h2>
      </footer>

    </div>
  );
}

export default App;
