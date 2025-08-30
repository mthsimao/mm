import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";
import slide4 from "../assets/slide4.jpeg";
import slide5 from "../assets/slide5.jpeg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";
import slide8 from "../assets/slide8.jpeg";

export default function Slider() {
 const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

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
