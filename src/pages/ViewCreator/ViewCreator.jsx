import { useEffect, useState } from "react";
import { supabase } from "../../client.js";
import { useParams, Link, useNavigate,} from "react-router-dom";
import ReactDOM from 'react-dom';
import instaIcon from "../../assets/insta.svg";
import ytbIcon from "../../assets/ytb.svg";
import twitterIcon from "../../assets/twitter.svg";

export default function ViewCreator() {
    const [creator, setCreator] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

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
      setShowModal(false);
    return navigate("/");
  }

    return (
        <>
            <article className="card-view-creator">
                <div key={creator.id} className="creator-img" style={{backgroundImage: `url(${creator.imageURL})`}}>
                    {/* <img src={creator.imageURL} alt={creator.name} style={{maxWidth: '300px'}} /> */}
                </div>
                <div className="view-creator-description">
                    <h2>{creator.name}</h2>
                    <p>{creator.description}</p>
                    <nav>
                        <ul>
                            <li>
                                <Link to={`/creator/${creator.id}`}>
                                    <img src={ytbIcon} width="40"/>
                                </Link>
                            </li>
                            <li>
                                <h4 className="social-icon">@{creator.name}</h4>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li>
                                <Link to={`/creator/${creator.id}`}>
                                    <img src={twitterIcon} width="40"/>
                                </Link>
                            </li>
                            <li>
                                <h4 className="social-icon">@{creator.name}</h4>
                            </li>
                        </ul>
                    </nav>
                                        <nav>
                        <ul>
                            <li>
                                <Link to={`/creator/${creator.id}`}>
                                    <img src={instaIcon} width="40"/>
                                </Link>
                            </li>
                            <li>
                                <h4 className="social-icon">@{creator.name}</h4>
                            </li>
                        </ul>
                    </nav>
                </div>
            </article>
            <div className="view-creator-buttons">
                <Link to={`/creator/${id}/edit`}>
                    <button>Edit creator</button>
                </Link>
                <button className="secondary-delete" onClick={() => setShowModal(true)}>
                        Delete Creator
                </button>

                {showModal && (
                    <dialog open>
                    <article className="dialog-creator">
                        <h2>WAIT!!!</h2>
                        <p>Are you sure you want to delete {creator.name}?</p>

                        <footer className="view-creator-buttons">
                        <button
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>

                        <button className="secondary-delete" onClick={handleSubmit}>
                            Delete
                        </button>
                        </footer>
                    </article>
                    </dialog>
                    )}            
            </div>
        </>
        
    );
}