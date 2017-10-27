import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => (
  <nav>
    <ul>
      <li><Link to='/'>Main</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
  </nav>
);

export default Navigator;
