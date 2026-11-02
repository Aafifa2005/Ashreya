import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGitAlt } from "react-icons/fa";

const skillItems = [
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3 },
  { name: "JavaScript", Icon: FaJs },
  { name: "React.js", Icon: FaReact },
  { name: "Node.js", Icon: FaNode },
  { name: "Git", Icon: FaGitAlt },
  { name: "Responsive Design", Icon: FaHtml5 },
  { name: "REST APIs", Icon: FaNode },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillItems.map(({ name, Icon }) => (
            <div key={name} className="skill-card">
              <div className="skill-icon"><Icon /></div>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
