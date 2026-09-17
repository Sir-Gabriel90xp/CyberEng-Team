import React from "react";
export default function ProjectVisual({ project, className = "" }) {
  if (project.image)
    return (
      <img
        className={`project-picture ${className}`}
        src={project.image}
        alt={project.title}
        loading="lazy"
        width="640"
        height="500"
      />
    );
  // Ventana sobre la referencia original; no transforma ni recrea el arte del usuario.
  const [x, y, w, h] = project.crop;
  return (
    <div
      className={`reference-window ${className}`}
      role="img"
      aria-label={`Concepto visual: ${project.title}`}
    >
      <img
        src="images/referencia-cybereng.jpg"
        alt=""
        loading="lazy"
        width="900"
        height="1600"
        style={{
          width: `${(900 / w) * 100}%`,
          left: `${(-x / w) * 100}%`,
          top: `${(-y / h) * 100}%`,
        }}
      />
    </div>
  );
}
