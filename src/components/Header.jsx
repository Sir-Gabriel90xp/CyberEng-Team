import React, { useEffect, useRef, useState } from "react";
import Brand from "./Brand.jsx";
import Icon from "./Icon.jsx";
import { navigation } from "../data/config.js";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const toggle = useRef(null);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    navigation.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = matchMedia("(min-width: 1080px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onEscape);
      media.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="main-navigation"
          className={`navigation ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="button button--dark nav-cta"
            href="#contacto"
            onClick={() => setOpen(false)}
          >
            Solicita tu propuesta <Icon name="arrow" size={18} />
          </a>
        </nav>
      </div>
      {open && (
        <button
          className="menu-backdrop"
          tabIndex={-1}
          aria-label="Cerrar navegación"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
