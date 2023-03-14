import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'


export default function section3(){
    return(
        <section className=" mx-auto md:px-16 py-10 ">
        
            <h2 className=" font-bold text-white text-3xl py-12 text-center uppercase ">
                Most Popular
            </h2>

            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay:2000
              }}
            >
                <SwiperSlide>
                    { Post() }
                </SwiperSlide>

                <SwiperSlide>
                    { Post() }
                </SwiperSlide>

                <SwiperSlide>
                    { Post() }
                </SwiperSlide>

                <SwiperSlide>
                    { Post() }
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

function Post(){
    return(
        <div className=" grid bg-transparent border-2 border-white p-8 rounded-xl ">
            <div className=' my-auto justify-center '>
                <div className=" images ">
                    <Link href="/">
                        <Image 
                        src={"/images/filler_img2.png"} 
                        className="rounded-xl m-auto"
                        width={175} 
                        height={175}
                        />
                    </Link>
                </div>
                <div className=" info flex justify-center flex-col py-4 ">
                    <div className=' title text-white '>
                        <h3 className=" text-xl text-white text-center font-bold uppercase pt-4 ">
                            Post Name
                        </h3>
                        <p className=" text-white text-center py-4 ">
                            Lorem ipsum dolor...
                        </p>
                        <Author/>
                    </div>
                </div>
            </div>
        </div>
    )
}