import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from   "../Card/Card";
const  Services = () => {
  return (      
    <div className="Services">
        {/* left side */}
        <div className='awesome'>
        <span>My Awesome</span>
        <span>services</span>   
        <spane>
            Ican confidence doing with  Front end developing
             <br />
             Doing the best with oppertunites
            </spane>
            <a href={'./resume.pdf'} download>

            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/*  right side */}
       <div className="cards">                               
        </div>
 <div style={{ top: '12rem',  left: '-4rem'}} >
            <Card 
              emoji={Glasses}
              heading= {'Developer'}
              detail={'Html, Css, JavaScript, React'}
              />     
    <div className="blur s-blur2" style={{ background: "var(--purple)"}}></div>                 
          </div>
        </div>
  )
}

export default Services