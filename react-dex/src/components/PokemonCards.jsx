import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/PokemonCards.css';

const PokemonCards = ({ name, image }) => {
  const [classOn, setClassOn] = useState(false);

  const handleOver = () => setClassOn(true);

  const handleOut = () => setClassOn(false);

  return (
    <div className='main' onMouseOver={handleOver} onMouseOut={handleOut}>
      <Link
        to={`/details/${name}/`}
        className={`${
          classOn ? 'detailsOn' : 'detailsOf'
        } text-reset text-decoration-none`}
      >
        View details
      </Link>
      <Link
        to={`/details/${name}/`}
        className='text-reset text-decoration-none'
      >
        <div>
          <img src={image} alt={name} />
          <div className='main-name'>{name}</div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCards;
