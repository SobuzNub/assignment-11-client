import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





export default function Carousel() {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <SwiperSlide><img className='md:w-full md:h-[600px]' src="https://i.ibb.co/f8yQ8ZN/360-F-606375369-Rq-PF7-Mlk-XUMJk-E4dr3080-Mdw-Sg4-Fay74.jpg" alt="" /></SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperSlide><img className='md:w-full md:h-[600px]' src="https://i.ibb.co/BwJJ0gG/360-F-574706059-s4g-BUvm-VNHe-D0-XYk-Vra822kli7-Nb-Wsgt.jpg" alt="" /></SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperSlide><img className='md:w-full md:h-[600px]' src="https://i.ibb.co/NCFcgRP/360-F-633319415-FKHh9omrar-IEJYOJrmv8-Ed-BWlh-Qp-Y9-NT.jpg" alt="" /></SwiperSlide>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}


