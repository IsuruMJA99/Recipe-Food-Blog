import React from 'react'
import { Link } from 'react-router-dom';
import './cake.css';
import vanilla from './images/vanilla.jpg';
import choco from './images/choco-ice.jpg'


const Icecream = () => {
  return (
    <div>
    <div className="c-container">                 {/*CHOCOLATE CAKE DIV STARTS HERE*/}
      <img src={vanilla} className="img" alt="chocolate-cake" />
      <div class="right-side">
        <div class="paragraph-div-content">
          <p>a live for chocolate lovers</p>
        </div>
        <div class="paragraph-div-title">
          <p>The Perfect Chocolate Cake</p>
        </div>
        <div class="paragraph-div-content">
          <p>
            This Chocolate Cake recipe is perfect for that die hard chocolate
            fan in your life.
            <br />
            Homemade chocolate icing is used in the cake layers, frosting, and
            the drip!
            <br />I am obsessed with how pretty this Chocolate Cake turned
            out. Not only the perfectly smooth cake
          </p>
        </div>

        <Link to="/recipie/icecream/vanilla-ice" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
    </div>



    <div className="c-container">     {/*SMORES CAKE DIV STARTS HERE*/}
      <img src={choco} className="img" alt="smores-cake" />
      <div class="right-side">
        <div class="paragraph-div-content">
          <p>a live for chocolate lovers</p>
        </div>
        <div class="paragraph-div-title">
          <p>S’MORES Cake</p>
        </div>
        <div class="paragraph-div-content">
          <p>
            This Caramel Cake recipe is perfect for that die hard caramel fan
            in your life.
            <br />
            Homemade caramel sauce is used in the cake layers, frosting, and
            the drip!
            <br />I am obsessed with how pretty this Caramel Cake turned out.
            Not only the perfectly smooth cake
          </p>
        </div>

        <Link to="/recipie/icecream/chocolate-ice" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Icecream
