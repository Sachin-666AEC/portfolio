import React from 'react';
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
const Works = () => {
  return (
    <div className='Works'>
      <div className='awesome'>
        <span>Except Work for these</span>
        <span>Brands & Clients</span>
        <spane>
          Ican confidence doing with  Front end developing
          <br />
          Doing the best with oppertunites
          <br />
          Ican confidence doing with  Front end developing
          <br />
          Doing the best with oppertunites
        </spane>

        <button className="button s-button">Hire Me</button>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side*/}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle" />
          <img src={Shopify} alt="" />
        </div>
      </div>

      {/* background Circle */}
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
    </div>
  );
};

export default Works;