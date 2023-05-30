import React from "react";
import "./recipie.css";
import { Link } from "react-router-dom";

const Recipie = () => {
  // const handleClick = () => {
  //       // Handle click event
  //       console.log('Link clicked');
  // }
  return (
    <div className="recipie">
      <div className="centered-div">
        <Link to="/recipie/cake" className="nav-item-2">
          Cake
        </Link>
      </div>
      <div className="centered-div">
        <Link to="/recipie/icecream" className="nav-item-2">
          Ice-cream
        </Link>
      </div>
      <div className="centered-div">
        <Link to="/recipie/beverage" className="nav-item-2">
          Beverage
        </Link>
      </div>
    </div>
  );
};

export default Recipie;
