import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Icon from "./components/Icon.jsx";
import WhatsAppLogo from "./components/WhatsAppLogo.jsx";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import About from "./sections/About.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import FinalCta from "./sections/FinalCta.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { useProposalTool } from "./hooks/useProposalTool.js";
import { hasWhatsApp, whatsappUrl, SITE_URL } from "./data/config.js";
export default function App() {
  const [service, setService] = useState("");
  const [toast, setToast] = useState("");
  const timer = useRef(null);
  useReveal();
  useProposalTool(setService);
  function notify(message) {
    setToast(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 5000);
  }
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!/^https?:\/\//.test(SITE_URL)) return;
    const url = SITE_URL.replace(/\/$/, "") + "/";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = url;
    let og = document.querySelector('meta[property="og:url"]');
    if (!og) {
      og = document.createElement("meta");
      og.setAttribute("property", "og:url");
      document.head.append(og);
    }
    og.content = url;
  }, []);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="main-content">
        <Hero notify={notify} />
        <Services selectService={setService} />
        <About />
        <Portfolio />
        <Testimonials />
        <FinalCta selectService={setService} />
        <Contact service={service} setService={setService} notify={notify} />
      </main>
      <Footer notify={notify} />
      <a
        className="whatsapp-float"
        href={whatsappUrl()}
        target={hasWhatsApp ? "_blank" : undefined}
        rel={hasWhatsApp ? "noopener noreferrer" : undefined}
        aria-label={
          hasWhatsApp
            ? "Hablar con CyberEng Team por WhatsApp"
            : "Contactar con CyberEng Team"
        }
      >
        <WhatsAppLogo size={27} />
        <span>{hasWhatsApp ? "Hablemos" : "¿Una idea?"}</span>
      </a>
      <div
        className={`toast ${toast ? "is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast && (
          <>
            <Icon name="check" size={20} />
            <span>{toast}</span>
            <button aria-label="Cerrar aviso" onClick={() => setToast("")}>
              <Icon name="close" size={18} />
            </button>
          </>
        )}
      </div>
    </>
  );
}
