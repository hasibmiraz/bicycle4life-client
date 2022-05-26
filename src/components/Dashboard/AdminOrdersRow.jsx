import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AdminOrdersRow = ({ i, order, refetch, setDeletingOrder }) => {
  const { _id, name, product, orderQty, paid, shipped } = order;
  const navigate = useNavigate();

  const shipOrder = () => {
    fetch(`https://stark-basin-34233.herokuapp.com/order/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem('accessToken');
          signOut(auth);
          navigate('/');
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount) {
          toast.success(`Order shipped`);
          refetch();
        } else {
          toast.error('There was an error!');
        }
      });
  };

  return (
    <tr>
      <th>{i + 1}</th>
      <td>{name}</td>
      <td>{product}</td>
      <td>{orderQty}</td>
      <td>
        {paid ? (
          <p className="bg-green-500 px-5 py-3 text-white w-full md:w-1/2 text-center rounded">
            Paid
          </p>
        ) : (
          <p className="bg-red-500 px-5 py-3 text-white w-full md:w-3/4 text-center rounded">
            Unpaid
          </p>
        )}
      </td>
      <td>
        {(!paid && !shipped && (
          <p className="bg-yellow-400 px-5 py-3 text-white w-full md:w-3/4 text-center rounded">
            Payment Pending
          </p>
        )) ||
          (paid && !shipped && (
            <button className="btn btn-outline btn-warning" onClick={shipOrder}>
              Ship now
            </button>
          )) ||
          (paid && shipped && (
            <p className="bg-green-500 px-5 py-3 text-white w-full md:w-1/2 text-center rounded">
              Shipped
            </p>
          ))}
      </td>
      <td>
        {!shipped ? (
          <p className="text-yellow-600 text-lg font-semibold">Pending</p>
        ) : (
          <p className="text-green-600 text-lg font-semibold">Processed</p>
        )}
      </td>
      <td>
        <label
          htmlFor="delete-admin-order-modal"
          className="btn btn-outline btn-error rounded"
          onClick={() => setDeletingOrder(order)}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default AdminOrdersRow;
