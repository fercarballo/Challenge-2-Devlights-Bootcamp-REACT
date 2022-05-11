import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://devlights.com/bootcamp"
          class="flex items-center mb-4 sm:mb-0"
        >
          <img
            className="mr-3 h-8"
            src="https://devlights.com/img/bootcamp/logobootcamp.svg"
            alt="Devlights-logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Devlights Bootcamp
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-white">
          <li>
            <a
              href="https://www.linkedin.com/in/fercarballo/"
              className="mr-4 hover:underline md:mr-6 cyan-500"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/fercarballo"
              className="mr-4 hover:underline md:mr-6"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://pokeapi.co/"
              className="mr-4 hover:underline md:mr-6 "
            >
              PokéAPI
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://devlights.com/bootcamp" class="hover:underline">
          Gracias por pasarte 🙂
        </a>
        . Challenge React.
      </span>
    </footer>
  );
};

export default Footer;
