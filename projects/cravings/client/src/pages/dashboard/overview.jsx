import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/Auth.Context";
import toast from "react-hot-toast";

const Overview = () => {
  const { user, setUser } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  if (!user) {
    return (
      <h1 className="text-2xl font-bold text-center mt-20">
        No User Logged In
      </h1>
    );
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    });

    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4500/dashboard/profile/${user._id}`,
        formData,
      );

      setUser(response.data.user);

      toast.success("Profile Updated Successfully");

      setIsEditing(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    // Preview immediately
    const imageURL = URL.createObjectURL(file);

    setUser({
      ...user,
      photo: imageURL,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">
      <div className="flex items-start gap-8">
        <div className="relative">
          <img
            src={user.photo}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-orange-500 object-cover"
          />

          <label
            htmlFor="profileImage"
            className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center cursor-pointer"
          >
            📷
          </label>

          <input
            id="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImage}
          />
        </div>
        <div className="flex-1">
          {isEditing ? (
            <>
              <div className="mb-4">
                <label className="font-semibold">Full Name</label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2"
                />
              </div>

              <div className="mb-4">
                <label className="font-semibold">Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2"
                />
              </div>

              <div className="mb-4">
                <label className="font-semibold">Phone</label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>

                <button
                  onClick={handleCancel}
                  className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold">{user.fullName}</h2>

              <p className="text-gray-600 mt-3">{user.email}</p>

              <p className="text-gray-600">{user.phone}</p>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
