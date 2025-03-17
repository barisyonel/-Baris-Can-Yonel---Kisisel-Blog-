import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/Navbar.css"; // ✅ CSS dosyamız

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Menü Linkleri (Sola hizalanmış) */}
        <ul className="nav-links">
          <li>
            <Link to="about" smooth={true} duration={500}>
              Hakkımda
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projelerim
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500}>
              Eğitimlerim
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              İletişim
            </Link>
          </li>
        </ul>
        </div>
        {/* Sosyal Medya İkonları (Sağa hizalanmış) */}
        <div className="social-icons">
          <a href="https://github.com/barisyonel" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/barış-can-yönel-275292157/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://www.instagram.com/brsynl" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
   
    </nav>
  );
};

export default Navbar;
