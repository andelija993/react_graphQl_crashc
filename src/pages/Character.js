import "./Character.css"

import React from 'react'
import { useCharacter } from '../hooks/useCharacter'
import { useParams } from 'react-router-dom'

const Character = () => {
    const { id } = useParams();
    const { error, data, loading } = useCharacter(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    return (
        <div className="Character">
            <img src={data.character.image} alt={data.character.name} width={750} height={750} />
            <div className="Character-content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className="Character-episode">
                    {data.character.episode.map(episode => {
                        return (
                            <div className="Character-episode-item" key={episode.id}>
                                {episode.name} - <b>{episode.episode}</b>
                            </div>
                        )
                    })
                    }
                </div>

            </div>
        </div>
    )
}

export default Character