import React from 'react'
import { Link } from 'react-router-dom';
import './cake.css';
import hotChoc from './images/hot-chocolate.jpg';
import falooda from './images/falooda.jpg';
import lemonade from './images/lemonade.jpg';
import smoothie from './images/strawberry-smoothie.jpg';

const Beverage = () => {
  return (
    <div>
    <div className="c-container">                 {/*HOT CHOCOLATE DIV STARTS HERE*/}
      <img src={hotChoc} className="img" alt="hot-chocolate" />
      <div class="right-side">
        <div class="paragraph-div-content">
          a live for chocolate lovers
        </div>
        <div class="paragraph-div-title">
          The Perfect Hot Chocolate Drink
        </div>
        <div class="paragraph-div-content">
          
            This Hot Chocolate is perfect for that die hard chocolate
            fan in your life.
            <br />I am obsessed with how pretty this Hot Chocolate turned
            out. Not only the perfectly smooth drink
          
        </div>

        <Link to="/recipie/beverage/hot-chocolate" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
    </div>



    <div className="c-container">     {/*FALOODA DIV STARTS HERE*/}
      <img src={falooda} className="img" alt="falooda" />
      <div class="right-side">
        <div class="paragraph-div-content">
          a live for falooda lovers
        </div>
        <div class="paragraph-div-title">
          The Lovely Falooda Drink
        </div>
        <div class="paragraph-div-content">
          
            This Falooda recipe is perfect for that die hard falooda fan
            in your life.
            <br />I am obsessed with how pretty this Falooda turned out.
          
        </div>

        <Link to="/recipie/beverage/falooda" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
    </div>

    <div className="c-container">     {/*LEMONADE DIV STARTS HERE*/}
      <img src={lemonade} className="img" alt="lemonade" />
      <div class="right-side">
        <div class="paragraph-div-content">
          a live for lemonade lovers
        </div>
        <div class="paragraph-div-title">
          Refreshing Lemonade
        </div>
        <div class="paragraph-div-content">
          
            This Lemonade recipe is perfect for that die hard lemonade fan
            in your life.
            <br />I am obsessed with how refreshing this Lemonade turned out.
          
        </div>

        <Link to="/recipie/beverage/lemonade" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
    </div>


    <div className="c-container">     {/*STRAWBERRY-SMOOTHIE DIV STARTS HERE*/}
      <img src={smoothie} className="img" alt="strawberry-smoothie" />
      <div class="right-side">
        <div class="paragraph-div-content">
          a live for strawberry lovers
        </div>
        <div class="paragraph-div-title">
          The Perfect Strawberry Smoothie
        </div>
        <div class="paragraph-div-content">
          
            This Strawberry Smoothie recipe is perfect for that die hard strawberry fan
            in your life.
            <br />I am obsessed with how refreshing this Strawberry Smoothie turned out.
          
        </div>

        <Link to="/recipie/beverage/smoothie" className="nav-cake">
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

export default Beverage
