import React from 'react';

const SingleTool = ({ part }) => {
  const { image, name, description, minOrderQty, availableQty, unitPrice } =
    part;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-72 object-cover p-6" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>
          <span className="text-orange-400 font-semibold">
            Minimum Order Quantity:
          </span>{' '}
          {minOrderQty}
        </p>
        <p>
          <span className="text-orange-400 font-semibold">
            Available Quantity:
          </span>{' '}
          {availableQty}
        </p>
        <p>
          <span className="text-orange-400 font-semibold">Unit Price:</span> $
          {unitPrice}
        </p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-400 border-none rounded hover:scale-105 duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
