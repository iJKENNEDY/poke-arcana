import { useState, useCallback } from 'react'
import type { ReadingCard } from '../types'
import { majorArcana } from '../data/majorArcana'
import { fetchPokemonData } from '../services/pokeApi'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const positions = [
  { key: 'past', label: 'Pasado', description: 'Lo que te ha traído hasta aquí' },
  { key: 'present', label: 'Presente', description: 'El momento actual' },
  { key: 'future', label: 'Futuro', description: 'Hacia dónde te diriges' },
]

export function useTarot() {
  const [cards, setCards] = useState<ReadingCard[]>([])
  const [drawn, setDrawn] = useState(false)
  const [drawing, setDrawing] = useState(false)

  const draw = useCallback(async () => {
    setDrawing(true)
    setDrawn(false)

    const selected = shuffle(majorArcana).slice(0, 3)
    const initial: ReadingCard[] = selected.map((card, i) => ({
      card,
      pokemon: null,
      reversed: Math.random() < 0.3,
      position: positions[i].label,
      loading: true,
      error: false,
    }))
    setCards(initial)

    const results = await Promise.allSettled(
      selected.map(c => fetchPokemonData(c.pokemonId))
    )

    setCards(
      initial.map((rc, i) => ({
        ...rc,
        pokemon: results[i].status === 'fulfilled' ? results[i].value : null,
        loading: false,
        error: results[i].status === 'rejected',
      }))
    )

    setDrawing(false)
    setDrawn(true)
  }, [])

  const reset = useCallback(() => {
    setCards([])
    setDrawn(false)
  }, [])

  return { cards, drawn, drawing, draw, reset, positions }
}
