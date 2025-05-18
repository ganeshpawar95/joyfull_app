import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import { IMAGE_BASE_URL } from "../../../utils/constants";

function HeroSlider({ banner_list = [] }) {
  return (
    <Carousel className="relative">
      <CarouselContent>
        {banner_list.map((res) => (
          <CarouselItem key={res.id}>
            <img
              src={IMAGE_BASE_URL + res.banner_name}
              className="w-full"
              width={800}
              height={400}
              alt="image"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default HeroSlider;
