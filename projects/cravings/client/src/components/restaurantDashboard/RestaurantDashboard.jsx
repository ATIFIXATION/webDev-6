import React, { useState } from "react";
import Header from "../Header";

import RestaurantSidebar from "./RestaurantSidebar";
import RestaurantOverview from "./RestaurantOverview";
import RestaurantOrders from "./RestaurantOrders";
import RestaurantSettings from "./RestaurantSettings";

const RestaurantDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <Header />

      {/* Dashboard */}
      <div className="flex gap-4 p-4 h-[calc(100vh-88px)]">

        {/* Sidebar */}
        <div className="w-[280px] bg-white rounded-xl shadow-md p-4">
          <RestaurantSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6 overflow-y-auto">
          {activeTab === "overview" && <RestaurantOverview />}
          {activeTab === "orders" && <RestaurantOrders />}
          {activeTab === "settings" && <RestaurantSettings />}
        </div>

      </div>
    </div>
  );
};

export default RestaurantDashboard;