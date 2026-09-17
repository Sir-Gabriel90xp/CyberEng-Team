import { useEffect } from "react";
import { flushSync } from "react-dom";
import { services } from "../data/content.js";

// Mejora progresiva: un agente puede preparar el mismo selector que una persona.
// No envía formularios, no transmite datos y no abre servicios externos.
export function useProposalTool(setService) {
  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    try {
      Promise.resolve(
        context.registerTool(
          {
            name: "start_cybereng_proposal",
            title: "Preparar una propuesta de CyberEng",
            description:
              "Selecciona un servicio en el formulario visible y navega a contacto. No envía la solicitud ni datos personales.",
            inputSchema: {
              type: "object",
              properties: {
                service: {
                  type: "string",
                  enum: [...services.map((s) => s.id), "otro"],
                },
              },
              required: ["service"],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false, untrustedContentHint: false },
            execute(input) {
              if (
                !input ||
                typeof input !== "object" ||
                Object.keys(input).length !== 1 ||
                ![...services.map((s) => s.id), "otro"].includes(input.service)
              )
                throw new Error(
                  "Selecciona un identificador de servicio válido.",
                );
              flushSync(() => setService(input.service));
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "instant", block: "start" });
              document
                .getElementById("contact-name")
                ?.focus({ preventScroll: true });
              return {
                service: input.service,
                status: "prepared",
                sent: false,
              };
            },
          },
          { signal: lifecycle.signal },
        ),
      ).catch(() => {});
    } catch {
      /* La navegación normal funciona aunque esta API no esté disponible. */
    }
    return () => lifecycle.abort();
  }, [setService]);
}
