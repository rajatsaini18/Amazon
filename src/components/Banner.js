import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (

    <div className="relative">

      <div className="absolute w-full h-64 bg-gradient-to-t from-gray-300 to-transparent  bottom-0 z-20"/>

        <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >

            <div className="w-2xl h-614px">
            <img src="https://drive.google.com/uc?export=view&id=1X3ROmjVOk7oc26UNe0wJZucvnICfsjjW" alt="loading"/>
            </div>

            <div>
              <img src="https://drive.google.com/uc?export=view&id=1sejdoEbH7e5jJbA95Ca4Oc2pFzK_lAHm"  />
            </div>


            <div className="w-2xl h-614px">
            <img  src="https://drive.google.com/uc?export=view&id=1dW7pOnSC-uEBeACHkwAenUbQrZp5m5Nc" alt="loading" />
            </div> 

            <div className="w-2xl h-614px">
              <img src="https://drive.google.com/uc?export=view&id=1kUkQYVDZ6vKo2glOJxuqDE36AbOIZOMD" alt="loading"/>
            </div>

           
        

           

        </Carousel>

    </div>
  )
}

export default Banner