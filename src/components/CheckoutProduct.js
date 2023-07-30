import { StarIcon } from "@heroicons/react/solid"
import { useDispatch } from "react-redux"
import { addToBasket,removeFromBasket } from "../slices/basketSlice";
import CurrencyFormat from "react-currency-formatter";


function CheckoutProduct({id,title,price,rating,description,category,image,hasPrime}) {

    const dispatch=useDispatch();
    const addItemToBasket=()=>{

        const product={id,title,price,rating,description,category,image,hasPrime};
        dispatch(addToBasket(product));
    };

    const removeItemFromBasket=()=>{
        dispatch(removeFromBasket({id}));
    };

  return (
    <div className="grid grid-cols-5">

        {/*Left */}
        <img  src={image} height={200} width={200}  objectfit="contain" />

        {/*Middle */}
        <div className="col-span-3 mx-5">
            <p className="text-xl "><b>{title}</b></p>
            <div className="flex">
                {Array(rating).fill().map((_,i)=>(<StarIcon key={i} className="h-5 text-yellow-500"/>))}
            </div>

            <p className=" my-2 line-clamp-3">{description} </p>
            <CurrencyFormat quantity={price }/>

            {hasPrime && <div className="flex items-center space-x-2">
                <img loading="lazy" className="w-12" src="https://drive.google.com/uc?export=view&id=1HJb9RPwpgaBWa7s6gzoo1eWf57hXdjTS"/>

            <p className="text-xs text-gray-500 ">Next-Day-Free-Delivery</p>

            </div>}

        </div>

        {/*right */}
        <div className="flex flex-col space-y-2 my-auto mx-auto justify-self-end">
            <button  onClick={addItemToBasket} className="button">Add to basket</button>
            <button onClick={removeItemFromBasket} className="button">Remove from basket</button>
        </div>
    </div>

    
    
  )
}

export default CheckoutProduct
