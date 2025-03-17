import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <p className="intro">
        <span>Merhaba, ben </span> <strong>Barış Can Yönel</strong>
      </p>

      <h2 className="title">
        Front-End <span className="highlight-green">Developer</span>
      </h2>

      <p className="description">
        Modern teknolojilerde uzmanlığımı kullanarak{" "}
        <span className="highlight-blue">yenilikçi</span> ve{" "}
        <span className="highlight-green">güçlü</span> web çözümleri sunuyorum.
        Kullanıcı dostu ve <span className="highlight-yellow">etkileyici</span> projeler geliştirmeye odaklanıyorum.{" "}
        Uzmanlık alanlarım arasında{" "}
        <span className="highlight-red">React.js</span>,{" "}
        <span className="highlight-red">Next.js</span>,{" "}
        <span className="highlight-red">JavaScript</span>,{" "}
        <span className="highlight-red">CSS Animasyonları</span> bulunmaktadır.
        Ayrıca, kullanıcı deneyimi ve performans optimizasyonu üzerine çalışmalar yapıyorum.
      </p>

      {/* Yetkinlikler Bölümü */}
      <div className="skills">
        <h3 className="skills-title">Yetkinliklerim</h3>
        <ul className="skills-list">
          <li>🔥 React & Next.js</li>
          <li>🎨 HTML, CSS, JavaScript</li>
          <li>⚡ SCSS & CSS Animasyonları</li>
          <li>🛠️ Git ve GitHub</li>
          <li>🌎 SEO & Performans Optimizasyonu</li>
          <li>🚀 TypeScript & TSX</li>
          <li>🎯 Tailwind CSS & Sass</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
