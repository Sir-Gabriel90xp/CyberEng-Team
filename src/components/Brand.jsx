import React from "react";
export default function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand--light" : ""}`}
      href="#inicio"
      aria-label="CyberEng Team, volver al inicio"
    >
      <img
        className="brand-logo"
        src={light ? "images/logo-bueno.png" : "images/logo-ecologico.png"}
        alt="CyberEng Team, especialistas en marketing"
        width="220"
        height="64"
      />
    </a>
  );
}
