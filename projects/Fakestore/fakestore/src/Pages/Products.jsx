import video2 from "../assets/video2.mp4";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "abibas Backpack",
      category: "Fashion",
      price: "$1050",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    {
      id: 2,
      title: "jewellery ",
      category: "Fashion",
      price: "$2000",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    },
    {
      id: 3,
      title: "men Jacket",
      category: "Men's Wear",
      price: "$1500",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    },
    {
      id: 4,
      title: "men jacket",
      category: "Men's Fashion",
      price: "$1000",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video2} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 p-10">
        <h1 className="text-5xl font-bold text-center text-white mb-10">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5"
            >
              <div className="h-56 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain"
                />
              </div>

              <h2 className="text-xl font-bold mt-4">
                {item.title}
              </h2>

              <p className="text-gray-500">
                {item.category}
              </p>

              <p className="text-green-600 text-2xl font-bold mt-2">
                {item.price}
              </p>

              <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Products;