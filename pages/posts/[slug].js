import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {

    const res = await client.getEntries({
        content_type: 'folioPost'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    } 

}

export async function getStaticProps({ params }) {

    const { items } = await client.getEntries({
        content_type: 'folioPost',
        'fields.slug' : params.slug
    })

    return {
        props: { folioPost: items[0] }
    }
    
}
  

export default function PostPage({ folioPost }){
    
    const { featuredImage, title, description, tags } = folioPost.fields

    return (
        <>
        <main className=' bg-zinc-900 '>
          <section className=' min-h-screen'>
            <div className=' grid p-14 '>

                <div className=' w-full !h-128 sticky '>
                    <div className=' !w-auto !h-full relative'>
                        <Image
                            src={'https:' + featuredImage.fields.file.url}
                            alt='Filler Img'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                </div>

                <div className='info mt-10'>
                    { tags.map(ing => (
                        <span key={ing} className='text-black bg-white px-4 py-2 mx-2 first:ml-0 rounded-lg '>
                            { ing }
                        </span>
                    ))}
                </div>

                <h2 className=' text-4xl text-white uppercase my-10 '>
                    { title }
                </h2>

                <div className='  '>
                    <h3 className=' text-2xl text-white uppercase '>
                        Project Details
                    </h3>
                    <div className=' text-gray-300 mt-6'>
                        { documentToReactComponents(description) }
                    </div>
                </div>

            </div>
          </section>
        </main>
        </>
    )
}