import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async ({ name, description, img, price, aQty, mQty }) => {
    setLoading(true);
    const product = {
      name,
      description,
      image: img,
      minOrderQty: mQty,
      availableQty: aQty,
      unitPrice: price,
    };

    fetch('https://stark-basin-34233.herokuapp.com/add-product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success('Product created');
          setLoading(false);
        } else {
          toast.error('There was an error! Please try again.');
          setLoading(false);
        }
      });
    reset();
  };
  return (
    <form
      className="my-3 md:my-6 bg-base-200  w-11/12 md:w-5/6 mx-auto py-6 rounded"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl text-orange-400 text-center font-semibold">
        Create Product
      </h1>
      <div className="w-full max-w-xs mx-auto">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Product Name"
          className={`input input-bordered w-full max-w-xs ${
            errors?.name?.message ? 'input-error' : ''
          }`}
          {...register('name', {
            required: {
              value: true,
              message: 'Name is required!',
            },
          })}
        />

        <label className="label">
          {errors.name?.type === 'required' && (
            <span className="label-text-alt text-red-600">
              {errors?.name?.message}
            </span>
          )}
        </label>
      </div>

      <div className="w-full max-w-xs mx-auto">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          type="text"
          placeholder="Product description"
          className={`input input-bordered w-full max-w-xs ${
            errors?.description?.message ? 'input-error' : ''
          }`}
          {...register('description', {
            required: {
              value: true,
              message: 'Description number required!',
            },
          })}
        />
        <label className="label">
          {errors.description?.type === 'required' && (
            <span className="label-text-alt text-red-600">
              {errors?.description?.message}
            </span>
          )}
        </label>
      </div>

      <div className="w-full max-w-xs mx-auto">
        <label className="label">
          <span className="label-text">Image Url</span>
        </label>
        <input
          type="text"
          placeholder="Image url"
          className={`input input-bordered w-full max-w-xs ${
            errors?.img?.message ? 'input-error' : ''
          }`}
          {...register('img', {
            required: {
              value: true,
              message: 'Image URL is required',
            },
          })}
        />
        <p className="label">
          {errors.img?.type === 'required' && (
            <span className="label-text-alt text-red-600">
              {errors?.img?.message}
            </span>
          )}
        </p>
      </div>

      <div className="w-full max-w-xs mx-auto">
        <label className="label">
          <span className="label-text">Available Quantity</span>
        </label>
        <input
          type="number"
          placeholder="Available Quantity"
          className={`input input-bordered w-full max-w-xs ${
            errors?.aQty?.message ? 'input-error' : ''
          }`}
          {...register('aQty', {
            required: {
              value: true,
              message: 'Quantity is required',
            },
          })}
        />
        <p className="label">
          {errors.aQty?.type === 'required' && (
            <span className="label-text-alt text-red-600">
              {errors?.aQty?.message}
            </span>
          )}
        </p>
      </div>

      <div className="w-full max-w-xs mx-auto">
        <label className="label">
          <span className="label-text">Minimum Order Quantity</span>
        </label>
        <input
          type="number"
          placeholder="Available Quantity"
          className={`input input-bordered w-full max-w-xs ${
            errors?.mQty?.message ? 'input-error' : ''
          }`}
          {...register('mQty', {
            required: {
              value: true,
              message: 'Quantity is required',
            },
          })}
        />
        <p className="label">
          {errors.mQty?.type === 'required' && (
            <span className="label-text-alt text-red-600">
              {errors?.mQty?.message}
            </span>
          )}
        </p>
      </div>

      <div className="w-full max-w-xs mx-auto">
        <label className="label">
          <span className="label-text">Unit Price</span>
        </label>
        <input
          type="number"
          placeholder="Unit Price"
          className={`input input-bordered w-full max-w-xs ${
            errors?.price?.message ? 'input-error' : ''
          }`}
          {...register('price', {
            required: {
              value: true,
              message: 'Unit price is required',
            },
          })}
        />
        <p className="label">
          {errors.price?.type === 'required' && (
            <span className="label-text-alt text-red-600">
              {errors?.price?.message}
            </span>
          )}
        </p>
      </div>
      <div className="w-full max-w-xs mx-auto">
        <button
          disabled={loading}
          className={`btn rounded w-full text-white bg-orange-400 border-none mx-auto hover:scale-105 duration-200 ${
            loading && 'loading'
          }`}
          type="submit"
        >
          Create Product
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
