import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Title from '../Title/Title';
import DeleteOrderModal from './DeleteOrderModal';
import OrdersRow from './OrdersRow';

const MyOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery('orders', () =>
    fetch(
      `https://stark-basin-34233.herokuapp.com/part-orders?email=${user.email}`,
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/');
      }
      return res.json();
    })
  );

  if (isLoading || loading) return <Loading />;

  return (
    <div>
      <Title title="My Orders" />
      <h1 className="text-center text-2xl font-semibold text-orange-400">
        My orders
      </h1>
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
