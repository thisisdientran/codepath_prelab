import { useEffect, useState } from "react";
import { supabase } from "../client.js";

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
                <div key={c.id} className="creator-card">
                    <img src={c.imageURL} alt={c.name} className="creator-image" width="200px"/>
                    <h2>{c.name}</h2>
                    <p>{c.description}</p>
                    <a href={c.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
                </div>
            ))}
        </div>
    );
}