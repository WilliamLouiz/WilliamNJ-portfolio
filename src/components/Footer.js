import React from 'react';
import './styles/Footer.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} William NJATOMIARINTSOA. Tous droits réservés.</p>
        <div className="footer-socials">
          <a href="https://github.com/WilliamLouiz" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/votre-username" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.facebook.com/William.Liam.02nj" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;