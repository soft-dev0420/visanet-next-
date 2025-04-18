'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const VerticalCarousel = () => {
    const images = [
        '/images/blog/1.jpg',
        '/images/blog/2.jpg',
        '/images/blog/3.jpg',
        '/images/blog/4.jpg',
        '/images/blog/5.jpg',
        '/images/blog/6.jpg',
        '/images/blog/7.jpg',
        '/images/blog/8.jpg',
        '/images/blog/9.jpg',
        '/images/blog/10.jpg',
    ];

    return (
        <div className="mb-10 w-full h-[520px] overflow-hidden rounded">
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="h-full"
            >
                {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VerticalCarousel;
