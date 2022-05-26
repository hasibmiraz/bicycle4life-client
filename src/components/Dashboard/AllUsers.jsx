import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Title from '../Title/Title';
import UsersRow from './UsersRow';

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('orders', () =>
    fetch(`http://localhost:5000/user`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Loading />;
  return (
    <div>
      <Title title="All Users" />
      <div className="overflow-x-auto mx-auto mt-6">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Email</th>
              <th>Admin Status</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {users.map((user, i) => (
              <UsersRow key={user._id} user={user} i={i} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
