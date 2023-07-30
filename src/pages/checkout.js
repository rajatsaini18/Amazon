
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import CurrencyFormat from "react-currency-formatter"
import { loadStripe } from "@stripe/react-stripe-js";
import axios from "axios";
const stripePromise=process.env.STRIPE_PUBLIC_KEY;



function checkout() {
  const items=useSelector(selectItems);
  const { data: session, status } = useSession();
  const total=useSelector(selectTotal);

   const createCheckoutSession = async ()=>{

    const stripe= await stripePromise;

   const checkoutSession=await axios.post("/api/create-checkout-session",{
    items:items,
    email:session.user.email
   })

   };

  return (
    <div  className="bg-gray-100">
        <Header/>
        <main className="lg:flex max-w-screen-2xl mx-auto ">
            {/*left*/} 
           
            <div  className=" flex-grow m-5 shadow-sm ">
                <img loading="lazy" src="https://drive.google.com/uc?export=view&id=1MXyKpUsEQT1euDEFBR3fOedLV5BVD_GU" width={1080} height={250} objectFit="contain"/>
           

            <div className=" flex flex-col p-5 space-y-10 bg-white">
                <h1 className="text-3xl border-b pb-4">
                  {items.length===0 ?"Your Basket is Empty":"Shopping Cart"}
                </h1>

                {items.map((items,i)=>(
                  <CheckoutProduct
                  key={i}
                  id={items.id}
                  title={items.title}
                  rating={items.rating}
                  price={items.price}
                  description={items.description}
                  category={items.category}
                  image={items.image}
                  hasPrime={items.hasPrime}
                  
                  />

                ))}
            </div>
            </div>
           
         

           

            {/*Right */}

            <div className=" flex-col bg-white my-5 p-3">

              { items.length>0 &&(
                <>
                <h2 className="whitespace-nowrap ">Subtotal ({items.length} items):
                <span className="font-bold">
               <CurrencyFormat quantity={total} />
                </span>
                </h2>

                <button
                role="link " 
                onClick={createCheckoutSession}
                disabled={!session} 
                className={` button mt-2 
                ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                >
                {!session ?"Please Sign In" :"Proceed To CheckOut"}
                </button>

                </>
              )}

            </div>
            
        </main>
      
    </div>
  )
}

export default checkout
