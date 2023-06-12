import React from 'react'
import { Link } from 'react-router-dom';
import './cake.css';
import blackCurrent from './images/black-current.jpg';
import choco from './images/choco-ice.jpg';
import kulfi from './images/kulfi.jpg';
import pistachio from './images/pistachio.png';


const Icecream = () => {
  return (
    <div>
    <div className="c-container">                 {/*BLACK-CURRENT ICE-CREAM DIV STARTS HERE*/}
      <img src={blackCurrent} className="img" alt="black-current" />
      <div class="right-side">
        <div class="paragraph-div-content">
          a live for black-current lovers
        </div>
        <div class="paragraph-div-title">
          Black Current Ice-cream
        </div>
        <div class="paragraph-div-content">
          
            This Black Current ice-cream recipe is perfect for that die hard black current
            fan in your life.
            <br />I am obsessed with how pretty this Black Current Ice-cream turned
            out.
          
        </div>

        <Link to="/recipie/icecream/black-current-ice" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
    </div>



    <div className="c-container">                 {/*CHOCOLATE ICE-CREAM DIV STARTS HERE*/}
      <img src={choco} className="img" alt="chocolate-ice-cream" />
      <div class="right-side">
        <div class="paragraph-div-content">
          a live for chocolate lovers
        </div>
        <div class="paragraph-div-title">
          The Perfect Chocolate Ice-cream
        </div>
        <div class="paragraph-div-content">
          
            This Chocolate ice-cream recipe is perfect for that die hard chocolate
            fan in your life.
            <br />I am obsessed with how pretty this Chocolate Ice-cream turned
            out.
          
        </div>

        <Link to="/recipie/icecream/chocolate-ice" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
    </div>

    <div className="c-container">                 {/*KULFI ICE-CREAM DIV STARTS HERE*/}
      <img src={kulfi} className="img" alt="kulfi" />
      <div class="right-side">
        <div class="paragraph-div-content">
          a live for mango and yougurt lovers
        </div>
        <div class="paragraph-div-title">
          Mango Kulfi Ice-cream
        </div>
        <div class="paragraph-div-content">
          
            This Mango Kulfi ice-cream recipe is perfect for that die hard mango and youghurt
            fan in your life.
            <br />I am obsessed with how pretty this Mango Kulfi Ice-cream turned
            out.
          
        </div>

        <Link to="/recipie/icecream/kulfi-ice" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
    </div>

    <div className="c-container">                 {/*PISTACHIO ICE-CREAM DIV STARTS HERE*/}
      <img src={pistachio} className="img" alt="pistachio" />
      <div class="right-side">
        <div class="paragraph-div-content">
          a live for pistachio lovers
        </div>
        <div class="paragraph-div-title">
          Pistachio Ice-cream
        </div>
        <div class="paragraph-div-content">
          
            This Pistachio ice-cream recipe is perfect for that die hard pistachio
            fan in your life.
            <br />I am obsessed with how pretty this Pistachio Ice-cream turned
            out.
          
        </div>

        <Link to="/recipie/icecream/pistachio-ice" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
    </div>

    <div className="footer">
        © 2023 Tipcy All Rights Reserved. An elite Dessert food
        publisher.
      </div>


  </div>
  )
}

export default Icecream
