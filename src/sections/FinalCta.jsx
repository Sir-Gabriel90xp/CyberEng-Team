import React from "react";
import Icon from "../components/Icon.jsx";
export default function FinalCta({ selectService }) {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner" data-reveal>
        <div>
          <p className="eyebrow">GRANDES IDEAS NACEN AQUÍ.</p>
          <h2>
            Haz crecer tu marca con una{" "}
            <span>presencia visual impactante.</span>
          </h2>
          <p>
            Es momento de llevar tu negocio al siguiente nivel. Estamos listos
            para ayudarte.
          </p>
          <div className="button-row">
            <a className="button button--dark" href="#contacto">
              Contáctanos <Icon name="arrow" size={20} />
            </a>
            <a
              className="button button--outline"
              href="#contacto"
              onClick={() => selectService("otro")}
            >
              <Icon name="calendar" size={18} /> Agenda una consulta
            </a>
          </div>
        </div>
        <div className="cta-seal">
          <Icon name="sparkles" size={38} />
          <span>
            Hecho con ideas.
            <br />
            Hecho con raíces.
            <br />
            <strong>Hecho para crecer.</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
