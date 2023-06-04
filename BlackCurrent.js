import React from 'react'
import blackcurrentone from './images/Blackcurrant-ice-Cream-2.jpg';
import './content.css'

const BlackCurrent = () => {
  return (
    <div>
      <div className="body">
      <div className="title">
        <h1>Blackcurrent Ice Cream</h1>
      </div>

    

      <img className='image' src={blackcurrentone} alt='black'/>

    <div className="content">
    <h3>Ingredients:</h3>
     <h4>For the Ice-Cream:</h4>
     </div>
<div className="list1">
  <ul>
    <li>500g blackcurrants, fresh or frozen (400g defrosted if frozen)</li>
    <li>1 lemon, zested and juiced</li>
    <li>600ml double cream</li>
    <li>397g can condensed milk</li>
    </ul>
</div>


<h3>Instructions:</h3>
<div className="par">
<p>
STEP 1
Place 400g of the blackcurrants in a large saucepan with the zest of 1 lemon and juice of ½, plus 4 tbsp water. 
Bring to the boil, then reduce to a simmer and cook for 6-8 mins until the fruit has broken down and the liquid has reduced and thickened slightly. 
Remove from the heat and allow to cool.</p>
<p>
STEP 2
Pass the fruit through a sieve over a mixing bowl. 
Use the back of a spoon to press down on the fruit and squeeze out all the juice, 
then discard the remaining stalks and pulp from the sieve, and set aside the liquid.
</p>
<p>
STEP 3
Combine the double cream and condensed milk in a large mixing bowl. 
Whisk until thickened but not stiff, then add the fruit and stir to combine. 
Tip into a freezer-proof container, cover with a lid and freeze for at least 6 hrs. 
Remove from the freezer 30 mins before serving, then serve in bowls topped with the remaining blackcurrants.
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

export default BlackCurrent
