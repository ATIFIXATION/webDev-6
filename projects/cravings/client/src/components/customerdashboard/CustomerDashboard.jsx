import React, { useState } from "react";

import Sidebar from "./sidebar";
import Overview from "./Overview";
import Orders from "./orders";
import Wishlist from "./wishlist";
import Settings from "./settings";

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="h-[92vh] flex gap-2 m-2">
      {/* Sidebar */}
      <div className="w-3/12 bg-white rounded-lg shadow-md p-4">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Main Content */}
      <div className="w-9/12 bg-white rounded-lg shadow-md p-4">
        {activeTab === "overview" && <Overview />}
        {activeTab === "orders" && <Orders />}
        {activeTab === "wishlist" && <Wishlist />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default CustomerDashboard;