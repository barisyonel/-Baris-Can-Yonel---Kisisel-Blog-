import React, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [, setStatus] = useState(""); // ✅ Durumu tutar

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mjkykoeo", { // ✅ Kendi Formspree URL'ini ekle!
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      alert("Mesajınız başarıyla gönderildi!");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" }); // ✅ Formu temizle
    } else {
      setStatus("error");
      alert("Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">İletişime Geç</h2>

      <div className="contact-container">
        {/* Sol Taraftaki Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Adınız" value={formData.name} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="E-posta" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Konu" value={formData.subject} onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Mesaj" rows="4" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit" className="send-button">Mesaj Gönder</button>
        </form>

        {/* Sağ Taraftaki İletişim Bilgileri */}
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
            <div>
              <p className="contact-label">Instagram</p>
              <p className="contact-value">@barisyonel</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <p className="contact-label">E-posta</p>
              <p className="contact-value">bariscan.yonel60@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
