import React, { useState } from "react";
import "../styles/Education.css";

const educationData = [
  {
    id: 1,
    title: "Mudanya Üniversitesi Sertifikası",
    provider: "Mudanya Üniversitesi",
    image: "/education/mudanya-universitesi.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Neos Yazılım Akademisi - Full Stack Developer Eğitimi",
    provider: "Neos Akademi",
    image: "/education/neos-cert.jpg",
    link: "https://www.neos.com.tr",
  },
  {
    id: 3,
    title: "React ile Modern Web Geliştirme",
    provider: "Udemy",
    image: "/education/react-udemy.jpg",
    link: "https://www.udemy.com/course/react-kursu/",
  },
  {
    id: 4,
    title: "React ile Web Programcılığı",
    provider: "BTK Akademi",
    image: "/education/react.png",
  },
];

const Education = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="education" className="education">
      <h2>Eğitimlerim & Sertifikalarım</h2>
      <div className="education-container">
        {educationData.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-image-container">
              <img
                src={edu.image}
                alt={edu.title}
                className="education-image"
                onClick={() => setSelectedImage(edu.image)} // ✅ Tıklanınca büyük açılacak
              />
            </div>
            <h3>{edu.title}</h3>
            <p>{edu.provider}</p>
            {edu.link !== "#" && (
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                Sertifikayı Görüntüle
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Modal - Resim büyütme efekti */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img src={selectedImage} alt="Sertifika" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
