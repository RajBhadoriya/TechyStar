import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div >
        <Carousel infiniteLoop autoPlay showStatus={false} show showArrows={false} interval={1000} showThumbs={false}>

            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>Peer-to-peer Support</p>
            </div>
        </Carousel>
    </div>
  )
}
//carousel ke baad iski css file ki zarurat hi nahi padi
export default Services