import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'

function Slide() {
  return (
    <div className='pt-28 mb-5'>
        <Swiper
          spaceBetween={50}
          autoplay={{
              delay: 100,
              disableOnInteraction: false
          }}
          loop={true}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        > 
            <SwiperSlide> 
                <Image src="/ronaldo.webp" width="100%" height="25%" objectPosition="top" objectFit="cover" layout="responsive" />
            </SwiperSlide> 
        </Swiper> 
    </div>  
  )
}

export default Slide