import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Title from '../Title/Title';

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleRating = (e) => {
    setLoading(true);
    e.preventDefault();
    const review = {
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
      rating,
      description: e.target.review.value,
    };

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success('Review submitted!');
          setLoading(false);
        } else {
          toast.error('There was an error! Please try again.');
          setLoading(false);
        }
      });
  };

  return (
    <div>
      <Title title="Add Review" />
      <h1 className="text-center text-2xl font-semibold text-orange-400">
        Review our service to motivate us to go on
      </h1>
      <form onSubmit={handleRating} className="flex flex-col items-center">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={48}
          activeColor="#ff6600"
        />
        <textarea
          name="review"
          className="textarea textarea-warning w-60 h-40 resize-none"
          placeholder="Please leave a review"
        ></textarea>
        <button
          disabled={loading}
          type="submit"
          className={`bg-orange-400 w-32 mt-6 py-3 text-white rounded hover:bg-orange-500 hover:scale-105 duration-200 ${
            loading && 'loading'
          }`}
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
