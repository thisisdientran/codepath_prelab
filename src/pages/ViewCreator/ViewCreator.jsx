import { useEffect, useState } from "react";
import { supabase } from "../../client.js";
import { useParams, Link, useNavigate,} from "react-router-dom";
import ReactDOM from 'react-dom';

export default function ViewCreator() {
    const [creator, setCreator] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCreator() {
            const { data, error } = await supabase
                .from("creators")
                .select()
                .eq("id", id)
                .single();

            console.log("Fetch single creators", data);
            
            setCreator(data);

            if(error){
                console.log("Failed fetch single creator")
                return;
            }
        }

        fetchCreator(); // IMPORTANT: call it
    }, [id]);

    if (!creator) return <p>Loading...</p>;


    async function handleSubmit(e) {
    e.preventDefault();

    await supabase
      .from("creators")
      .delete()
      .eq("id", id);

    alert("Creator deleted!");
    return navigate("/");
    // navigate(`/creator/${id}`);
  }

    return (
    <div>
        <h1>ViewCreator Page</h1>
        <img src={creator.imageURL} alt={creator.name} style={{maxWidth: '300px'}} />
        <p>Name: {creator.name}</p>
        <p>{creator.description}</p>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
        <br></br>
        <Link to={`/creator/${id}/edit`}>Edit Creator</Link>
        <br></br>
        <Link to="/">Back to Home</Link>
        <button onClick = {handleSubmit}>Delete creator</button>
    </div>
        
    );
}