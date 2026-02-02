import { useEffect, useState } from "react";
import { supabase } from "../../client.js";
import { useParams, Link } from "react-router-dom";

export default function ViewCreator() {
    const [creator, setCreator] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchCreator() {
        const { data, error } = await supabase
            .from("creators")
            .select("*")
            .eq("id", id)
            .single();

        if (!error) setCreator(data);
        }

        fetchCreator(); // IMPORTANT: call it
    }, [id]);

    if (!creator) return <p>Loading...</p>;

    return (
    <div>
        <h1>ViewCreator Page</h1>
        <img src={creator.imageURL} alt={creator.name} style={{maxWidth: '300px'}} />
        <p>Name: {creator.name}</p>
        <p>{creator.description}</p>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
        <br></br>
        <Link to="/">Back to Home</Link>
    </div>
        
    );
}