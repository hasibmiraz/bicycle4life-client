import React from 'react';
import Title from '../Title/Title';
import Carousel from './Carousel/Carousel';
import Tools from './Tools/Tools';

const Home = () => {
  return (
    <div>
      <Title title="Home" />
      <Carousel />
      <Tools />
    </div>
  );
};

export default Home;
