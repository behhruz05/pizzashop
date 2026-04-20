import React from 'react';
import Pizza from '../assets/Pizza.png'
import fri from '../assets/fri.png'
import peperoni from '../assets/peperoni.png'

const About = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-[#1c0a00] p-8 lg:p-24 font-sans text-white overflow-hidden">
      
      <div className="absolute top-10 left-4 lg:left-10 text-[7rem] lg:text-[14rem] text-[#2c160a] opacity-40 font-serif italic pointer-events-none select-none tracking-wider z-0 leading-none">
        About us
      </div>

      <div className="w-full lg:w-[55%] z-10 lg:pr-12 flex flex-col justify-center">
        
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide text-white drop-shadow-md">
          About us
        </h1>
        
        <p className="text-[#b5a59a] text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
          In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.
        </p>

        <div className="flex items-center mb-10 relative w-full">
          
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop" alt="pizza 1" 
                 className="w-20 h-20 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.8)] object-cover z-10 border border-[#1c0a00]" />
            
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop" alt="pizza 2" 
                 className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.8)] object-cover -ml-6 lg:-ml-10 z-20 border border-[#1c0a00]" />
            
            <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=300&h=300&fit=crop" alt="pizza 3" 
                 className="w-28 h-28 lg:w-40 lg:h-40 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.9)] object-cover -ml-8 lg:-ml-12 z-30 transform scale-105 border border-[#1c0a00]" />
            
            <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop" alt="pizza 4" 
                 className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.8)] object-cover -ml-8 lg:-ml-12 z-20 border border-[#1c0a00]" />
            
            <img src="https://cdn.choparpizza.uz/storage/products/2022/03/03/dXbMedBpXqHZxCOOlQl58wp5R1zPA1X11YH74sTw.webp" alt="pizza 5" 
                 className="w-20 h-20 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.8)] object-cover -ml-6 lg:-ml-10 z-10 border border-[#1c0a00]" />
          </div>
          
          <div className="ml-8 hidden md:block">
            <svg width="70" height="35" viewBox="0 0 70 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 25 Q 35 -5, 65 20" stroke="#b5a59a" strokeWidth="1.5" strokeDasharray="5 5" fill="none" strokeLinecap="round"/>
              <path d="M58 13 L 67 22 L 56 29" stroke="#b5a59a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <p className="text-[#b5a59a] text-base lg:text-lg leading-relaxed max-w-lg">
          The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.
        </p>
      </div>

      <div className="w-full lg:w-[45%] flex justify-center items-center z-10 relative mt-16 lg:mt-0">
        
        <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg">

          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src={Pizza} alt="" />
          </div>

          <div className="absolute -bottom-10 -left-6 lg:-bottom-16 lg:-left-12 text-[6rem] lg:text-[8rem] drop-shadow-2xl -rotate-12 select-none z-20">
            <img src={fri} alt="" />
          </div>

          <div className="absolute -top-12 -right-6 lg:-top-16 lg:-right-12 text-[6rem] lg:text-[8rem] drop-shadow-2xl rotate-12 select-none z-20 mt-[-50px]">
            <img src={peperoni} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;