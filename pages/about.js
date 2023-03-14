import Carousel from "../components/carousel";
import Navbar from "../components/navbar";
import Section2 from "../components/section2";
import Section3 from "../components/section3";

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

const About = () => {
  return (
    <div className=" bg-zinc-900 z-0 ">
      <Navbar/>
      <section className="">
        <div className=" relative isolate overflow-hidden bg-gray-900 px-4 py-24 sm:py-52 m-auto">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1097 845"
            aria-hidden="true"
            className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
          >
            <path
              fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
              fillOpacity=".2"
              d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
            />
            <defs>
              <linearGradient
                id="10724532-9d81-43d2-bb94-866e98dd6e42"
                x1="1097.04"
                x2="-141.165"
                y1=".22"
                y2="363.075"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1097 845"
            aria-hidden="true"
            className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
          >
            <path
              fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
              fillOpacity=".2"
              d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
            />
            <defs>
              <linearGradient
                id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
                x1="1097.04"
                x2="-141.165"
                y1=".22"
                y2="363.075"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>

          <div className="mx-auto max-w-7xl px-10 lg:px-8">
            <div className="mx-auto lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">
                About Me
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300 text-center ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
          </div>
       </div>
      </section>

      <Carousel/>

      <Section2/>

      <Section3/>

      <div id="features" className="px-16 py-10">
          <div class="md:w-2/3 lg:w-1/2">
                <h2 class="my-8 text-2xl font-bold text-white dark:text-white md:text-4xl">
                  A technology-first approach to payments
                  and finance
                </h2>
                <p class=" text-gray-300 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi minima aspernatur, quidem nulla cupiditate nam consequatur eligendi magni adipisci.</p>
              </div>
              <div
                class="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
              >
                <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div class="relative space-y-8 py-12 p-8">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                      class="w-12"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div class="space-y-2">
                      <h5
                        class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                      >
                        First feature
                      </h5>
                      <p class="text-gray-600 dark:text-gray-300">
                        Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                      </p>
                    </div>
                    <a href="#" class="flex items-center justify-between group-hover:text-secondary">
                      <span class="text-sm">Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
                      </svg>                
                    </a>
                  </div>
                </div>
                <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div class="relative space-y-8 py-12 p-8">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                      class="w-12"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div class="space-y-2">
                      <h5
                        class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                      >
                        Second feature
                      </h5>
                      <p class="text-gray-600 dark:text-gray-300">
                        Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                      </p>
                    </div>
                    <a href="#" class="flex items-center justify-between group-hover:text-secondary">
                      <span class="text-sm">Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
                      </svg>                
                    </a>
                  </div>
                </div>
                <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div class="relative space-y-8 py-12 p-8">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                      class="w-12"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div class="space-y-2">
                      <h5
                        class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                      >
                        Third feature
                      </h5>
                      <p class="text-gray-600 dark:text-gray-300">
                        Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                      </p>
                    </div>
                    <a href="#" class="flex items-center justify-between group-hover:text-secondary">
                      <span class="text-sm">Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
                      </svg>                
                    </a>
                  </div>
                </div>
                <div
                  class="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
                >
                  <div
                    class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                      class="w-12"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div class="space-y-2">
                      <h5
                        class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                      >
                        More features
                      </h5>
                      <p class="text-gray-600 dark:text-gray-300">
                        Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                      </p>
                    </div>
                    <a href="#" class="flex items-center justify-between group-hover:text-secondary">
                      <span class="text-sm">Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
                      </svg>                
                    </a>
                  </div>
                </div>
              </div>
          </div>
    </div>
    
  )
}

export default About;