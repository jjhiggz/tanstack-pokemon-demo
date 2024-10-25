import { Pokemon, PokemonOffIndex } from "./types";

export const getSinglePokemon = (name: string): Promise<Pokemon> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
    res.json()
  );
};

export const getAllPokemon = async (): Promise<PokemonOffIndex[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return data.results;
};
