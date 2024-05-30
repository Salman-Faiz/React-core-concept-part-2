
import './App.css'

import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'



function App() {

  return (
    <>
    <div className='container mx-auto pt-5'>
         {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
     
    </div>
   
     
    
    </>
  )
}

export default App
