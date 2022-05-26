import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Title from '../Title/Title';

const ManageOrders = () => {
  const { data: allOrders, isLoading } = useQuery('admin-all-orders', () =>
    fetch('http://localhost:5000/all-orders', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Loading />;

  return (
    <div>
      <Title title="Manage Orders" />
      {allOrders.length}
    </div>
  );
};

export default ManageOrders;
