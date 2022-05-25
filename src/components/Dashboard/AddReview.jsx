import React from 'react';
import ReactStars from 'react-rating-stars-component';
import Title from '../Title/Title';

const AddReview = () => {
  const ratingChanged = (newRating) => console.log(newRating);

  return (
    <div>
      <Title title="Add Review" />
      <h1 className="text-center text-2xl font-semibold text-orange-400">
        Review our service to motivate us to go on
      </h1>
      <form action="" className="flex flex-col items-center">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={48}
          activeColor="#ffd700"
        />
        <textarea
          className="textarea textarea-warning w-60 h-40 resize-none"
          placeholder="Please leave a review"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-400 w-32 mt-6 py-3 text-white rounded hover:bg-orange-500 hover:scale-105 duration-200"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
