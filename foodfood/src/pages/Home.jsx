import React from "react";
import Card from '../components/Card.jsx'
import Carousel from "../components/Carousel.jsx";

const Home = () => {
  return (
    <div>
      <div className="my-3 mx-3">
        <Carousel />
        <Card />
      </div>
    </div>
  );
};

export default Home;
