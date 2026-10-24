import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es-ES',
  title: 'Rafael Martínez Estévez',
  description:
    'Portafolio de Rafael Martínez Estévez: profesor e investigador de Ciencia de la Computación e ingeniero de software senior.',
  base: '/cv/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/cv/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#2f575c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Rafael Martínez Estévez' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Profesor e investigador de Ciencia de la Computación e ingeniero de software senior. Pinar del Río, Cuba.'
      }
    ],
    ['meta', { property: 'og:locale', content: 'es_ES' }]
  ],

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
