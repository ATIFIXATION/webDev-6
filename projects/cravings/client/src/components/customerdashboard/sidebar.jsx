import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        Customer Dashboard
      </h1>

      <button onClick={() => setActiveTab("overview")}>
        Overview
      </button>

      <br />

      <button onClick={() => setActiveTab("orders")}>
        Orders
      </button>

      <br />

      <button onClick={() => setActiveTab("wishlist")}>
        Wishlist
      </button>

      <br />

      <button onClick={() => setActiveTab("settings")}>
        Settings
      </button>
    </div>
  );
};

export default Sidebar;