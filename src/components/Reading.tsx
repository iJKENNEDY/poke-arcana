import { TarotCard } from './TarotCard'
import type { ReadingCard } from '../types'

interface Props {
  cards: ReadingCard[]
  positions: { key: string; label: string; description: string }[]
  theme: 'dark' | 'light'
}

export function Reading({ cards, positions, theme }: Props) {
  return (
    <div className="reading">
      <div className="reading-spread">
        {cards.map((rc, i) => (
          <TarotCard
            key={`${rc.card.id}-${i}`}
            reading={rc}
            positionLabel={positions[i].label}
            positionDesc={positions[i].description}
            index={i}
            theme={theme}
          />
        ))}
      </div>
    </div>
  )
}
