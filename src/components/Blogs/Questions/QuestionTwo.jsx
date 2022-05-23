import React from 'react';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';

const QuestionTwo = () => {
  return (
    <div className="my-5">
      <h2 className="text-lg">
        <span className="text-gray-500">Question 2:</span> What are the
        different ways to manage a state in a React application?
      </h2>
      <p className="my-4">
        <span className="text-gray-500">Answer:</span> There are mainly four
        types of states to manage react states
        <br />
      </p>
      <ul className="list-none mb-4">
        <li>
          <RiNumber1 className="inline-block" /> Local state
        </li>
        <li>
          <RiNumber2 className="inline-block" /> Global state
        </li>
        <li>
          <RiNumber3 className="inline-block" /> Server state
        </li>
        <li>
          <RiNumber4 className="inline-block" /> URL State
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default QuestionTwo;
