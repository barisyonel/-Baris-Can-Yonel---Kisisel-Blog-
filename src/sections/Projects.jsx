import React, { useState } from "react";
import "../styles/Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Sigorta Acentesi Web Uygulaması",
    description: "Modern ve performans odaklı bir sigorta web uygulaması.",
    image: "/projects/sigorta-acentesi.jpg",
    link: "https://github.com/barisyonel/sigorta-acentesi",
  },
  {
    id: 2,
    title: "Lezzet Tarifleri Platformu",
    description: "Dünya mutfaklarından yemek tarifleri keşfetme platformu.",
    image: "/projects/lezzet-tarifleri.jpg",
    link: "https://github.com/barisyonel/lezzet-tarifleri",
  },
  {
    id: 3,
    title: "Restaurant Menü & Sipariş Sistemi",
    description: "Restoranlar için sipariş takip sistemi.",
    image: "/projects/restaurant-menu.jpg",
    link: "https://github.com/barisyonel/restaurant-menu",
  },
  {
    id: 4,
    title: "Haber Uygulaması",
    description: "Next.js ve Tailwind CSS ile geliştirilmiş haber uygulaması.",
    image: "/projects/news.jpg",
    link: "https://github.com/barisyonel/news-app",
  },
  {
    id: 5,
    title: "SOS Multiplayer Challenge",
    description: "Stratejik SOS oyununu çok oyunculu hale getiren platform.",
    image: "/projects/sos-multiplayer.jpg",
    link: "https://github.com/barisyonel/sos-multiplayer",
  },
  {
    id: 6,
    title: "Beauty Saloon Web Sitesi",
    description: "Güzellik salonları için şık bir web sitesi.",
    image: "/projects/beauty-saloon.jpg",
    link: "https://github.com/barisyonel/beauty-saloon",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="projects" className="projects">
      <h2>Projelerim</h2>
      <div 
        className={`projects-container ${hovered ? "hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              GitHub'da Görüntüle
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
