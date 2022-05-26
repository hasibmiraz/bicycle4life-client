import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const DeleteAdminOrderModal = ({
  deletingOrder,
  refetch,
  setDeletingOrder,
}) => {
  const { _id } = deletingOrder;
  const navigate = useNavigate();

  const confirmDelete = (_id) => {
    fetch(`https://stark-basin-34233.herokuapp.com/order/${_id}`, {
      method: 'DELETE',
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
        if (data.deletedCount) {
          toast.success(`Order deleted`);
          setDeletingOrder(null);
          refetch();
        }
      });
  };

  return (
    <>
      <input
        type="checkbox"
        id="delete-admin-order-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-orange-500">
            Are you sure you want to delete order?
          </h3>
          <p className="py-4">Once you do this, it can not be undone!</p>
          <div className="modal-action">
            <label
              className="btn btn-error rounded"
              onClick={() => confirmDelete(_id)}
            >
              Confirm
            </label>
            <label
              htmlFor="delete-admin-order-modal"
              className="btn rounded-md"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAdminOrderModal;
