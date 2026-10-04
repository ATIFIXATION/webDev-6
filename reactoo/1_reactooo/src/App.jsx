import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const user = "atif";
  const age = 20;
  return (
    <div className="parent">
      <Navbar />
      <Card user={user} age={age} img='random url' />
      <Card user="john" age={25} img='random url' />
      <Card user="jane" age={30} img='random url' />
    </div>
  );
};

export default App;
