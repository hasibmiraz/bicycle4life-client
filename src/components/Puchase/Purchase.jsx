import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Title from '../Title/Title';

const Purchase = () => {
  const { partsId } = useParams();

  const { data: part, isLoading } = useQuery('single-part', () =>
    fetch(`http://localhost:5000/part/${partsId}`).then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  return (
    <div>
      <Title title={part.name} />
      <h1>{part.name}</h1>
    </div>
  );
};

export default Purchase;
