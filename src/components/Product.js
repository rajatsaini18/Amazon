import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import CurrencyFormat from "react-currency-formatter";


const max_rating=5;
const min_rating=1;


function Product({id,title,price,description,category,image} ) {

    const[rating, setRating] = useState(0);
    const [hasPrime, setIsPrimeEnabled] = useState(1);
    const dispatch =useDispatch();
   
    useEffect(() => {
       setRating(
           Math.floor(Math.random() * (max_rating - min_rating + 1)) +
               min_rating
       );
       setIsPrimeEnabled(Math.random() < 0.5);
   }, []);
    
   const addItemToBasket = ()=>{
    const product={id,title,price,description,category,image,hasPrime,rating};
    dispatch(addToBasket(product))

   };

  return (
    <div className="relative flex flex-col z-30 p-10 bg-white m-5">
      <p className="absolute top-2 right-2 text-gray-400 text-xs italic ">{category}</p>

      <Image  src={image} height={200} width={200} objectFit="contain"/>

      <h4 className="my-3"><b>{title}</b></h4>
     
      <div className="flex">
      {Array(rating).fill().map((_,i)=> (<StarIcon className="h-5 text-yellow-500"/>))}
      </div>

      <p className="text-xs my-2  line-clamp-2 ">{description}</p>
      
      <div>
        <CurrencyFormat
        quantity={price}
        />
      </div>
    

      {hasPrime && (
      <div  className="flex items-center space-x-2  ">
        <img className="w-12 "  src="https://drive.google.com/uc?export=view&id=1HJb9RPwpgaBWa7s6gzoo1eWf57hXdjTS"  alt="hello"/>
        <p className="text-xs text-gray-500">Free Next-Day-delivery</p>
      </div>   
     )}

     <button onClick={addItemToBasket} className="mt-auto button">Add To Basket</button>

    </div>

  );
}

export default Product
