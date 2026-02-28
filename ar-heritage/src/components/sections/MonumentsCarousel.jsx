import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { MONUMENTS } from "../../data/monuments";

const MonumentsHero = () => {
  return (
    <section className="relative h-screen">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {MONUMENTS.map((monument) => (
          <SwiperSlide key={monument.id}>
            <div className="relative h-screen w-full">

              {/* Background Image */}
              <img
                src={monument.image}
                alt={monument.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">

                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                  {monument.name}
                </h1>

                <p className="text-xl md:text-2xl text-white/80 mb-8">
                  {monument.location}
                </p>

                <button className="bg-accent text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                  Discover More
                </button>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default MonumentsHero;