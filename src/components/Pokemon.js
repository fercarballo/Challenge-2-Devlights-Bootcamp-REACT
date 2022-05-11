import React, { useState } from "react";
import { useFetch } from "../pages/services/useFetch";
import { Cards } from "../pages/Cards/Cards";
import Footer from "./Footer";

const Pokemon = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const state = useFetch(url);
  const { loading, data } = state;
 

  return (
    <div className="">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <Cards results={data.results} />

          <div className="mt-12 h-58 grid grid-cols-2 gap-12 content-start">
            <button onClick={() => setUrl(data.previous)} className="inline-block px-6 py-4 mb-9 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Anterior
            </button>
            <button onClick={() => setUrl(data.next)} className="inline-block px-6 py-4 mb-9 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Siguiente
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Pokemon;
