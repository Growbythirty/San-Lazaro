# Orden Militar y Hospitalaria de San Lázaro – Venezuela

Sitio web informativo del Capítulo Venezuela de la Orden Militar y Hospitalaria de San Lázaro de Jerusalén.

## Tech Stack

- **React** 19.2 + **TypeScript** 5.9
- **Vite** 8.0 (build tool)
- **ESLint** 9.x (linting)
- **Vercel** (hosting)

## Estructura del Proyecto

```
san-lazaro-web/
├── public/
│   └── favicon.png              # Escudo de la Orden
├── src/
│   ├── assets/
│   │   ├── fonts/               # Cinzel, Spectral, Inter, Great Vibes
│   │   └── images/              # PNGs: escudos, sellos, ornamentos
│   ├── components/
│   │   ├── Navbar.tsx           # Navegación fija con menú móvil
│   │   ├── Hero.tsx             # Sección principal con sello 3D animado
│   │   ├── GoldBanner.tsx       # Banner dorado con valores
│   │   ├── About.tsx            # Quiénes Somos
│   │   ├── Pillars.tsx          # Pilares Fundamentales (Fe, Servicio, Honor)
│   │   ├── Historia.tsx         # Historia con timeline interactivo
│   │   ├── Stats.tsx            # Estadísticas animadas
│   │   ├── Consejo.tsx          # Organigrama del Consejo de Gobierno
│   │   ├── Actividades.tsx      # Grid de actividades y eventos
│   │   ├── Rangos.tsx           # Jerarquía de rangos de la Orden
│   │   ├── Contacto.tsx         # Formulario de contacto
│   │   └── Footer.tsx           # Pie de página
│   ├── App.tsx                  # Composición de componentes
│   ├── main.tsx                 # Entry point
│   └── styles.css               # Estilos globales con design tokens
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## Deployment

El proyecto está desplegado en **Vercel** conectado al repositorio de GitHub.

- **Branch de producción:** `main`
- **Branch de desarrollo:** `developer`

### Configuración en Vercel

| Campo | Valor |
|-------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

## Git Workflow

```
main (producción)
 └── developer (staging)
      └── [feature]-dev (features individuales)
```

**Flujo:** `[feature]-dev` → PR → `developer` → PR → `main`

## Design Tokens

```css
--green:        #006937      /* Verde institucional */
--green-dark:   #111C12      /* Fondo oscuro */
--gold:         #D6B650      /* Dorado principal */
--gold-light:   #e8cc7a      /* Dorado hover */
--cream:        #FAF4ED      /* Fondo claro */
```

**Tipografía:**
- **Cinzel** — Títulos y navegación (display)
- **Spectral** — Textos largos (serif)
- **Inter** — UI y formularios (sans-serif)
- **Great Vibes** — Acentos decorativos (script)

## Repositorio

[github.com/Growbythirty/San-Lazaro](https://github.com/Growbythirty/San-Lazaro)
