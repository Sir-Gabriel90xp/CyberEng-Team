# CyberEng Team 🇩🇴

### Marketing creativo con esencia dominicana

**Ideas locales. Grandes resultados.**

CyberEng Team combina diseño, tecnología y estrategia para ayudar a negocios y emprendimientos a construir una presencia digital con identidad propia. Desde **Bayaguana, Monte Plata, República Dominicana**, creamos propuestas que conectan las marcas con las personas.

Este repositorio contiene nuestra landing page: una experiencia visual inspirada en los ríos, las montañas y la naturaleza tropical dominicana, desarrollada con **React y Vite**.

![Naturaleza tropical y tecnología: la inspiración visual de CyberEng Team](public/images/hero-tropical.webp)

## 🌿 Nuestra propuesta

Creemos que las grandes ideas también nacen aquí. Trabajamos con emprendedores, restaurantes, hoteles, villas, proyectos turísticos, inmobiliarias y comercios que quieren comunicar mejor lo que hacen y llegar a nuevas oportunidades.

**Marketing con raíces, para un futuro más grande.**

## 🎨 Servicios

| Servicio | Enfoque |
| --- | --- |
| Creación de logos | Identidades visuales profesionales y memorables. |
| Desarrollo de páginas web | Experiencias digitales adaptadas a cada negocio. |
| Diseño de flyers | Piezas visuales para comunicar y promocionar. |
| Anuncios publicitarios | Campañas orientadas a visibilidad y captación de clientes. |
| Crecimiento en redes sociales | Contenido y estrategias para construir comunidad. |
| Estrategias de reservas | Acciones para conectar negocios turísticos con sus próximos visitantes. |

## ✨ Características del sitio

- Diseño responsive para computadoras, tablets y teléfonos.
- Navegación fija, desplazamiento entre secciones y menú móvil.
- Seis tarjetas de servicios con acceso al formulario de propuesta.
- Portafolio con filtros por categoría y detalles de cada proyecto.
- Formulario con validación y estados de preparación, envío, éxito y error.
- WhatsApp y perfiles sociales configurables.
- Animaciones suaves y compatibilidad con la preferencia de movimiento reducido.
- Imágenes WebP, carga diferida y tipografía alojada localmente.
- Etiquetas accesibles, navegación por teclado y metadatos SEO.

## 🛠️ Tecnologías

| Tecnología | Uso |
| --- | --- |
| React 19 | Componentes e interacciones. |
| Vite 7 | Desarrollo y compilación. |
| JavaScript | Lógica, filtros y validación. |
| CSS3 | Estilos, animaciones y diseño responsive. |
| Lucide React | Iconografía. |
| Manrope / Fontsource | Tipografía local. |

## 🚀 Ejecutar el proyecto

Necesitas **Node.js 22.12 o posterior** y npm. Descarga o clona el repositorio, abre una terminal dentro de la carpeta que contiene `package.json` y ejecuta:

```bash
npm install
npm run dev
```

Abre la dirección que Vite muestra en la terminal.

Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

La compilación se genera en `dist/`. El comando `preview` permite revisarla localmente.

## ⚙️ Configuración

Duplica `.env.example`, renombra la copia como `.env` y completa los datos de tu negocio:

```dotenv
VITE_WHATSAPP_NUMBER=
VITE_CONTACT_ENDPOINT=
VITE_SITE_URL=
VITE_INSTAGRAM_URL=
VITE_FACEBOOK_URL=
VITE_TIKTOK_URL=
VITE_YOUTUBE_URL=
VITE_LINKEDIN_URL=
```

| Variable | Valor esperado |
| --- | --- |
| `VITE_WHATSAPP_NUMBER` | Número internacional, solo dígitos, sin `+` ni espacios. |
| `VITE_CONTACT_ENDPOINT` | Endpoint HTTPS de Formspree o de una API que acepte JSON. |
| `VITE_SITE_URL` | URL pública final para canonical y Open Graph. |
| Variables de redes sociales | Enlaces HTTPS de los perfiles oficiales. |

Después de cambiar estos valores, reinicia el servidor de desarrollo o vuelve a compilar. También puedes editar la configuración en `src/data/config.js`.

Las variables `VITE_` se incluyen en el navegador: utiliza únicamente datos públicos. `.env` y `node_modules/` están excluidos mediante `.gitignore`.

### Funcionamiento del contacto

Sin un endpoint configurado, el formulario **prepara una solicitud que se puede copiar o descargar**. Si hay un número de WhatsApp válido, permite abrir la conversación con el mensaje preparado. El visitante confirma su envío en WhatsApp.

Con un endpoint configurado, envía los datos por `POST` en formato JSON y muestra la confirmación cuando el servidor devuelve una respuesta satisfactoria. La recepción real debe comprobarse después de conectar el destino.

## 📁 Organización

| Ruta | Contenido |
| --- | --- |
| `src/components/` | Marca, navegación, iconos y componentes compartidos. |
| `src/sections/` | Secciones de la landing page. |
| `src/data/` | Textos, proyectos, servicios y configuración. |
| `src/hooks/` | Comportamientos reutilizables. |
| `src/styles/` | Diseño visual y adaptación a pantallas. |
| `src/assets/` | Documentación de recursos generados. |
| `public/images/` | Imágenes del sitio. |

## ✏️ Personalización

- **Textos y servicios:** edita `src/data/content.js` y las secciones correspondientes.
- **Colores y diseño:** modifica `src/styles/global.css`.
- **WhatsApp y redes:** edita `.env` o `src/data/config.js`.
- **Portafolio:** agrega proyectos en `src/data/content.js` con una categoría existente y una ruta de imagen, por ejemplo `images/mi-proyecto.webp`.
- **Imágenes:** coloca los archivos en `public/images/` y actualiza las rutas y textos alternativos.
- **SEO:** revisa `index.html` y configura `VITE_SITE_URL`.

## 📦 Publicación

Ejecuta `npm run build` y publica el contenido de `dist/` en un alojamiento estático. El proyecto incluye `vercel.json` y `netlify.toml` con la configuración de compilación. Para GitHub Pages, utiliza un flujo que compile y publique esa carpeta.

Sube a GitHub los archivos del proyecto descomprimidos, con `package.json` y este `README.md` en la raíz del repositorio. Configura los datos de contacto antes de anunciar la web a tus clientes.

## Estado del contenido

Los proyectos y testimonios iniciales son **ejemplos ilustrativos**, identificados como tales en la página. Deben sustituirse por trabajos y opiniones reales antes de presentarlos como experiencias de clientes. Las imágenes principales son composiciones conceptuales inspiradas en la naturaleza dominicana.

Puedes consultar los recursos en [ASSETS.md](ASSETS.md) y las comprobaciones realizadas en [VERIFICACION.md](VERIFICACION.md).

---

**CyberEng Team · Especialistas en marketing**  
Bayaguana, Monte Plata · República Dominicana 🇩🇴  
*Hecho en Bayaguana para grandes ideas.*
