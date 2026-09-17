import React from "react";
import Icon from "../components/Icon.jsx";
import { benefits } from "../data/content.js";
export default function About() {
  return (
    <>
      <section className="why-section">
        <div className="container why-grid">
          <div className="why-heading" data-reveal>
            <p className="eyebrow">MÁS QUE UNA AGENCIA</p>
            <h2>
              ¿Por qué elegir a <span>CyberEng Team?</span>
            </h2>
            <p>Somos un aliado estratégico para el crecimiento de tu marca.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map((b) => (
              <article key={b.title} className="benefit" data-reveal>
                <span className="benefit-icon">
                  <Icon name={b.icon} size={24} />
                </span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="nosotros"
        className="roots-section"
        aria-labelledby="roots-title"
      >
        <img
          className="roots-image"
          src="images/raices-bayaguana.webp"
          alt="Paisaje conceptual inspirado en los ríos y la vegetación tropical de Bayaguana"
          width="2172"
          height="724"
          loading="lazy"
        />
        <div className="roots-overlay" />
        <div className="container roots-inner">
          <div className="roots-copy" data-reveal>
            <p className="eyebrow">NUESTRAS RAÍCES. TU CRECIMIENTO.</p>
            <h2 id="roots-title">
              Marketing con
              <br />
              <span>esencia dominicana.</span>
            </h2>
            <p>
              Desde Bayaguana, República Dominicana, ayudamos a emprendimientos,
              marcas y negocios a destacar mediante una imagen fresca, tropical,
              moderna y profesional.
            </p>
            <a className="button button--lime" href="#contacto">
              Conozcámonos <Icon name="arrow" size={20} />
            </a>
          </div>
          <div className="roots-statement" data-reveal>
            <Icon name="leaf" size={34} />
            <p>
              Gente de aquí,
              <br />
              <em>ideas para el mundo.</em>
            </p>
            <span>BAYAGUANA · MONTE PLATA</span>
          </div>
        </div>
      </section>
    </>
  );
}
