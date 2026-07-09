import React from "react";
import {
  FaMotorcycle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaWallet,
  FaClipboardCheck,
  FaCamera,
} from "react-icons/fa";

const RiderOverview = () => {
  return (
    <div className="space-y-8">

      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center justify-between flex-wrap gap-8">

          {/* Left */}
          <div className="flex items-center gap-8">

            <div className="relative">

              <div className="w-40 h-40 rounded-full border-[6px] border-orange-500 bg-gray-200 flex items-center justify-center">

                <span className="text-7xl font-bold text-gray-500">
                  A
                </span>

              </div>

              <button className="absolute bottom-2 right-2 bg-orange-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition">

                <FaCamera />

              </button>

            </div>

            <div>

              <h1 className="text-5xl font-bold">
                Atif Khan
              </h1>

              <p className="text-gray-500 mt-3 text-lg flex items-center gap-3">
                <FaEnvelope />
                atif@gmail.com
              </p>

              <p className="text-gray-500 mt-2 text-lg flex items-center gap-3">
                <FaPhoneAlt />
                +91 9876543210
              </p>

              <p className="text-gray-500 mt-2 text-lg flex items-center gap-3">
                <FaMotorcycle />
                Bike Rider
              </p>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl font-semibold">
                Edit Profile
              </button>

            </div>

          </div>

          {/* Right */}
          <div className="text-right">

            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
              ● Online
            </span>

            <h2 className="mt-8 text-4xl font-bold text-orange-500">
              Rider ID
            </h2>

            <p className="text-gray-600 text-xl mt-2">
              RID-2026-001
            </p>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl">

          <FaClipboardCheck size={35} />

          <h2 className="mt-5 text-4xl font-bold">
            24
          </h2>

          <p className="mt-2">
            Deliveries Today
          </p>

        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl">

          <FaWallet size={35} />

          <h2 className="mt-5 text-4xl font-bold">
            ₹2,480
          </h2>

          <p className="mt-2">
            Today's Earnings
          </p>

        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">

          <FaStar size={35} />

          <h2 className="mt-5 text-4xl font-bold">
            4.9
          </h2>

          <p className="mt-2">
            Average Rating
          </p>

        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">

          <FaMapMarkerAlt size={35} />

          <h2 className="mt-5 text-4xl font-bold">
            18 km
          </h2>

          <p className="mt-2">
            Distance Travelled
          </p>

        </div>

      </div>

      {/* Rider Information */}

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Rider Information
          </h2>

          <div className="space-y-5 text-lg">

            <div className="flex justify-between">
              <span className="text-gray-500">Vehicle</span>
              <span className="font-semibold">Honda Activa 6G</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">License</span>
              <span className="font-semibold">MP04 XX1234</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Joining Date</span>
              <span className="font-semibold">12 Jan 2026</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Experience</span>
              <span className="font-semibold">2 Years</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Availability</span>
              <span className="text-green-600 font-semibold">
                Online
              </span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Performance
          </h2>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between mb-2">
                <span>On Time Delivery</span>
                <span>95%</span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full">

                <div className="w-[95%] h-3 bg-green-500 rounded-full"></div>

              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Customer Satisfaction</span>
                <span>98%</span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full">

                <div className="w-[98%] h-3 bg-blue-500 rounded-full"></div>

              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Acceptance Rate</span>
                <span>92%</span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full">

                <div className="w-[92%] h-3 bg-orange-500 rounded-full"></div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RiderOverview;