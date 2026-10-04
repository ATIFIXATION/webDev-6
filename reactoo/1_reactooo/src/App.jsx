import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const user = "atif";
  const age = 20;
  return (
    <div className="parent">
      <div>
        <Navbar />
        <Card />
          <Card />
            <Card />  
      </div>
    </div>
  );
};

export default App;
