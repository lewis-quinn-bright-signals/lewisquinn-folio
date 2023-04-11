import Image from "next/image"
import Link from "next/link"
import Marquee from "react-fast-marquee"
import { createClient } from 'contentful'
import HomeMarqueeSlide from "./homeMarqueeSlide"


export async function getStaticProps() {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
  
    const res = await client.getEntries({ content_type: "folioPost" })
  
    return {
      props: {
        folioPosts: res.items
      },
      revalidate: 1
    }
  }
  


export default function HomeMarquee({folioPosts}) {

    console.log(folioPosts)

    return (
        <>
            
        </>
    )
}