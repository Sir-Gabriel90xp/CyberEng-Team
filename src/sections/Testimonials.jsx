import React from "react";
import Icon from "../components/Icon.jsx";
import { testimonials } from "../data/content.js";
export default function Testimonials() {
  return (
    <section id="testimonios" className="section testimonial-section">
      <div className="container">
        <div className="testimonial-heading" data-reveal>
          <p className="eyebrow">CONEXIONES QUE IMPORTAN</p>
          <h2>
            Negocios que crecen <span>con nosotros.</span>
          </h2>
          <p>
            La confianza de nuestros clientes es nuestra mejor carta de
            presentación.
          </p>
          <span className="sample-badge">Testimonios de ejemplo</span>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure className="testimonial-card" key={t.name} data-reveal>
              <div className="testimonial-top">
                <div
                  className="stars"
                  aria-label="Valoración ilustrativa: 5 de 5 estrellas"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Icon name="star" size={16} key={n} />
                  ))}
                </div>
                <Icon name="quote" size={30} />
              </div>
              <blockquote>“{t.text}”</blockquote>
              <figcaption>
                <span className={`avatar tone-${t.tone}`} aria-hidden="true">
                  {t.initials}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="sample-note">
          Contenido ilustrativo. Sustituir por opiniones reales y autorizadas
          antes de presentarlas como experiencias de clientes.
        </p>
      </div>
    </section>
  );
}
