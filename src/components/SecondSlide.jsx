import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import slide9 from "../assets/slide9.jpg";
import slide10 from "../assets/slide10.jpeg";
import slide12 from "../assets/slide12.jpeg";
import slide13 from "../assets/slide13.jpg";
import slide14 from "../assets/slide14.jpeg";
import slide16 from "../assets/slide16.jpg";
import slide17 from "../assets/slide17.jpeg";
import slide18 from "../assets/slide18.jpeg";

export default function Slider() {
 const slides = [slide9, slide10, slide12, slide13, slide14, slide16, slide17, slide18];

  return (
    <div className="w-full max-w-[360px] md:max-w-2xl mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{
          delay: 3000, // troca a cada 3s
          disableOnInteraction: false, // continua mesmo após clicar
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-2xl shadow-lg"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-164 md:h-186 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
