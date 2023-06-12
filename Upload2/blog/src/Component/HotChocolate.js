import React from 'react'
import hotChoc from './images/hot-chocolate-1.jpg';

const HotChocolate = () => {
  return (
    <div>
      <div>
      <div className="body">
      <div className="title">
        <h1>The Perfect Hot Chocolate Drink</h1>
      </div>

    

      <img className='imgs' src={hotChoc} alt='hot-chocalate'/>

    <div className="content">
    <h3>Ingredients:</h3>
     <h4>For the Hot-Chocolate Drink:</h4>
     </div>
<div className="list1">
  <ul>




    <li>1/4 cup granulated sugar, (or add to desired sweetness)</li>
    <li>1/4 cup unsweetened cocoa powder</li>
    <li>4 cups whole milk</li>
    <li>1/2 cup semisweet chocolate, (chips, chunks or shavings)</li>
    <li>½ tsp vanilla extract</li>
    </ul>
</div>






  <h4 className='content'>What to serve with Hot Chocolate:</h4>
<div className='list2'>
  <ul>
    <li>Sugar Cookies – our go-to Christmas cut-out cookies</li>
    <li>Chocolate Crinkle Cookies – with a soft, fudgy center</li>
    <li>Chocolate Chip Cookies – soft, bakery-style</li>
    <li>Oatmeal Cookies – oatmeal coconut cookies</li>
    <li>Chocolate Chip Bar – loaded with chocolate chips</li>
    </ul>
</div>

<h3 className='content'>Instructions:</h3>
<div className="par">

In a medium saucepan, whisk together the sugar and cocoa powder. Add milk, chocolate chips, and vanilla and whisk together.

Place over medium heat and bring it to a light boil while stirring constantly. Be sure the chocolate is fully melted and incorporated.

Set aside to cool to your desired temperature and serve with your favorite toppings.
Enjoy your homemade Hot Chocolate Drink!
</div>

    </div>


    <div className="footer">
        © 2023 Tipcy All Rights Reserved. An elite Dessert food
        publisher.
      </div>

    </div>
    </div>
  )
}

export default HotChocolate
