import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  let siteUrl = "";
  try {
    const url = new URL(env.VITE_SITE_URL);
    if (url.protocol === "https:") siteUrl = url.href;
  } catch {
    /* Dominio pendiente. */
  }
  return {
    base: "./",
    plugins: [
      {
        name: "cybereng-canonical",
        transformIndexHtml: () =>
          siteUrl
            ? [
                {
                  tag: "link",
                  attrs: { rel: "canonical", href: siteUrl },
                  injectTo: "head",
                },
                {
                  tag: "meta",
                  attrs: { property: "og:url", content: siteUrl },
                  injectTo: "head",
                },
              ]
            : [],
      },
    ],
    server: { host: "0.0.0.0", port: 5173, allowedHosts: ["terminal.local"] },
    preview: { host: "0.0.0.0" },
  };
});
