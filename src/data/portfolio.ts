import type { Localized, UIKey } from '../i18n/ui';

export interface Job {
  company: string;
  when: Localized;
  description: Localized;
  stack: string[];
}

export interface Project {
  name: string;
  when: Localized;
  description: Localized;
  stack: string[];
  links: { href: string; label: UIKey }[];
}

export const experience: Job[] = [
  {
    company: 'Cruz Verde · Femsa',
    when: {
      en: 'Frontend Engineer · Nov 2024 – Jul 2026',
      es: 'Frontend Engineer · nov 2024 – jul 2026',
    },
    description: {
      en: 'Key role in migrating the native Farmacias Cruz Verde Chile app to React Native Expo. Built push notifications, deeplinks and refactors focused on performance and navigation.',
      es: 'Rol clave en la migración de la app nativa de Farmacias Cruz Verde Chile a React Native Expo. Implementé notificaciones push, deeplinks y refactorizaciones enfocadas en rendimiento y navegación.',
    },
    stack: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    company: 'MetLife',
    when: {
      en: 'Frontend Engineer · Apr 2024 – Aug 2024',
      es: 'Frontend Engineer · abr 2024 – ago 2024',
    },
    description: {
      en: 'Frontend features in React Native and TypeScript, with native modules in Kotlin and Swift for specific integrations. State management with Redux, Sagas and Context API.',
      es: 'Funcionalidades frontend en React Native y TypeScript, con módulos nativos en Kotlin y Swift para integraciones específicas. Manejo de estado con Redux, Sagas y Context API.',
    },
    stack: ['React Native', 'Kotlin', 'Swift', 'Redux'],
  },
  {
    company: 'Banco BICE',
    when: {
      en: 'Frontend Engineer · Apr 2023 – Mar 2024',
      es: 'Frontend Engineer · abr 2023 – mar 2024',
    },
    description: {
      en: 'Improved the digital experience and banking operations for users. Frontend architectures with React Native, Redux, RTK Query and Context API, plus analytics and remote config.',
      es: 'Mejoré la experiencia digital y las operaciones bancarias de los usuarios. Arquitecturas frontend con React Native, Redux, RTK Query y Context API, además de analítica y remote config.',
    },
    stack: ['React Native', 'RTK Query', 'Redux'],
  },
  {
    company: 'Enara Health · Startup',
    when: {
      en: 'Fullstack Developer · May 2022 – Mar 2023',
      es: 'Desarrollador Fullstack · may 2022 – mar 2023',
    },
    description: {
      en: 'Nutrition app in React Native and TypeScript, with microservices in Node.js, Express and MongoDB. Shipped to the App Store and Google Play.',
      es: 'App de nutrición en React Native y TypeScript, con microservicios en Node.js, Express y MongoDB. Publicada en App Store y Google Play.',
    },
    stack: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    company: 'Agilesoft',
    when: {
      en: 'Frontend Developer · Dec 2021 – May 2022',
      es: 'Desarrollador Frontend · dic 2021 – may 2022',
    },
    description: {
      en: 'BanChile\'s "Mi Seguro" app in React Native. Reusable interfaces with Redux, Context API and Custom Hooks, working alongside UX/UI teams.',
      es: 'App "Mi Seguro" de BanChile en React Native. Interfaces reutilizables con Redux, Context API y Custom Hooks, junto a equipos UX/UI.',
    },
    stack: ['React Native', 'Redux'],
  },
  {
    company: 'DynamicLab',
    when: {
      en: 'Frontend & Fullstack · Jun 2020 – Dec 2021',
      es: 'Frontend y Fullstack · jun 2020 – dic 2021',
    },
    description: {
      en: 'Web apps with React, Next.js and TypeScript, optimized with Vite. Backend with Node.js and microservices, MongoDB/PostgreSQL and AWS deployments.',
      es: 'Aplicaciones web con React, Next.js y TypeScript, optimizadas con Vite. Backend con Node.js y microservicios, MongoDB/PostgreSQL y despliegues en AWS.',
    },
    stack: ['Next.js', 'React', 'Node.js', 'AWS'],
  },
];

export const projects: Project[] = [
  {
    name: 'Steel Framing Studio',
    when: {
      en: 'Personal project · Next.js + Three.js',
      es: 'Proyecto personal · Next.js + Three.js',
    },
    description: {
      en: 'Web editor for light-gauge steel framing: draw the walls on a floor plan and it generates the full framing, roof trusses, ceiling, a 3D model, the cut list and a material budget. Includes an electrical plan checked against Chilean code (NCh Elec 4/2003), draggable reference furniture and DXF export for AutoCAD.',
      es: 'Editor web de estructuras de acero liviano (steel framing): dibujas los muros en planta y genera el entramado completo, la techumbre, el cielo raso, el modelo 3D, el despiece de perfiles y el presupuesto de materiales. Incluye plano eléctrico verificado contra la NCh Elec 4/2003, muebles de referencia arrastrables y exportación DXF para AutoCAD.',
    },
    stack: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Node.js'],
    links: [{ href: 'https://steel-framing-studio.onrender.com/', label: 'proj.live' }],
  },
  {
    name: 'Rebun',
    when: {
      en: 'Personal project · React Native + Expo',
      es: 'Proyecto personal · React Native + Expo',
    },
    description: {
      en: 'Mobile app with Expo Router and TypeScript: video playback, maps with MapLibre, push notifications via Firebase and multi-language support (i18n). State handled with Zustand and React Query, persistence with MMKV.',
      es: 'App móvil con Expo Router y TypeScript: reproducción de video, mapas con MapLibre, notificaciones push con Firebase y soporte multi-idioma (i18n). Estado con Zustand y React Query, persistencia con MMKV.',
    },
    stack: ['Expo', 'TypeScript', 'Zustand', 'React Query', 'MapLibre'],
    links: [{ href: 'https://github.com/izzyll/rebun-app', label: 'proj.code' }],
  },
];

export const skills = [
  'React', 'React Native', 'Next.js', 'TypeScript', 'Expo', 'Vite', 'Three.js',
  'Tailwind CSS', 'Redux', 'RTK Query', 'Node.js', 'NestJS', 'Express',
  'MongoDB', 'PostgreSQL', 'AWS', 'GCP', 'Firebase', 'CI/CD', 'Figma', 'SOLID',
  'Clean Architecture',
];
