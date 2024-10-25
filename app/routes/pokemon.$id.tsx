import { createFileRoute } from "@tanstack/react-router";
import { getSinglePokemon } from "../fetch/pokemon";
import { usePokemon } from "../hooks/usePokemon";

export const getIdFromUrl = (url: string) => url.split("/").pop();

export const Route = createFileRoute("/pokemon/$id")({
  component: () => <ShowPokemon />,
  loader: async ({ params }) => {
    const id = params.id;
    const pokemon = await getSinglePokemon(id);
    return pokemon;
  },
});

const ShowPokemon = () => {
  const pokemon = usePokemon();

  return (
    <>
      <h1>Show Pokemon</h1>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
    </>
  );
};
