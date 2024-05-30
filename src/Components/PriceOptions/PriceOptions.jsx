import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
const [gymPrices,setGymPrices]=useState([])
useEffect(()=>{
    fetch('build.json')
.then(res => res.json())
.then(data =>setGymPrices(data))
},[])

    
    return (
        <div >

            <h2 className="text-5xl font-bold my-6">Best price in chattagrom</h2>
           <div className="grid grid-cols-3 gap-5">
           {
                gymPrices.map(gymPrice => <PriceOption gymPrice={gymPrice}></PriceOption>)
            }
           </div>

            
        </div>
    );
};

export default PriceOptions;