const cards = [
  {
    number: "1",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
    text: "Prime customers that have access to bank credit and are satisfied with the current product",
    label: "Satisfied",
    labelColor: "bg-blue-500",
  },
  {
    number: "2",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
    text: "Prime customers that have access to bank credit and are not satisfied with the current service",
    label: "Underserved",
    labelColor: "bg-blue-500",
  },
  {
    number: "3",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
    text: "Customers from near-prime and sub-prime segments with no access to bank credit",
    label: "Underbanked",
    labelColor: "bg-lime-400",
  },
];

const ImageContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.number}
          className="group relative h-[430px] overflow-hidden rounded-[28px] bg-neutral-200"
        >
          {/* Image */}
          <img
            src={card.image}
            alt={card.label}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/85" />

          {/* Number */}
          <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-medium text-black">
            {card.number}
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="mb-4 text-sm font-medium leading-5 text-white">
              {card.text}
            </p>

            <div className="flex items-center justify-between rounded-full bg-white/10 p-1 pl-4 backdrop-blur-md">
              <span
                className={`${card.labelColor} rounded-full px-4 py-2 text-xs font-semibold text-black`}
              >
                {card.label}
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                →
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;