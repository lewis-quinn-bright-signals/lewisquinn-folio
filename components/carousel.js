// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/author';

// Import Swiper styles
import 'swiper/css';

export default function Carousel() {

    SwiperCore.use([Autoplay])

  return (
    <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
            delay:2000
      }}
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      
    </Swiper>
  );
};

function Slide() {
    return (
      <div className=' grid bg-transparent h-50 w-100 '>
        <div className=' m-auto '>
          <Link href="/">
            <Image 
              src={"/images/filler_img.png"} 
              width={150} 
              height={150}
            />
          </Link>
        </div>
        <div className='info'>
          <div className=' title text-white '>
            <Author/>
          </div>
        </div>
      </div>
    );
}