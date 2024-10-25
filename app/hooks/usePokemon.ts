import { useMatch } from "@tanstack/react-router";

export const usePokemon = () => {
  const pokemon = useMatch({
    from: "/pokemon/$id",
    select: (data) => data.loaderData,
  });

  return pokemon;
};
