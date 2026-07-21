// pages/Projects.js
import React from "react";
import { FaExternalLinkAlt, FaGithub, FaServer, FaVideo, FaChartPie, FaShoppingCart, FaGraduationCap } from "react-icons/fa";
import "./pages.css";

const projects = [
  {
    title: "Fisca Compta",
    description:
      "Application de gestion comptable conforme au PCG 2005. Gestion de la comptabilité, fiscalité et paie à Madagascar.",
    tech: ["Django", "React", "PostgreSQL"],
    link: "https://app.fiscacompta.mg/",
    github: "#",
    icon: <FaChartPie />,
    type: "Application métier",
  },
  {
    title: "IFFEN.fr",
    description:
      "Site institutionnel de l'institut IFFEN sous WordPress avec Elementor Pro. Site vitrine et plateforme d'information.",
    tech: ["WordPress", "Elementor Pro", "MySQL"],
    link: "https://iffen.fr/",
    github: "#",
    icon: <FaServer />,
    type: "Site vitrine",
  },
  {
    title: "Aromadive.fr",
    description:
      "Site web de i-Oasis pour information sur les casque VR des produits aromatiques",
    tech: ["Astro"],
    link: "https://aromadive.com/",
    github: "#",
    icon: <FaShoppingCart />,
    type: "Site vitrine",
  },
  {
    title: "I-Oasis.fr",
    description:
      "Site web de l'entreprise VR I-Oasis développé avec AngularJS et Laravel.",
    tech: ["AngularJS", "Laravel", "MySQL"],
    link: "https://i-oasis.fr/",
    github: "#",
    icon: <FaServer />,
    type: "Site vitrine",
  },
  {
    title: "Streaming Vidéo VR",
    description:
      "Plateforme de streaming vidéo permettant de diffuser en temps réel les actions des stagiaires équipés d'un casque VR vers une interface web pour que leurs encadreurs puissent noter en même temps leur travail",
    tech: ["Java", "React.js", "PostgreSQL", "Websocket"],
    link: "http://13.39.182.184/",
    github: "#",
    icon: <FaVideo />,
    type: "Innovation / VR",
  },
  {
    title: "Assets i-oasis",
    description:
      "Application de stockage et de transfert des assets entre les développeurs et les graphistes de i-oasis, avec visualisation 3D de toutes les extensions 3D (fbx, glb, etc ...)",
    tech: ["ReactJS", "NodeJS", "PostgreSQL"],
    link: "#",
    github: "#",
    icon: <FaChartPie />,
    type: "Application métier",
  },
  {
    title: "AI Wordpress",
    description:
      "API IA qui genère les meta-descriptions du site wordpress iffen.fr",
    tech: ["Django", "PostgreSQL"],
    link: "#",
    github: "#",
    icon: <FaChartPie />,
    type: "Application métier",
  },
  {
    title: "Fiche Positionnement",
    description:
      "Application Next.js pour le positionnement des étudiants. Permet de générer et gérer les fiches de positionnement des apprenants.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    link: "https://fichepositionnement.iffen.fr/",
    github: "#",
    icon: <FaGraduationCap />,
    type: "Application métier",
  },
  {
    title: "CERFA IFFEN",
    description:
      "Génération et gestion des formulaires CERFA pour l'institut IFFEN. Automatisation des documents administratifs.",
    tech: ["Next.js", "Django", "PostgreSQL"],
    link: "https://cerfa.iffen.fr/",
    github: "#",
    icon: <FaChartPie />,
    type: "Application métier",
  },
  {
    title: "CFA IFFEN",
    description:
      "Application sous-domaine de iffen.fr pour l'apprentissage en altérnance ",
    tech: ["Next.js", "Laravel", "MySQL"],
    link: "https://cfa.iffen.fr/",
    github: "#",
    icon: <FaChartPie />,
    type: "Application métier",
  },
  {
    title: "Recrute-moi",
    description:
      "Application permettant de visualiser les résultats d'évaluation des candidats lors d'entretiens en réalité virtuelle.",
    tech: ["Django", "PostgreSQL"],
    link: "#",
    github: "#",
    icon: <FaServer />,
    type: "Innovation / VR",
  },
  {
    title: "Prospect IFFEN",
    description:
      "Application de gestion des prospects pour l'institut IFFEN.",
    tech: ["Next.js", "Django", "PostgreSQL"],
    link: "https://prospect.iffen.fr/",
    github: "#",
    icon: <FaChartPie />,
    type: "Application métier",
  },
];

function Projects() {
  return (
    <section id="projects" className="page projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pièce n°3 — Dossiers</span>
          <h2>Projets réalisés</h2>
          <p>
            Une sélection de projets concrets, du site vitrine à l'application
            métier complexe, en passant par l'innovation technologique.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-type">{project.type}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Voir le projet
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;