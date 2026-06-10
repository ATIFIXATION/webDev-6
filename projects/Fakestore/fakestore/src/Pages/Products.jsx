import React from "react";

const Product = () => {
  return (
    <div className="p-10 grid grid-cols-4">
      <div className="w-75 border rounded h-100 ">
        <div className="w-full h-40">
          <img src="" alt="" />
        </div>
      </div>
      <span>12</span>
      <p>12</p>
      <button className="bg-orange-400 rounded-full px-4 py-2">Add to Cart</button>
    </div>
  );
};

export default Product;