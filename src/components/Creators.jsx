import {creators} from '../data/creators.js'

export default function Creators() {
    return (
        <div>
            {creators.map(c => (
                <div key={c.id} className="creator-card">
                    <img src={c.URLimage} alt={c.name} className="creator-image" />
                    <h2>{c.name}</h2>
                    <p>{c.description}</p>
                    <a href={c.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
                </div>
            ))}
        </div>
    );
}