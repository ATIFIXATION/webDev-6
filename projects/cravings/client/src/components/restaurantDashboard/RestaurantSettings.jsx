import React, { useState } from "react";
import RestaurantInformation from "./settings/RestaurantInformation";
import RestaurantCoreDetails from "./settings/RestaurantCoreDetails";
import RestaurantPhotos from "./settings/RestaurantPhotos";

const RestaurantSettings = () => {
  const tabs = [
    { id: "information", label: "Information" },
    { id: "coreDetails", label: "Core Details" },
    { id: "photos", label: "Photos" },
  ];

  const [activeTab, setActiveTab] = useState("coreDetails");
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(true);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-3">
        {/* Tabs */}
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`uppercase font-medium px-2 py-2 transition-all duration-200 border-b-2 ${
                activeTab === tab.id
                  ? "text-[#C95F31] border-[#C95F31]"
                  : "text-gray-600 border-transparent hover:text-[#C95F31]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Restaurant Status */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">
            Currently Open
          </label>

          <input
            type="checkbox"
            checked={isRestaurantOpen}
            onChange={() => setIsRestaurantOpen(!isRestaurantOpen)}
            className="w-5 h-5 accent-[#C95F31] cursor-pointer"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-y-auto">
        {activeTab === "information" && <RestaurantInformation />}
        {activeTab === "coreDetails" && <RestaurantCoreDetails />}
        {activeTab === "photos" && <RestaurantPhotos />}
      </div>
    </div>
  );
};

export default RestaurantSettings;