import React, { useState } from "react";

const Login = () => {
  //state iniciar sesión
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //extraer user
  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //inicio de sesion del user
  const onSubmit = (e) => {
    e.preventDefault();

    //validar campos vacios

    //enviarlo/pasarlo a action
  };

  return (
    <div className="grid place-items-center h-screen bg-orange-400">
    <img className="" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokéAPI" />
      <form onSubmit={onSubmit}>
        <div className="mb-6 pb-6">
          <label
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-amber-50"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={onChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-amber-50"
            htmlFor="email"
          >
            Password
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <input type="submit" className="" value="Iniciar Sesión" />
        </div>
      </form>
    </div>
  );
};

export default Login;
