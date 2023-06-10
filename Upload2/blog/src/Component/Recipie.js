import React from "react";
import "./recipie.css";
import img111 from './images/recipie-cake.jpg';
import img222 from './images/pistachio.png';
import img333 from './images/recipie-beverage.jpg';
import { Link } from "react-router-dom";

const Recipie = () => {
  // const handleClick = () => {
  //       // Handle click event
  //       console.log('Link clicked');
  // }


  return (
     <>

     
    <div className="logimg"></div>

    <div className="recipie">
      <div className="centered-div">
      <img className='imgs' src={img111} alt=''/>
      <div className ="intro">
      <Link to="/recipie/Cake" className="nav-item-2">
      

            <h1>Cake</h1>
            <p>Delight in rich chocolate, zesty lemon, classic red velvet,
               moist carrot, vanilla-strawberry, warm lava, almond-rosewater,
                tropical coconut, and more!</p>
      </Link>
        </div>

      </div>

      
      <div className="centered-div">
      <img className='imgs' src={img222} alt=''/>

      <div className ="intro">
        <Link to="/recipie/icecream" className="nav-item-2">
          
        
            <h1>Ice-cream</h1>
            <p>Indulge in the creamy delight that brings joy to every lick, 
              as luscious flavors swirl and melt, making ice cream a timeless
               treat for all.
                </p>
      
        </Link>
        </div>
      </div>

      <div className="centered-div">
      <img className='imgs' src={img333} alt=''/>

      <div className ="intro">
        <Link to="/recipie/beverage" className="nav-item-2">
          
        <h1>Beverages</h1>
            <p>From steaming cups of aromatic coffee to refreshing 
              fruit juices,tantalizing teas,and expertly crafted cocktails,
                indulge in a diverse array of beverages that 
                awaken your senses and quench your thirst.
                </p>
  
        </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Recipie;
