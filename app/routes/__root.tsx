// app/routes/__root.tsx
import { createRootRoute, Link } from "@tanstack/react-router";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import { getAllPokemon } from "../fetch/pokemon";
import { useAllPokemon } from "../hooks/useAllPokemon";

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "TanStack Start Starter",
    },
  ],
  component: RootComponent,

  loader: async () => ({
    allPokemon: await getAllPokemon(),
  }),
});

function RootComponent() {
  const allPokemon = useAllPokemon();
  return (
    <RootDocument>
      {allPokemon?.map((pokemon) => {
        return (
          <div>
            <Link to="/pokemon/$id" params={{ id: pokemon.name }}>
              {pokemon.name}
            </Link>
          </div>
        );
      })}
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
