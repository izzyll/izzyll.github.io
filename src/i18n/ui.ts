export const languages = { en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Text that exists in both languages. */
export type Localized = Record<Lang, string>;

/** Home URL for each language; the default one lives at the root. */
export const homePath: Record<Lang, string> = { en: '/', es: '/es/' };

// Strings marked "(html)" contain inline markup and are rendered with set:html.
const en = {
  'meta.title': 'Diego Godoy — Fullstack Mobile Developer · React Native',
  'meta.ogAlt': "Diego Godoy, Fullstack Mobile Developer: React, React Native, TypeScript and Node.js",
  'meta.description': 'Portfolio of Diego Godoy Martinez, Fullstack Mobile Developer in Chile with 5 years of experience in React, React Native, TypeScript and Node.js.',
  'lang.label': 'Language',

  'hero.hi': "hi, i'm",
  'hero.role': 'Fullstack Mobile Developer',
  'hero.tagline': 'I build <b>mobile</b> and <b>web</b> apps that people use every day — across <b>banking</b>, <b>health</b> and <b>retail</b>.', // (html)
  'hero.status': 'open to new opportunities',
  'hero.cta.experience': 'my experience',
  'hero.cta.cv': 'download CV',
  'hero.cta.contact': 'get in touch',
  'hero.funfact': '<b>fun fact:</b> I drift as a hobby', // (html)
  'hero.photo.alt': 'Diego drifting a white car on a race track, tyre smoke behind it',

  'about.eyebrow': 'the short version',
  'about.title': 'About me',
  'about.p1': 'Computer Engineer with <b>5 years of experience</b> building frontend and mobile applications using React, React Native, Next.js, Vite, TypeScript and Node.js.', // (html)
  'about.p2': "I've worked on projects across <b>banking, health and retail</b>, building scalable interfaces, optimizing performance, and integrating modern API-based architectures grounded in SOLID principles. I collaborate closely with UX/UI teams, implement design systems, and deploy to AWS/GCP under agile methodologies.", // (html)
  'about.edu': '🎓 Computer Engineering · INACAP (2017–2020)',

  'exp.eyebrow': "where i've built things",
  'exp.title': 'Experience',

  'proj.eyebrow': 'what i build on my own',
  'proj.title': 'Projects',
  'proj.code': 'code ↗',
  'proj.live': 'live demo ↗',

  'skills.eyebrow': 'the toolbox',
  'skills.title': 'Tech stack',

  'footer': 'made with too much coffee',

  '404.title': 'Page not found',
  '404.text': "This page drifted off the track.",
  '404.back': 'back home',
};

export type UIKey = keyof typeof en;

// Typed against `en`, so a missing or misspelled key fails `astro check`.
const es: Record<UIKey, string> = {
  'meta.title': 'Diego Godoy — Desarrollador Fullstack Mobile · React Native',
  'meta.ogAlt': 'Diego Godoy, Desarrollador Fullstack Mobile: React, React Native, TypeScript y Node.js',
  'meta.description': 'Portafolio de Diego Godoy Martinez, Desarrollador Fullstack Mobile en Chile con 5 años de experiencia en React, React Native, TypeScript y Node.js.',
  'lang.label': 'Idioma',

  'hero.hi': 'Hola, soy',
  'hero.role': 'Desarrollador Fullstack Mobile',
  'hero.tagline': 'Construyo apps <b>móviles</b> y <b>web</b> que la gente usa todos los días — en <b>banca</b>, <b>salud</b> y <b>retail</b>.',
  'hero.status': 'abierto a nuevas oportunidades',
  'hero.cta.experience': 'mi experiencia',
  'hero.cta.cv': 'descargar CV',
  'hero.cta.contact': 'contáctame',
  'hero.funfact': '<b>dato curioso:</b> hago drift como hobby',
  'hero.photo.alt': 'Diego derrapando un auto blanco en una pista, con humo de neumáticos detrás',

  'about.eyebrow': 'la versión corta',
  'about.title': 'Sobre mí',
  'about.p1': 'Ingeniero en Informática con <b>5 años de experiencia</b> desarrollando aplicaciones frontend y móviles con React, React Native, Next.js, Vite, TypeScript y Node.js.',
  'about.p2': 'He trabajado en proyectos de <b>banca, salud y retail</b>, construyendo interfaces escalables, optimizando rendimiento e integrando arquitecturas modernas basadas en APIs bajo principios SOLID. Colaboro de cerca con equipos UX/UI, implemento design systems y despliego en AWS/GCP con metodologías ágiles.',
  'about.edu': '🎓 Ingeniería en Informática · INACAP (2017–2020)',

  'exp.eyebrow': 'donde he construido cosas',
  'exp.title': 'Experiencia',

  'proj.eyebrow': 'lo que construyo por mi cuenta',
  'proj.title': 'Proyectos',
  'proj.code': 'código ↗',
  'proj.live': 'ver demo ↗',

  'skills.eyebrow': 'la caja de herramientas',
  'skills.title': 'Stack técnico',

  'footer': 'hecho con demasiado café',

  '404.title': 'Página no encontrada',
  '404.text': 'Esta página se salió de la pista.',
  '404.back': 'volver al inicio',
};

export const ui: Record<Lang, Record<UIKey, string>> = { en, es };

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key];
}
