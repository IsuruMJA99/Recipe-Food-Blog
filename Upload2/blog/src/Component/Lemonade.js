import React from 'react'
import lemonadeOne from './images/lemonade-2.jpg'

const Lemonade = () => {
  return (
    <div>
      <div>
      <div>
      <div className="body">
      <div className="title">
        <h1>Refreshing Lemonade</h1>
      </div>

    

      <img className='imgs' src={lemonadeOne} alt='lemonade'/>

    <div className="content">
    <h3>Ingredients:</h3>
     <h4>For the Lemonade:</h4>
     </div>
<div className="list1">
  <ul>
    <li>1 cup sugar (can reduce to 3/4 cup)</li>
    <li>1 cup water (for the simple syrup)</li>
    <li>1 cup freshly squeezed lemon juice</li>
    <li>2 to 3 cups cold water, to dilute</li>
    </ul>
</div>


<h3>Instructions:</h3>
<div className="par">
<p>
Make the simple syrup:
Place the sugar and water in a small saucepan and bring to a simmer. Stir so that the sugar dissolves completely and remove from heat.
<br/><br/>
Juice the lemons:
While the water is heating for the simple syrup, juice your lemons. Depending on the size of the lemons, 4 to 6 of them should be enough for 1 cup of juice.
<br/><br/>
Mix the lemonade:
Pour the juice and the simple syrup sugar water into a serving pitcher. Add 2 to 3 cups of cold water and taste. Add more water if you would like it to be more diluted (though note that when you add ice, it will melt and naturally dilute the lemonade).

If the lemonade is a little sweet for your taste, add a little more straight lemon juice to it.

<br/><br/>
Chill and serve:
Refrigerate 30 to 40 minutes.
<br/><br/>
Serve & Enjoy with ice and sliced lemons.
</p>
</div>

    </div>


    <div className="footer">
        © 2023 Tipcy All Rights Reserved. An elite Dessert food
        publisher.
      </div>

    </div>
    </div>
    </div>
  )
}

export default Lemonade
