import React, { useState } from "react";

import AdminSidebar from "./AdminSidebar";
import AdminOverview from "./AdminOverview";
import AdminOrders from "./AdminOrders";
import AdminSettings from "./AdminSettings";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="h-[92vh] flex gap-2 m-2">
      {/* Sidebar */}
      <div className="w-3/12 bg-white rounded-lg shadow-md p-4">
        <AdminSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Main Content */}
      <div className="w-9/12 bg-white rounded-lg shadow-md p-4">
        {activeTab === "overview" && <AdminOverview />}
        {activeTab === "orders" && <AdminOrders />}
        {activeTab === "settings" && <AdminSettings />}
      </div>
    </div>
  );
};

export default AdminDashboard;