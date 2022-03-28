import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'
import { CalendarIcon , ClockIcon } from '@heroicons/react/solid'

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `${process.env.API_URL}/category/${params.category}`
  );
  const cate = await response.json();
  return {
    props: {
      cate,
    },
  };
}

const CategoryDetail = ({cate}) => {
    const { data } = cate
    return(
      <>
      {/* silder */}
      <div className="mb-5 pt-28">
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
          {
            data.map(item=>{
              return(
                <SwiperSlide key={item.id}> 
                  <Image src="/ronaldo.webp" width="100%" height="25%" objectPosition="top" objectFit="cover" layout="responsive" alt={item.title}
                    />
                </SwiperSlide>  
              )
            })
          }
          </Swiper>  
      </div>
        
      {/* detail */}
      <div className="grid lg:grid-cols-3 lg:gap-5 gap-0 article mb-5 px-5 relative">
          {/* big article */}
          <div className="lg:col-span-2 md:col-span-1 article_img rounded-md">
              <h1 className="big_article_title">ស្អាតម្ល៉េះទេលោក! មួយឈុតនេះ ស្រីនា សមខ្លាំង ឡេីងស្លីមខ្លាំង</h1>
              <article className="p-3 space-y-2">      
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm border-2 text-white p-1 bg-primary-100 rounded-lg w-auto">កីទ្បា</h3>
                    <h4 className="text-sm">Written by <span className="font-bold text-lg text-primary-100">Summer</span> </h4>
                  </div>
                  <div className="flex gap-5">
                      <div className="flex gap-2">
                          <CalendarIcon className="w-4" />
                          <span className="text-sm font-semibold">27-March-2021 </span>
                      </div>
                      <div className="flex gap-2">
                          <ClockIcon className="w-4" />
                          <span className="text-sm font-semibold">3pm - 18 hour ago </span>
                      </div>                
                  </div>
              </article>
          </div> 
           {/* small article */}
          <div className="rounded-md grid lg:grid-rows-2 border-2 bg-gray-300">
              <div className="card"></div>
              <article className="p-3 space-y-2">
                  <div className="space-y-2">
                      <a className="font-semibold text-xl hover:text-primary-100 cursor-pointer">ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!</a>
                      <p className="text-sm dark:text-black font-semibold">បុរសម្នាក់អាយុ៤២ឆ្នាំ បានចំណាយពេល២ឆ្នាំ ក្នុងការជីកដីជម្រៅ៣ម៉ែត្រ និងប្រវែង១២ម៉ែត្រពីផ្ទះរបស់គាត់</p>
                  </div>      
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm border-2 text-white p-1 bg-primary-100 rounded-lg w-auto">កីទ្បា</h3>
                    <h4 className="text-sm">Written by <span className="font-bold text-lg text-primary-100">Summer</span> </h4>
                  </div>
                  <div className="flex gap-5">
                      <div className="flex gap-2">
                          <CalendarIcon className="w-4" />
                          <span className="text-sm font-semibold">27-March-2021 </span>
                      </div>
                      <div className="flex gap-2">
                          <ClockIcon className="w-4" />
                          <span className="text-sm font-semibold">3pm - 18 hour ago </span>
                      </div>                
                  </div>
              </article>               
          </div>
      </div>      

       {/* អត្ថបទចុងក្រោយ  */}
       <div className="lg:grid lg:grid-cols-3 gap-5 article mb-5 px-5">
          <div className="md:col-span-2 col-span-0">
              <h1 className="text-2xl font-semibold my-2 ml-3">អត្ថបទចុងក្រោយ</h1>
               {/* big article */}
              <div className="lg:col-span-2 md:col-span-1 article_img rounded-md"></div> 
              {/* small article */}
              <div className="rounded-md grid lg:grid-cols-2">
                  <div className="last_card rounded-lg"></div>
                  <article className="p-3 space-y-2">
                      <div className="space-y-2">
                          <a className="font-semibold text-xl dark:text-white hover:text-primary-100 cursor-pointer">ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!</a>
                          <p className="text-sm">បុរសម្នាក់អាយុ៤២ឆ្នាំ បានចំណាយពេល២ឆ្នាំ ក្នុងការជីកដីជម្រៅ៣ម៉ែត្រ និងប្រវែង១២ម៉ែត្រពីផ្ទះរបស់គាត់</p>
                      </div>      
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm border-2 text-white p-1 bg-primary-100 rounded-lg w-auto">កីទ្បា</h3>
                        <h4 className="text-sm">Written by <span className="font-bold text-lg text-primary-100">Summer</span> </h4>
                      </div>
                      <div className="flex gap-5">
                          <div className="flex gap-2">
                              <CalendarIcon className="w-4" />
                              <span className="text-sm font-semibold">27-March-2021 </span>
                          </div>
                          <div className="flex gap-2">
                              <ClockIcon className="w-4" />
                              <span className="text-sm font-semibold">3pm - 18 hour ago </span>
                          </div>                
                      </div>
                  </article>               
              </div>
          </div>
          <div>
              <div>
                  <Image src="/team.jpg"  width={1000} height={600} objectFit="cover" />
              </div>
              <div>
                  <h1 className="text-2xl font-semibold my-3">ប្រចាំសប្តាហ៍</h1>
                  <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg weekend_img"></div>
                      <div>
                          <article className="space-y-2 mb-3">
                          <div>
                              <a className="font-semibold text-lg dark:text-white hover:text-primary-100 cursor-pointer">ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!</a>
                              <p className="text-sm">បុរសម្នាក់អាយុ៤២ឆ្នាំ បានចំណាយពេល២ឆ្នាំ ...</p>
                          </div>      
                          <div className="flex items-center gap-2">
                            <h3 className="text-xs border-2 text-white p-1 bg-primary-100 rounded-lg w-auto">កីទ្បា</h3>
                            <h4 className="text-xs">Written by <span className="font-bold text-xs text-primary-100">Summer</span> </h4>
                          </div>
                          <div className="gap-5">
                              <div className="flex gap-2">
                                  <CalendarIcon className="w-4" />
                                  <span className="text-xs font-semibold">27-March-2021 </span>
                              </div>
                              <div className="flex gap-2">
                                  <ClockIcon className="w-4" />
                                  <span className="text-xs font-semibold">3pm - 18 hour ago </span>
                              </div>                
                          </div>
                          </article>     
                      </div>
                  </div>
              </div>
              <div>
                  <Image src="/nfl.jpg"  width={1000} height={600} objectFit="cover" />
              </div>
          </div>      
       </div>
      </>
    )
};

export default CategoryDetail;
