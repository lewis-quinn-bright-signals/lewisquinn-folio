import Link from 'next/link'
import Image from 'next/image'


export default function HomeMarqueeSlide({folioPost}) {

    const { logo, link } = folioPost.fields

    return (
        <>
            <div className=" relative w-40 h-32 mx-8 ">
                <Link href={'/'}>
                    <Image 
                        src={"https:" + logo.fields.file.url}
                        alt={''}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                    />
                </Link>
            </div>
        </>
    )
}