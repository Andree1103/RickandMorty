import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import CharacterCard from './CharacterCard';

const Locations = () => {

    const [ location, setLocation] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
    const randomId = Math.floor(Math.random() * 126) +1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
        .then(res => setLocation(res.data))
    },[])

    console.log(location);

    const searchType = () =>{
        if(Number(search) < 127)
        axios.get(`https://rickandmortyapi.com/api/location/${search}/`)
            .then(res => setLocation(res.data));
    }   

    const [page, setPage] = useState(1);
    const perPage = 2


    return (
        <div className='search'>
            <input type="text" 
                placeholder='type a number'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <button onClick={searchType}>Search Location</button>
            <h1>{location.name}</h1>
            <ul className='CharacterList'>
            {
                location.residents?.map(resident => (
                    <CharacterCard resident={resident} key={resident}/>
                    
                )
                )
            }
            </ul>
        </div>
    );
};

export default Locations;