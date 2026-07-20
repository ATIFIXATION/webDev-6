import React, { useState, useEffect } from "react";
import { MdEdit, MdAdd, MdDelete, MdLocationOn, MdBusiness, MdShare } from "react-icons/md";
import { FaMapMarkerAlt, FaCity, FaGlobe, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaUniversity, FaFileInvoice } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/ApiConfig";
import toast from "react-hot-toast";
import { MdOutlineAddAPhoto, MdOutlineLockReset } from "react-icons/md";
import PasswordChangeModal from "../../commonModals/PasswordChangeModal";

const ResturantCoreDetails = () => {
  const { user, setUser } = useAuth();

  // Common State variables
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordChangeModalOpen, setIsPasswordChangeModalOpen] =
    useState(false);

  // Restaurant handlers
  const [isLoadingRestaurant, setIsLoadingRestaurant] = useState(false);
  const [loadingRestaurantError, setLoadingRestaurantError] = useState(null);
  const [restaurantData, setRestaurantData] = useState();
  const [editingRestaurant, setEditingRestaurant] = useState(false);
  const [restaurantFormData, setRestaurantFormData] = useState({
    restaurantName: restaurantData?.restaurantName || "",
    address: restaurantData?.address || "",
    city: restaurantData?.city || "",
    state: restaurantData?.state || "",
    pinCode: restaurantData?.pinCode || "",
    country: restaurantData?.country || "",
    description: restaurantData?.description || "",
    restaurantType: restaurantData?.restaurantType || "",
    cuisineTypes: restaurantData?.cuisineTypes?.join(", ") || "",
    isOpen: restaurantData?.isOpen || false,
    contactEmail: restaurantData?.contactDetails?.email || "",
    contactPhone: restaurantData?.contactDetails?.phone || "",
    openingTime: restaurantData?.servingHours?.openingTime || "",
    closingTime: restaurantData?.servingHours?.closingTime || "",
    geoLat: restaurantData?.geoLocation?.lat || "",
    geoLon: restaurantData?.geoLocation?.lon || "",
    socialMediaLinks: restaurantData?.socialMediaLinks || [],
  });

  const handleRestaurantChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRestaurantFormData({
      ...restaurantFormData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSocialMediaChange = (index, field, value) => {
    const updated = restaurantFormData.socialMediaLinks.map((link, i) =>
      i === index ? { ...link, [field]: value } : link,
    );
    setRestaurantFormData({ ...restaurantFormData, socialMediaLinks: updated });
  };

  const addSocialMediaLink = () => {
    setRestaurantFormData({
      ...restaurantFormData,
      socialMediaLinks: [
        ...restaurantFormData.socialMediaLinks,
        { platform: "", url: "" },
      ],
    });
  };

  const removeSocialMediaLink = (index) => {
    setRestaurantFormData({
      ...restaurantFormData,
      socialMediaLinks: restaurantFormData.socialMediaLinks.filter(
        (_, i) => i !== index,
      ),
    });
  };

  const handleSaveRestaurant = async () => {
    try {
      setIsLoading(true);
      console.log("restaurantFormData", restaurantFormData);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update restaurant",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelRestaurant = () => {
    setRestaurantFormData({
      restaurantName: restaurantData?.restaurantName || "",
      address: restaurantData?.address || "",
      city: restaurantData?.city || "",
      state: restaurantData?.state || "",
      pinCode: restaurantData?.pinCode || "",
      country: restaurantData?.country || "",
      description: restaurantData?.description || "",
      restaurantType: restaurantData?.restaurantType || "",
      cuisineTypes: restaurantData?.cuisineTypes?.join(", ") || "",
      isOpen: restaurantData?.isOpen || false,
      contactEmail: restaurantData?.contactDetails?.email || "",
      contactPhone: restaurantData?.contactDetails?.phone || "",
      openingTime: restaurantData?.servingHours?.openingTime || "",
      closingTime: restaurantData?.servingHours?.closingTime || "",
      geoLat: restaurantData?.geoLocation?.lat || "",
      geoLon: restaurantData?.geoLocation?.lon || "",
      socialMediaLinks: restaurantData?.socialMediaLinks || [],
    });
    setEditingRestaurant(false);
  };

  const fetchRestaurantData = async () => {
    try {
      setIsLoadingRestaurant(true);
      const res = await api.get(
        `/restaurant/get-resturant-data?id=${user._id}`,
      );
      setRestaurantData(res.data.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred fetching restaurant. Please try again.",
      );
      setLoadingRestaurantError(
        error.response?.data?.message ||
          "Unknown error occurred fetching restaurant. Please try again.",
      );
    } finally {
      setIsLoadingRestaurant(false);
    }
  };

  useEffect(() => {
    // fetchRestaurantData();
  }, [user]);

  return (
    <>
      <div className="overflow-y-auto h-full p-4 space-y-4 bg-gradient-to-br from-orange-50/30 to-amber-50/20">
        {/* Restaurant Information Section */}
        {isLoadingRestaurant ? (
          <div className="flex flex-col justify-center items-center h-64 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100/50">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-lg text-orange-600 font-semibold mt-4 animate-pulse">
              Fetching Restaurant Information
            </span>
          </div>
        ) : loadingRestaurantError ? (
          <div className="flex flex-col justify-center items-center h-64 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-red-200">
            <span className="text-lg text-red-600 font-semibold mt-2">
              {loadingRestaurantError}
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-4 h-full">
            {/* Address Information */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-orange-100/60 border border-orange-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/70">
              <div className="flex justify-between items-center border-b-2 border-orange-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-500 text-lg" />
                  <h3 className="text-sm font-semibold text-gray-800">
                    Address Information
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium">
                    Location
                  </span>
                </div>

                {!editingRestaurant ? (
                  <button
                    onClick={() => setEditingRestaurant(true)}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-xl text-xs font-medium shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
                  >
                    <MdEdit className="text-sm" /> Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveRestaurant}
                      className="flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-xl text-xs font-medium shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300 transition-all duration-300 hover:scale-105"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                    <button
                      onClick={handleCancelRestaurant}
                      className="flex items-center gap-1.5 bg-gray-200 text-gray-700 px-3 py-1.5 rounded-xl text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <MdLocationOn className="text-orange-400" /> Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={restaurantFormData?.address || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaCity className="text-orange-400" /> City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={restaurantFormData?.city || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <MdLocationOn className="text-orange-400" /> State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={restaurantFormData?.state || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaCity className="text-orange-400" /> Pin Code
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={restaurantFormData?.pinCode || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaGlobe className="text-orange-400" /> Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={restaurantFormData?.country || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                        <MdLocationOn className="text-orange-400" /> Latitude
                      </label>
                      <input
                        type="text"
                        name="geoLat"
                        value={restaurantFormData?.geoLat || ""}
                        onChange={handleRestaurantChange}
                        placeholder="e.g. 28.6139"
                        className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                          editingRestaurant 
                            ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                            : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                        }`}
                        disabled={!editingRestaurant}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                        <MdLocationOn className="text-orange-400" /> Longitude
                      </label>
                      <input
                        type="text"
                        name="geoLon"
                        value={restaurantFormData?.geoLon || ""}
                        onChange={handleRestaurantChange}
                        placeholder="e.g. 77.2090"
                        className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                          editingRestaurant 
                            ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                            : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                        }`}
                        disabled={!editingRestaurant}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Banking and Documents */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-orange-100/60 border border-orange-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/70">
              <div className="flex justify-between items-center border-b-2 border-orange-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <FaUniversity className="text-orange-500 text-lg" />
                  <h3 className="text-sm font-semibold text-gray-800">
                    Banking & Documents
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium">
                    Legal
                  </span>
                </div>

                {!editingRestaurant ? (
                  <button
                    onClick={() => setEditingRestaurant(true)}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-xl text-xs font-medium shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
                  >
                    <MdEdit className="text-sm" /> Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveRestaurant}
                      className="flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-xl text-xs font-medium shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300 transition-all duration-300 hover:scale-105"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                    <button
                      onClick={handleCancelRestaurant}
                      className="flex items-center gap-1.5 bg-gray-200 text-gray-700 px-3 py-1.5 rounded-xl text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaUniversity className="text-orange-400" /> Bank Name
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={restaurantFormData?.address || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaUniversity className="text-orange-400" /> Account Number
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={restaurantFormData?.city || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaUniversity className="text-orange-400" /> IFSC Code
                  </label>
                  <input
                    type="text"
                    name="ifscCode"
                    value={restaurantFormData?.state || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaFileInvoice className="text-orange-400" /> Pan Card Number
                  </label>
                  <input
                    type="text"
                    name="panCard"
                    value={restaurantFormData?.pinCode || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaFileInvoice className="text-orange-400" /> GST Number
                  </label>
                  <input
                    type="text"
                    name="gst"
                    value={restaurantFormData?.country || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <FaFileInvoice className="text-orange-400" /> FSSAI Code
                  </label>
                  <input
                    type="text"
                    name="fssai"
                    value={restaurantFormData?.country || ""}
                    onChange={handleRestaurantChange}
                    className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                      editingRestaurant 
                        ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                        : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                    }`}
                    disabled={!editingRestaurant}
                  />
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-orange-100/60 border border-orange-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/70">
              <div className="flex justify-between items-center border-b-2 border-orange-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <MdShare className="text-orange-500 text-lg" />
                  <h3 className="text-sm font-semibold text-gray-800">
                    Social Media Links
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium">
                    {restaurantFormData.socialMediaLinks.length} Links
                  </span>
                </div>

                {editingRestaurant && (
                  <button
                    type="button"
                    onClick={addSocialMediaLink}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-xl text-xs font-medium shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
                  >
                    <MdAdd className="text-sm" /> Add Link
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-3 max-h-48 overflow-y-auto">
                {restaurantFormData.socialMediaLinks.map((link, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-orange-50/50 rounded-xl border border-orange-100 transition-all duration-300 hover:border-orange-300"
                  >
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                        <FaInstagram className="text-orange-400" /> Platform
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Instagram, Facebook"
                        value={link.platform}
                        onChange={(e) =>
                          handleSocialMediaChange(
                            index,
                            "platform",
                            e.target.value,
                          )
                        }
                        className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                          editingRestaurant 
                            ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                            : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                        }`}
                        disabled={!editingRestaurant}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                        <MdShare className="text-orange-400" /> URL
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          placeholder="https://..."
                          value={link.url}
                          onChange={(e) =>
                            handleSocialMediaChange(
                              index,
                              "url",
                              e.target.value,
                            )
                          }
                          className={`w-full px-3 py-2 rounded-xl border transition-all duration-300 text-sm ${
                            editingRestaurant 
                              ? "border-orange-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200" 
                              : "border-orange-100 bg-orange-50/50 cursor-not-allowed"
                          }`}
                          disabled={!editingRestaurant}
                        />
                        {editingRestaurant && (
                          <button
                            type="button"
                            onClick={() => removeSocialMediaLink(index)}
                            className="flex items-center justify-center px-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all duration-300 hover:scale-105"
                          >
                            <MdDelete className="text-base" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {restaurantFormData.socialMediaLinks.length === 0 && (
                  <div className="text-center py-6">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                      <MdShare className="text-xl" />
                    </div>
                    <p className="text-sm font-semibold text-gray-700">
                      No social media links added
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Connect your restaurant with popular social platforms
                    </p>
                    {editingRestaurant && (
                      <button
                        type="button"
                        onClick={addSocialMediaLink}
                        className="mt-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
                      >
                        <MdAdd className="text-sm" /> Add Your First Link
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
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

export default ResturantCoreDetails;