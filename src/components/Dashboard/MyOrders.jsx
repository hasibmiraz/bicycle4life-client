import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Title from '../Title/Title';
import DeleteOrderModal from './DeleteOrderModal';
import OrdersRow from './OrdersRow';

const MyOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery('orders', () =>
    fetch(
      `https://stark-basin-34233.herokuapp.com/part-orders?email=${user.email}`
    ).then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  return (
    <div>
      <Title title="My Orders" />
      <div className="overflow-x-auto mx-auto mt-6">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Product Name</th>
              <th>Ordered Quantity</th>
              <th>Payment Status</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {orders.map((order, i) => (
              <OrdersRow
                key={order._id}
                order={order}
                i={i}
                setDeletingOrder={setDeletingOrder}
              />
            ))}
          </tbody>
        </table>
        {deletingOrder && (
          <DeleteOrderModal
            deletingOrder={deletingOrder}
            setDeletingOrder={setDeletingOrder}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
