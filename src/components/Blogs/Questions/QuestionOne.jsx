import React from 'react';
import { FcAdvance } from 'react-icons/fc';

const QuestionOne = () => {
  return (
    <div className="my-5">
      <h2 className="text-lg">
        <span className="text-gray-500">Question 1:</span> How will you improve
        the performance of a React Application?
      </h2>
      <p className="text-gray-500">Answer:</p>
      <ul className="list-none my-4">
        <li>
          <FcAdvance className="inline-block" /> Keeping the component locally
          where necessary
        </li>
        <li>
          <FcAdvance className="inline-block" /> Using lazy loading for images
        </li>
        <li>
          <FcAdvance className="inline-block" /> Using React.memo for
          memorization of components
        </li>
        <li>
          <FcAdvance className="inline-block" /> Virtualizing a large list using
          react-window
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default QuestionOne;
