import React, { useEffect, useState } from 'react'
import './CustomCursor.css'


const AnimatedCoursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
   



    useEffect(() => {
        const handleMouseMove = (event) => {
          setPosition({ x: event.clientX, y: event.clientY });
          
        };

       
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
    
      return (
        <div
          className="custom-cursor"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            
            
          }}
        />
      );
    };
    

export default AnimatedCoursor