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
        <div className="">

            <h2 className="text-5xl font-bold my-6">Best price in chattagrom</h2>
           <div className="md:grid grid-cols-3 gap-x-5">
           {
                gymPrices.map((gymPrice,idx) => <PriceOption gymPrice={gymPrice} key={idx}></PriceOption>)
            }
           </div>

            
        </div>
    );
};

export default PriceOptions;