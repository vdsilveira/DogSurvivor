import Image from 'next/image';
import dogsur from '../../img/dogsur.png';
import im9 from '../../img/im9.png';

export default function Block_01() {
  return (
    <div>
      <div className="flex items-center  ml-10">
        {/* Imagem do Dog Survivor com margem negativa à esquerda */}
        <Image className='absolute mt-[-120px] ml-[-35px]' src={dogsur} alt="Dog Survivor" width={500} height={300} />

        <div className="items-center ml-96">
          <h1 className="text-2xl font-bold">Welcome to the</h1>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-amber-500 to-red-950 bg-clip-text text-transparent">
            Surviving Lions
          </h1>
          <h2>The meme coin to celebrate you surviving the bear market</h2>
        </div>

        {/* Ajuste na posição da imagem im9 */}
        <div className="flex w-80 h-90 pt-20 mb-40 relative ml-[-40px] pl-1">
          <Image src={im9} alt="Dog Survivor token" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
