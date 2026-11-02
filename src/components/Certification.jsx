import { FaCertificate } from "react-icons/fa";

export default function Certification() {
  const certs = [
    {
      title: "Queen's Commonwealth Essay Competition 2021",
      issuer: "Royal Commonwealth Society",
      year: 2021,
      pdf: "/images/Aafifa_Akhter_bronze.pdf",
    },
    {
      title: "AI+ Prompt Engineer Level 1\u2122",
      issuer: "AI CERTs\u00ae",
      year: 2025,
      pdf: "/images/Certificate.pdf",
    },
    {
      title: "International NASA Space App Challenge 2025",
      issuer: "NASA - National Aeronautics and Space Administration",
      year: 2025,
      pdf: "/images/NASA Space Apps Challenge.pdf",
    },
    {
      title: "Leadership Student",
      issuer: "Aspire Institute",
      year: "2026",
      pdf: "/images/Aspire-Certificate.pdf",
    },
  ];

  return (
    <section id="certification" className="section cert-section">
      <div className="container">
        <div className="cert-header">
          
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="cert-grid">
          {certs.map((c) => (
            <div key={c.title} className="cert-card">
              <div className="cert-icon"><FaCertificate /></div>
              <h3>{c.title}</h3>
              <p className="issuer">{c.issuer}</p>
              {c.year && <p className="year">{c.year}</p>}
              <a
                href={c.pdf}
                className="btn-cred"
                target="_blank"
                rel="noopener noreferrer"
              >
                Show Credentials
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
