import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar.jsx";
import { Bookmark } from "lucide-react";

const App = () => {
  const user = "atif";
  const age = 20;
  return (
    <div className="parent">
      <Navbar />
      <Card
        user={user}
        age={age}
        img="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      />
      <button>
        <bookmark />
      </button>
      <Card user="john" age={25} img="random url" />
      <Card user="jane" age={30} img="random url" />
    </div>
  );
};

export default App;
