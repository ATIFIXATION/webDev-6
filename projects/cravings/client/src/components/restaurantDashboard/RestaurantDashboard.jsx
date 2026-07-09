import React, { useState } from "react";

import RestaurantSidebar from "./RestaurantSidebar";
import RestaurantOverview from "./RestaurantOverview";
import RestaurantOrders from "./RestaurantOrders";
import RestaurantSettings from "./RestaurantSettings";

const RestaurantDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="h-[92vh] flex gap-2 m-2">
      {/* Sidebar */}
      <div className="w-3/12 bg-white rounded-lg shadow-md p-4">
        <RestaurantSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Main Content */}
      <div className="w-9/12 bg-white rounded-lg shadow-md p-4">
        {activeTab === "overview" && <RestaurantOverview />}
        {activeTab === "orders" && <RestaurantOrders />}
        {activeTab === "settings" && <RestaurantSettings />}
      </div>
    </div>
  );
};

export default RestaurantDashboard;