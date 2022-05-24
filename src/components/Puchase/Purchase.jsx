import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Title from '../Title/Title';

const Purchase = () => {
  const { partsId } = useParams();
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: part, isLoading } = useQuery('single-part', () =>
    fetch(`https://stark-basin-34233.herokuapp.com/part/${partsId}`).then(
      (res) => res.json()
    )
  );

  const onSubmit = async ({ address, phone, orderQty }) => {
    setLoading(true);
    const order = {
      name: user.displayName,
      email: user.email,
      product: part.name,
      address,
      phone,
      orderQty,
      paid: false,
    };

    fetch('http://localhost:5000/part', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success('Order confirmed!');
          setLoading(false);
        } else {
          toast.error('There was an error! Please try again.');
          setLoading(false);
        }
      });
    reset();
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <Title title={part.name} />
      <h1 className="text-3xl font-bold font-mono text-center text-orange-500 my-3 md:my-6">
        Purchase {part.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="card lg:card-side bg-base-200 shadow-xl my-8 col-span-1 md:col-span-2 w-11/12 md:w-3/4 mx-auto p-3 md:p-5">
          <figure className="w-1/2">
            <img
              src={part.image}
              alt="Album"
              className="rounded-md w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{part.name}</h2>
            <div className="space-y-6">
              <p className="text-lg">{part.description}</p>
              <p>
                <span className="text-orange-400 font-semibold">
                  Minimum Order Quantity:
                </span>{' '}
                {part.minOrderQty}
              </p>
              <p>
                <span className="text-orange-400 font-semibold">
                  Available Quantity:
                </span>{' '}
                {part.availableQty}
              </p>
              <p>
                <span className="text-orange-400 font-semibold">
                  Unit Price:
                </span>{' '}
                ${part.unitPrice}
              </p>
            </div>
          </div>
        </div>
        {/* second column */}
        <div className="flex flex-col">
          <div className="card shadow-xl bg-base-200 mx-auto my-3 md:my-6 w-11/12 md:w-5/6">
            <div className="card-body">
              <h2 className="text-center text-2xl font-semibold text-orange-400">
                User Information
              </h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-xl">
                    Name:{' '}
                    <span className="text-orange-400">{user.displayName}</span>
                  </p>
                  <p className="font-semibold text-xl">
                    Email: <span className="text-orange-400">{user.email}</span>
                  </p>
                </div>
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            className="my-3 md:my-6 bg-base-200  w-11/12 md:w-5/6 mx-auto py-6 rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-3xl text-orange-400 text-center font-semibold">
              Confirm Order
            </h1>
            <div className="w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className={`input input-bordered w-full max-w-xs ${
                  errors?.address?.message ? 'input-error' : ''
                }`}
                {...register('address', {
                  required: {
                    value: true,
                    message: 'Address is required!',
                  },
                })}
              />

              <label className="label">
                {errors.address?.type === 'required' && (
                  <span className="label-text-alt text-red-600">
                    {errors?.address?.message}
                  </span>
                )}
              </label>
            </div>

            {/* Phone number */}
            <div className="w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                className={`input input-bordered w-full max-w-xs ${
                  errors?.phone?.message ? 'input-error' : ''
                }`}
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'Phone number required!',
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === 'required' && (
                  <span className="label-text-alt text-red-600">
                    {errors?.phone?.message}
                  </span>
                )}
              </label>
            </div>

            {/* Phone end */}

            <div className="w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Order Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Order Quantity"
                className={`input input-bordered w-full max-w-xs ${
                  errors?.orderQty?.message ? 'input-error' : ''
                }`}
                {...register('orderQty', {
                  required: {
                    value: true,
                    message: 'Quantity is required',
                  },
                  max: {
                    value: part.availableQty,
                    message: `You can not order more than ${part.availableQty} pieces`,
                  },
                  min: {
                    value: part.minOrderQty,
                    message: `You can not order less than ${part.minOrderQty} pieces`,
                  },
                })}
              />
              <label className="label">
                {errors.orderQty?.type === 'max' && (
                  <span className="label-text-alt text-red-600">
                    {errors?.orderQty?.message}
                  </span>
                )}
              </label>
              <p className="label">
                {errors.orderQty?.type === 'min' && (
                  <span className="label-text-alt text-red-600">
                    {errors?.orderQty?.message}
                  </span>
                )}
              </p>
              <p className="label">
                {errors.orderQty?.type === 'required' && (
                  <span className="label-text-alt text-red-600">
                    {errors?.orderQty?.message}
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
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
