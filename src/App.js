import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./component/Search"
import Favourite from "./component/Favourite"
import Home from "./component/Home"
import './component/Search.css'
// import { useDispatch, useSelector } from 'react-redux';

function App() {
  return (
    <>
    {/* {data.num}
    <button onClick={() => Change()} >Click here</button> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Search/:querry" element={<Search />} />
        <Route path="Favourite" element={<Favourite />} />
      </Routes>
    </BrowserRouter></>
    
  );
}
// const mapStateToProps = (state) => {
//   return {data : state}
// }

// const mapDispatchToProps = (dispatch) => {
//   console.log(store1.getState())
//   return {
//     change : () => {
//       console.log(store1.getState())
//       dispatch({type: "CHANGE"})
//     }
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)
export default App

