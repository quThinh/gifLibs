import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'

import image1 from './1.png'
import image2 from './2.png'
const Search = () => {
    const UserContext = createContext()
    const [hearList, setHearlist] = useState([""]);
    const [gif, setGif] = useState([]);
    const [x, setX] = useState(8);
    let query = useParams();
    useEffect(() => {
        const headuUrl = "https://api.giphy.com/v1/gifs/search?api_key=KD81Bgx4fJKD4d6SMKtivrjpEu1ZQPCM&limit="
        const tailUrl = "&offset=0&rating=g&lang=en&q=";
        const url = headuUrl + x + tailUrl;
        const api = url.concat(query.querry)
        fetch(api)
            .then(response => response.json())
            .then(content => {
                setGif(content.data)
            })
            .catch(err => {
                console.error(err);
            })

    }, [x])


    var Heart = document.querySelector('.gif-block')
    if (Heart != null) {
        Heart.addEventListener('click', heart)
        function heart(event) {
            var item = event.target;
            if(item.className === "gif-small" || item.className === "img-heart"){
                if(hearList.indexOf(item.parentElement.children[0].src) == -1){
                    setHearlist([...hearList,...item.parentElement.children[0].src]);
                    console.log(hearList)
                    // var x = document.querySelector(".gif-heart");
                    // var y = document.querySelector(".img-heart")
                    // x.removeChild(y)
                    // var z = document.createElement("img");
                    // z.src = {image1};
                    // console.log(image2);
                    // x.appendChild(z);
                }
                else{
                    hearList.pop(item.parentElement.children[0].src)
                }
            }
            console.log(hearList)
        }
    }

    if (gif.length === 0) return (
        <>
            <Outlet />
        </>
    );
    else {
        return (
            <>
                <nav className="block" >
                    <div className="gif-block">{gif.map((item) => (
                        <div className="gif-heart" key={item.images.downsized.url}>
                            <img className="gif-small" src={item.images.downsized.url}></img>
                            <img className="img-heart" src={image2} id=""></img>
                        </div>

                    ))}
                    </div>
                </nav>
                <Outlet />
                <button className="btn" onClick={() => setX(() => x + 8)}>Load more</button>
            </>
        )
    }
}
export default Search;