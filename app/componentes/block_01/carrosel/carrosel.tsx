import Image from 'next/image';
import im3 from '../../../img/im3.png';
import im2 from '../../../img/im2.png';
import im1 from '../../../img/im1.png';

export default function Carrosel() {
  return (
    <div className='mt-36 flex space-x-16 min-w-screen justify-around bg-slate-300'>
      <span className="bg-white ring-2 ring-white h-72 w-60 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
        <Image 
          src={im3} 
          alt="Dog Survivor" 
          width={500} 
          height={500} 
          className='rounded-2xl object-cover w-full h-full' // Ajustando para preencher a span
        />
      </span>
      <span className="bg-white ring-2 ring-white h-72 w-60 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
        <Image 
          src={im2} 
          alt="Dog Survivor" 
          width={500} 
          height={500} 
          className='rounded-2xl object-cover w-full h-full' // Ajustando para preencher a span
        />
      </span>
      <span className="bg-white ring-2 ring-white h-72 w-60 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
        <Image 
          src={im1} 
          alt="Dog Survivor" 
          width={500} 
          height={500} 
          className='rounded-2xl object-cover w-full h-full' // Ajustando para preencher a span
        />
      </span>
      <span className="bg-white ring-2 ring-white h-72 w-60 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
        <Image 
          src={im3} 
          alt="Dog Survivor" 
          width={500} 
          height={500} 
          className='rounded-2xl object-cover w-full h-full' // Ajustando para preencher a span
        />
      </span> <span className="bg-white ring-2 ring-white h-72 w-60 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
        <Image 
          src={im3} 
          alt="Dog Survivor" 
          width={500} 
          height={500} 
          className='rounded-2xl object-cover w-full h-full' // Ajustando para preencher a span
        />
      </span>
      <span className="bg-white ring-2 ring-white h-72 w-60 rounded-2xl m-4 shadow-lg shadow-slate-600 overflow-hidden">
        <Image 
          src={im3} 
          alt="Dog Survivor" 
          width={500} 
          height={500} 
          className='rounded-2xl object-cover w-full h-full' // Ajustando para preencher a span
        />
      </span>
    </div>
  );
}
