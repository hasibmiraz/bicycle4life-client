import React from 'react';
import Title from '../Title/Title';

const Loading = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <Title title="Loading..." />
      <div
        style={{ borderTopColor: 'transparent' }}
        className="w-40 h-40 border-4 border-orange-400 border-dotted rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loading;
