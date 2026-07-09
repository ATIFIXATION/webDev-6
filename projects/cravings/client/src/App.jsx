import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Intro from "./pages/Intro";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/contact";

// Dashboards
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";

// Admin Components
import AdminDashboard from "./components/adminDashboard/AdminDashboard";

// Restaurant Components
import RestaurantDashboard from "./components/restaurantDashboard/RestaurantDashboard";

// Rider Components
import RiderDashboard from "./components/riderDashboard/RiderDashboard";

// Customer Pages
import Overview from "./pages/dashboard/overview";
import Orders from "./pages/dashboard/orders";
import Wishlist from "./pages/dashboard/wishlist";
import Settings from "./pages/dashboard/settings";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />

      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Intro />

              <Header />

              <Home />

              <Footer />
            </>
          }
        />

        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Header />
              <Register />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Customer Dashboard */}
        <Route path="/customer/dashboard" element={<CustomerDashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Restaurant Dashboard */}
        <Route
          path="/restaurant/dashboard"
          element={<RestaurantDashboard />}
        />

        {/* Rider Dashboard */}
        <Route
          path="/rider/dashboard"
          element={<RiderDashboard />}
        />

      </Routes>
    </>
  );
}

export default App;