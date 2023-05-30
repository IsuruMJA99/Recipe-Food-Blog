import React from "react";
import { Link } from "react-router-dom";
import './recipie.css';
import "./cake.css";
import chocolate from "./images/chocolate.jpg";
import smores from "./images/smores.jpg";

const Cake = () => {
  return (
    <div>
      <div className="c-container">                 {/*CHOCOLATE CAKE DIV STARTS HERE*/}
        <img src={chocolate} className="img" alt="chocolate-cake" />
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

          <Link to="/recipie/cake/chocolate" className="nav-cake">
            <div className="readMore">Read More</div>
          </Link>
        </div>
      </div>



      <div className="c-container">     {/*SMORES CAKE DIV STARTS HERE*/}
        <img src={smores} className="img" alt="smores-cake" />
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

          <Link to="/recipie/cake/smores" className="nav-cake">
            <div className="readMore">Read More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cake;
