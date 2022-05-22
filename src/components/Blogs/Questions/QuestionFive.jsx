import React from 'react';

const QuestionFive = () => {
  return (
    <div className="my-5">
      <h2 className="text-lg">
        <span className="text-gray-500">Question 5:</span> Why you do not set
        the state directly in React. For example, if you have `const [products,
        setProducts] = useState([])`. Why you do not set `products = [...]`
        instead, you use the `setProducts`?
      </h2>
      <p className="my-4">
        <span className="text-gray-500">Answer:</span> The useState hook works
        in realtime. When we want to change any value with any event the
        sometimes we need to show the value in realtime. If we don't use any
        state change the component will not re mounted. By using useState hook
        the component is re rendered and shows the result in real time. This is
        why we use the useState hook.
      </p>
      <hr />
    </div>
  );
};

export default QuestionFive;
