import React from "react";
import "../styles/Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Barış Can Yönel</h1>
        <h2 className="subtitle">Frontend Developer | React & Next.js</h2>
        <p className="description">
          Modern ve etkileyici web siteleri geliştiriyorum. Projelerimi görmek ister misin?
        </p>
        <a href="#projects" className="cta-button">
          Projelerime Göz At
        </a>
      </div>
    </header>
  );
};

export default Header;
