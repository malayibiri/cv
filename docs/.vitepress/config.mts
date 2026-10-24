import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es-ES',
  title: 'Rafael Martínez Estévez',
  description:
    'Portafolio de Rafael Martínez Estévez: profesor e investigador de Ciencia de la Computación e ingeniero de software.',
  base: '/cv/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/cv/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#2f575c' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],

  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      head: [
        ['meta', { property: 'og:title', content: 'Rafael Martínez Estévez' }],
        [
          'meta',
          {
            property: 'og:description',
            content:
              'Profesor e investigador de Ciencia de la Computación e ingeniero de software. Pinar del Río, Cuba.'
          }
        ],
        ['meta', { property: 'og:locale', content: 'es_ES' }]
      ]
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description:
        'Portfolio of Rafael Martínez Estévez: Computer Science professor and researcher, and software engineer.',
      head: [
        ['meta', { property: 'og:title', content: 'Rafael Martínez Estévez' }],
        [
          'meta',
          {
            property: 'og:description',
            content:
              'Computer Science professor and researcher and software engineer. Pinar del Río, Cuba.'
          }
        ],
        ['meta', { property: 'og:locale', content: 'en_US' }]
      ],
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/sobre-mi' },
          { text: 'Projects', link: '/en/proyectos' },
          { text: 'Publications', link: '/en/publicaciones' },
          { text: 'Contact', link: '/en/contacto' }
        ],

        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',

        footer: {
          message: 'Personal portfolio of Rafael Martínez Estévez.',
          copyright: '© 2026 Rafael Martínez Estévez'
        }
      }
    }
  },

  themeConfig: {
    siteTitle: 'Rafael Martínez Estévez',

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Sobre mí', link: '/sobre-mi' },
      { text: 'Proyectos', link: '/proyectos' },
      { text: 'Publicaciones', link: '/publicaciones' },
      { text: 'Contacto', link: '/contacto' }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/malayibiri' }],

    outline: { level: [2, 3], label: 'En esta página' },
    docFooter: { prev: 'Anterior', next: 'Siguiente' },
    darkModeSwitchLabel: 'Apariencia',
    lightModeSwitchTitle: 'Cambiar a modo claro',
    darkModeSwitchTitle: 'Cambiar a modo oscuro',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba',

    footer: {
      message: 'Portafolio personal de Rafael Martínez Estévez.',
      copyright: '© 2026 Rafael Martínez Estévez'
    }
  }
})
