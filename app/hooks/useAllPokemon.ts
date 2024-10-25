import { useMatch } from "@tanstack/react-router";

export const useAllPokemon = () => {
  const allPokemon = useMatch({
    from: "__root__",
    select: (data) => data.loaderData?.allPokemon,
  });

  return allPokemon;
};
