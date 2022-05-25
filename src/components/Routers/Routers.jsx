import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import AddReview from '../Dashboard/AddReview';
import Dashboard from '../Dashboard/Dashboard';
import MyOrders from '../Dashboard/MyOrders';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Purchase from '../Puchase/Purchase';
import Register from '../Register/Register';
import RequireAuth from '../RequireAuth/RequireAuth';

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
        <Route index element={<MyOrders />} />
        <Route path="add-review" element={<AddReview />} />
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
