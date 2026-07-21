// pages/About.js
import React from "react";
import { HiOutlineAcademicCap, HiOutlineLocationMarker, HiOutlineMail, HiOutlineCalendar } from "react-icons/hi";
import "./pages.css";

const identite = [
  { label: "Nom", value: "NJATOMIARINTSOA William" },
  { label: "Poste", value: "Ingénieur Informaticien — Full-Stack" },
  { label: "Expérience", value: "3 ans" },
  { label: "Localisation", value: "Antananarivo, Madagascar" },
  { label: "Email", value: "njatomiarintsoawilliam@gmail.com" },
  { label: "Formation", value: "Ingénieur (Master) — ENI Madagascar" },
];

const formations = [
  {
    annee: "2023 - 2024",
    diplome: "Master Professionnel & Titre d'Ingénieur",
    ecole: "École Nationale d'Informatique, Fianarantsoa",
  },
  {
    annee: "2022 - 2023",
    diplome: "Licence Professionnelle en Informatique",
    ecole: "École Nationale d'Informatique, Fianarantsoa",
  },
  {
    annee: "2018 - 2019",
    diplome: "Baccalauréat, Série C — Mention Bien",
    ecole: "Lycée",
  },
  {
    annee: "2015 - 2016",
    diplome: "Brevet d'Études du Premier Cycle (BEPC)",
    ecole: "",
  },
];

const experiences = [
  {
    periode: "Janvier – Octobre 2024",
    poste: "Développeur",
    entreprise: "FISACOMPTA",
    description:
      "Participation au développement de l'application FISACOMPTA, une solution de gestion de comptabilité, fiscalité et paie à Madagascar, conforme au PCG 2005.",
    technologies: ["Python/Django", "React JS", "PostgreSQL"],
  },
  {
    periode: "2024 - Maintenant",
    poste: "Webmaster",
    entreprise: "I-OASIS / IFFEN",
    description:
      "En charge du développement et de la maintenance de plusieurs sites web et applications de l'entreprise (Iffen et I-Oasis ayant le même fondateur).",
    technologies: ["WordPress", "AngularJS", "Next.js", "Django", "Laravel", "Node.js", "PostgreSQL", "MySQL"],
  },
];

function About() {
  return (
    <section id="about" className="page about">
      <div className="container about__inner">
        <div className="section-head">
          <span className="eyebrow">Pièce n°1 — Profil</span>
          <h2>Un ingénieur formé à l'ENI, façonné par des projets réels</h2>
          <p>
            De la salle de classe de l'École Nationale d'Informatique de
            Madagascar aux applications utilisées chaque jour par de vraies
            entreprises.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              Diplômé de l'<strong>École Nationale d'Informatique de
              Madagascar (ENI)</strong> après 5 années d'études sanctionnées
              par un diplôme d'ingénieur, je conçois et développe des
              applications web depuis 3 ans, avec une préférence marquée pour
              les stacks <strong>Django, Java</strong> et <strong>Node.js</strong>{" "}
              côté serveur et <strong>React</strong> côté client.
            </p>
            <p>
              Selon les besoins de chaque projet, j'interviens aussi sur{" "}
              <strong>Next.js</strong> pour des applications métier
              (fiches de positionnement, génération de formulaires CERFA),
              sur <strong>Angular</strong> pour des interfaces plus
              structurées, et sur <strong>WordPress</strong> pour des sites
              vitrines rapides à livrer.
            </p>

            <div className="about__icons">
              <div>
                <HiOutlineAcademicCap size={20} />
                <span>ENI Madagascar — Diplôme d'ingénieur</span>
              </div>
              <div>
                <HiOutlineLocationMarker size={20} />
                <span>Antananarivo, Madagascar</span>
              </div>
              <div>
                <HiOutlineMail size={20} />
                <span>njatomiarintsoawilliam@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="id-card">
            <div className="id-card__head">
              <span>Fiche d'identité</span>
              <span className="id-card__ref">N° 2026-WN</span>
            </div>
            <dl className="id-card__body">
              {identite.map((item) => (
                <div key={item.label} className="id-card__row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="id-card__foot">Document généré — portfolio personnel</div>
          </div>
        </div>

        {/* Formation */}
        <div className="about__section">
          <h3 className="about__section-title">
            <HiOutlineAcademicCap size={24} />
            Formation
          </h3>
          <div className="about__timeline">
            {formations.map((f, i) => (
              <div key={i} className="about__timeline-item">
                <span className="about__timeline-year">{f.annee}</span>
                <div className="about__timeline-content">
                  <strong>{f.diplome}</strong>
                  {f.ecole && <span>{f.ecole}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expérience */}
        <div className="about__section">
          <h3 className="about__section-title">
            <HiOutlineCalendar size={24} />
            Expérience professionnelle
          </h3>
          <div className="about__timeline">
            {experiences.map((e, i) => (
              <div key={i} className="about__timeline-item">
                <span className="about__timeline-year">{e.periode}</span>
                <div className="about__timeline-content">
                  <strong>{e.poste}</strong>
                  <span className="about__timeline-company">{e.entreprise}</span>
                  <p>{e.description}</p>
                  <div className="about__timeline-tech">
                    {e.technologies.map((t, j) => (
                      <span key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;