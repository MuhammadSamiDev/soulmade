import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselBrakepoints } from "../projectData";

const Promotions = () => {
  return (
    <Carousel responsive={carouselBrakepoints}>
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="w-[524px] h-[294px]">
          <img
            src={`assets/Card${index + 1}.png`}
            alt=""
            className="object-contain"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Promotions;
