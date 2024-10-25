import Image from 'next/image';
import tenor from '../../img/tenor.gif';

const Willson = () => {
  return (
    <div className='mt-96 h-38 w-80 ring-amber-500 ring-8 rounded-lg overflow-hidden'>
      <Image 
        className='rounded-lg' 
        src={tenor} 
        alt="Descrição da imagem" 
        layout="intrinsic" 
        width={320} // largura desejada da imagem
        height={250} // altura desejada da imagem proporcional
        objectFit="cover" 
      />
    </div>
  );
};

export default Willson;

