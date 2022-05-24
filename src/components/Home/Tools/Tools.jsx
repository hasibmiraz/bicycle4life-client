import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import SingleTool from './SingleTool';

const Tools = () => {
  const { data: parts, isLoading } = useQuery('home-page-products', () =>
    fetch('https://stark-basin-34233.herokuapp.com/part').then((res) =>
      res.json()
    )
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <h2 className="text-center text-2xl md:text-4xl font-mono font-semibold text-orange-500 my-6 mx-2 md:mx-6">
        Available Parts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {parts
          .slice(-6)
          .reverse()
          .map((part) => (
            <SingleTool key={part._id} part={part} />
          ))}
      </div>
    </>
  );
};

export default Tools;
