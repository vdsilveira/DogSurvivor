"use client"; // Adicione esta linha para marcar o componente como Client Component

import { useRef } from 'react';
import About from './componentes/about/about';
import Block_01 from './componentes/block_01/block_01';
import ContractInfo from './componentes/contractInfo/contractInfo';
import Exchange from './componentes/exchange/exchange';
import Footer from './componentes/footer/footer';
import Header from './componentes/header/header';
import Tokenomics from './componentes/Tokenomics/Tokenomics';

export default function Home() {
  const aboutRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const buyLionsRef = useRef(null);

  return (
    <div className="min-h-screen bg-custom-gray">
      <Header 
        aboutRef={aboutRef} 
        tokenomicsRef={tokenomicsRef} 
        buyLionsRef={buyLionsRef} 
      /> 

      <div className=''>
        <Block_01/>
        <About ref={aboutRef}/>
        <Tokenomics ref={tokenomicsRef}/>
        <Exchange ref={buyLionsRef} />
        <ContractInfo/>
      </div>      
      
      <div className=''>
        <Footer/>
      </div>      
    </div>
  );
}
