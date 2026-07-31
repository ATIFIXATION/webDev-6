import React from "react";
import PresonalInformation from "./PresonalInformation";
import RestaurantInformation from "./RestaurantInformation";
import LegalInformation from "./LegalInformation";

const Index = () => {
  return (
    <div className="overflow-y-auto h-full p-2 space-y-2">
      <PresonalInformation />
      <RestaurantInformation />
      <LegalInformation />
    </div>
  );
};

export default Index;