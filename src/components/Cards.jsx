import { useEffect, useState } from "react";
import { supabase } from "../client.js";
import { Link } from "react-router-dom"
import instaIcon from "../assets/insta.svg";
import ytbIcon from "../assets/ytb.svg";
import twitterIcon from "../assets/twitter.svg";
import infoIcon from "../assets/info.svg";
import editIcon from "../assets/edit.svg";


export default function Cards() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {

        async function fetchCreators() {
            const { data, error } = await supabase
                .from("creators")
                .select();

            if (error){
                console.log("Can't fetch the data")
                return ;
            }
            
            console.log("Fetched the data", data)
            setCreators(data)
        }

        fetchCreators(); // IMPORTANT: call it
    
    }, []);
    
    return (
        <article className="cards-container">
            {creators.map(c => (
                <div key={c.id} className="creator-card" style={{backgroundImage: `url(${c.imageURL})`}}>
                    <div className="creator-card-overlay">
                        <nav className="creator-nav">
                            <ul>
                                <li>
                                    <Link to={`/creator/${(c.id)}`}>
                                        <h2>{c.name}</h2>
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to={`/creator/${c.id}`}>
                                        <img src={infoIcon} width="30" className="make-white"/>
                                    </Link>
                                    <Link to={`/creator/${c.id}/edit`}>
                                        <img src={editIcon} width="30" className="make-white"/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className="creator-nav-2">
                            <ul>
                                <li>
                                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                                        <img src={instaIcon} width="36"/>
                                    </a>
                                </li>
                                <li>
                                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                                        <img src={ytbIcon} width="36"/>
                                    </a>
                                </li>
                                <li>
                                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                                        <img src={twitterIcon} width="36"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <p className="card-description">{c.description}</p>
                    </div>
                </div>
            ))}
        </article>
    );
}