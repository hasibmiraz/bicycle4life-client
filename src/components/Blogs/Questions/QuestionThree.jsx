import React from 'react';

const QuestionThree = () => {
  return (
    <div className="my-5">
      <h2 className="text-lg">
        <span className="text-gray-500">Question 3:</span> How does prototypical
        inheritance work?
      </h2>
      <p className="my-4">
        <span className="text-gray-500">Answer:</span> After the update in ES6
        javascript uses prototypical inheritence. Which means the methods can be
        copied, shared and extended. Prototypical inheritence means ability to
        access object properties from another object. Javascript prototype is
        used to add new properties or methods to an existing object. It helps us
        to reuse the properties or methods from one javascript object to another
        object through a reference pointer fuction.
        <br />
      </p>
      <hr />
    </div>
  );
};

export default QuestionThree;
