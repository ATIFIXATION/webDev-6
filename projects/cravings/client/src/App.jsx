import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
  <Toaster />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<Contact />} />
        {/* dashboard router */}
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;