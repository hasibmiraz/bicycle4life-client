import React from 'react';

const QuestionFour = () => {
  return (
    <div className="my-5">
      <h2 className="text-lg">
        <span className="text-gray-500">Question 4:</span> You have an array of
        products. Each product has a name, price, description, etc. How will you
        implement a search to find products by name?
      </h2>
      <p className="my-4">
        <span className="text-gray-500">Answer:</span> To find a product by it's
        name from it's array we must use a query parameter and useEffect and
        useState hook. By using the useState hook we can put the result in an
        object. And by using useEffect hook we can use query parameter to fetch
        the product from a database system. By this we can implement search
        method from an array of products by it's name.
      </p>
      <hr />
    </div>
  );
};

export default QuestionFour;
