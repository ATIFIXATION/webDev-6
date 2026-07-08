import { NavLink, Outlet } from "react-router-dom";
import {
  FaUser,
  FaShoppingBag,
  FaHeart,
  FaCog,
} from "react-icons/fa";

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-72 bg-white shadow-lg p-6">

        <h1 className="text-3xl font-bold text-orange-500 mb-8">
          User Dashboard
        </h1>

        <div className="flex flex-col gap-4">

          <NavLink
            to="overview"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <FaUser />
            Overview
          </NavLink>

          <NavLink
            to="orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <FaShoppingBag />
            Orders
          </NavLink>

          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <FaHeart />
            Wishlist
          </NavLink>

          <NavLink
            to="settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <FaCog />
            Settings
          </NavLink>

        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-10">
        <Outlet />
      </div>

    </div>
  );
};

export default CustomerDashboard;