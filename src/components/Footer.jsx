import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub,  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Üst Kısım */}
        <div className="footer-top">
          <p className="footer-logo">
            <span className="code-icon">{"</>"}</span> Barış Can Yönel
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/barisyonel" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/barış-can-yönel-275292157/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/barisyonel" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
      
          </div>
        </div>

        {/* Alt Kısım */}
        <nav className="footer-nav">
          <a href="#about">Hakkımda</a>
          <a href="#projects">Projeler</a>
          <a href="#education">Eğitimler</a>
          <a href="#contact">İletişim</a>
        </nav>
      </div>

      {/* Sayfanın en üstüne çıkma butonu */}
      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ⬆
      </button>
      <p>Tüm Haklar Saklıdır.</p>
    </footer>
  );
};

export default Footer;
