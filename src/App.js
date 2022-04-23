import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./component/Search"
import Favourite from "./component/Favourite"
import Home from "./component/Home"
import './component/Search.css'
import { useEffect, useState } from 'react';


function App() {
  function unique(arr) {
    return Array.from(new Set(arr)) //
  }
  const [fact, setFact] = useState([]);
  useEffect(() => {
    var url = "https://api.giphy.com/v1/gifs/search?api_key=KD81Bgx4fJKD4d6SMKtivrjpEu1ZQPCM&limit=25&offset=0&rating=g&lang=en&q=random";
    fetch(url)
      .then(response => response.json())
      .then(content => {
        setFact([...fact, ...content.data])
      })
      .catch(err => {
        console.error(err);
      })
    
  }, [])

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="Search/:querry" element={<Search />} />
      </Route>
      <Route path="Favourite" element={<Favourite />  } />
    </Routes>
  </BrowserRouter>
);
}

export default App;
