import React from 'react';

const ProductsRow = ({ product, setDeletingProduct, refetch }) => {
  const { image, name, minOrderQty, availableQty, unitPrice } = product;

  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{minOrderQty}</td>
      <td>{availableQty}</td>
      <th>${unitPrice}</th>
      <th>
        <label
          htmlFor="delete-admin-product"
          onClick={() => setDeletingProduct(product)}
          className="btn btn-outline btn-error"
        >
          Delete
        </label>
      </th>
    </tr>
  );
};

export default ProductsRow;
