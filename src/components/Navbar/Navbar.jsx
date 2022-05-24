import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsBicycle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading';
const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate('/');
  };

  if (loading) return <Loading />;

  return (
    <div className="navbar bg-orange-400 px-4 md:px-8">
      {/* Small Screen menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <BsBicycle className="w-8 h-8 text-white" />
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 px-2 py-3 shadow bg-orange-400 rounded-box w-52 space-y-3"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'px-5 py-2 bg-white text-black font-semibold rounded'
                    : 'text-white'
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'px-5 py-2 bg-white text-black font-semibold rounded'
                    : 'text-white'
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>

            {!user ? (
              <>
                <li tabIndex="0">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'px-5 py-2 bg-white text-black font-semibold rounded'
                        : 'text-white'
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li tabIndex="0">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'px-5 py-2 bg-white text-black font-semibold rounded'
                        : 'text-white'
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <li tabIndex="0">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'px-5 py-2 bg-white text-black font-semibold rounded'
                      : 'text-white'
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
          Bicycle4Life
        </Link>
      </div>
      {user && (
        <div className="navbar-end flex md:hidden dropdown dropdown-end">
          <label tabIndex="10" className="btn btn-ghost btn-circle avatar ml-2">
            <div className="w-10 rounded-full">
              <img alt="user" src={user?.photoURL} />
            </div>
          </label>
          <label
            htmlFor="dashboard-sidebar"
            tabIndex="20"
            className="btn btn-ghost lg:hidden ml-5"
          >
            <GiHamburgerMenu className="w-6 h-6 text-white" />
          </label>
          <ul
            tabIndex="10"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute top-12"
          >
            <li>
              <a href="!@" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="!@">Settings</a>
            </li>
            <li>
              <button onClick={handleSignOut}>Logout</button>
            </li>
          </ul>
        </div>
      )}
      {/* Big screen menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 space-x-2">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'px-7 py-2 bg-white text-orange-600'
                  : 'px-7 text-white'
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'px-7 py-2 bg-white text-orange-600'
                  : 'px-7 text-white'
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
          {!user ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'px-7 py-1 bg-white text-orange-600'
                      : 'px-7 text-white'
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'px-7 py-2 bg-white text-orange-600'
                      : 'px-7 text-white'
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'px-7 py-2 bg-white text-orange-600'
                    : 'px-7 text-white'
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
        {user && (
          <>
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="btn btn-ghost btn-circle avatar ml-2"
              >
                <div className="w-10 rounded-full">
                  <img alt="user" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="!@" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="!@">Settings</a>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
