import {
  LocationMarkerIcon,
  SearchIcon, ShoppingCartIcon,
  MenuIcon,ChevronDownIcon,
} from '@heroicons/react/outline';



import Image from "next/image";
import { useSession,signIn,signOut, } from 'next-auth/react';
import { useRouter } from 'next/router';
import {  useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
  const { data: session, status } = useSession();
  const router=useRouter();
  const items=useSelector(selectItems);

  return (
    <header>
        {/*top nav */}
        <div className="flex items-center bg-amazon_blue flex-grow py-1">

            {/*Amazon Logo*/}

            <div className="link flex ml-2  items-center flex-grow sm:flex-grow-0 " >
              <Image onClick={()=>router.push('/')}
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectfit="contain"
              className="cursor-pointer mt-4 "
              />
           </div>


           {/*location*/}

           <div className="text-white mx-3  flex hover:cursor-pointer link  ">
            <LocationMarkerIcon className="h-6 mt-6"/>
            <div className="p-2">
              
            <p>Deliver to Rajat</p>
            <p><b>Kurukshetra 136119</b></p>
            </div>
           </div>

           {/*Search Logo*/}
    
           <div className="hidden sm:flex bg-yellow-400 mx-3 hover:bg-yellow-500 items:center rounded-md flex-grow  h-10 cursor-pointer">
            <input className="flex-grow flex-shrink rounded-l-md  h-full" type="text"/>
            <SearchIcon className='h-10  p-1'></SearchIcon>
           </div>

           {/*Right View */}
           <div className="text-white flex items items-center  space-x-1   whitespace-nowrap ">
            <div onClick={ !session ? signIn:signOut } className="link p-3 ">
                <p className='hover:underline'>
                {session ?`Hello, ${session.user.name}` :"Sign In"}
                  </p>
                <p className=" font-extrabold md:text-sm">Accounts & Lists</p>
            </div>

            <div>
              {session && <img className="h-10 w-10" src={session.user.image}/>}
            </div>


            
            <div className="link p-3">
               <p>Returns</p>
               <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div onClick={()=>router.push("/checkout")} className=" relative link flex  items-center p-2 ">
                <span className="absolute  top-0 right-0 md:right-10 h-5 w-5 text-center  font-bold text-black bg-yellow-400 rounded-full  ">
                  {items.length}
                </span>
               <ShoppingCartIcon  className=" h-11 "/>
               <p className="hidden md:inline font-extrabold  mt-6">Cart</p>
            </div>
           </div>

        </div>


       {/*bottom nav*/}

       <div className="flex items-center bg-amazon_blue-light p-1 pl-2 space-x-1 ">

        <p className="link items-center flex text-white   ">
          <MenuIcon className="h-10 mr-1"/>
          All
        </p>

        <p className="link flex items-center text-white p-2">
          Prime
          <ChevronDownIcon className="h-4 ml-1"/>
        </p>
        
        <p className="link flex items-center text-white p-2">
          Electronics
        </p>

        <p className="link flex items-center text-white p-2">
          Best Seller
        </p>

        <p className="link flex items-center text-white p-2">
          Mobiles
        </p>

        <p className="link flex items-center text-white p-2">
          Amazon miniTV
        </p>

        <p className="link flex items-center text-white p-2">
          Sell
        </p>

        <p className="hidden lg:inline-flex link  items-center text-white p-2">
          Subscribe & Save
        </p>

        <p className="hidden lg:inline-flex link  items-center text-white p-2">
          Buy Again
        </p>

        <p className="hidden lg:inline-flex link  items-center text-white p-2">
          Amazon Pay
        </p>

        <p className="hidden lg:inline-flex link  items-center text-white p-2">
          Amazon Bussinesses
          <ChevronDownIcon className="h-4 ml-1"/>
        </p>

       </div>
    </header>
  )
}

export default Header