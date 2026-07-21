// pages/Skills.js
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaWordpress,
  FaAngular,
  FaDatabase,
  FaJava,
  FaDocker,
  FaServer,
  FaCloud,
  FaGitAlt,
  FaLaravel,
} from "react-icons/fa";

import {
  SiDjango,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiJenkins,
  SiKubernetes,
  SiAstro,
} from "react-icons/si";
import "./pages.css";

const skillsData = {
  "Langages de programmation": [
    { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
    { name: "Python", icon: <FaPython />, color: "#3776ab" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
  ],
  "Frontend": [
    { name: "React.js", icon: <FaReact />, color: "#61dafb" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#fff" },
    { name: "Astro", icon: <SiAstro />, color: "#fff" },
    { name: "Angular", icon: <FaAngular />, color: "#dd0031" },
  ],
  "Backend": [
    { name: "Django", icon: <SiDjango />, color: "#0c4e35" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
    { name: "Express.js", icon: <FaNodeJs />, color: "#fff" },
    { name: "Laravel", icon: <FaLaravel />, color: "#dd0031" },
  ],
  "Base de données": [
    { name: "PostgreSQL", icon: <FaDatabase />, color: "#336791" },
    { name: "MySQL", icon: <FaDatabase />, color: "#00758f" },
  ],
  "DevOps & Serveur": [
    { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
    { name: "AWS", icon: <FaCloud />, color: "#ff9900" },
    { name: "OVH", icon: <FaServer />, color: "#123f6d" },
    { name: "Hostinger", icon: <FaServer />, color: "#673de6" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326ce5" },
    { name: "Jenkins", icon: <SiJenkins />, color: "#d24939" },
  ],
  "CMS": [
    { name: "WordPress", icon: <FaWordpress />, color: "#21759b" },
  ],
};

const langues = [
  { name: "Français", niveau: "Courant" },
  { name: "Anglais", niveau: "Intermédiaire" },
  { name: "Malagasy", niveau: "Langue maternelle" },
];

function Skills() {
  return (
    <section id="skills" className="page skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pièce n°2 — Compétences</span>
          <h2>Stacks techniques & savoir-faire</h2>
          <p>
            Un inventaire complet des technologies maîtrisées, des langages
            serveur aux bases de données, en passant par l'infrastructure.
          </p>
        </div>

        {Object.entries(skillsData).map(([category, items]) => (
          <div key={category} className="skills__category">
            <h3 className="skills__category-title">{category}</h3>
            <div className="skills-grid">
              {items.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Langues */}
        <div className="skills__category">
          <h3 className="skills__category-title">Langues</h3>
          <div className="langues-grid">
            {langues.map((langue, i) => (
              <div key={i} className="langue-card">
                <span className="langue-name">{langue.name}</span>
                <span className="langue-level">{langue.niveau}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;