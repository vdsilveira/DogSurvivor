import Image from 'next/image';
import im4 from '../../../img/im4.png';
import im5 from '../../../img/im5.png';
import im3 from '../../../img/im3.png';
import im1 from '../../../img/im1.png';

export default function About() {
  return (
    <div className="mt-36 flex flex-col items-center space-y-16 min-w-screen">
      {/* Seção de imagem e texto */}
      <div className="flex flex-col md:flex-row items-center space-x-16 max-w-screen justify-center bg-gradient-to-r from-amber-50 to-red-">
        {/* Imagem 1 */}
        <div className="bg-white ring-2 ring-white h-72 w-4/5 rounded-2xl m-4 shadow-lg">
          <Image 
            src={im5} 
            alt="Dog Survivor" 
            width={500} 
            height={500} 
            className='rounded-2xl object-cover w-full h-full' 
          />
        </div>

        {/* Texto 1 */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-950 bg-clip-text text-transparent">
            In promising times of a bull run, Dog Survivor emerges, the meme coin that honors the resilience and determination of investors who overcome the market's challenges. With a fun and community-driven spirit, Dog Survivor is not just a coin but a symbol of strength and unity among crypto enthusiasts. Those who survive until the end will be rewarded in the upcoming bull run, celebrating their achievements and victory over adversity. Join the community and get ready to reap the rewards of your perseverance. After all, every investor is a true survivor, and Dog Survivor is here to celebrate every victory!
          </h1>
        </div>
      </div>

      {/* Segunda seção com texto e imagem alinhados à esquerda */}
<div className="flex flex-col-reverse md:flex-row  max-w-screen justify-end bg-gradient-to-l from-blue-50 to-red- space-x-96">
        {/* Texto 2 */}
        <div className="text-left max-w-screen-md mx-auto px-4">
  <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-red-950 bg-clip-text text-transparent leading-tight mb-6">
    Dog Survivor: A Memecoin Designed for Resilience and Reward
  </h1>
  <p className="text-lg text-gray-800 mb-4">
    Dog Survivor is more than just a memecoin; it's designed with strategic tokenomics to ensure that its community is rewarded for resilience and active participation. Below are the key factors driving Dog Survivor’s success:
  </p>
  <ul className="list-disc list-inside space-y-4 text-gray-700">
    <li>
      <span className="font-bold text-amber-600">Total Supply:</span> The total supply of Dog Survivor tokens is capped at 1 billion tokens, ensuring scarcity and preserving value as demand grows during the bull run.
    </li>
    <li>
      <span className="font-bold text-amber-600">Fair Distribution:</span> Tokens will be distributed fairly and transparently. Significant portions of the tokens are allocated to the community as follows:
      <ul className="list-none space-y-2 mt-2 ml-4">
        <li>● 60% for Liquidity and Exchanges</li>
        <li>● 20% for Marketing and Partnerships</li>
        <li>● 10% for Team and Development</li>
        <li>● 5% for Community Rewards</li>
        <li>● 5% for Charity and Sustainability</li>
      </ul>
    </li>
    <li>
      <span className="font-bold text-amber-600">Deflationary Mechanism:</span> A small fee is burned with every transaction, reducing the total supply over time and increasing the value of Dog Survivor.
    </li>
    <li>
      <span className="font-bold text-amber-600">Holder Rewards & Governance:</span> Token holders will earn rewards and have decentralized governance rights, ensuring a voice in key decisions.
    </li>
  </ul>
</div>


 <div className="bg-transparent ring-white h-auto w-72 rounded-2xl m-4 flex flex-col space-y-4 ml-auto">
  <Image 
    src={im4} 
    alt="Dog Survivor" 
    width={500} 
    height={500} 
    className='rounded-2xl object-cover w-full h-full' 
  />

  <Image 
    src={im1} 
    alt="Dog Survivor" 
    width={500} 
    height={500} 
    className='rounded-2xl object-cover w-full h-full' 
  />
</div>

      </div>
    </div>
  );
}
