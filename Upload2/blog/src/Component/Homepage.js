import React from 'react'
import './Homepage.css';
import CustomImage from './CustomImage';
import ImproveSkills from './ImproveSkill';
import { Link } from "react-router-dom";

function Homepage() {
  const images = [
    "/img/galary/img1.jpg",
    "/img/galary/img2.jpg",
    "/img/galary/img3.jpg",
    "/img/galary/img4.jpg",
    "/img/galary/img5.jpg",
    "/img/galary/img6.jpg",
    "/img/galary/img7.jpg",
    "/img/galary/img8.jpg",
    "/img/galary/img9.jpg"
  ]

  return (
    <div className="H-container main">
      <div className="back"></div>
      <div className="section typo">
        <div className="col">
          <h1 clssName="titl">What Are We About</h1>
          <p className="info">Tipcy is a place where you can please your soul and tummy with 
			    delicious food recipes of all cuisine. And our service is absolutely free. So 
			    start exploring now.</p>
          <button className="btn"><Link to="/recipie" className="btn1">Explore Now</Link></button>
        </div>
        <div className="col galary">
          {images.map((src, index)=>(
            <CustomImage key={index} imgSrc={src} pt={"90%"}/>
          ))}
        </div>
      </div>
      <ImproveSkills/>
    </div>
  );
}

export default Homepage;
