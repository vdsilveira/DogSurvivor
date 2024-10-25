import Image from 'next/image';
import im7 from '../../img/im7.png';
import im1 from '../../img/im1.png';
import im15 from '../../img/im15.png';
import im16 from '../../img/im16.png';
import im3 from '../../img/im3.png';

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-">
      <span className=' font-extrabold text-7xl text-center'>
       
      </span> 

      <div className="bg-gradient-to-br from-amber-200 to-amber-500 w-full">
        <span className="absolute bg-white ring-2 ring-white ml-10 pl-4 pr-4 w-80 rounded-2xl shadow-lg shadow-slate-600 overflow-hidden font-extrabold text-2xl">
          NFTs - Surviving Lions
        </span>

        <div className="flex flex-wrap justify-center items-center h-[50vh]">
          {/* Espaço vazio no topo do footer */}
          <span className="bg-white ring-2 ring-white h-64 w-64 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
            <Image 
              src={im3} 
              alt="Surviving Lions" 
              width={500} 
              height={500} 
              className='rounded-2xl object-cover w-full h-full'
            />
          </span>

          <span className="bg-white ring-2 ring-white h-64 w-64 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
            <Image 
              src={im7} 
              alt="Surviving Lions" 
              width={500} 
              height={500} 
              className='rounded-2xl object-cover w-full h-full'
            />
          </span>

          <span className="bg-white ring-2 ring-white h-64 w-64 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
            <Image 
              src={im1} 
              alt="Surviving Lions" 
              width={500} 
              height={500} 
              className='rounded-2xl object-cover w-full h-full'
            />
          </span>

          

          <span className="bg-white ring-2 ring-white h-64 w-64 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
            <Image 
              src={im16} 
              alt="Surviving Lions" 
              width={500} 
              height={500} 
              className='rounded-2xl object-cover w-full h-full'
            />
          </span>
        </div>
      </div>
    </div>
  );
}
