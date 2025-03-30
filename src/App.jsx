import React from "react";

import Home from "./components/Home";
import Show from "./components/Show";

import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="pt-[5%]  pl-[5%]  ">
      <nav className="flex justify-evenly m-4 p-2 ">
        <Link to="/home">Home</Link>
        <Link to="/show">Show</Link>
      </nav>

      <hr />

      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/show' element={<Show/>} />
      </Routes>
    </div>
  );
};

export default App;
