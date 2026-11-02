export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Travel Agency forefront",
      category: "React",
      image: "/images/image.png",
      description:
        "A fully responsive Travel agency frontend with product catalog, cart, and checkout flow.",
    },
    {
      id: 2,
      title: "HVAC",
      category: "REACT",
      image: "/images/HVAC.png",
      description:
        "A website for managing plumbers online for any emergency.",
    },
    {
      id: 3,
      title: "University Website",
      category: "React,Node.js",
      image: "/images/uni-web.png",
      description:
        "A University website",
    },
    {
      id: 4,
      title: "Client Server Chat Application",
      category: "WinSock",
      image: "/images/Client_server_Chat_App.png",
      description:
        "Developed a multithreaded TCP client-server chat application using C++, Winsock, and Qt/QML, featuring real-time messaging, message broadcasting, and timestamped server-side chat logging.",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="projects-card">
              <img src={p.image} alt={p.title} className="projects-image" />
              <div className="projects-content">
                <span className="projects-category">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
