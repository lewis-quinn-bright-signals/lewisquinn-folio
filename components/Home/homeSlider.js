import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import './/../../styles/Home.module.css'
import { createClient } from 'contentful'
import HomeSlide from './homeSlide'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';


export async function getStaticProps() {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
  
    const res = await client.getEntries({ content_type: "homeContent" })
  
    return {
      props: {
        homeContents: res.items
      },
      revalidate: 1
    }
}


export default function HomeSlider({homeContents}) {

    console.log(homeContents)

    SwiperCore.use([Autoplay])

    return (
        <>
            <Swiper
                  slidesPerView={1}
                  loop={true}
              //     autoplay={{
              //         delay:2000
              //   }}
              >
                <div>
                        {homeContents.map(homeContent => (
                            <SwiperSlide>
                                <HomeSlide 
                                    key={homeContent.sys.id} 
                                    homeContent={homeContent}
                                />
                            </SwiperSlide>
                        ))}
                </div> 
            </Swiper>
        </>
    )
}

