// components/Tokenomics.js
import React, { forwardRef } from 'react'; // Importando forwardRef
import Image from 'next/image';
import im7 from '../../img/im7.png';
import im1 from '../../img/im1.png';
import im8 from '../../img/im8.png';

// Definindo o componente Tokenomics utilizando forwardRef
// eslint-disable-next-line react/display-name
const Tokenomics = forwardRef((props, ref) => {
  return (
    <div
      ref={ref} // Atribuindo a referência ao div
      className="flex flex-col-reverse md:flex-row max-w-screen justify-end bg-gradient-to-l from-custom-gray"
      style={{
        backgroundImage: `url(${im8.src})`,
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '400px'
      }}
    >
      {/* Texto 2 */}
      <div className="text-left max-w-screen-md mx-auto px-4 ml-80">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-red-950 bg-clip-text text-transparent leading-tight mb-6">
          Surviving Lions: A Memecoin Designed for Resilience and Reward
        </h1>
        <p className="text-lg text-gray-800 mb-4">
          Surviving Lions is more than just a memecoin; it's designed with strategic tokenomics to ensure that its community is rewarded for resilience and active participation. Below are the key factors driving Surviving Lions’ success:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <span className="font-bold text-amber-600">Total Supply:</span> The total supply of Surviving Lions tokens is capped at 1 billion tokens, ensuring scarcity and preserving value as demand grows during the bull run.
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
            <span className="font-bold text-amber-600">Deflationary Mechanism:</span> A small fee is burned with every transaction, reducing the total supply over time and increasing the value of Surviving Lions.
          </li>
          <li>
            <span className="font-bold text-amber-600">Holder Rewards & Governance:</span> Token holders will earn rewards and have decentralized governance rights, ensuring a voice in key decisions.
          </li>
        </ul>
      </div>

      <div className="bg-transparent ring-white h-auto w-20 rounded-2xl m-4 flex flex-col space-y-4 ml-auto">
        <Image
          src={im7}
          alt="Surviving Lions"
          width={500}
          height={500}
          className="rounded-2xl object-cover w-full h-full ring-2 ring-white"
        />
        <Image
          src={im1}
          alt="Surviving Lions"
          width={500}
          height={500}
          className="rounded-2xl object-cover w-full h-full ring-2 ring-white"
        />
      </div>
    </div>
  );
});

// Exportando o componente
export default Tokenomics;
