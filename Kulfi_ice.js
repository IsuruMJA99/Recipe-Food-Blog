import React from 'react'
import kulfiOne from './images/kulfi2.jpg';
import './content.css'

const Kulfi_ice = () => {
  return (
    <div>
    <div className="body">
    <div className="title">
      <h1>Mango Kulfi Ice-cream</h1>
    </div>

  

    <img className='imgs' src={kulfiOne} alt='kman'/>

  <div className="content">
  <h3>Ingredients:</h3>
   <h4>For the Ice Cream:</h4>
   </div>
<div className="list1">
<ul>
  <li>Fresh or canned mango pulp of Alphonso, Kesar or Ataulfo mangoes</li>
  <li>Heavy whipping cream, milk, or evaporated milk</li>
  <li>Sweetened Condensed milk (recommended) or sugar</li>
  <li>Almonds and pistachios, coarsely ground</li>
  <li>Cardamom powder</li>
  <li> A pinch of salt</li>
  </ul>
</div>


<h3>Instructions:</h3>
<div className="par">
<p>
Using a blender, blend all ingredients (milk, cream, condensed milk, mango puree, cardamom powder, salt) except nuts until smooth and creamy.
Add the coarsely crushed nuts and mix until well combined. Your no-cook kulfi mixture is ready! Makes a total of 4 cups.
Pour the kulfi mixture into molds of choice. 
I used this Popsicle Mould. Alternately you can also small paper cups (5oz). Poured approximately 2 cups in molds (8 kulfis) and 2 cups mix in 4 paper cups. 
Cover with aluminum foil and add the wooden ice cream sticks or the ones that come with your popsicle mold. Refrigerate for 6-8 hours or until frozen.
</p>
</div>

  </div>


  <div className="footer">
      © 2023 Tipcy All Rights Reserved. An elite Dessert food
      publisher.
    </div>

  </div>
  )
}

export default Kulfi_ice
