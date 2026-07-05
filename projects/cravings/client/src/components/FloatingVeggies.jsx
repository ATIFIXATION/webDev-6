import tomato from "../assets/ingredients/tomato.png";
import garlic from "../assets/ingredients/garlic.png";
import lettuce from "../assets/ingredients/lettuce.png";

const veggies = [
  // =======================
  // 🍅 Tomatoes
  // =======================

  {
    img: tomato,
    alt: "Tomato",
    top: "4%",
    left: "2%",
    size: 210,
    rotate: -15,
    duration: 8,
    delay: 0,
  },

  {
    img: tomato,
    alt: "Tomato",
    top: "18%",
    right: "3%",
    size: 180,
    rotate: 18,
    duration: 9,
    delay: 1,
  },

  {
    img: tomato,
    alt: "Tomato",
    bottom: "3%",
    left: "4%",
    size: 170,
    rotate: -20,
    duration: 10,
    delay: 2,
  },

  {
    img: tomato,
    alt: "Tomato",
    bottom: "5%",
    right: "7%",
    size: 150,
    rotate: 15,
    duration: 9,
    delay: 3,
  },

  // =======================
  // 🧄 Garlic
  // =======================

  {
    img: garlic,
    alt: "Garlic",
    top: "35%",
    left: "6%",
    size: 120,
    rotate: 10,
    duration: 8,
    delay: 1,
  },

  {
    img: garlic,
    alt: "Garlic",
    top: "60%",
    right: "12%",
    size: 120,
    rotate: -18,
    duration: 11,
    delay: 2,
  },

  {
    img: garlic,
    alt: "Garlic",
    bottom: "25%",
    left: "18%",
    size: 130,
    rotate: 25,
    duration: 9,
    delay: 4,
  },

  {
    img: garlic,
    alt: "Garlic",
    bottom: "28%",
    right: "28%",
    size: 115,
    rotate: -12,
    duration: 10,
    delay: 5,
  },

  // =======================
  // 🥬 Lettuce
  // =======================

  {
    img: lettuce,
    alt: "Lettuce",
    top: "8%",
    left: "28%",
    size: 170,
    rotate: -18,
    duration: 10,
    delay: 0,
  },

  {
    img: lettuce,
    alt: "Lettuce",
    top: "45%",
    right: "2%",
    size: 150,
    rotate: 22,
    duration: 9,
    delay: 2,
  },

  {
    img: lettuce,
    alt: "Lettuce",
    bottom: "18%",
    left: "28%",
    size: 160,
    rotate: -15,
    duration: 11,
    delay: 4,
  },

  {
    img: lettuce,
    alt: "Lettuce",
    bottom: "8%",
    right: "22%",
    size: 145,
    rotate: 18,
    duration: 8,
    delay: 1,
  },
];

function FloatingVeggies() {
  return (
    <>
      {veggies.map((veg, index) => (
        <img
          key={index}
          src={veg.img}
          alt={veg.alt}
          draggable={false}
          className="floatingVeg absolute pointer-events-none select-none"
          style={{
            width: `${veg.size}px`,
            top: veg.top,
            left: veg.left,
            right: veg.right,
            bottom: veg.bottom,
            transform: `rotate(${veg.rotate}deg)`,
            animationDuration: `${veg.duration}s`,
            animationDelay: `${veg.delay}s`,
          }}
        />
      ))}
    </>
  );
}

export default FloatingVeggies;