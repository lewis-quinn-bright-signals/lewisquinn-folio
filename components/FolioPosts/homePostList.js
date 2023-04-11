import Image from "next/image"
import Link from "next/link"


export default function HomePostList({folioPost}) {

    const { title, slug, tags, featuredImage, description, logo, link } = folioPost.fields

    return (
        <>
            <div className=" w-full h-auto bg-black flex relative px-20 py-20 border-b-2 border-white xs:block xs:px-6 xs:py-16 ">
                <div className=" w-4/12 h-auto flex relative xs:w-full">
                    <div className=" w-full min-h-16 h-auto border-2 border-white xs:h-32 ">
                        <Image 
                            src={"https:" + featuredImage.fields.file.url}
                            alt={''}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                </div>

                <div className=" w-8/12 h-auto px-12 py-14 relative xs:w-full xs:px-0 xs:pb-0 ">
                    <div className=" align-middle my-auto w-full h-auto ">
                        <div className=" mt-6 ">
                            { tags.map(ing => (
                                <span key={ing} className='text-white bg-transparent text-xs font-medium mx-1 first:ml-0 rounded-full capitalize '>
                                    { ing }
                                </span>
                            ))}
                        </div>

                        <h3 className=" font-bold text-3xl text-white mt-1 uppercase">
                            {title}
                        </h3>

                        <p className=" font-normal text-sm text-white line-clamp-2 mt-4 mb-6 xs:my-4 ">
                            {description}
                        </p>

                        <button className=" py-3 btn-outline border-b-2 border-b-white border-t-2 border-t-transparent text-white ml-0 bg-transparent hover:border-2 hover:px-6 hover:bg-transparent hover:border-white justify-start capitalize flex">
                            <Link href={'/posts/' + slug}>
                                project details
                            </Link>
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}