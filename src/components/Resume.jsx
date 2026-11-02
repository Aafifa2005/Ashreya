import { FaGraduationCap, FaFileAlt } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-grid">
          <div className="resume-column">
            <div className="resume-card">
              <div className="resume-icon"><FaGraduationCap /></div>
              <h3>Education</h3>
              <h4>Bachelor of Technology in Computer Science</h4>
              <p className="meta">University &bull; 2023</p>
            </div>
            <div className="resume-card">
              <div className="resume-icon"><FaFileAlt /></div>
              <h3>Summary</h3>
              <p>
                Passionate tech enthusiast with a strong foundation in diverse
                technical domains, experienced in building responsive web
                applications and contributing to collaborative projects.
              </p>
            </div>
          </div>
        </div>
        <div className="resume-actions">
          <a href="/images/CV.pdf" download="Aafifa_Akhter_Resume.pdf" className="btn resume-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
