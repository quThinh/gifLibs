import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import './Search.css'
import {useSelector, useDispatch} from 'react-redux'
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addFavourite, removeFavourite } from "../redux/actions";

const Favourite = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const gifsFavor = useSelector((state) => state.Favor);

    if(gifsFavor.length === 0 && localStorage.length !== 0){
      for(let i = 0; i < localStorage.length; i++){
        let localFavorKey = localStorage.key(i);
        let localFavorvalue = localStorage.getItem(localStorage.key(i));
        let localFavor = {id:localFavorKey, url:localFavorvalue }
        dispatch(addFavourite(localFavor));
      }
    }

  const unHeart = (event) => {
    for(let i = 0; i < gifsFavor.length; i++){
      if(gifsFavor[i].id === event.target.id) gifsFavor.splice(i,1);
    }
    if (event.target.id === "") {
      localStorage.removeItem(event.target.farthestViewportElement.parentElement.children[0].id, event.target.farthestViewportElement.parentElement.children[0].src);
      return;
    }
    if (localStorage.getItem(event.target.id) !== null) {
      localStorage.removeItem(event.target.id);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 200);
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
        <div className="gif-block" >{gifsFavor.map((item) => (
          <div className="gif-heart" onClick={(e) => {
            unHeart(e);
            setShow(true)
          }} >
            <img className="gif-small" id={item.id} src={item.url}></img>
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
