"use client"; // Adicione esta linha para marcar o componente como Client Component

import Image from 'next/image';
import smartContract from '../../img/smartContract.png';
import im9 from '../../img/im9.png';
import { useState } from 'react';

const ContractInfo = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText('0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce')
      .then(() => {
        setCopySuccess('Endereço copiado!');
        setTimeout(() => setCopySuccess(''), 2000); // Limpa a mensagem após 2 segundos
      })
      .catch(err => {
        console.error('Erro ao copiar o endereço: ', err);
      });
  };

  return (
    <div className='mt-20 mb-20 w-full rounded-lg overflow-hidden'>
      <div className='flex justify-end items-center h-full p-4'> 
        <div className='mr-4 font-extrabold'> 
          <span className="flex items-center ring-2 rounded-3xl w-auto p-2 ring-white">
            <Image src={im9} alt="Dog Survivor token" width={30} height={30} />
            <span className="ml-2">
              <h1 className="text-lg">
                <strong>Lions Address: <strong>0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce</strong></strong>
              </h1>
            </span>
            <button 
              onClick={copyToClipboard} 
              className="ml-4 text-blue-600 hover:underline focus:outline-none"
              aria-label="Copiar endereço"
            >
              {/* Ícone de clipboard da URL fornecida */}
              <img 
                src="https://img.icons8.com/?size=100&id=pNYOTp5DinZ3&format=png&color=000000" 
                alt="Copiar" 
                width={20} 
                height={20} 
                className="object-contain"
              />
            </button>
          </span>
          {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>} {/* Mensagem de sucesso */}
        </div>
        <span>
          <Image 
            src={smartContract} 
            alt="smart contract info" 
            width={500} 
            height={500} 
            className="object-contain" 
          />
        </span>
      </div>
    </div>
  );
};

export default ContractInfo;
