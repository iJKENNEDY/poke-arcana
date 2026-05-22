import type { PokemonData } from '../types'

const BASE_URL = 'https://pokeapi.co/api/v2'

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`PokéAPI error: ${res.status}`)
  return res.json()
}

export async function fetchPokemonData(pokemonId: number): Promise<PokemonData> {
  const [species, pokemon] = await Promise.all([
    fetchJson<any>(`${BASE_URL}/pokemon-species/${pokemonId}`),
    fetchJson<any>(`${BASE_URL}/pokemon/${pokemonId}`),
  ])

  const flavorText = species.flavor_text_entries
    .find((e: any) => e.language.name === 'es')
    ?.flavor_text
    ?.replace(/[\n\f]/g, ' ')
    ?? species.flavor_text_entries
      .find((e: any) => e.language.name === 'en')
      ?.flavor_text
      ?.replace(/[\n\f]/g, ' ')
    ?? ''

  return {
    sprite: pokemon.sprites.other?.['official-artwork']?.front_default
      ?? pokemon.sprites.front_default,
    types: pokemon.types.map((t: any) => t.type.name),
    flavorText,
  }
}
