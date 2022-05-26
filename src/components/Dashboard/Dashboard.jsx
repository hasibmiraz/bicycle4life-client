import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <h2 className="text-3xl font-semibold text-orange-500 mx-4 md:mx-16 mt-6">
            Dashboard
          </h2>
          <div className="mx-4 md:mx-16">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-orange-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-review">Add A Review</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard/my-profile">My Profile</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/manage-orders">Manage Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-products">Manage Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
