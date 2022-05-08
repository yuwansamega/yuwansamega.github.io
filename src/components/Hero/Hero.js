import React from 'react'
import Img from '../../image/img.png'

const Hero = () => {
  return (
    <section id='home' className='pt-36'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-md font-semibold text-primary lg:text-lg">Hello there 👋, it's <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Yuwan Samega</span></h1>
            <h2 className="font-medium text-slate-600 mt-1 text-lg mb-4 lg:text-2xl">Fullstack Website Developer</h2>
            <p className="font-medium text-slate-400 leading-relaxed mb-10 text-justify">A self-taught web developer based in Jakarta, Indonesia. Focus on develope maintanable, scalable and reliable website.</p>
            <a href="mailto:yuwansamega28@gmail.com" className="text-base font-semibold text-slate-100 bg-primary py-3 px-8 rounded-full hover:bg-slate-100 hover:text-primary hover:ring hover:ring-primary hover:shadow-lg hover:opacity-80 focus:ring-4 focus:ring-teal-400 focus:ring-offset-0 transition duration-300 ease-in-out">Contact me</a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative -translate-y-12 lg:right-0">
              <img className="hidden lg:block" width="500" height="500" src={Img} alt="Designer Vector" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero