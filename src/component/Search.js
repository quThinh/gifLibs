import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { addFavourite, addSearch } from "../redux/actions";


const Search = () => {
    const [show, setShow] = useState(false);
    const [limit, setLimit] = useState(8);
    const [total, setTotal] = useState(0);
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = () => {
        navigate(`/Search/${value}`);
        setValue("");
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [show]);

    const handleInput = (e) => {
        setValue(e.target.value);
    };
    let query = useParams();

    const handleAdd = (data) => {
        dispatch(
          addSearch(data)
        );
    }
    
    const gifsFavor = useSelector((state) => state.Favor);
    const handleFavor = (dataFavor) => {
        for(var i = 0; i < gifsFavor.length; i++){
            if(gifsFavor[i].id === dataFavor.id) return;
        }
        var exchangeData = {id:dataFavor.id, url:dataFavor.images.downsized.url}
        dispatch(
            addFavourite(exchangeData)
            )
        }
        
        
        useEffect(() => {
            const headuUrl = "https://api.giphy.com/v1/gifs/search?api_key=KD81Bgx4fJKD4d6SMKtivrjpEu1ZQPCM&limit="
        const tailUrl = "&offset=0&rating=g&lang=en&q=";
        const url = headuUrl + limit + tailUrl;
        const api = url.concat(query.querry)
        fetch(api)
        .then(response => response.json())
        .then(content => {
            handleAdd(content.data)
        })
        .catch(err => {
            console.error(err);
        })
    }, [limit])
    const gifsSearch = useSelector((state) => state.Search);
    
    const heart = (event) => {
        if (event.target.id === "") {
            localStorage.setItem(event.target.farthestViewportElement.parentElement.children[0].id, event.target.farthestViewportElement.parentElement.children[0].src);
            return;
        }
        if (localStorage.getItem(event.target.id) === null) {
            localStorage.setItem(event.target.id, event.target.src);
        }
    }

    if (gifsSearch.length === 0) return null;
    else {
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
                <form onSubmit={() => handleSubmit()}>
                    <input
                        placeholder="Search for Gif..."
                        className="header-search"
                        value={value}
                        onChange={(e) => handleInput(e)}
                    />
                </form>
                <Alert show={show} variant="success" id="alert">
                    <Alert.Heading id="alert-heading">Add Gif successfully</Alert.Heading>
                </Alert>
                <nav className="block" >
                    <div className="gif-block" >{gifsSearch.map((item) => (
                        <div className="gif-heart" onClick={(event) => {
                            heart(event);
                            handleFavor(item)
                            setShow(true);
                            setTotal((e) => e+1)
                        }}>
                            <img className="gif-small" id={item.id} src={item.images.downsized.url}></img>
                            <FontAwesomeIcon className="img-heart" size="2x" icon="fa-solid fa-heart" />
                        </div>
                    ))}
                    </div>
                </nav>
                <Outlet />
                <button className="btn2" onClick={() => setLimit(() => limit+8)} >Load more</button>
            </>
        )
    }
}
export default Search;