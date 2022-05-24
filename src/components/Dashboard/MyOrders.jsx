import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Title from '../Title/Title';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/part-orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
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
              <tr>
                <td key={order._id}>{i + 1}</td>
                <td>{order.product}</td>
                <td>{order.orderQty}</td>
                <td>
                  {order.paid ? (
                    <button className="btn btn-outline btn-success" disabled>
                      Paid
                    </button>
                  ) : (
                    <button className="btn btn-outline btn-warning rounded">
                      Pay Now
                    </button>
                  )}
                </td>
                <td>
                  {order.paid ? (
                    <button className="btn" disabled>
                      Processed
                    </button>
                  ) : (
                    <button className="btn btn-outline btn-error rounded">
                      Cancel Order
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
