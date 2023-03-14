import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"


export default function section2(){
    return(
        <section className=" mx-auto md:px-16 py-10 ">
            <h2 className=" font-bold text-white text-3xl py-12 text-center uppercase ">
                Latest Posts
            </h2>

            {/* grid columns*/}

            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 ">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post(){
    return(
        <div className=" item bg-transparent border-2 border-white p-10 rounded-xl ">
            <div className=" images ">
                <Link href="/">
                    <Image 
                    src={"/images/filler_img.png"} 
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
    )
}