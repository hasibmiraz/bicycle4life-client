import React from 'react';
import { toast } from 'react-toastify';

const DeleteAdminProduct = ({
  deletingProduct,
  refetch,
  setDeletingProduct,
}) => {
  const { _id, name } = deletingProduct;
  const handleDelete = (id) => {
    fetch(`https://stark-basin-34233.herokuapp.com/product/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success('Product deleted successfully!');
          setDeletingProduct(null);
          refetch();
        }
      });
  };

  return (
    <>
      <input
        type="checkbox"
        id="delete-admin-product"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-orange-500">
            Are you sure you want to delete {name}'s order?
          </h3>
          <p className="py-4">Once you do this, it can not be undone!</p>
          <div className="modal-action">
            <label
              className="btn btn-error rounded"
              onClick={() => handleDelete(_id)}
            >
              Confirm
            </label>
            <label htmlFor="delete-admin-product" className="btn rounded-md">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAdminProduct;
