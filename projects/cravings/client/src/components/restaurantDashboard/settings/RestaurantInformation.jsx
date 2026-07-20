import React, { useState, useEffect } from "react";
import { MdEdit, MdOutlineAddAPhoto, MdOutlineLockReset, MdRestaurant, MdStorefront, MdGavel } from "react-icons/md";
import { FaUser, FaEnvelope, FaPhone, FaClock, FaUtensils } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/ApiConfig";
import toast from "react-hot-toast";
import PasswordChangeModal from "../../commonModals/PasswordChangeModal";

const RestaurantInformation = () => {
  const { user, setUser } = useAuth();

  // Common State variables
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordChangeModalOpen, setIsPasswordChangeModalOpen] = useState(false);

  // Profile handlers
  const [editingProfile, setEditingProfile] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [profileFormData, setProfileFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileFormData({ ...profileFormData, [name]: value });
  };

  const handleSaveProfile = async () => {
    try {
      setIsLoading(true);
      const payload = new FormData();
      payload.append("fullName", profileFormData.fullName);
      payload.append("email", profileFormData.email.toLowerCase());
      payload.append("phone", profileFormData.phone);
      payload.append("displayPic", profilePic);

      const response = await api.put(`/user/edit-profile`, payload);
      setUser(response.data.data);
      sessionStorage.setItem("cravingUser", JSON.stringify(response.data.data));
      setEditingProfile(false);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelProfile = () => {
    setProfileFormData({
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    });
    setProfilePicPreview(null);
    setEditingProfile(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePicPreview(URL.createObjectURL(file));
    setProfilePic(file);
  };

  // Restaurant handlers
  const [isLoadingRestaurant, setIsLoadingRestaurant] = useState(false);
  const [loadingRestaurantError, setLoadingRestaurantError] = useState(null);
  const [restaurantData, setRestaurantData] = useState();
  const [editingRestaurant, setEditingRestaurant] = useState(false);
  const [restaurantFormData, setRestaurantFormData] = useState({
    restaurantName: restaurantData?.restaurantName || "",
    description: restaurantData?.description || "",
    restaurantType: restaurantData?.restaurantType || "",
    cuisineTypes: restaurantData?.cuisineTypes?.join(", ") || "",
    isOpen: restaurantData?.isOpen || false,
    contactEmail: restaurantData?.contactDetails?.email || "",
    contactPhone: restaurantData?.contactDetails?.phone || "",
    openingTime: restaurantData?.servingHours?.openingTime || "",
    closingTime: restaurantData?.servingHours?.closingTime || "",
  });

  const handleRestaurantChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRestaurantFormData({
      ...restaurantFormData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSaveRestaurant = async () => {
    try {
      setIsLoading(true);
      console.log("restaurantFormData", restaurantFormData);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update restaurant");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelRestaurant = () => {
    setRestaurantFormData({
      restaurantName: restaurantData?.restaurantName || "",
      description: restaurantData?.description || "",
      restaurantType: restaurantData?.restaurantType || "",
      cuisineTypes: restaurantData?.cuisineTypes?.join(", ") || "",
      isOpen: restaurantData?.isOpen || false,
      contactEmail: restaurantData?.contactDetails?.email || "",
      contactPhone: restaurantData?.contactDetails?.phone || "",
      openingTime: restaurantData?.servingHours?.openingTime || "",
      closingTime: restaurantData?.servingHours?.closingTime || "",
    });
    setEditingRestaurant(false);
  };

  const fetchRestaurantData = async () => {
    try {
      setIsLoadingRestaurant(true);
      const res = await api.get(`/restaurant/get-resturant-data?id=${user._id}`);
      setRestaurantData(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Unknown error occurred fetching restaurant. Please try again.");
      setLoadingRestaurantError(error.response?.data?.message || "Unknown error occurred fetching restaurant. Please try again.");
    } finally {
      setIsLoadingRestaurant(false);
    }
  };

  useEffect(() => {
    // fetchRestaurantData();
  }, [user]);

  return (
    <>
      <div className="h-full p-4 space-y-6 overflow-y-auto bg-gradient-to-br from-orange-50/30 to-amber-50/20">
        {/* User Profile Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-orange-100/60 border border-orange-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/70">
          <div className="flex items-start gap-6">
            <div className="relative group">
              <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-orange-100 shadow-lg transition-all duration-300 group-hover:ring-2 group-hover:ring-orange-500">
                <img
                  src={profilePicPreview || user?.photo?.url || "https://ui-avatars.com/api/?name=User&background=FB923C"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {editingProfile && (
                <div className="absolute -bottom-1 -right-1 p-2 bg-white rounded-xl shadow-lg border border-orange-200 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <label htmlFor="profilePic" className="cursor-pointer">
                    <MdOutlineAddAPhoto className="text-orange-500 text-lg" />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="profilePic"
                    id="profilePic"
                    className="hidden"
                    onChange={handleProfilePicChange}
                  />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <FaUser className="text-orange-500" />
                    Profile Information
                  </h3>
                  <p className="text-xs text-orange-400 mt-0.5">Manage your personal details</p>
                </div>
                {!editingProfile ? (
                  <div className="flex gap-3">
                    <button
                      onClick={() => setEditingProfile(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-sm font-medium shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
                    >
                      <MdEdit className="text-base" /> Edit Profile
                    </button>
                    <button
                      onClick={() => setIsPasswordChangeModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-orange-500 text-orange-500 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:bg-orange-500 hover:text-white"
                    >
                      <MdOutlineLockReset className="text-base" /> Change Password
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-sm font-medium shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300 transition-all duration-300 hover:scale-105"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                    <button
                      onClick={handleCancelProfile}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaUser className="text-orange-400" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={profileFormData.fullName}
                    onChange={handleProfileChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingProfile 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingProfile}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaEnvelope className="text-orange-400" /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profileFormData.email}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-orange-100 bg-orange-50/50 cursor-not-allowed text-sm"
                    disabled
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaPhone className="text-orange-400" /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={profileFormData.phone}
                    onChange={handleProfileChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingProfile 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingProfile}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Information Section */}
        {isLoadingRestaurant ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-orange-100/50">
            <div className="flex flex-col justify-center items-center">
              <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-lg text-orange-600 font-semibold mt-4 animate-pulse">
                Loading Restaurant Info...
              </span>
            </div>
          </div>
        ) : loadingRestaurantError ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-red-200">
            <div className="flex flex-col justify-center items-center">
              <div className="text-5xl mb-4">😕</div>
              <span className="text-lg text-red-600 font-semibold">{loadingRestaurantError}</span>
            </div>
          </div>
        ) : (
          <>
            {/* Restaurant Details */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-orange-100/60 border border-orange-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/70">
              <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-orange-100">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <MdRestaurant className="text-orange-500" />
                    Restaurant Information
                  </h3>
                  <p className="text-xs text-orange-400 mt-0.5">Manage your restaurant details</p>
                </div>
                {!editingRestaurant ? (
                  <button
                    onClick={() => setEditingRestaurant(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-sm font-medium shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
                  >
                    <MdEdit className="text-base" /> Edit Restaurant
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSaveRestaurant}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-sm font-medium shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300 transition-all duration-300 hover:scale-105"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                    <button
                      onClick={handleCancelRestaurant}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <MdStorefront className="text-orange-400" /> Restaurant Name
                  </label>
                  <input
                    type="text"
                    name="restaurantName"
                    value={restaurantFormData?.restaurantName || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaUtensils className="text-orange-400" /> Restaurant Type
                  </label>
                  <select
                    name="restaurantType"
                    value={restaurantFormData?.restaurantType || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  >
                    <option value="">Select type</option>
                    <option value="veg">🌿 Veg</option>
                    <option value="non-veg">🍖 Non-Veg</option>
                    <option value="jain">🕉️ Jain</option>
                    <option value="vegan">🌱 Vegan</option>
                    <option value="both">🔄 Both</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaUtensils className="text-orange-400" /> Cuisine Types
                  </label>
                  <input
                    type="text"
                    name="cuisineTypes"
                    value={restaurantFormData?.cuisineTypes || ""}
                    onChange={handleRestaurantChange}
                    placeholder="e.g. Indian, Chinese, Italian"
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaEnvelope className="text-orange-400" /> Contact Email
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={restaurantFormData?.contactEmail || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaPhone className="text-orange-400" /> Contact Phone
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={restaurantFormData?.contactPhone || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaClock className="text-orange-400" /> Opening Time
                  </label>
                  <input
                    type="time"
                    name="openingTime"
                    value={restaurantFormData?.openingTime || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaClock className="text-orange-400" /> Closing Time
                  </label>
                  <input
                    type="time"
                    name="closingTime"
                    value={restaurantFormData?.closingTime || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="col-span-1 md:col-span-3 space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaUtensils className="text-orange-400" /> Description
                  </label>
                  <textarea
                    name="description"
                    value={restaurantFormData?.description || ""}
                    onChange={handleRestaurantChange}
                    rows={3}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm resize-none ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-orange-100/60 border border-orange-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/70">
              <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-orange-100">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <MdGavel className="text-orange-500" />
                    Legal Information
                  </h3>
                  <p className="text-xs text-orange-400 mt-0.5">Business and legal details</p>
                </div>
                {!editingRestaurant ? (
                  <button
                    onClick={() => setEditingRestaurant(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-sm font-medium shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
                  >
                    <MdEdit className="text-base" /> Edit Legal
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSaveRestaurant}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-sm font-medium shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300 transition-all duration-300 hover:scale-105"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                    <button
                      onClick={handleCancelRestaurant}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <MdStorefront className="text-orange-400" /> Legal Name
                  </label>
                  <input
                    type="text"
                    name="legalName"
                    value={restaurantFormData?.contactPhone || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <MdStorefront className="text-orange-400" /> Company Type
                  </label>
                  <input
                    type="text"
                    name="companyType"
                    value={restaurantFormData?.contactPhone || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {isPasswordChangeModalOpen && (
        <PasswordChangeModal
          open={isPasswordChangeModalOpen}
          onClose={() => setIsPasswordChangeModalOpen(false)}
        />
      )}
    </>
  );
};

export default RestaurantInformation;