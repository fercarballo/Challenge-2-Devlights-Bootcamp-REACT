import { useState } from "react";

/**
 * Datos validos:
 * Email: test@test.com
 * Password: test
 */

export function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleClick() {
    if (email === "test@test.com") {
      if (password === "test") {
        setError("");

        window.localStorage.setItem("isLogged", true);
        
        onSuccess();

        return ;
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
    <img className="" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokéAPI" />
      <div className="mb-6">
        <label htmlFor="email" className="mb-6">Email</label>
        <input name="email" id="email" type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-7" value={email} onChange={onEmailChange} />
        <label htmlFor="password" className="LoginFormInputLabel">Password</label>
        <input name="password" id="password" value={password} type="password" className=" bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onPasswordChange} />
        <button className="text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-700 dark:focus:ring-amber-800 mt-7" onClick={handleClick}>Ingresar</button>
        {error.length > 0 ? (
          <div className="LoginFormError">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  )
}
