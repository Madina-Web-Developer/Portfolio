import React from 'react'
import './BannerSlider.css'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Madina1 from '../../assets/Madina1.webp'
import Madina2 from '../../assets/Madina2.webp'
import Madina3 from '../../assets/Madina3.webp'
import Madina4 from '../../assets/Madina4.webp'

const BannerSlide = () => {


    const fadeImages = [
        {
            url: Madina4,
        },
        {
            url: Madina1,
        },
        {
            url: Madina3,
        },
        {
            url: Madina2,
        }
    
    ];


    const properties = {
        duration: 2000,
        transitionDuration: 1000, 
        infinite: true, 
        indicators: false, 
        arrows: false
        
    }

  return (
    <>
    
    
    <div className="slide-container">
                <Fade {...properties}>
                    {fadeImages.map((fadeImage, index) => (
                        <div key={index}>
                            <img style={{ width: '100%'}} src={fadeImage.url} />
                        </div>
                    ))}
                </Fade>
            </div>
    
    
    
    </>
  )
}

export default BannerSlide