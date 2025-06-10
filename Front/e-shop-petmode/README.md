# Tienda de Mascotas – React + TypeScript + Vite

![image](https://github.com/user-attachments/assets/3591d794-2d83-45c5-8c01-42fad0e90d38)


Este proyecto es una **aplicación web para una tienda de mascotas**, construida con **React**, **TypeScript** y **Vite**. Proporciona una configuración mínima pero moderna, con recarga en caliente (HMR) y reglas de ESLint para mantener un código limpio y consistente.

## Tecnologías utilizadas

- ⚛️ **React** – Biblioteca para construir interfaces de usuario interactivas.
- 🔡 **TypeScript** – Superset de JavaScript con tipado estático.
- ⚡ **Vite** – Herramienta de desarrollo rápida y moderna.
- ✅ **ESLint** – Herramienta para análisis estático del código.

## Plugins oficiales compatibles

Actualmente, puedes usar uno de los siguientes plugins oficiales para React con Vite:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react): Usa [Babel](https://babeljs.io/) para Fast Refresh.
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): Usa [SWC](https://swc.rs/) para Fast Refresh.

## Configuración extendida de ESLint

Si estás desarrollando una aplicación para producción, se recomienda habilitar reglas de ESLint conscientes del tipo (`type-aware`):

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

También puedes instalar plugins adicionales para mejorar las reglas específicas de React:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Objetivo del proyecto

La aplicación tiene como propósito permitir a los usuarios explorar productos, servicios y accesorios para sus mascotas, con una experiencia de usuario moderna, fluida y accesible desde cualquier dispositivo.

## Cómo iniciar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/S4muelDP/PetMode.git
   cd tienda-mascotas
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre en tu navegador:
   ```
   http://localhost:5173
   ```

## Estructura del proyecto

```
├── public/               # Archivos estáticos
├── src/                  # Código fuente principal
│   ├── assets/           # Imágenes, íconos, estilos
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Vistas o páginas de la app
│   ├── services/         # Lógica de conexión a APIs
│   ├── App.tsx           # Componente raíz
│   └── main.tsx          # Punto de entrada de la app
├── index.html            # HTML principal
├── vite.config.ts        # Configuración de Vite
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Documentación del proyecto
```

---

¡Este proyecto es una tienda de mascotas moderna, rápida y escalable usando tecnología de última generación! 🐶🐱🐾

