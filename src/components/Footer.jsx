import React from "react";
import Brand from "./Brand.jsx";
import Icon from "./Icon.jsx";
import {
  navigation,
} from "../data/config.js";
export default function Footer({ notify }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Brand light />
          <p>
            Marketing con raíces,
            <br />
            para un futuro más grande.
          </p>
        </div>
        <div className="footer-location">
          <span className="footer-label">DE AQUÍ, PARA EL MUNDO</span>
          <p>
            Bayaguana, Monte Plata
            <br />
            República Dominicana
          </p>
          <span
            className="dominican-flag"
            role="img"
            aria-label="Bandera dominicana"
          />
        </div>
        <div>
          <span className="footer-label">EXPLORA</span>
          <nav className="footer-nav" aria-label="Navegación del pie">
            {navigation
              .filter(([label]) => label !== "Testimonios")
              .map(([label, id]) => (
                <a href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
          </nav>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CyberEng Team</span>
        <span>
          <Icon name="heart" size={16} /> Hecho en Bayaguana para grandes ideas.
        </span>
        <a href="#inicio" aria-label="Volver arriba">
          Volver arriba <Icon name="up" size={16} />
        </a>
      </div>
    </footer>
  );
}
