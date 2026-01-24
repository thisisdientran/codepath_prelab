import { useEffect, useState } from "react";
import { supabase } from "../client.js";
import { useRoutes, Link } from "react-router-dom"

export default function Cards() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        async function fetchCreators() {
        const { data, error } = await supabase
            .from("creators")
            .select("*");

        if (!error) setCreators(data);
        }

        fetchCreators(); // IMPORTANT: call it
    }, []);
    
    return (
        <div className="cards-container">
            {creators.map(c => (
                <div key={c.id} className="creator-card" style={{backgroundImage: `url(${c.imageURL})`}}>
                    <div className="creator-card-overlay">
                    <Link to={`/creator/${(c.id)}`}>
                        <h2>{c.name}</h2>
                    </Link>
                    <p>{c.description}</p>
                    <a href={c.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </div>
                </div>
            ))}
        </div>
    );
}