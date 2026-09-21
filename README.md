# izzyll.github.io

Portfolio de Diego Godoy, hecho con [Astro](https://astro.build) y publicado en GitHub Pages.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + build estático en dist/
npm run preview
```

## Estructura

```
src/
  i18n/ui.ts          textos de interfaz en EN y ES (ES tipado contra EN)
  data/portfolio.ts   experiencia, proyectos y skills, con texto por idioma
  layouts/Layout.astro  <head>, hreflang y detección de idioma
  components/         una sección por archivo, con sus estilos
  pages/index.astro   inglés, en /
  pages/es/index.astro  español, en /es/
  styles/global.css   tokens y reglas globales
public/               archivos servidos tal cual (el CV)
```

## Idioma

Cada idioma es una página estática propia (`/` y `/es/`). Al entrar a `/`, se
usa la elección guardada del usuario o, si no hay, el primer idioma soportado
del dispositivo; si es español, redirige a `/es/`. El selector EN/ES guarda la
elección en `localStorage`. `/es/` nunca redirige, así un enlace compartido en
español siempre abre en español.

Para agregar un idioma: añadirlo a `languages` y `homePath` en `src/i18n/ui.ts`,
a `locales` en `astro.config.mjs`, traducir los textos y crear su página.

## Despliegue

`.github/workflows/deploy.yml` compila y publica en cada push a `master`.
Una sola vez, en el repositorio: **Settings → Pages → Source: GitHub Actions**.
