const Card = (props) => {
  return (
    <div
      className={`w-64 rounded-xl p-4 shadow-lg ${props.color}`}
    >
      <img
        src={props.img}
        alt={props.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-bold mt-3">
        {props.name}
      </h2>

      <p className="text-gray-700">
        Age: {props.age}
      </p>

      <p className="mt-2">
        {props.description}
      </p>

      <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
        View Profile
      </button>
    </div>
  );
};

export default Card;