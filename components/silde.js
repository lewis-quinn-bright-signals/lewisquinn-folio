import Link from 'next/link'
import Image from 'next/image'
import App from '../pages/_app'

export default function Slide({ folioPost }) {

    return (
        <>
        
            <div className=' grid min-h-screen min-w-full '>

                <div className=' inline-flex h-10 py-10 px-14 justify-between mt-0 mb-auto '>
                    <div className=' line w-5/12 border-t-2 border-white rounded-full mt-5 '>

                    </div>
                    <div className=' flex w-2/12 '>
                        <button className="btn btn-circle btn-outline border-white mx-auto hover:bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:fill-current hover:text-white" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div className=' flex w-5/12 border-t-2 border-white rounded-full mt-5 '>

                    </div>
                </div>

                
                    <div className=' grid px-14'>
                        <div  className=' title text-white mt-0 mb-auto relative z-50 pb-5 '>
                            <h1 className=' flex text-7xl uppercase font-bold mt-auto mb-0 !mr-auto !ml-0 float-left absolute w-full justify-start '>
                                {/* {folioPost.fields.lineOne} */}
                            </h1>
                        </div>

                        <div className=' !m-auto w-full !h-128 pl-12 pr-12 '>
                            <Link href="/">
                                <div className='post-img !w-auto !h-full relative bg-black opacity-70 hover:opacity-100 '>
                                    <Image 
                                        src={"/images/bg-filler.jpg"} 
                                        alt='Filler Img'
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='center'
                                        // style={{width: '100%', height: '40%'}}
                                    />
                                </div>
                            </Link>
                        </div>
                        
                        <div className=' title text-white mt-auto mb-auto relative z-50 '>
                            <h1 className=' flex text-7xl uppercase font-bold !-mt-14 mb-0 !mr-0 !ml-auto float-right absolute w-full justify-end '>
                                {/* {folioPost.fields.lineTwo} */}
                            </h1>
                        </div>
                    </div>

                <div className=' inline-flex h-30 py-10 px-14 justify-between mb-0 mt-auto '>
                    <div className=' line w-5/12 border-b-2 border-white mb-5 '>

                    </div>
                    <div className=' flex w-2/12 '>
                        <button className=' btn h-10 rounded-full text-gray-900 bg-white mx-auto uppercase '>
                            Explore
                        </button>
                    </div>
                    <div className=' flex w-5/12 border-b-2 border-white mb-5 '>

                    </div>
                </div>

            </div>
        
        </>
    )
}