import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Modal } from "./components/Modal";
import { Landing, List, Login } from "./pages";
import NoMatch from "./pages/NoMatch";

//import Card from "./components/Card";

function App() {
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("isLogged") === "true"
  );

  function onSuccess() {
    setIsLogged(true);
  }

  function onLogout() {
    setIsLogged(false);
    window.localStorage.removeItem("isLogged");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogged ? <List onLogout={onLogout} /> : <Landing />}
        />
        {isLogged ? null : (
          <Route path="/login" element={<Login onSuccess={onSuccess} />} />
        )}

        <Route path="/pokemon" element={<Modal />} />
        {/* 404 not found / no match */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
