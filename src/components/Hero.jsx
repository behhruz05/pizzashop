import React from 'react'
import HeroImg from '../assets/HeroImg.png'
import HeroImg1 from '../assets/HeroImg1.png'
import Vector2 from '../assets/Vector 2.png'
import Ellipse2 from '../assets/Ellipse 2.png'
import Polygon1 from '../assets/Polygon 1.png'
import Vector1 from '../assets/Vector 1.png'
import Pizza1 from '../assets/pizza 1.png'
import Fries1 from '../assets/fries 1.png'

const Hero = () => {
  return (
    <div className='flex justify-between items-center px-[130px] pt-[61px] pb-[130px] bg-[#210A01]'>
      <div className='flex flex-col items-start'>
        <h1 className="flex items-center gap-4 text-[69.17px] font-extrabold text-white">
          The Fastest
          <img src={Vector2} alt="" />
        </h1>
        <h1 className='text-[69.17px] font-extrabold text-white'>Pizza⚡Delivery</h1>
        <p className='text-[#A3A3A3] text-[19.56px] font-medium w-[411px] pt-[37px]'>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span className='text-white'>pizza is free!</span></p>
        <p className='text-[#A3A3A3] text-[19.56px] font-medium pt-[23px]'>Cooking process:</p>
        <div className="relative inline-block -ml-[30px]">
          <img src={HeroImg} alt="" className="block" />

          <img
            src={Ellipse2}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          />

          <img
            src={Polygon1}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="group relative flex items-center w-72 h-12 p-1 bg-black border border-orange-600/50 rounded-full">

            <div className="relative z-10 flex-1 text-center cursor-pointer text-white transition-colors duration-300 peer/one">
              To order
            </div>

            <div className="peer/two relative z-10 flex-1 text-center cursor-pointer text-orange-500 transition-colors duration-300 hover:text-white">
              Pizza-Menu
            </div>

            <div className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-gradient-to-r from-orange-600 to-orange-400 rounded-full shadow-[0_0_15px_rgba(251,146,60,0.5)] transition-transform duration-300 ease-in-out peer-hover/two:translate-x-full" />

            <style>{`.peer\/two:hover ~ div:nth-child(1) { color: #f97316; }`}</style>
          </div>
          <img src={Vector1} alt="" />

        </div>
      </div>

      <div className="relative w-fit overflow-visible">
        <img src={HeroImg1} alt="" className="block" />
        <img
          src={Pizza1}
          alt=""
          className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 z-20 rotate-12"
        />
        <img
          src={Fries1}
          alt=""
          className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 z-20 -rotate-12"
        />

      </div>

    </div>
  )
}

export default Hero
