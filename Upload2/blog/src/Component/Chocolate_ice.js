import React from 'react'
import choiceone from './images/chocoice2.jpg';
import './content.css'


const Chocolate_ice = () => {
  return (
    <div>
      <div className="body">
      <div className="title">
        <h1>Chocolate Ice Cream</h1>
      </div>

    

      <img className='imgs' src={choiceone } alt='chocoice'/>

    <div className="content">
    <h3>Ingredients:</h3>
     <h4>For the Ice-Cream:</h4>
     </div>
<div className="list1">
  <ul>
    <li>200g dark chocolate (at least 70% cocoa solids), chopped into small pieces</li>
    <li>500ml double cream</li>
    <li>340g can sweetened condensed milk</li>
    <li>3 tbsp organic cocoa powder, sifted</li>
    <li>50g milk chocolate chips</li>
    <li>sea salt flakes, to serve (optional)</li>
    </ul>
</div>

<br></br>
<h3>Instructions:</h3>
<div className="par">  
<p>
STEP 1
Melt the chocolate in a heatproof bowl set over a pan of just-simmering water, ensuring the bowl doesn’t touch the water, or do this in the microwave in 20-second bursts until smooth and glossy. 
Leave to cool slightly. 
Pour the cream, condensed milk and vanilla into a second bowl and beat for 3 mins using an electric whisk until slightly thickened and the beaters leave a trail in the mixture when lifted across the bowl. 
 careful not to overwhip, as you don’t want the mixture to be too stiff – as soon as the beaters leave a trail, it’s ready.
</p>
<br></br>
<p>
STEP 2
Gently fold the melted chocolate and cocoa powder into the cream mixture until thoroughly combined, ensuring the spatula is reaching the bottom of the bowl so all the chocolate gets mixed in. 
Fold in most of the chocolate chips, reserving a small handful. 
Scrape the mixture into a 1-litre freezerproof container, then scatter over the reserved chocolate chips. 
Cover and freeze for at least 6 hrs until firm but scoopable. 
Will keep frozen for up to a month. To serve, scoop the ice cream into chilled bowls or ice cream cones and sprinkle with a pinch of sea salt, if you like.
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

export default Chocolate_ice
