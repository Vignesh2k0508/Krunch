import React from 'react'
import Heading from './Heading.jsx'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const AboutUs = () => {
  return (
    <div className="about-us">
        <Heading/>
        <div className="about-us-content">
            <LeftSide/>
            <RightSide/>
        </div>
    </div>
    
  )
}

export default AboutUs