import Link from 'next/link'
import Image from 'next/image'


export default function HomeSlide({homeContent}) {

    const { title, excerpt, buttonText, featuredImage, logo, link } = homeContent.fields

    return (
        <>
            <div className=' px-14 xs:px-6 py-32'>
                <div>
                    <h1 className=' text-white font-bold text-7xl xs:5xl text-center uppercase'>
                        {title}
                    </h1>

                    <p className=' text-white font-medium text-sm text-center py-8 '>
                        {excerpt}
                    </p>

                    <button className="py-3 btn-outline border-b-2 border-b-white border-t-2 border-t-transparent text-white mx-auto bg-transparent hover:border-2 hover:px-6 hover:bg-transparent hover:border-white justify-center capitalize flex">
                        {buttonText}
                    </button>
                </div>

                <div className=' p-8 w-full '>
                    <div className=" relative w-full h-80 ">
                        <Image 
                            src={"https:" + featuredImage.fields.file.url}
                            alt={''}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                </div>

            </div>
            
        </>
    )
}