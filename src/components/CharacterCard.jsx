import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const CharacterCard = ({resident}) => {

    const [character, setCharacter] = useState();

    
    useEffect(() => {
        axios.get(resident)
            .then(res => setCharacter(res.data));
    }, []);


    console.log(character);

    return (
        <div className='column'>
            <div className='CharacterCard'>
                <li key={resident}> 
                    {character?.name} <br /> { " " } <br />
                    <img src={character?.image} alt="" />
                </li>
            </div>
        </div>
    );
};

export default CharacterCard;