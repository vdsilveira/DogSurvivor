// components/About.js
import React, { forwardRef } from 'react'; // Importando forwardRef
import Image from 'next/image';
import im5 from '../../img/im5.png';
import Willson from '../gifs/willson';

// Definindo o componente About utilizando forwardRef
// eslint-disable-next-line react/display-name
const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center space-x-10 max-w-screen justify-center bg-gradient-to-r from-gray-200 to-transparent mb-44">
      {/* Imagem 1 */}
      <div className="bg-white ring-2 ring-white h-72 w-72 rounded-2xl m-4 shadow-lg">
        <Image 
          src={im5} 
          alt="Surviving Lions" 
          width={200} 
          height={200} 
          className='rounded-2xl object-cover w-full h-full' 
        />
      </div>

      {/* Texto 1 */}
      <div className="text-center md:text-left w- ">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-950 bg-clip-text text-transparent">
          Surviving Lions: A Tribute to Resilience and Community Spirit
        </h1>
        <p className="text-lg text-gray-800 mb-4">
          In the promising times of a bull run, Surviving Lions emerges, a meme coin that honors the resilience and determination of investors who overcome the market's challenges.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          With a fun and community-driven spirit, Surviving Lions is not just a coin but a symbol of strength and unity among crypto enthusiasts. Those who survive until the end will be rewarded in the upcoming bull run, celebrating their achievements and victory over adversity.
        </p>
        <p className="text-lg text-gray-800">
          Join the community and get ready to reap the rewards of your perseverance. After all, every investor is a true survivor, and Surviving Lions is here to celebrate every victory!
        </p>
      </div>
      <span className='absolute right-0 transform -translate-x-32'>
        <Willson />
      </span>
    </div>
  );
});

// Exportando o componente
export default About;
