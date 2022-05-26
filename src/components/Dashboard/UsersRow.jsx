import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UsersRow = ({ user, i, refetch }) => {
  const { email, isAdmin } = user;
  const navigate = useNavigate();
  const makeAdmin = () => {
    fetch(`https://stark-basin-34233.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem('accessToken');
          signOut(auth);
          navigate('/');
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount) {
          toast.success(`${email} is an admin now`);
          refetch();
        } else {
          toast.error('There was an error!');
        }
      });
  };
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{user.email}</td>
      <td>
        {!isAdmin ? (
          <button
            onClick={makeAdmin}
            className="btn btn-outline btn-warning rounded-md"
          >
            Make Admin
          </button>
        ) : (
          <p className="inline-block px-6 py-3 text-white bg-green-500 rounded-md text-center">
            Admin
          </p>
        )}
      </td>
    </tr>
  );
};

export default UsersRow;
