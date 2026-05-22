import { PokemonClient } from 'pokenode-ts'
import type { PokemonData } from '../types'

const api = new PokemonClient({ logs: false })

export async function fetchPokemonData(pokemonId: number): Promise<PokemonData> {
  const [species, pokemon] = await Promise.all([
    api.getPokemonSpeciesById(pokemonId),
    api.getPokemonById(pokemonId),
  ])

  const flavorText = species.flavor_text_entries
    .find((e) => e.language.name === 'es')
    ?.flavor_text
    ?.replace(/[\n\f]/g, ' ')
    ?? species.flavor_text_entries
      .find((e) => e.language.name === 'en')
      ?.flavor_text
      ?.replace(/[\n\f]/g, ' ')
    ?? ''

  return {
    sprite: pokemon.sprites.other?.['official-artwork']?.front_default
      ?? pokemon.sprites.front_default
      ?? '',
    types: pokemon.types.map((t) => t.type.name),
    flavorText,
  }
}
