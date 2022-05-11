import React from "react";
import { Modal } from "../../components/Modal";
import { useFetch } from "../services/useFetch";

export const CardPokemon = ({ url }) => {
  const state = useFetch(url);
  const { loading, data } = state;

  return (
    <div className="flex justify-center p-2 max-w-lg max-h-md cursor-pointer ">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div
          className="max-w-lg max-h-md "
          data-bs-toggle="modal"
          data-bs-target={`#id${data.id}`}
        >
          <div className="border-double border-4 border-orange-500 rounded-lg shadow-lg flex flex-wrap justify-center ">
            <img
              src={data.sprites.front_default}
              className="p-1 rounded max-w-sm"
              alt="pokemon icon"
            />

            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-1">
                {data.forms[0].name}
              </h5>
              <p className="text-gray-700 text-base mb-2">ID: {data.id}</p>
            </div>
          </div>
          <Modal
            id={`id${data.id}`}
            titulo={data.name}
            experiencia={data?.stats[1]?.base_stat}
            hp={data.stats[0].base_stat}
            ataque={data.stats[1].base_stat}
            defensa={data.stats[2].base_stat}
            especial={data.stats[3].base_stat}
            img={data.sprites.other.dream_world.front_default}
          />
        </div>
      )}
    </div>
  );
};
