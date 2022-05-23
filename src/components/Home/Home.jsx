import React from 'react';
import Summary from '../Summary/Summary';
import Title from '../Title/Title';
import Carousel from './Carousel/Carousel';
import Tools from './Tools/Tools';

const Home = () => {
  return (
    <div>
      <Title title="Home" />
      <Carousel />
      <Tools />
      <Summary />
    </div>
  );
};

export default Home;
