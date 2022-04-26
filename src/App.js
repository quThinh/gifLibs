import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./component/Search"
import Favourite from "./component/Favourite"
import Home from "./component/Home"
import './component/Search.css'
import { useEffect, useState } from 'react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Search/:querry" element={<Search />} />
        <Route path="Favourite" element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
