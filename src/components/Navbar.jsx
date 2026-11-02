import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { navLinks } from "../data";

export default function Navbar({ transparent = false }) {
  const [open, setOpen] = useState(false);
  const linkColor = transparent ? "#ffffff" : "inherit";

  return (
    <nav className={`navbar ${transparent ? "navbar-transparent" : ""}`}>
      <div className="navbar-container">
        <div className="nav-left">
          <a href="/" className="nav-logo">
            <img src="/images/mylogo.jpg" alt="logo" width="60" className="logo" />
          </a>
          <h1 className="nav-name" style={{ color: linkColor }}>Aafifa Akhter</h1>
        </div>
        <div className="nav-right">
          <ul className="nav-items-container">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} className="nav-link" style={{ color: linkColor }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="nav-toggle" onClick={() => setOpen((o) => !o)} style={{ color: linkColor }}>
            <FaBars />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          <ul className="nav-mobile-items">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-mobile-item">
                <a href={link.href} className="nav-mobile-link" onClick={() => setOpen(false)} style={{ color: linkColor }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
