import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
  const { _id, product } = deletingOrder;

  const handleDelete = (id) => {
    fetch(`https://stark-basin-34233.herokuapp.com/part/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success('Order was deleted successfully!');
          setDeletingOrder(null);
          refetch();
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-orange-500">
            Are you sure you want to delete {product}'s order?
          </h3>
          <p className="py-4">Once you do this, it can not be undone!</p>
          <div className="modal-action">
            <label
              className="btn btn-error rounded"
              onClick={() => handleDelete(_id)}
            >
              Confirm
            </label>
            <label htmlFor="delete-order-modal" className="btn rounded-md">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteOrderModal;
