import React from "react";
import Icon from "../components/Icon.jsx";
export default function Hero() {
  return (
    <>
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-photo">
          <img
            src="images/hero-tropical.webp"
            alt="Composición de naturaleza tropical dominicana, un río, una laptop y una cámara"
            width="1672"
            height="941"
            fetchPriority="high"
          />
          <div className="hero-photo-shade" />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="location-pill">
              <span
                className="dominican-flag"
                role="img"
                aria-label="República Dominicana"
              />{" "}
              De Bayaguana, para el mundo
            </div>
            <p className="eyebrow">IDEAS LOCALES. GRANDES RESULTADOS.</p>
            <h1 id="hero-title">
              Impulsamos tu negocio con <span>marketing creativo</span> y
              resultados reales<span className="title-dot">.</span>
            </h1>
            <p className="hero-description">
              Ayudamos a marcas, emprendimientos y negocios a crecer en
              Bayaguana, República Dominicana, y más allá, con estrategias
              digitales que conectan, inspiran y generan resultados.
            </p>
            <div className="button-row">
              <a className="button button--orange" href="#contacto">
                Solicita tu propuesta <Icon name="arrow" size={20} />
              </a>
              <a className="button button--outline" href="#servicios">
                Ver servicios <Icon name="down" size={18} />
              </a>
            </div>
            <div className="hero-benefits">
              <span>
                <Icon name="chart" />
                <small>
                  Más visibilidad
                  <br />
                  <strong>para tu marca</strong>
                </small>
              </span>
              <span>
                <Icon name="heart" />
                <small>
                  Más clientes
                  <br />
                  <strong>para tu negocio</strong>
                </small>
              </span>
              <span>
                <Icon name="sparkles" />
                <small>
                  Más ideas,
                  <br />
                  <strong>más oportunidades</strong>
                </small>
              </span>
            </div>
          </div>
          <div className="hero-note">
            <Icon name="sparkles" size={18} />
            <span>
              Aquí también nacen
              <br />
              <strong>grandes marcas.</strong>
            </span>
          </div>
          <div className="image-caption">
            <Icon name="pin" size={16} />
            <span>
              Inspirados en nuestra tierra.
              <br />
              <strong>Bayaguana, República Dominicana</strong>
            </span>
          </div>
        </div>
        <a
          href="#servicios"
          className="hero-scroll"
          aria-label="Explorar nuestros servicios"
        >
          <Icon name="down" size={18} />
        </a>
      </section>
      <div className="brand-ribbon">
        <div className="container">
          <span>ESTRATEGIA</span>
          <Icon name="sparkles" size={18} />
          <span>DISEÑO</span>
          <Icon name="sparkles" size={18} />
          <span>TECNOLOGÍA</span>
          <Icon name="sparkles" size={18} />
          <span>ESENCIA DOMINICANA</span>
          <Icon name="sparkles" size={18} />
          <span>CRECIMIENTO</span>
        </div>
      </div>
    </>
  );
}
