import React from 'react';

const Tools = () => {
  return (
    <>
      <h2 className="text-center text-2xl md:text-4xl font-mono font-semibold text-orange-500 my-6">
        Available Parts
      </h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://static-01.daraz.com.bd/p/974ae9b06aacf4a5b0224d97d29fcc21.jpg"
            alt="Shoes"
            className="w-full h-72 object-cover p-6"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
