import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons'
library.add(fas, faFontAwesome)
const Home = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate(`/Search/${value}`);
        setValue("");
    };
    const handleInput = (e) => {
        setValue(e.target.value);
    };
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
            <Outlet />
        </>
    )
}
export default Home;