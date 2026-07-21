// components/Navbar.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "./styles/Navbar.css";

const links = [
  { path: "/", label: "Accueil" },
  { path: "/about", label: "Profil" },
  { path: "/skills", label: "Compétences" },
  { path: "/projects", label: "Projets" },
  { path: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-mark">NW</span>
          <span className="navbar__brand-text">
            William
            <em>Dossier technique</em>
          </span>
        </Link>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
          <a href="/cv.pdf" download className="navbar__cta">
            Télécharger le CV
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;