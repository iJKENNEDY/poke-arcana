export interface TarotCard {
  id: number
  name: string
  arcana: 'major' | 'minor'
  pokemonId: number
  pokemonName: string
  meaning: string
  meaningReversed: string
  description: string
  element?: string
}

export interface PokemonData {
  sprite: string
  types: string[]
  flavorText: string
}

export interface ReadingCard {
  card: TarotCard
  pokemon: PokemonData | null
  reversed: boolean
  position: string
  loading: boolean
  error: boolean
}

export type SpreadPosition = {
  key: string
  label: string
  description: string
}
