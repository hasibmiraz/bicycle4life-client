import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import AddReview from '../Dashboard/AddReview';
import AllUsers from '../Dashboard/AllUsers';
import Dashboard from '../Dashboard/Dashboard';
import ManageOrders from '../Dashboard/ManageOrders';
import MyOrders from '../Dashboard/MyOrders';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Purchase from '../Puchase/Purchase';
import Register from '../Register/Register';
import RequireAdmin from '../RequireAdmin/RequireAdmin';
import RequireAuth from '../RequireAuth/RequireAuth';
import RequireUser from '../RequireUser/RequireUser';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      >
        <Route
          path="my-orders"
          element={
            <RequireUser>
              <MyOrders />
            </RequireUser>
          }
        />
        <Route
          path="add-review"
          element={
            <RequireUser>
              <AddReview />
            </RequireUser>
          }
        />
        <Route
          path="all-users"
          element={
            <RequireAdmin>
              <AllUsers />
            </RequireAdmin>
          }
        />
        <Route
          path="manage-orders"
          element={
            <RequireAdmin>
              <ManageOrders />
            </RequireAdmin>
          }
        />
      </Route>

      <Route
        path="/purchase/:partsId"
        element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
