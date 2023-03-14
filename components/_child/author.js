import Image from "next/image"
import Link from "next/link"

export default function author (){
    return(
        <div className=" author flex py-5 mx-auto justify-center ">
            <Image 
                src={"/images/author/filler_img3.png"}
                width={40} 
                height={40}
                className='rounded-full object-contain '
            />
            <div className=" flex flex-col justify-center px-4 ">
                <Link href={"/"}>
                    <p className=" text-md text-white font-bold hover:text-cyan-400 ">
                        Author Name
                    </p>
                    <span className=" text-sm text-gray-400">
                        Front End Developer
                    </span>
                </Link>
            </div>
        </div>
    )
}