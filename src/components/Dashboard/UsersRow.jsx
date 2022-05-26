import React from 'react';

const UsersRow = ({ user, i }) => {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-outline btn-warning rounded-md">
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default UsersRow;
