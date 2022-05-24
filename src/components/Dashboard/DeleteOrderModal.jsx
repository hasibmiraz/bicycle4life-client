import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
  const { _id, product } = deletingOrder;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/part/${id}`, {
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
      <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-orange-500">
            Are you sure you want to delete {product}'s order?
          </h3>
          <p class="py-4">Once you do this, it can not be undone!</p>
          <div class="modal-action">
            <label
              className="btn btn-error rounded"
              onClick={() => handleDelete(_id)}
            >
              Confirm
            </label>
            <label for="delete-order-modal" class="btn rounded-md">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteOrderModal;
