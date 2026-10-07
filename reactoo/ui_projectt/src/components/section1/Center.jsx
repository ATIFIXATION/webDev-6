import LeftText from "./LeftText";
import ImageContainer from "./ImageContainer";

const Center = () => {
  return (
    <div className="grid gap-10 px-6 pb-8 md:grid-cols-[0.8fr_2fr] md:px-10">
      <LeftText />

      <ImageContainer />
    </div>
  );
};

export default Center;