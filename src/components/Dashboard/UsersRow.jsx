import React from 'react';

const UsersRow = ({ user, i }) => {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{user.email}</td>
      <td>Admin</td>
    </tr>
  );
};

export default UsersRow;
