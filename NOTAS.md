# 📝 NOTAS - Mejoras Futuras para PokéArcana

## ✅ Funcionalidades planeadas

### 1. Arcanos Menores
- Implementar las 56 cartas de los Arcanos Menores divididas en:
  - **Copas (Agua)** → Emociones, relaciones, intuición
  - **Espadas (Aire)** → Pensamiento, conflicto, intelecto
  - **Bastos (Fuego)** → Acción, creatividad, voluntad
  - **Oros (Tierra)** → Material, trabajo, finanzas
- Mapeo por tipo de Pokémon:
  - Copas: Pokémon de tipo Agua y/o Psíquico
  - Espadas: Pokémon de tipo Volador y/o Siniestro
  - Bastos: Pokémon de tipo Fuego y/o Lucha
  - Oros: Pokémon de tipo Tierra, Roca y/o Acero

### 2. Más tipos de tiradas
- **Cruz Celta** (10 posiciones)
- **Tirada del Año** (12 posiciones + 1 carta sintética)
- **Tirada de Relación** (7 posiciones para parejas)
- **Tirada de Trabajo** (5 posiciones)
- **Tirada de Sí/No** (1 carta con interpretación)

### 3. Mejoras de UI/UX
- Animación de volteo de cartas con CSS 3D
- Efecto de barajado más realista (como cartas físicas)
- Sonidos ambientales opcionales (solo con permiso del usuario)
- Modo oscuro/claro toggleable
- Tema de carta personalizable (diferentes estilos de arte tarot)
- Vista detallada de cada carta al hacer click (modal expandido)

### 4. Funcionalidades de usuario
- Historial de tiradas guardado en localStorage
- Posibilidad de nombrar y guardar tiradas especiales
- Exportar tirada como imagen o PDF para compartir
- Recordatorio diario de "carta del día" (con notificaciones opcionales)
- Diario de reflections vinculado a cada tirada

### 5. Enriquecimiento de datos
- Incluir más datos de PokéAPI:
  - Estadísticas base (HP, Ataque, Defensa, etc.) como reflejo energético
  - Habilidades y su significado esotérico
  - Evoluciones como etapas de crecimiento espiritual
  - Hábitat y donde se encuentra (relacionado con elementos)
- Texto de sabor en múltiples idiomas (configurable)
- Datos de la pokédex de diferentes juegos para variedad

### 6. Educación y referencia
- Glosario de términos tarot y sus correspondencias pokemonicas
- Explicación de cada Arcano Mayor con su significado tradicional
- Guía para principiantes sobre cómo leer el tarot
- Blog o sección de artículos sobre simbología pokemonica y tarot

### 7. Optimizaciones técnicas
- Cache inteligente de respuestas de PokéAPI (IndexedDB o service worker)
- Prefetch de datos comunes para mejor performance
- Testing unitario y de integración con Vitest/Jest
- Storybook para documentación de componentes
- Internacionalización (i18n) para múltiples idiomas
- PWA (Progressive Web App) para instalación y uso offline

### 8. Características comunitarias (futuro lejano)
- Sistema de tiradas compartidas (anonimas o con usuario)
- Interpretaciones comunitarias de combinaciones específicas
- Desafíos diarios de tirada
- Estadísticas agregadas de qué cartas salen más frecuentemente

## 🎯 Prioridades inmediatas (próximas 2-4 semanas)

1. **Arcanos Menores básicos** - Implementar al menos un palo completo para testing
2. **Historial en localStorage** - Guardar últimas 5 tiradas
3. **Mejor accesibilidad** - ARIA labels, contraste de colores, navegación con teclado
4. **Tests básicos** - Unitarios para hooks y funciones puras
5. **Optimización de carga** - Lazy load de imágenes y suspense boundaries

## 🔍 Investigación necesaria

- Mapeo óptimo de tipos pokemonicos a elementos tarot (agua=no siempre = copas)
- Significados tradicionales invertidos de los Arcanos Menores
- Correlaciones entre estadísticas pokemonicas y aspectos de personalidad tarot
- Uso de especies legendarias vs comunes en diferentes posiciones

## 📚 Recursos consultados

- Libro: "El Tarot" de Alejandro Jodorowsky y Marianne Costa
- Wiki: Bulbapedia y PokéAPI documentation
- Sitios: Biddy Tarot, Learn Tarot, Tarot.com
- Comunidad: r/tarot, r/pokemon en Reddit

## 💡 Ideas inspiradoras

- Carta del Día que cambia basado en el horóscopo pokemonico (signo zodiacal de nacimiento)
- Combos especiales: cuando ciertas cartas aparecen juntas tienen significado adicional
- Modo "inversión lunar": tiradas diferentes según fase de la luna
- Eventos especiales: tiradas temáticas en aniversarios de juegos pokemonicos

---

*Última actualización: $(date)*

*Este documento evoluciona con el proyecto. Las ideas marcadas con ✅ están en progresso o completadas.*