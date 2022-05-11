import React from "react";

export const Modal = ({
  id,
  titulo,
  experiencia,
  hp,
  ataque,
  defensa,
  especial,
  img,
}) => {
  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto dark:text-white"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalCenteredScrollable"
      aria-modal="true"
      role="dialog"
    >
      <div
        id={id}
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none dark:text-white"
      >
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-orange-400 bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-orange-800 rounded-t-md"></div>

          <img src="" alt="" />
          <p className="flex flex-col items-center bg-gray-500  border shadow-md md:flex-row md:max-w-xl hover:bg-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-slate-900">
            <img
              className="object-fill h-80 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mt-3 mb-3 m-5"
              src={img}
              alt="pokemon"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-orange-500 dark:text-orange-500 text-center text-4xl">
                {titulo}
              </h5>
              <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  Experiencia: {experiencia}
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  HP: {hp}
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  Ataque: {ataque}
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  Defensa {defensa}
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  Especial {especial}
                </li>
              </ul>
            </div>
          </p>
          <div
            id={id}
            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-orange-600 rounded-b-md"
          ></div>
        </div>
      </div>
    </div>
  );
};
