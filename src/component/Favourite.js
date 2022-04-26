import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react';
import './Search.css'
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Favourite = () => {
  const [show, setShow] = useState(false);
  const SaveURL = [];
  const SaveID = [];
  for (let i = 0; i < localStorage.length; i++) {
    SaveURL.push(localStorage.getItem(localStorage.key(i)));
    SaveID.push(localStorage.key(i));
  }

  const unHeart = (event) => {
    if (localStorage.getItem(event.target.id) !== null) {
      localStorage.removeItem(event.target.id);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [show]);

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
            <FontAwesomeIcon style={{ color: "red" }} className="icon" icon="fa-solid fa-heart" />
            <Link to="/Favourite" className="texts">Favourite({localStorage.length})</Link>
          </div>
        </Link>
      </nav>
      <Alert show={show} variant="success" id="alert">
        <Alert.Heading id="alert-heading">Delete Gif successfully</Alert.Heading>
      </Alert>

      <nav className="block" >
        <div className="gif-block" >{SaveID.map((item) => (
          <div className="gif-heart" onClick={(e) => {
            unHeart(e);
            setShow(true)
          }} >
            <img className="gif-small" id={item} src={localStorage.getItem(item)}></img>
            <FontAwesomeIcon className="img-heart" size="2x" icon="fa-solid fa-heart" />
          </div>

        ))}
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Favourite;
