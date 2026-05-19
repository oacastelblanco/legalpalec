# SUMMA — Calculadora de Liquidación

Proyecto separado para React/Vite a partir de un archivo HTML único.

## Estructura

```txt
index.html
package.json
src/
  App.jsx
  main.jsx
  styles.css
  legacyCalculator.js
```

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
git push -u origin main
```

## Nota técnica

La lógica original está conservada en `src/legacyCalculator.js`.
La interfaz original renderiza con `document.body.innerHTML`, por eso `App.jsx` solo inicializa la calculadora.
