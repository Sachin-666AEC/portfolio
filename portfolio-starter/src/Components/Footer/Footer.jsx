import React from 'react'
import './Footer.css'
import  Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="Footer">
        <img src={Wave} alt=""  style={{width: '100%'}} />
        <div className="f-content">
            <span>contact me </span>
            <span>on Gmail</span>
            <div className="f-icons">
               
                
            </div>
        </div>
     </div>
  )
}

export default Footer