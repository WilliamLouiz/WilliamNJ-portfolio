// pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";
import "./pages.css";

function Home() {
  return (
    <section id="home" className="page home">
      <div className="container home__inner">
        <div className="home__content">
          <span className="eyebrow">Dossier technique — Profil ingénieur</span>

          <h1 className="home__name">
            NJATOMIARINTSOA
            <br />
            William
          </h1>

          <p className="home__role">Ingénieur Informaticien — Développeur Full-Stack</p>

          <p className="home__tagline">
            3 ans d'expérience à concevoir des applications métier de bout en
            bout : du site de formation iffen.fr à la plateforme de
            streaming vidéo, en passant par la gestion fiscale et les sites
            institutionnels. Django, Node.js, Java et React au quotidien ; Next.js,
            Angular et WordPress selon les besoins du projet.
          </p>

          <div className="home__actions">
            <a href="/cv.pdf" download className="btn btn--primary">
              <HiOutlineDownload size={18} />
              Télécharger mon CV
            </a>
            <Link to="/contact" className="btn btn--ghost">
              <HiOutlineMail size={18} />
              Me contacter
            </Link>
          </div>

          <div className="home__meta">
            <div>
              <span className="home__meta-num">3</span>
              <span className="home__meta-label">ans d'expérience</span>
            </div>
            <div>
              <span className="home__meta-num">6+</span>
              <span className="home__meta-label">stacks maîtrisées</span>
            </div>
            <div>
              <span className="home__meta-num">ENI</span>
              <span className="home__meta-label">Madagascar, diplôme d'ingénieur</span>
            </div>
          </div>
        </div>

        <div className="home__visual">
          <div className="stamp" aria-hidden="true">
            <svg viewBox="0 0 140 140">
              <path
                id="stampCircle"
                fill="none"
                d="M 70,70 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
              />
              <text>
                <textPath href="#stampCircle" startOffset="2%">
                  INGÉNIEUR ENI • MADAGASCAR •
                </textPath>
              </text>
            </svg>
            <div className="stamp__center">
              <span>VALIDÉ</span>
              <em>Full-Stack</em>
            </div>
          </div>

          <div className="code-window">
            <div className="code-window__bar">
              <div className="code-window__dots">
                <span />
                <span />
                <span />
              </div>
              <span className="code-window__title">profil.config.js</span>
            </div>
            <pre className="code-window__body">
{`const ingenieur = {
  nom: "NJATOMIARINTSOA William",
  poste: "Développeur Full-Stack",
  localisation: "Antananarivo, MG",

  frontend: ["React", "Next.js", "Angular"],
  backend: ["Django", "Node.js", "Express", "Java"],
  cms: ["WordPress"],

  formation: "Ingénieur — ENI Madagascar",
  disponible: true,
};

export default ingenieur;`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;