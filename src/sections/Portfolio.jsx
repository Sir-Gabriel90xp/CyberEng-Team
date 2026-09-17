import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import Icon from "../components/Icon.jsx";
import ProjectVisual from "../components/ProjectVisual.jsx";
import { projects, filters } from "../data/content.js";
export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const visible = projects.filter(
    (p) => filter === "Todos" || p.category === filter,
  );
  useEffect(() => {
    if (selected && dialog.current && !dialog.current.open)
      dialog.current.showModal();
  }, [selected]);
  function close() {
    dialog.current?.close();
    setSelected(null);
    trigger.current?.focus();
  }
  return (
    <section id="portafolio" className="section portfolio-section">
      <div className="container">
        <SectionHeading
          eyebrow="CREATIVIDAD QUE COBRA VIDA"
          title="Algunos de"
          accent="nuestros proyectos."
          description="Ideas con identidad. Diseños que invitan a descubrir más."
        >
          <a className="text-link" href="#contacto">
            Tu marca podría estar aquí <Icon name="arrow" size={18} />
          </a>
        </SectionHeading>
        <div className="portfolio-toolbar">
          <div
            className="portfolio-filters"
            role="group"
            aria-label="Filtrar proyectos por categoría"
          >
            {filters.map((item) => (
              <button
                key={item}
                className={filter === item ? "is-active" : ""}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >
                {item}
              </button>
            ))}
          </div>
          <span className="portfolio-count" role="status">
            {visible.length} {visible.length === 1 ? "proyecto" : "proyectos"}
          </span>
        </div>
        <div className="portfolio-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.id}>
              <button
                className="project-trigger"
                aria-label={`Ver proyecto ${project.title}`}
                onClick={(event) => {
                  trigger.current = event.currentTarget;
                  setSelected(project);
                }}
              >
                <div className="project-image">
                  <ProjectVisual project={project} />
                  <span className="project-open">
                    <Icon name="arrow" size={24} />
                  </span>
                  <span className="project-demo">
                    {project.demo ? "Concepto" : "Proyecto"}
                  </span>
                </div>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <Icon name="arrow" size={18} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </button>
            </article>
          ))}
        </div>
        <p className="sample-note">
          Portafolio de muestra basado en la referencia visual. Estos conceptos
          no representan clientes o resultados verificados.
        </p>
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === dialog.current) {
            const rect = dialog.current.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              close();
          }
        }}
      >
        {selected && (
          <>
            <button
              className="dialog-close"
              aria-label="Cerrar proyecto"
              autoFocus
              onClick={close}
            >
              <Icon name="close" />
            </button>
            <div className="dialog-visual">
              <ProjectVisual project={selected} />
            </div>
            <div className="dialog-body">
              <p className="eyebrow">
                {selected.category} ·{" "}
                {selected.demo ? "CONCEPTO ILUSTRATIVO" : "PROYECTO"}
              </p>
              <h2 id="project-dialog-title">{selected.title}</h2>
              <p>{selected.description}</p>
              <ul>
                {selected.deliverables.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                className="button button--dark"
                href="#contacto"
                onClick={close}
              >
                Quiero algo así <Icon name="arrow" size={18} />
              </a>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
