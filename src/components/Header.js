import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function onClick() {
    navigate("/login");
  }
  return (
    <header className="dark:bg-gray-800">
      <div className="text-center bg-gray-50 py-12 px-4 dark:bg-gray-800 text-cyan-500 dark:text-white">
        <h1 className="text-5xl font-bold mt-0 mb-5">Devlights Bootcamp</h1>
        <h3 className="text-3xl font-bold mb-6">
          Challenge #2 ReactJS Pokémon App
        </h3>
        <h5 className="font-medium leading-relaxed text-2xl mt-0 mb-8 text-cyan-500 dark:text-white">
          Se trata de una aplicación en la cual consumimos la API de PokéApi
          para presentar un listado de los pokémones y sus características
        </h5>
        <button
          className="inline-block px-7 py-3 bg-orange-400 text-white font-extrabold text-sm leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={onClick}
        >
          Inicia Sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
