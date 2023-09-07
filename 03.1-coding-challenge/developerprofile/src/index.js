import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="logo192.png" alt="React Avatar" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Caleb Beichner</h1>
      <p>Full-stack web developer.</p>
    </div>
  );
}

//Pass in name, emoji, and background color
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😎" color="blue" />
      <Skill skill="JSX" emoji="🤠" color="green" />
      <Skill skill="Java" emoji="🤔" color="yellow" />
      <Skill skill="HTML-CSS" emoji="‼️" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
