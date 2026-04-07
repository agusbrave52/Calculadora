# 🧮 Calculadora Brave
 
Calculadora web desarrollada con **React 18**, desplegada automáticamente en **GitHub Pages** via GitHub Actions.
 
> 🔧 **Proyecto a mejorar** — funcional en su estado actual, con margen para seguir creciendo.
 
🌐 **Demo en vivo:** [agusbrave52.github.io/Calculadora](https://agusbrave52.github.io/Calculadora/)
 
---
 
## 📋 Descripción
 
Aplicación de calculadora construida con React como ejercicio de práctica con el ecosistema moderno de JavaScript. Utiliza la librería `mathjs` para el procesamiento de expresiones matemáticas y `react-bootstrap` para los componentes visuales.
 
---
 
## ✨ Funcionalidades
 
- ➕➖✖️➗ Operaciones aritméticas básicas
- 🧠 Evaluación de expresiones matemáticas con **mathjs**
- 📱 Diseño responsive con Bootstrap 5
- 🔀 Enrutamiento con React Router DOM
 
---
 
## 🛠️ Tecnologías y dependencias
 
| Paquete | Versión | Uso |
|---|---|---|
| React | 18.2 | Framework principal |
| React DOM | 18.2 | Renderizado en el navegador |
| React Router DOM | 6.9 | Enrutamiento entre vistas |
| Bootstrap | 5.2 | Estilos y componentes UI |
| React Bootstrap | 2.7 | Componentes Bootstrap para React |
| mathjs | 11.7 | Motor de evaluación matemática |
| gh-pages | 5.0 | Deploy automático a GitHub Pages |
 
---
 
## 📁 Estructura del proyecto
 
```
Calculadora/
├── public/
├── src/
├── static/
├── .github/
│   └── workflows/       ← CI/CD con GitHub Actions
├── package.json
├── yarn.lock
└── .gitignore
```
 
---
 
## 🚀 Instalación y uso local
 
Requiere **Node.js** instalado.
 
1. Cloná el repositorio:
   ```bash
   git clone https://github.com/agusbrave52/Calculadora.git
   cd Calculadora
   ```
 
2. Instalá las dependencias:
   ```bash
   npm install
   ```
 
3. Iniciá el servidor de desarrollo:
   ```bash
   npm start
   ```
 
4. Abrí [http://localhost:3000](http://localhost:3000) en el navegador.
 
---
 
## 📦 Scripts disponibles
 
| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor de desarrollo en `localhost:3000` |
| `npm run build` | Genera la build de producción en `/build` |
| `npm test` | Ejecuta los tests en modo interactivo |
| `npm run deploy` | Construye y despliega en GitHub Pages |
 
---
 
## 🚢 Deploy
 
El proyecto está configurado para desplegarse automáticamente en **GitHub Pages** usando `gh-pages` y un workflow de **GitHub Actions**.
 
Para hacer un deploy manual:
```bash
npm run deploy
```
 
---
 
## 🔮 Mejoras planeadas
 
- [ ] Historial de operaciones
- [ ] Soporte para teclado físico
- [ ] Modo científico (raíces, potencias, trigonometría)
- [ ] Animaciones en los botones
- [ ] Modo oscuro / claro
- [ ] Tests unitarios para las operaciones
 
---
 
## 📌 Estado del proyecto
 
🔵 **Funcional, en proceso de mejora** — proyecto personal de práctica con React.
 
---
 
## 👤 Autor
 
**Agustín Brave**
- GitHub: [@agusbrave52](https://github.com/agusbrave52)
