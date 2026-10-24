# Portafolio — Rafael Martínez Estévez

Sitio estático construido con [VitePress](https://vitepress.dev) y publicado con GitHub Pages en
<https://malayibiri.github.io/cv/>.

## Requisitos

- Node.js 24 (`nvm use 24`)

## Uso

```bash
npm install
npm run dev      # servidor local en http://localhost:5173/cv/
npm run build    # compila a docs/.vitepress/dist/
npm run preview  # previsualiza la compilación
```

## Estructura

| Ruta | Contenido |
| --- | --- |
| `docs/index.md` | Portada |
| `docs/sobre-mi.md` | Perfil, experiencia, formación, docencia, tutorías y tecnologías |
| `docs/proyectos.md` | Proyectos y repositorios |
| `docs/publicaciones.md` | Publicaciones y eventos |
| `docs/contacto.md` | Contacto y descarga del CV |
| `docs/public/` | PDFs del CV y favicon |
| `docs/.vitepress/config.mts` | Navegación, metadatos y `base: '/cv/'` |
| `docs/.vitepress/theme/` | Tema y estilos |

## Añadir contenido

1. Crear un archivo Markdown en `docs/` (por ejemplo, `docs/notas.md`).
2. Añadirlo a `themeConfig.nav` en `docs/.vitepress/config.mts`.

VitePress genera automáticamente la navegación anterior/siguiente y el índice de la página.
Si el sitio crece, se puede añadir una `sidebar` en la misma configuración.

## Despliegue

El workflow `.github/workflows/deploy.yml` construye el sitio y lo publica en cada push a `main`.
En GitHub, configurar **Settings → Pages → Source: GitHub Actions**.

El sitio se sirve bajo `/cv/`; por eso `base` está definido como `'/cv/'` en la configuración.
