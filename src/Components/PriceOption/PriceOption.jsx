import { IoCaretForward } from "react-icons/io5";
import PropTypes from 'prop-types';

const PriceOption = ({gymPrice}) => {

    const {id,membership,price,features} = gymPrice;
    return (
        <div className="bg-blue-400 text-center rounded-lg flex flex-col mb-5 ">
            <h1 className="text-5xl pt-4 mb-4">{membership}</h1>
            <h4 className="text-3xl text-yellow-300 font-bold">Price : {price}</h4>
            <h5 className="text-3xl font-semibold text-left ps-5">Feature :</h5>
            <ol className="flex-grow">
               {
                features.map((feature,idx) => <li key={idx} className="text-2xl text-left ps-5 flex "><IoCaretForward className="mt-2"></IoCaretForward> {feature}</li>)
               }
            </ol>
            <button className="text-3xl bg-green-500 w-full p-3 rounded-lg my-3 px-3 ">Buy Now</button>
        </div>
    );
    
};
PriceOption.propTypes = {
gymPrice:PropTypes.object
}



export default PriceOption;