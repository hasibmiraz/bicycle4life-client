import React from 'react';
import Title from '../Title/Title';
import QuestionFive from './Questions/QuestionFive';
import QuestionFour from './Questions/QuestionFour';
import QuestionOne from './Questions/QuestionOne';
import QuestionSix from './Questions/QuestionSix';
import QuestionThree from './Questions/QuestionThree';
import QuestionTwo from './Questions/QuestionTwo';

const Blogs = () => {
  return (
    <>
      <Title title="Blogs" />
      <div className="w-full md:w-3/4 px-2 md:mx-auto">
        <h1 className="text-center text-3xl mt-5">Question & Answer</h1>
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
        <QuestionFour />
        <QuestionFive />
        <QuestionSix />
      </div>
    </>
  );
};

export default Blogs;
