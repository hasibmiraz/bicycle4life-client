import React from 'react';

const OrdersRow = ({ order, i, setDeletingOrder }) => {
  const { _id, product, orderQty, paid } = order;

  return (
    <tr>
      <td key={_id}>{i + 1}</td>
      <td>{product}</td>
      <td>{orderQty}</td>
      <td>
        {paid ? (
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
          <label
            for="delete-order-modal"
            onClick={() => setDeletingOrder(order)}
            className="btn btn-outline btn-error rounded"
          >
            Cancel Order
          </label>
        )}
      </td>
    </tr>
  );
};

export default OrdersRow;
