import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, i, refetch }) => {
  const { email, isAdmin } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
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
