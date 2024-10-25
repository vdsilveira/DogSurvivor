// components/Exchange.js
import React, { forwardRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import bnb from '../../img/bnb-bnb-logo.png';
import im12 from '../../img/im12.png';
import im13 from '../../img/im13.png';
import im9 from '../../img/im9.png';

// eslint-disable-next-line react/display-name
const Exchange = forwardRef((_props, ref) => {
  return (
    <div ref={ref} className="flex items-center justify-center h-screen mt-32">
      <div className="relative w-[900px] h-[600px] rounded-3xl flex flex-col items-center justify-center bg-gradient-to-br from-amber-400 via-amber-500 to-orange-700 shadow-xl shadow-black/30">
        
        <div className="bg-slate-100 w-[92%] h-[85%] rounded-3xl shadow-inner shadow-black/20 flex flex-col items-center justify-center mb-2">
          {/* Seção de Venda */}
          <div className="w-[85%] h-[35%] ring-4 ring-white rounded-3xl m-6 bg-slate-200 flex items-center justify-between p-4">
            <span className="flex flex-col justify-center text-2xl font-bold">
              <h1><strong>Sell</strong></h1>
              <input 
                type="text" 
                placeholder="0" 
                className="bg-slate-200 rounded-md p-1 focus:outline-none focus:ring-0 focus:border-none"
              />
            </span>
            <span className="m-2 flex items-center ring-2 rounded-3xl w-32 p-2 ring-white">
              <Image src={bnb} alt="Dog Survivor token" width={30} height={30} />
              <span className="ml-2">
                <h1><strong>BNB:</strong></h1>
                <h4>0001000</h4>
              </span>
            </span>
          </div>

          {/* Ícone de seta */}
          <button className="absolute ring-4 ring-white h-20 w-20 rounded-3xl bg-slate-200 flex items-center justify-center">
            <ChevronDownIcon className="h-10 w-10 text-gray-700" aria-hidden="true" />
          </button>

          {/* Seção de Compra */}
          <div className="w-[85%] h-[35%] ring-4 ring-white rounded-3xl m-6 bg-slate-200 flex items-center justify-between p-4">
            <span className="flex flex-col justify-center text-2xl font-bold">
              <h1><strong>Buy</strong></h1>
              <input 
                type="text" 
                placeholder="0" 
                className="border bg-slate-200 rounded-md p-1 focus:outline-none focus:ring-0 focus:border-none from-red-500" 
              />
            </span>
            <span className="m-2 flex items-center ring-2 rounded-3xl w-32 p-2 ring-white">
              <Image src={im9} alt="Dog Survivor token" width={30} height={30} />
              <span className="ml-2">
                <h1><strong>Lions:</strong></h1>
                <h4>0001000</h4>
              </span>
            </span>
          </div>
        </div>
        
        {/* Imagem no canto superior direito */}
        <span className="absolute top-0 -right-16">
          <Image src={im13} alt="Dog Survivor token" width={200} height={200} />
        </span>

        {/* Botão e imagem no canto inferior esquerdo */}
        <div className="flex items-center w-full mt-2">
          <span className="absolute bottom-0 -left-16">
            <Image src={im12} alt="Dog Survivor token" width={200} height={200} />
          </span>

          <button className="ring ring-orange-600 rounded-3xl w-48 bg-teal-800 font-extrabold text-white text-3xl mx-auto">
            <h1>Buy Lions</h1>
          </button>
        </div>

      </div>
    </div>
  );
});

export default Exchange;
