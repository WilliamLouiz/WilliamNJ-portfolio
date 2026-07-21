// pages/Contact.js
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import "./pages.css";

function Contact() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Configuration EmailJS 
      const serviceId = 'service_g9r78al';     
      const templateId = 'template_obj3nve';   
      const publicKey = 'x9GMjz6RbOqY1MVdt';     

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'William', // Votre prénom
        to_email: 'njatomiarintsoawilliam@gmail.com',
        date: new Date().toLocaleString('fr-FR'),
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        toast.success(' Message envoyé avec succès ! Je vous répondrai rapidement.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#e6f4ea',
            color: '#1e7e34',
            border: '1px solid #b7e1cd',
            padding: '16px',
            borderRadius: '8px',
          },
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      toast.error(' Erreur lors de l\'envoi. Veuillez réessayer ou m\'envoyer un email directement.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#fce8e6',
          color: '#c62828',
          border: '1px solid #f5c6cb',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } finally {
      setIsSending(false);
    }
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
                disabled={isSending}
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
                disabled={isSending}
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
                disabled={isSending}
              />
            </div>
            <button 
              type="submit" 
              className="btn btn--primary"
              disabled={isSending}
            >
              <FaPaperPlane /> 
              {isSending ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;