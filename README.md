# CyberEng Team — Landing Page

Sitio en español construido con **React, Vite, CSS y Lucide Icons**, inspirado en Bayaguana y la naturaleza dominicana. Incluye código editable, imágenes locales y la fuente Manrope alojada dentro del proyecto.

## Inicio rápido

Necesitas Node.js 22.12 o posterior (recomendado: Node.js 24 LTS) y npm.

```bash
cd cybereng-team
npm install
npm run dev
```

Abre la dirección que aparece en la terminal. Para producción:

```bash
npm run build
npm run preview
```

`dist/` contiene el sitio compilado. Sube **su contenido** al alojamiento; no abras `index.html` con doble clic. `npm run preview` es para revisión local, no es un servidor de producción.

## Qué incluye

- Menú fijo, navegación por secciones y menú móvil con cierre mediante Escape.
- Seis servicios, identidad local, portafolio filtrable y detalles en una ventana accesible.
- Testimonios de muestra identificados, llamadas a la acción y formulario validado.
- WhatsApp configurable, redes sociales, microinteracciones y movimiento reducido.
- Imágenes WebP, carga diferida, fuentes locales y metadatos SEO.
- Todos los archivos necesarios para editar, compilar y publicar; sin `node_modules`.

## Configuración antes del lanzamiento

Duplica `.env.example` como `.env` y completa los valores disponibles. Reinicia `npm run dev` después de modificarlo; para publicar, ejecuta nuevamente `npm run build`.

| Variable                | Qué debes colocar                                                         |
| ----------------------- | ------------------------------------------------------------------------- |
| `VITE_WHATSAPP_NUMBER`  | Número internacional completo, solo dígitos, sin `+`, espacios o guiones. |
| `VITE_CONTACT_ENDPOINT` | Dirección HTTPS de tu formulario Formspree o API.                         |
| `VITE_SITE_URL`         | URL pública final, incluyendo subcarpeta si usas GitHub Pages.            |
| `VITE_INSTAGRAM_URL`    | URL completa de tu perfil de Instagram.                                   |
| `VITE_FACEBOOK_URL`     | URL completa de tu página de Facebook.                                    |
| `VITE_TIKTOK_URL`       | URL completa de tu perfil de TikTok.                                      |
| `VITE_YOUTUBE_URL`      | URL completa de tu canal.                                                 |
| `VITE_LINKEDIN_URL`     | URL completa de tu perfil o empresa.                                      |

**Estos datos no fueron suministrados y se dejaron vacíos.** Las variables `VITE_` son públicas: no guardes contraseñas ni claves privadas en ellas.

También puedes editar las constantes en `src/data/config.js`. `WHATSAPP_NUMBER` está claramente identificada allí. El mensaje inicial es: «Hola CyberEng Team, estoy interesado/a en sus servicios de marketing.»

Si falta el número, el botón flotante conduce al contacto; no se abre un número inventado. Si falta una red social, su botón indica que el perfil estará disponible próximamente. Sustituye o elimina los perfiles que tu negocio no utilice.

## Formulario: funcionamiento y conexión

Valida nombre, negocio, correo, servicio y mensaje. El teléfono es opcional, pero se valida cuando se introduce. Tiene estados de envío, éxito, error, límite de espera y un campo señuelo antispam. No almacena datos personales en el navegador.

**Sin un destino configurado**, prepara un resumen que se puede copiar o descargar. Si configuraste WhatsApp, permite abrir la conversación con ese resumen. Indica claramente que la solicitud todavía no se ha enviado.

**Con un destino configurado**, realiza un `POST` con JSON y `Accept: application/json`. Solo muestra «¡Gracias! Hemos recibido tu solicitud.» cuando el servidor responde con HTTP 2xx. Si falla, conserva los campos para reintentar. El código está en `src/sections/Contact.jsx`.

### Formspree

1. Crea un formulario en tu cuenta y verifica su destinatario.
2. Copia su endpoint HTTPS a `VITE_CONTACT_ENDPOINT`.
3. Compila y publica de nuevo.
4. Envía una prueba y confirma su recepción en tu cuenta antes de anunciar la página.

No se creó una cuenta ni se enviaron datos a servicios externos durante la entrega. Consulta la [documentación oficial de Formspree](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax/).

### API propia, Supabase o EmailJS

Una API propia puede aceptar directamente este JSON:

```json
{
  "name": "Nombre",
  "business": "Negocio",
  "email": "correo@ejemplo.com",
  "phone": "",
  "service": "Creación de página web",
  "message": "Descripción del proyecto"
}
```

Debe validar de nuevo los campos, limitar abuso, admitir CORS desde tu dominio y responder con 2xx solo después de aceptar la solicitud. Usa una función de servidor para Supabase o un adaptador para EmailJS que reciba este esquema; configura su URL HTTPS en `VITE_CONTACT_ENDPOINT`. Las claves privadas permanecen en el servidor. No se incluyen integraciones activas con estos proveedores.

«Agenda una consulta» preselecciona orientación en el formulario. No confirma una cita ni crea eventos en un calendario.

## Textos y estructura

