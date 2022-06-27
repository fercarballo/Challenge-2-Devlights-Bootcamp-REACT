import { useState } from "react";

/**
 * Datos validos:
 * Email: test@test.com
 * Password: test
 */

export function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleClick() {
    if (email === "test@test.com") {
      if (password === "test") {
        setError("");

        window.localStorage.setItem("isLogged", true);

        onSuccess();

        return;
      }
    }

    window.localStorage.setItem("isLogged", false);
    setError("Datos Incorrectos");
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="grid place-items-center h-screen bg-blue-400">
      <img
        className=""
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokéAPI"
      />
      <div className="mb-6 justify-center text-center">
        <p className="text-white  mb-2">Utilice: test@test.com</p>
        <label htmlFor="email" className="mb-6 text-2xl text-center">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="test@test.com"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-7"
          value={email}
          onChange={onEmailChange}
        />
        <p className="text-white mb-2">Utilice: test</p>
        <label
          htmlFor="password"
          className="LoginFormInputLabel text-2xl text-center"
        >
          Password
        </label>
        <input
          name="password"
          id="password"
          placeholder="test"
          value={password}
          type="password"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onPasswordChange}
        />
        <button
          className=" bg-yellow-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-amber-600 dark:focus:ring-amber-800 mt-7 text-blue-700 dark:hover:text-white"
          onClick={handleClick}
        >
          Ingresar
        </button>
        {error.length > 0 ? (
          <div className="LoginFormError">{error}</div>
        ) : null}
      </div>
    </div>
  );
}
