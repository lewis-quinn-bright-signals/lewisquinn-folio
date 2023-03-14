import Image from "next/image"


export default function Skeleton(){
    return (
        <>
        <section class="bg-zinc-900 dark:bg-gray-900 ">
            <div class="flex container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div class="wf-ull w-full m-auto">
                    <p class="text-sm font-medium text-blue-500 dark:text-blue-400 text-center">
                        Loading...
                    </p>
                    <h1 class="mt-3 text-2xl font-semibold text-white dark:text-white md:text-3xl text-center">
                        Page not found
                    </h1>
                    <p class="mt-4 text-gray-400 dark:text-gray-400 text-center">
                        Sorry, the page you are looking for doesn't exist yet.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}