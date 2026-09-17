import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import Icon from "../components/Icon.jsx";
import { services } from "../data/content.js";
export default function Services({ selectService }) {
  return (
    <section id="servicios" className="section services-section">
      <div className="container">
        <SectionHeading
          eyebrow="LO QUE HACEMOS"
          title="Nuestros"
          accent="servicios."
          description="Soluciones creativas y efectivas para llevar tu marca al siguiente nivel."
        >
          <span className="heading-note">
            Creatividad con propósito <Icon name="arrow" size={28} />
          </span>
        </SectionHeading>
        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className={`service-card tone-${service.tone}`}
              key={service.id}
              data-reveal
              style={{ "--delay": `${(index % 3) * 65}ms` }}
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <Icon name={service.icon} size={29} />
                </span>
                <span className="card-number">/{service.number}</span>
              </div>
              <span className="service-label">{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href="#contacto"
                className="service-link"
                onClick={() => selectService(service.id)}
              >
                <span>{service.short}</span>
                <span className="circle-arrow">
                  <Icon name="arrow" size={18} />
                </span>
              </a>
            </article>
          ))}
        </div>
        <p className="services-footnote">
          <Icon name="compass" size={18} /> Para emprendedores, restaurantes,
          hoteles, villas, inmobiliarias y negocios con ganas de crecer.
        </p>
      </div>
    </section>
  );
}
