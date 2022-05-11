import React from "react";
import Pokemon from "../../components/Pokemon";

const List = ({ onLogout }) => {
  return (
    <div className="flex flex-col-reverse dark:bg-gray-800">
      <div className="flex justify-center">
        <Pokemon />
      </div>
      <button className="inline-block py-6 mb-14 bg-orange-400 text-white font-extrabold text-sm leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default List;
