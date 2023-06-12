import React from "react";
import { Link } from "react-router-dom";
import "./recipie.css";
import "./cake.css";
import chocolate from "./images/chocolate.jpg";
import smores from "./images/smores.jpg";
import butter from "./images/butter.jpg";
import redVelvet from "./images/red-velvet.jpg";

const Cake = () => {
  return (
    <div>
      <div className="c-container">
        {" "}
        {/*CHOCOLATE CAKE DIV STARTS HERE*/}
        <img src={chocolate} className="img" alt="chocolate-cake" />
        <div class="right-side">
          <div class="paragraph-div-content">
            a live for chocolate lovers
          </div>
          <div class="paragraph-div-title">
            The Perfect Chocolate Cake
          </div>
          <div class="paragraph-div-content">
          
              This Chocolate Cake recipe is perfect for that die hard chocolate
              fan in your life.
              <br />
              Homemade chocolate icing is used in the cake layers, frosting, and
              the drip!
              <br />I am obsessed with how pretty this Chocolate Cake turned
              out. Not only the perfectly smooth cake.
            
          </div>

          <Link to="/recipie/cake/chocolate-cake" className="nav-cake">
            <div className="readMore">Read More</div>
          </Link>
        </div>
      </div>

      <div className="c-container">
                                        {/*S'MORES CAKE DIV STARTS HERE*/}
        <img src={smores} className="img" alt="butter-cake" />
        <div class="right-side">
          <div class="paragraph-div-content">
            a live for chocolate lovers
          </div>
          <div class="paragraph-div-title">
            S’MORES Cake
          </div>
          <div class="paragraph-div-content">
            
              This S'MORES Cake recipe is perfect for that die hard S'MORES fan
              in your life.
              <br />
              Homemade frosting is used in the cake layers, frosting, and the
              drip!
              <br />I am obsessed with how pretty this S'MORES Cake turned out.
              Not only the perfectly smooth cake
            
          </div>

          <Link to="/recipie/cake/smores-cake" className="nav-cake">
            <div className="readMore">Read More</div>
          </Link>
        </div>
      </div>

      <div className="c-container">
        
        {/*BUTTER CAKE DIV STARTS HERE*/}
        <img src={butter} className="img" alt="butter-cake" />
        <div class="right-side">
          <div class="paragraph-div-content">
            a live for butter cake lovers
          </div>
          <div class="paragraph-div-title">
            Butter Cake
          </div>
          <div class="paragraph-div-content">
            
              This butter Cake recipe is perfect for that die hard butter fan in
              your life.
              <br />I am obsessed with how pretty this Butter Cake turned out.
              Not only the perfectly smooth cake
            
          </div>

          <Link to="/recipie/cake/butter-cake" className="nav-cake">
            <div className="readMore">Read More</div>
          </Link>
        </div>
      </div>

      <div className="c-container">
        {" "}
        {/*RED-VELVET CAKE DIV STARTS HERE*/}
        <img src={redVelvet} className="img" alt="redVelvet-cake" />
        <div class="right-side">
          <div class="paragraph-div-content">
            a live for red velvet cake lovers
          </div>
          <div class="paragraph-div-title">
            Red Velvet Cake
          </div>
          <div class="paragraph-div-content">
            
              This Red Velvet Cake recipe is perfect for that die hard red
              velvet fan in your life.
              <br />
              Homemade frosting is used in the cake layers, frosting, and the
              drip!
              <br />I am obsessed with how pretty this Red Velvet Cake turned
              out. Not only the perfectly smooth cake
          </div>

          <Link to="/recipie/cake/red-velvet-cake" className="nav-cake">
            <div className="readMore">Read More</div>
          </Link>
        </div>
      </div>

      <div className="footer">
        © 2023 Tipcy All Rights Reserved. An elite Dessert food
        publisher.
      </div>
    </div>
  );
};

export default Cake;
