import { socialLinks } from "../data";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-image-wrapper">
              <img src="/images/mylogo.jpg" className="hero-image" alt="hero image" />
            </div>
          </div>

          <div className="hero-right">
            <h2 className="title">Hello, I'm</h2>
            <h1 className="name">Aafifa Akhter</h1>
            <p className="description">
              <em className="developer">Aafifa</em>{" "}
              — a passionate tech enthusiast working at the intersection of
              internet and web technologies. With a strong foundation in
              diverse technical domains, I have been fortunate to contribute to
              various projects, each adding a unique layer to my learning and
              experience. <i className="fa-solid fa-rocket" />
            </p>
            <div className="buttons">
              <a href="images/CV.pdf" download="Aafifa_Akhter_CV.pdf" className="btn">
                Download CV
              </a>
              <ul className="ul-icon">
                {socialLinks.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} aria-label={s.name}>
                      <i className={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="info-sec">
        {[
          { number: "4+", label: "Years of Experience" },
          { number: "7+", label: "Technical Skills" },
          { number: "50+", label: "Projects Completed" },
          { number: "80+", label: "Satisfied Clients" },
        ].map((s) => (
          <div key={s.label} className="info-card">
            <h1>{s.number}</h1>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
