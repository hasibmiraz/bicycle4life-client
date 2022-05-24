import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import HomePageReview from './HomePageReview';

const HomePageReviews = () => {
  const { data: reviews, isLoading } = useQuery('home-page-reviews', () =>
    fetch('https://stark-basin-34233.herokuapp.com/review').then((res) =>
      res.json()
    )
  );

  if (isLoading) return <Loading />;

  return (
    <div>
      <h2 className="text-2xl md:text-4xl text-orange-500 font-bold md:font-semibold text-center font-mono mt-16">
        Customer Satisfactions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews
          .slice(-6)
          .reverse()
          .map((review) => (
            <HomePageReview key={review._id} review={review} />
          ))}
      </div>
    </div>
  );
};

export default HomePageReviews;
