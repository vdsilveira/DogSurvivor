
import Block_01 from './componentes/block_01/block_01';
import Footer from './componentes/footer/footer';

import Header from './componentes/header/header';



export default function Home() {
  return (
    
    <div className="min-h-screen">
      
      
      <div>
      <Header /> {/* Usando o Header com letra maiúscula */}
      </div>

      <div className=''>
        <Block_01/>
      </div>      
      <div className=''>
        <Footer/>
      </div>      
      
      
      
    </div>
  );
}
