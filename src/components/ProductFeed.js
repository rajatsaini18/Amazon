import Product from "./Product"
import { Carousel } from "react-responsive-carousel";
import { InformationCircleIcon } from "@heroicons/react/outline";


function ProductFeed({products}) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 -mt-56 ">
      
    {products.slice(0,4).map( ({id,title,price,description,category,image }) =>
    (
        <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}

        />

    ))}
 
        
        <div className="link p-5 mx-5 col-span-full h-50 bg-white ">
          <p className="text-3xl ml-5 my-3 "><b>Today's Deal | Upto 60% off</b></p>
        <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
        >

            <div className=" h-50 ">
            <img src="https://drive.google.com/uc?export=view&id=1mgsjXMzXOe6PKGjLxDAx5dRcIpoycj6c" alt="loading"/>
            </div>

            <div className="w-2xl h-48">
              <img src="https://drive.google.com/uc?export=view&id=113racf7FqoAyd_i3_o5aC-qU-vDicQQF"  />
            </div>


            <div className="w-2xl h-48">
            <img  src="https://drive.google.com/uc?export=view&id=1dW7pOnSC-uEBeACHkwAenUbQrZp5m5Nc" alt="loading" />
            </div> 

            <div className="w-2xl h-50">
              <img src="https://drive.google.com/uc?export=view&id=1CEumPyksJ75pyYWf2_XeIu7SimCK_k_R" alt="loading"/>
            </div>

        </Carousel>
        </div>


    <div className=" mx-auto my-5 col-span-full h-70 bg-gray-300 ">
      <img src="https://drive.google.com/uc?export=view&id=1CpkJYARFAMfCjlXWlCmc6IrUyBbYNhHZ"  />

      
      <p className="hover:cursor-pointer flex">Sponsored
      <InformationCircleIcon className="h-5 w-5 "/>
      </p>
    
    </div>

        

    <div className="md:col-span-2">
    {products.slice(4,5).map( ({id,title,price,description,category,image }) =>
    (
        <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />

    ))}
    </div>

    {products.slice(5,11).map( ({id,title,price,description,category,image }) =>
    (
        <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}

        />

    ))}

          
<div className="link mx-5 my-10 col-span-full h-50 p-5 bg-white ">
          <p className="text-3xl ml-5 my-3 "><b>Up to 65% off | Kitchen appliances from stores near you</b></p>
        <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
        >

            <div className="w-2xl h-50 ">
            <img src="https://drive.google.com/uc?export=view&id=1D7UTIv-h0C_FwRvpcBllAgBJJk-C0fHX" alt="loading"/>
            </div>

            <div className="w-2xl h-48">
              <img src="https://drive.google.com/uc?export=view&id=10GkOf0arFgfXawj0v-KLgbNsk8dFrJrJ"  />
            </div>


            <div className="w-2xl h-48">
            <img  src="https://drive.google.com/uc?export=view&id=1yKgA1t9qpkzCYcB8_opKW1nHwBYSNvzE" alt="loading" />
            </div> 

      

        </Carousel>
        </div>


        {products.slice(11,products.length).map( ({id,title,price,description,category,image }) =>
    (
        <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}

        />

    ))}
   


    </div>
  )
}

export default ProductFeed
