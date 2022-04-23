import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'
const Favourite = () => {
  return (
    <>
      <nav className="block-up">
        <Link to="/">
          <div className="square">
            <FontAwesomeIcon className="icon" icon="fa-solid fa-magnifying-glass" />
            <Link to="/" className="texts">Search</Link>
          </div>
        </Link>

        <Link to="/Favourite">
          <div className="square">
            <FontAwesomeIcon style={{color:"red"}} className="icon" icon="fa-solid fa-heart" />
            <Link to="/Favourite" className="texts">Favourite</Link>
          </div>
        </Link>
          
      </nav>
      <Outlet />
    </>
  )
};

export default Favourite;
