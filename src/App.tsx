import { useTarot } from './hooks/useTarot'
import { Reading } from './components/Reading'
import './App.css'
import { useEffect, useState } from 'react'

export default function App() {
  const { cards, drawn, drawing, draw, reset, positions } = useTarot()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (saved) {
      setTheme(saved)
      document.body.className = `${saved}-mode`
    } else {
      // default dark
      document.body.className = 'dark-mode'
    }
  }, [])

  useEffect(() => {
    document.body.className = `${theme}-mode`
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="title">PokéArcana</h1>
          <p className="subtitle">Tarot Pokémon — Descubre tu destino</p>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>

      <main className="main">
        {!drawn && !drawing && (
          <section className="intro">
            <p className="intro-text">
              Los Arcanos Mayores del tarot cobran vida a través de los Pokémon.
              Cada carta encierra un significado ancestral vinculado a la esencia
              de una criatura única.
            </p>
            <button className="btn-draw" onClick={draw}>
              <span className="btn-sparkle">✦</span>
              Tirar las cartas
              <span className="btn-sparkle">✦</span>
            </button>
          </section>
        )}

        {drawing && (
          <section className="drawing-section">
            <div className="drawing-animation">
              <div className="card-stack">
                {[0, 1, 2].map(i => (
                  <div key={i} className="shuffling-card" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
              </div>
              <p>Barajando el mazo...</p>
            </div>
          </section>
        )}

        {drawn && !drawing && cards.length > 0 && (
          <Reading cards={cards} positions={positions} theme={theme} />
        )}

        {drawn && (
          <div className="actions">
            <button className="btn-draw btn-secondary" onClick={reset}>
              Volver
            </button>
            <button className="btn-draw" onClick={draw}>
              Nueva tirada
            </button>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Datos proporcionados por <a href="https://pokeapi.co" target="_blank">PokéAPI</a></p>
      </footer>
    </div>
  )
}
