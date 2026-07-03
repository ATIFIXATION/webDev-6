import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/contact";

import UserDashboard from "./pages/dashboard/userDashboard";
import Overview from "./pages/dashboard/overview";
import Orders from "./pages/dashboard/orders";
import Wishlist from "./pages/dashboard/wishlist";
import Settings from "./pages/dashboard/settings";

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

        <Route path="/contact" element={<Contact />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<UserDashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;