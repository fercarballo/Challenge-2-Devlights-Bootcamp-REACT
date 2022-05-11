import React from "react";
import { CardPokemon } from "./CardPokemon";

export const Cards = ({ results }) => {
  return (
    <ul className="grid sd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {results.map((p) => (
        <li className="flex justify-center p-2  " key={p.name}>
          <CardPokemon url={p.url} />
        </li>
      ))}
    </ul>
  );
};
