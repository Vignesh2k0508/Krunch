import React from 'react'
import img1 from '../../Assets/portImg1.jpeg'
import img2 from '../../Assets/portImg2.jpeg'
import img3 from '../../Assets/portImg3.jpeg'
import img4 from '../../Assets/portImg4.jpeg'
import img5 from '../../Assets/portImg5.jpeg'
import img6 from '../../Assets/portImg6.jpeg'
import img7 from '../../Assets/portImg7.jpeg'
import img8 from '../../Assets/portImg8.jpeg'

const ImageContainer = () => {
  return (
    <div className="portfolio-image-container">
        <img src={img1} alt="" className="images" />
        <img src={img2} alt="" className="images" />
        <img src={img3} alt="" className="images" />
        <img src={img4} alt="" className="images" />
        <img src={img5} alt="" className="images" />
        <img src={img6} alt="" className="images" />
        <img src={img7} alt="" className="images" />
        <img src={img8} alt="" className="images" />
    </div>
  )
}

export default ImageContainer;