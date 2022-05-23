import React from 'react';
import HomePageReviews from './HomePageReviews/HomePageReviews';
import Summary from './Summary/Summary';
import Title from '../Title/Title';
import Carousel from './Carousel/Carousel';
import Tools from './Tools/Tools';

const Home = () => {
  return (
    <div>
      <Title title="Home" />
      <Carousel />
      <Tools />
      <HomePageReviews />
      <Summary />
    </div>
  );
};

export default Home;
