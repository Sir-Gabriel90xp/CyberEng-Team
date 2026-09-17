import React, { useRef, useState } from "react";
import Icon from "../components/Icon.jsx";
import { CONTACT_ENDPOINT, hasWhatsApp, whatsappUrl } from "../data/config.js";
import { services } from "../data/content.js";

const emptyForm = {
  name: "",
  business: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};
export default function Contact({ service, setService, notify }) {
  const [fields, setFields] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");
  const [summary, setSummary] = useState("");
  const feedback = useRef(null);
  const hasEndpoint = /^https:\/\//.test(CONTACT_ENDPOINT);
  function update(event) {
    setFields((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    setErrors((previous) => ({ ...previous, [event.target.name]: undefined }));
    if (state !== "sending") {
      setState("idle");
      setSummary("");
    }
  }
  function validate() {
    const next = {};
    if (fields.name.trim().length < 2)
      next.name = "Escribe tu nombre (al menos 2 caracteres).";
    if (fields.business.trim().length < 2)
      next.business = "Escribe el nombre de tu negocio.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      next.email = "Escribe un correo electrónico válido.";
    if (
      fields.phone.trim() &&
      (fields.phone.replace(/\D/g, "").length < 8 ||
        fields.phone.replace(/\D/g, "").length > 15 ||
        /[^\d\s+().-]/.test(fields.phone))
    )
      next.phone = "Escribe un teléfono válido (entre 8 y 15 dígitos).";
    if (!service) next.service = "Selecciona un servicio.";
    if (fields.message.trim().length < 10)
      next.message = "Cuéntanos un poco más (al menos 10 caracteres).";
    return next;
  }
  async function submit(event) {
    event.preventDefault();
    if (state === "sending" || fields.website) return;
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      document.getElementById(`contact-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }
    const payload = {
      name: fields.name.trim(),
      business: fields.business.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      service: services.find((s) => s.id === service)?.title || "Otro",
      message: fields.message.trim(),
    };
    const text = `Hola CyberEng Team, me gustaría solicitar una propuesta.\n\nNombre: ${payload.name}\nNegocio: ${payload.business}\nCorreo: ${payload.email}\nTeléfono: ${payload.phone || "No indicado"}\nServicio: ${payload.service}\n\n${payload.message}`;
    download(text);
    if (hasWhatsApp && !hasEndpoint) {
      window.location.href = whatsappUrl(text);
      return;
    }
    if (!hasEndpoint) {
      setSummary(text);
      setState("prepared");
      requestAnimationFrame(() => feedback.current?.focus());
      return;
    }
    setState("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("request_failed");
      setState("success");
      setFields(emptyForm);
      setService("");
      requestAnimationFrame(() => feedback.current?.focus());
    } catch {
      setState("error");
      requestAnimationFrame(() => feedback.current?.focus());
    } finally {
      clearTimeout(timeout);
    }
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      notify("Solicitud copiada. Puedes pegarla en tu correo o mensaje.");
    } catch {
      notify("No pudimos copiarla. Usa «Descargar solicitud» para guardarla.");
    }
  }
  function download(content = summary) {
    const url = URL.createObjectURL(
      new Blob([content], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "Solicitud-CyberEng-Team.txt";
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const input = (
    name,
    label,
    type = "text",
    placeholder = "",
    autoComplete = "",
  ) => (
    <div className="field">
      <label htmlFor={`contact-${name}`}>
        {label}
        {name !== "phone" && <span> *</span>}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        value={fields[name]}
        onChange={update}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={name !== "phone"}
        maxLength={name === "phone" ? 30 : 160}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `error-${name}` : undefined}
      />
      {errors[name] && (
        <span className="field-error" id={`error-${name}`}>
          {errors[name]}
        </span>
      )}
    </div>
  );
  return (
    <section id="contacto" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">EL PRÓXIMO PASO ES CONTIGO</p>
          <h2>
            Tu próxima gran idea <span>empieza aquí.</span>
          </h2>
          <p>
            Cuéntanos sobre tu negocio y lo que quieres lograr. Demos juntos el
            primer paso.
          </p>
          <div className="contact-details">
            <div>
              <span>
                <Icon name="pin" />
              </span>
              <p>
                <strong>Con raíces en Bayaguana</strong>
                <small>Monte Plata, República Dominicana</small>
              </p>
            </div>
            <div>
              <span>
                <Icon name="globe" />
              </span>
              <p>
                <strong>Conectados con tu negocio</strong>
                <small>Proyectos locales y a distancia</small>
              </p>
            </div>
          </div>
          <a
            className="text-link"
            href={whatsappUrl()}
            target={hasWhatsApp ? "_blank" : undefined}
            rel={hasWhatsApp ? "noopener noreferrer" : undefined}
            onClick={
              !hasWhatsApp
                ? () => document.getElementById("contact-name")?.focus()
                : undefined
            }
          >
            <Icon name="whatsapp" size={20} />
            {hasWhatsApp
              ? "Prefiero hablar por WhatsApp"
              : "Quiero preparar mi propuesta"}
            <Icon name="arrow" size={18} />
          </a>
          <div className="contact-signature">
            De una buena conversación,
            <br />
            <strong>nacen grandes proyectos.</strong>
          </div>
        </div>
        <form
          className="contact-form"
          noValidate
          onSubmit={submit}
          aria-label="Solicitud de propuesta"
        >
          <div className="form-heading">
            <h3>Hablemos de tu proyecto</h3>
            <p>Los campos con * son obligatorios.</p>
          </div>
          <div className="form-row">
            {input("name", "Nombre", "text", "Tu nombre", "name")}
            {input(
              "business",
              "Negocio",
              "text",
              "¿Cómo se llama tu marca?",
              "organization",
            )}
          </div>
          <div className="form-row">
            {input(
              "email",
              "Correo electrónico",
              "email",
              "hola@tunegocio.com",
              "email",
            )}
            {input(
              "phone",
              "Teléfono (opcional)",
              "tel",
              "+1 809 000 0000",
              "tel",
            )}
          </div>
          <div className="field">
            <label htmlFor="contact-service">
              Servicio de interés <span>*</span>
            </label>
            <select
              id="contact-service"
              value={service}
              onChange={(event) => {
                setService(event.target.value);
                setErrors((old) => ({ ...old, service: undefined }));
              }}
              required
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? "error-service" : undefined}
            >
              <option value="">Selecciona un servicio</option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
              <option value="otro">Otro / necesito orientación</option>
            </select>
            {errors.service && (
              <span className="field-error" id="error-service">
                {errors.service}
              </span>
            )}
          </div>
          <div className="field">
            <label htmlFor="contact-message">
              Mensaje <span>*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={fields.message}
              onChange={update}
              required
              minLength={10}
              maxLength={3000}
              placeholder="Cuéntanos qué tienes en mente y cómo podemos ayudarte…"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "error-message" : undefined}
            />
            {errors.message && (
              <span className="field-error" id="error-message">
                {errors.message}
              </span>
            )}
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Sitio adicional</label>
            <input
              id="website"
              name="website"
              value={fields.website}
              onChange={update}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button
            className="button button--dark submit-button"
            type="submit"
            disabled={state === "sending"}
          >
            {state === "sending"
              ? "Enviando…"
              : hasEndpoint
                ? "Enviar solicitud"
                : "Preparar solicitud"}
            <Icon
              name={state === "sending" ? "loader" : "arrow"}
              size={20}
              className={state === "sending" ? "spin" : ""}
            />
          </button>
          <p className="form-note">
            {hasEndpoint
              ? "Usaremos tus datos únicamente para responder a esta consulta."
              : hasWhatsApp
                ? "Prepara tu consulta y envíala por WhatsApp en el siguiente paso."
                : "El envío en línea aún no está habilitado. Puedes preparar y descargar tu consulta; tus datos no se envían ni se guardan."}
          </p>
          {state === "success" && (
            <div
              className="form-feedback success"
              role="status"
              tabIndex={-1}
              ref={feedback}
            >
              <Icon name="check" />
              <div>
                <strong>¡Gracias! Hemos recibido tu solicitud.</strong>
                <p>
                  Nos pondremos en contacto contigo para conversar sobre tu
                  proyecto.
                </p>
              </div>
            </div>
          )}
          {state === "error" && (
            <div
              className="form-feedback error"
              role="alert"
              tabIndex={-1}
              ref={feedback}
            >
              <div>
                <strong>No pudimos enviar tu solicitud.</strong>
                <p>
                  Tus datos siguen en el formulario. Revisa tu conexión y vuelve
                  a intentarlo.
                </p>
              </div>
            </div>
          )}
          {state === "prepared" && (
            <div
              className="form-feedback prepared"
              role="status"
              tabIndex={-1}
              ref={feedback}
            >
              <div>
                <strong>
                  Tu solicitud está lista. Aún no ha sido enviada.
                </strong>
                <p>
                  {hasWhatsApp
                    ? "Abre WhatsApp y confirma el envío para hacérnosla llegar."
                    : "Descárgala o cópiala para conservar los detalles de tu proyecto."}
                </p>
                <div className="prepared-actions">
                  {hasWhatsApp && (
                    <a
                      className="text-link"
                      href={whatsappUrl(summary)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir WhatsApp <Icon name="arrow" size={16} />
                    </a>
                  )}
                  <button type="button" onClick={copy}>
                    <Icon name="copy" size={16} /> Copiar
                  </button>
                  <button type="button" onClick={download}>
                    <Icon name="download" size={16} /> Descargar solicitud
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
