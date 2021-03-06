import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js';
import { Link, useNavigate } from 'react-router-dom';
import Title from '../Title/Title.jsx';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn.jsx';
import useToken from '../../hooks/useToken.js';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user);

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async ({ email, password, name }) => {
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    reset();
  };

  let errorMessage;

  if (error || updateError) {
    errorMessage = (
      <p className="text-red-600 text-center">Authentication failed</p>
    );
  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <>
      <Title title="Register" />
      <div className="flex justify-center items-center h-[90vh]">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-xl">Sign Up</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className={`input input-bordered w-full max-w-xs ${
                    errors?.name?.message ? 'input-error' : ''
                  }`}
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required!',
                    },

                    pattern: {
                      value: /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/,
                      message: 'Name must be of atleast 3 characters',
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
                <p>
                  {errors.name?.type === 'pattern' && (
                    <span className="label-text-alt text-red-600">
                      {errors?.name?.message}
                    </span>
                  )}
                </p>
              </div>

              {/* Email field Start */}
              <div className="w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className={`input input-bordered w-full max-w-xs ${
                    errors?.email?.message ? 'input-error' : ''
                  }`}
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email address required!',
                    },

                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'Provide a valid email',
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-600">
                      {errors?.email?.message}
                    </span>
                  )}
                </label>
                <p>
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-600">
                      {errors?.email?.message}
                    </span>
                  )}
                </p>
              </div>

              {/* Email field end */}
              <div className="w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className={`input input-bordered w-full max-w-xs ${
                    errors?.password?.message ? 'input-error' : ''
                  }`}
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required!',
                    },

                    minLength: {
                      value: 6,
                      message: 'Must be atleast 6 characters',
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-600">
                      {errors?.password?.message}
                    </span>
                  )}
                </label>
                <p className="label">
                  {errors.password?.type === 'minLength' && (
                    <span className="label-text-alt text-red-600">
                      {errors?.password?.message}
                    </span>
                  )}
                </p>
              </div>
              {(error || updateError) && errorMessage}
              <button
                disabled={loading || updating}
                className={`btn rounded w-full max-w-xs text-white bg-orange-400 border-none ${
                  loading ? 'loading' : ''
                }`}
                type="submit"
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </button>
            </form>

            <p className="text-xs text-center">
              Already have an account?{' '}
              <span className="text-orange-500">
                <Link to="/login">Login</Link>
              </span>
            </p>

            <div className="divider">OR</div>
            <GoogleSignIn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