| Ubicación               | Contenido                                                           |
| ----------------------- | ------------------------------------------------------------------- |
| `src/data/config.js`    | WhatsApp, redes, navegación y URL pública.                          |
| `src/data/content.js`   | Servicios, beneficios, proyectos y testimonios.                     |
| `src/sections/`         | Hero, servicios, nosotros, portafolio, testimonios, CTA y contacto. |
| `src/components/`       | Marca, navegación, iconos, encabezados y pie.                       |
| `src/hooks/`            | Apariciones al desplazarse e integración progresiva con agentes.    |
| `src/styles/global.css` | Colores, tipografía, estilos y puntos de adaptación.                |
| `public/images/`        | Recursos visuales del sitio.                                        |
| `index.html`            | Idioma, título, descripción, Open Graph y favicon.                  |

Para cambiar el color principal, modifica las variables al inicio de `global.css`. Para cambiar la marca, edita `Brand.jsx` y `public/favicon.svg`.

## Agregar proyectos

Añade un objeto a `projects` en `src/data/content.js`, con un `id` único:

```js
{
  id: 6,
  title: 'Nombre del proyecto',
  category: 'Páginas web',
  description: 'Breve descripción del trabajo realizado.',
  image: 'images/mi-proyecto.webp',
  demo: false,
  deliverables: ['Diseño web', 'Versión móvil']
}
```

Las categorías deben coincidir con `filters`: Logos, Páginas web, Flyers o Redes sociales. Para crear otra, añádela a esa lista.

Los cinco proyectos iniciales y los tres testimonios proceden del ejemplo proporcionado. **Son muestras, no clientes ni resultados verificados.** Reemplázalos por trabajos y opiniones reales con autorización. Tras reemplazar todos, actualiza las notas de muestra de `Portfolio.jsx` y `Testimonials.jsx`.

## Reemplazar imágenes

Guarda imágenes WebP en `public/images/` y actualiza la ruta y el texto alternativo en el componente correspondiente. Usa rutas relativas como `images/foto.webp` para mantener compatibilidad con subcarpetas.

- `hero-tropical.webp`: composición conceptual de naturaleza y tecnología.
- `raices-bayaguana.webp`: paisaje conceptual inspirado en la región.
- `referencia-cybereng.jpg`: imagen aportada por el usuario. Las miniaturas del portafolio muestran ventanas de esta referencia mediante CSS; al usar trabajos reales, utiliza la propiedad `image` del ejemplo anterior.

Las dos composiciones grandes se generaron para este sitio y **no son fotografías documentales de un lugar exacto**. La atribución y los prompts están en `ASSETS.md` y `src/assets/generation-prompts.txt`. El símbolo de montaña usa Lucide; sustitúyelo por tu logo oficial cuando lo tengas.

## SEO

Edita título, descripción y Open Graph en `index.html`. `VITE_SITE_URL` inserta canonical y `og:url` durante la compilación. Se omiten si no se conoce el dominio. No se inventó una URL ni una imagen social. Para una tarjeta social propia, añade su archivo y un `og:image` absoluto en `index.html`.

## Publicación

La [guía oficial de despliegue de Vite](https://vite.dev/guide/static-deploy.html) describe estos flujos.

### Vercel

Sube el proyecto a tu repositorio e impórtalo en Vercel con el preset **Vite**. Usa `npm run build`, salida `dist` y las variables de `.env`. El archivo `vercel.json` deja definidos el comando y la salida.

### Netlify

Importa el repositorio: comando `npm run build`, directorio `dist`. `netlify.toml` incluye esos valores. Configura las variables antes de compilar. También puedes publicar manualmente el contenido compilado de `dist` desde el panel.

### GitHub Pages

El proyecto usa `base: './'` y recursos relativos, por lo que funciona bajo la subcarpeta del repositorio. Configura `VITE_SITE_URL` con la URL completa. En el repositorio, selecciona **Settings → Pages → GitHub Actions** y usa un flujo que:

1. Descargue el repositorio con `actions/checkout`.
2. Configure Node.js 24 mediante `actions/setup-node`.
3. Ejecute `npm ci` y `npm run build`.
4. Suba `dist` con `actions/upload-pages-artifact`.
5. Publique con `actions/deploy-pages`, permisos `pages: write` e `id-token: write` y el entorno `github-pages`.

La guía oficial enlazada incluye el YAML completo actualizado. No publiques `.env` ni `node_modules`.

## Accesibilidad y rendimiento

Un H1, secciones semánticas, etiquetas asociadas, foco visible, enlace para saltar al contenido, filtros con estado accesible y diálogo nativo con Escape. Se respeta `prefers-reduced-motion`. Las fuentes se sirven localmente y las imágenes secundarias usan carga diferida. La hoja CSS contiene diseños específicos para escritorio, tablet y móvil.

La mejora progresiva `start_cybereng_proposal` permite preparar el selector de servicio a agentes compatibles, sin enviar datos. En otros navegadores, la página conserva toda su funcionalidad normal.

## Comprobaciones de esta entrega

Se verificaron instalación, servidor de desarrollo y compilación, además del filtro del portafolio, apertura y cierre de proyectos y validación/preparación del contacto. Consulta `VERIFICACION.md` para el alcance final. La recepción real por formulario y los perfiles sociales deben comprobarse después de configurar tus datos.
