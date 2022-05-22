import React from 'react';

const QuestionSix = () => {
  return (
    <div className="my-5">
      <h2 className="text-lg">
        <span className="text-gray-500">Question 6:</span> What is a unit test?
        Why should we write unit tests?
      </h2>
      <p className="my-4">
        <span className="text-gray-500">Answer:</span> Unit test is a way of
        testing the smallest piece of code which can logically be differenciated
        in a system. In most of the programming languages it can be a function,
        method or anything.
      </p>
      <p>
        Before deploying the project virtually unit test helps us to know if the
        project is running perfectly as expected. By using unit tests we can
        find any kind of small bug very easily. Any kind of problem in the
        project can be identified very easily and it reduces the future cost of
        the project. Refactoring the code becomes much easier when we use small
        piece of code for unit test.
      </p>
      <hr />
    </div>
  );
};

export default QuestionSix;
