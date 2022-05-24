import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const HomePageReview = ({ review }) => {
  const { image, name, description, rating } = review;
  return (
    <div className="mx-auto w-11/12 md:w-3/4">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-orange-500"
            alt=""
            src={image}
          />
        </div>
        <div>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            {[...Array(rating)].map((elementInArray, i) => (
              <AiFillStar
                key={i}
                className="inline-block text-xl text-orange-600"
              />
            ))}
            {[...Array(5 - rating)].map((elementInArray, i) => (
              <AiOutlineStar
                key={i}
                className="inline-block text-xl text-orange-600"
              />
            ))}
          </div>
          <p className="text-xl font-medium text-indigo-500">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageReview;
