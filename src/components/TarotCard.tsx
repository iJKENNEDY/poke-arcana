import type { ReadingCard } from '../types'

interface Props {
  reading: ReadingCard
  positionLabel: string
  positionDesc: string
  index: number
  theme: 'dark' | 'light'
}

const typeColors: Record<string, string> = {
  normal: '#A8A77A', fire: '#EE8130', water: '#6390F0',
  electric: '#F7D02C', grass: '#7AC74C', ice: '#96D9D6',
  fighting: '#C22E28', poison: '#A33EA1', ground: '#E2BF65',
  flying: '#A98FF3', psychic: '#F95587', bug: '#A6B91A',
  rock: '#B6A136', ghost: '#735797', dragon: '#6F35FC',
  dark: '#705746', steel: '#B7B7CE', fairy: '#D685AD',
}



// Background colors for dark mode (darker shades)
const bgColorsDark: Record<string, string> = {
  normal: '#2a2a2a', fire: '#2a1a1a', water: '#1a1a2a',
  electric: '#2a2a1a', grass: '#1a2a1a', ice: '#1a2a2a',
  fighting: '#2a1a1a', poison: '#2a1a2a', ground: '#2a2a1a',
  flying: '#1a1a2a', psychic: '#2a1a2a', bug: '#1a2a1a',
  rock: '#2a2a1a', ghost: '#2a1a2a', dragon: '#1a1a2a',
  dark: '#1a1a1a', steel: '#1a1a2a', fairy: '#2a1a2a',
}

// Background colors for light mode (lighter shades)
const bgColorsLight: Record<string, string> = {
  normal: '#f5f5f5', fire: '#fff0e6', water: '#e6f7ff',
  electric: '#fff9e6', grass: '#f0fff4', ice: '#e6ffff',
  fighting: '#fff0f0', poison: '#f8f0ff', ground: '#fff8f0',
  flying: '#f0f5ff', psychic: '#fff0f5', bug: '#f8fff0',
  rock: '#fffaf0', ghost: '#f5f0ff', dragon: '#f0f0ff',
  dark: '#f0f0f0', steel: '#f5f5f5', fairy: '#fff8fc',
}

export function TarotCard({ reading, positionLabel, positionDesc, index, theme }: Props) {
  const { card, pokemon, reversed, loading, error } = reading

  const types = pokemon?.types ?? []
  const mainType = types[0]
  const borderColor = typeColors[mainType] ?? '#b8a07a'
  const neonColor = typeColors[mainType] ?? '#ffffff'
  const bgColor = theme === 'dark' 
    ? bgColorsDark[mainType] ?? '#1a1a1a' 
    : bgColorsLight[mainType] ?? '#f5f5f5'

  return (
    <div
      className="tarot-card"
      style={{
        '--card-accent': borderColor,
        backgroundColor: bgColor,
        boxShadow: `0 0 8px 2px ${neonColor}`,
        borderRadius: '12px',
      } as React.CSSProperties}
    >
      <div className="card-header">
        <span className="card-number">{index + 1}</span>
        <span className="card-position">{positionLabel}</span>
      </div>
      <div className="card-position-desc">{positionDesc}</div>

      <div className={`card-image ${reversed ? 'reversed' : ''}`}>
        {loading ? (
          <div className="card-loading">
            <div className="spinner" />
            <span>Cargando...</span>
          </div>
        ) : error ? (
          <div className="card-error">✨</div>
        ) : pokemon ? (
          <img src={pokemon.sprite} alt={card.pokemonName} />
        ) : (
          <div className="card-error">?</div>
        )}
      </div>

      <h2 className="card-title">
        {card.name}
        <span className="card-subtitle">{card.pokemonName}</span>
      </h2>

      {types.length > 0 && (
        <div className="card-types">
          {types.map(t => (
            <span key={t} className="type-badge" style={{ background: typeColors[t] ?? '#999' }}>
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="card-meaning">
        <span className={`meaning-badge ${reversed ? 'reversed' : 'upright'}`} style={{ background: `${borderColor}33`, color: borderColor }}>
          {reversed ? 'Invertida' : 'Recto'}
        </span>
        <p className="meaning-text">{reversed ? card.meaningReversed : card.meaning}</p>
      </div>

      {pokemon?.flavorText && (
        <p className="card-flavor">"{pokemon.flavorText}"</p>
      )}
    </div>
  )
}
