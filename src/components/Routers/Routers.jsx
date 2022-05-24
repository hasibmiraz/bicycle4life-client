import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import RequireAuth from '../RequireAuth/RequireAuth';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/blogs"
        element={
          <RequireAuth>
            <Blogs />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
