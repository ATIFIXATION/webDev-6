import { useAuth } from "../../context/Auth.Context";

const Overview = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <h1 className="text-2xl font-bold text-center mt-20">
        No User Logged In
      </h1>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl">

      <div className="flex items-center gap-6">

        <img
          src={user.photo}
          alt="profile"
          className="w-28 h-28 rounded-full border"
        />

        <div>
          <h2 className="text-3xl font-bold">
            {user.fullName}
          </h2>

          <p className="text-gray-600 mt-2">
            {user.email}
          </p>

          <p className="text-gray-600">
            {user.phone}
          </p>

          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>

      </div>

    </div>
  );
};

export default Overview;