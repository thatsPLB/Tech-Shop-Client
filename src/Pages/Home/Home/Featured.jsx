import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/watch.jpeg'
import slide2 from '../../../assets/airpods.jpg'
import slide3 from '../../../assets/ta.webp'
import slide4 from '../../../assets/camera.jpeg'
import SectionTitle from './SectionTitle';




const Featured = () => {
    return (
       <section>
        <SectionTitle
        heading={"Our Featured Items"}
        ></SectionTitle>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-2xl uppercase text-center -mt-16 text-black'>Watch</h3>
            <p className='text-red-600'>"Smart Watch"</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-2xl uppercase text-center -mt-16 text-black'>Airpods</h3>
            <p className='text-red-600'>"Earphone"</p>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-black'>Tablet</h3>
            <p className='text-red-600'>"TAblet"</p>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-black'>Camera</h3>
            <p className='text-red-600'>"Camera"</p>
            </SwiperSlide>
      </Swiper>
       </section>
    );
};

export default Featured;