import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import slides from '../data/heroSlides'

const SkillHeroSlider = () => {
    return (
        <section className="bg-transparent py-10 text-slate-200 flex justify-center items-center">

            <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView="auto"
                spaceBetween={24}
                freeMode={false}
                loop={true}
                speed={4000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    reverseDirection: true,
                }}
               
                className="px-6"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide
                        key={i}
                        className="w-75! md:w-90!"
                    >
                        <div className="h-full rounded-xl border border-cyan-400/10 bg-black/40 backdrop-blur-md p-6 shadow-lg">
                            <h3 className="text-4xl font-semibold text-cyan-300">
                                {slide.title}
                            </h3>
                            <p className="mt-3 text-lg text-slate-300 leading-relaxed">
                                {slide.text}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default SkillHeroSlider;
