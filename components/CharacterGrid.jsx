import React, {Component} from 'react';
import Link from 'next/link';


class CharacterGrid extends Component {
    render() {
        const { characters }  = this.props
        return (
            <div className="characters">
                { characters.map((character) => (
                    <a className="character" key={character.id}>
                        <img src={character.image} alt="character image"></img>
                        <h2>{character.name}</h2>
                    </a>
                ))}
                <Link href="/about">
                    <a>About this</a>
                </Link>
                <style jsx>{`
                    .characters {
                        display:grid;
                        grid-gap: 15px;
                        padding:15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }

                    a.character {
                        display: block;
                        margin-bottom: 0.5em;
                        color: #333;
                        text-decoration: none;
                    }

                    .character img {
                        border-radius: 3px;
                        box-shadow: 0px, 2px, 6px rgba(0,0,0,0.15);
                        width:100%;
                    }

                    h2{
                        padding: 5px;
                        font-size:0.9em;
                        font-weight:600;
                        margin:0;
                        text-align:center;
                    }
                `}</style>
            </div>
        )
    }
}

export default CharacterGrid