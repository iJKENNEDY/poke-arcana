# 🃏 PokéArcana - Tarot Pokémon

> Un proyecto que combina la magia del tarot con el universo Pokémon usando la [PokéAPI](https://pokeapi.co).

## ✨ Características

- **Arcanos Mayores**: Las 22 cartas del tarot mapeadas a Pokémon que encarnan su esencia.
- **Tirada de 3 cartas**: Pasado, presente y futuro.
- **Datos en vivo**: Cada carta muestra:
  - Imagen oficial del Pokémon (de la PokéAPI)
  - Tipos del Pokémon
  - Texto de sabor (flavor text) en español o inglés
  - Significado del tarot (recto e invertido)
- **Fondos únicos**: Cada carta tiene un fondo de color basado en el tipo principal del Pokémon.
- **Contornos neon**: Los bordes de las cartas brillan con un efecto neon acorde al tipo.
- **Tema oscuro/claro**: Alterna entre modo místico oscuro y modo diurno claro (preferencia guardada en localStorage).
- **Experiencia visual**: Animaciones suaves, diseño responsive y efectos visuales atractivos.
- **Responsive**: Funciona en móvil y escritorio.

## 🚀 Empezando

### Prerrequisitos

- Node.js (v18+ recomendado)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repo-url>
cd poke-arcana

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

Abre tu navegador en `http://localhost:5173` (o la URL que muestre Vite).

### Build para producción

```bash
npm run build
# Los archivos estáticos se generan en ./dist
```

## 📖 Uso

1. Al cargar la aplicación, verás una introducción.
2. Haz clic en **"Tirar las cartas"** para barajar y obtener una tirada de 3 cartas.
3. Cada carta mostrará:
   - Nombre del Arcano Mayor (ej: "El Mago")
   - Nombre del Pokémon asociado (ej: "Alakazam")
   - Tipos del Pokémon (coloreados)
   - Significado del tarot (según si sale recto o invertido)
   - Texto de sabor del Pokémon (de la PokéAPI)
4. Puedes hacer una nueva tirada con el botón **"Nueva tirada"** o volver al inicio con **"Volver"**.

## 🛠️ Tecnologías

- **React 19** + **TypeScript**
- **Vite** como bundler y dev server
- **PokéAPI** para obtener datos de Pokémon
- CSS puro para estilos (sin frameworks)

## 🗂️ Estructura del proyecto

```
src/
├── types.ts              # Interfaces TypeScript
├── data/
│   └── majorArcana.ts    # Definición de los 22 Arcanos Mayores
├── services/
│   └── pokeApi.ts        # Cliente para PokéAPI
├── hooks/
│   └── useTarot.ts       # Lógica de barajar y tirar cartas
├── components/
│   ├── TarotCard.tsx     # Componente de una carta individual
│   └── Reading.tsx       # Grid de 3 cartas (spread)
├── App.tsx               # Componente raíz
├── App.css               # Estilos de la app
├── index.css             # Variables CSS y reset
├── main.tsx              # Entry point de React
└── vite-env.d.ts         # Tipos de Vite
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- [PokéAPI](https://pokeapi.co) por proporcionar los datos de Pokémon de forma gratuita y abierta.
- La comunidad de código abierto por las herramientas que hacen posible este proyecto.

---

_Hecho con ❤️ y un toque de misterio._