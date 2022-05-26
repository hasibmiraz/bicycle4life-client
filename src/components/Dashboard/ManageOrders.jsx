import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Title from '../Title/Title';
import AdminOrdersRow from './AdminOrdersRow';
import DeleteAdminOrderModal from './DeleteAdminOrderModal';

const ManageOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const {
    data: allOrders,
    isLoading,
    refetch,
  } = useQuery('admin-all-orders', () =>
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
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>User</th>
              <th>Product</th>
              <th>Order Quantity</th>
              <th>Payment Status</th>
              <th>Shipping Status</th>
              <th>Order Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {allOrders.map((order, i) => (
              <AdminOrdersRow
                key={order._id}
                i={i}
                order={order}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeleteAdminOrderModal
          refetch={refetch}
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
        />
      )}
    </div>
  );
};

export default ManageOrders;
