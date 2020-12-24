import React, { useState, useEffect } from 'react';

import '../assets/styles/GetPokemon.css';

import PokemonCards from '../components/PokemonCards';
import Loader from '../components/Loader';

const GetPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const arr = [];
  const API = 'https://pokeapi.co/api/v2/pokemon/';
  const limit = '?limit=151';

  useEffect(() => {
    fetch(`${API}${limit}`)
      .then((res) => res.json())
      .then((data) =>
        setPokemon(
          data.results.map(async (item) => {
            try {
              const response = await fetch(item.url);
              const poke = await response.json();
              arr.push(poke);
            } catch (error) {
              console.error('404');
            }

            return;
          })
        )
      );
    setDetails(arr);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className='search'>
            <input
              className='search__input'
              type='text'
              placeholder='Find your pokemon!'
            />
          </div>
          <div className='row pokemonList'>
            {details.map((item) => (
              <PokemonCards
                key={item.id}
                image={item.sprites.front_default}
                name={item.name}
              />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default GetPokemon;
