import React from "react";
import { Link } from 'react-router-dom';

import ItemList from './ItemList';

const Home = () => {
  return (
    <div className="homeContent">
      <header>
        <p>Your favorite food, delivered while coding</p>
        <Link to="/pizza" id="order-pizza">Pizza?</Link>
      </header>
      <ItemList />
    </div>
  );
};

  export default Home;