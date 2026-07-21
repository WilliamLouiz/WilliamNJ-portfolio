// pages/Contact.js
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./pages.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé (simulation) !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="page contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pièce n°4 — Contact</span>
          <h2>Entrons en contact</h2>
          <p>
            Vous avez un projet ? Une collaboration ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Restons en contact</h3>
            <p>Disponible pour des missions de développement web, du conseil technique ou des collaborations innovantes.</p>
            <ul>
              <li>
                <FaEnvelope />
                <span>njatomiarintsoawilliam@gmail.com</span>
              </li>
              <li>
                <FaPhone />
                <span>+261 34 82 357 30</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Anosizato Est, Antananarivo, Madagascar</span>
              </li>
            </ul>
            <div className="contact-socials">
              <a href="https://github.com/WilliamLouiz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/William.Liam.02nj" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                required
              />
            </div>
            <button type="submit" className="btn btn--primary">
              <FaPaperPlane /> Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;