import { Link } from 'react-router-dom';
import React from 'react'
import { useCharacters } from '../hooks/useCharacters';

const CharactersList = () => {
    const { error, data, loading } = useCharacters();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;


    return (
        <div className='CharacterList'>
            {data.characters.results.map(character => {
                return (
                    <Link key={character.name} to={`/${character.id}`}>
                        <img src={character.image} alt={character.name} className='img' />
                        <h2>{character.name}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default CharactersList