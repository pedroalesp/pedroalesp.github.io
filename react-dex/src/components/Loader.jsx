import React from 'react';

import '../assets/styles/loader.css';
import packmanLoader from '../assets/static/packman-loader.svg';

const Loader = () => (
  <div className='loader'>
    <img src={packmanLoader} alt='loader' />
  </div>
);

export default Loader;
