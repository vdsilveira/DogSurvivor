
import Image from 'next/image';
import dogsur from '../../img/dogsur.png';
import Carrosel from './carrosel/carrosel';
import About from './about/about';

export default function Block_01() {
  return (

    <div>
        <div className="flex items-center  top-10 left-4  mt-2  mb-10 absolute" >  {/* Usando flex para alinhar horizontalmente */}
          <Image src={dogsur} alt="Dog Survivor " width={500} height={500} />
          <div className="ml-10"> {/* Adicionando margem à esquerda do texto */}
            <h1 className="text-2xl font-bold ">Welcome to the </h1>
            <h1 className="text-7xl font-bold bg-gradient-to-r from-amber-500 to-red-950 bg-clip-text text-transparent h-20 ">Dog Survivor</h1>
            
            <h2 className="">The meme coin to celebrating you surviving bear market</h2>
          </div>

        </div>
        <div className=' flex mt-96'>
          <About/>
         
         

       

        </div>
    </div>
   
  );
}
