import React from 'react'
import chocOne from './images/choc-cake-cont-1.jpg';
import './content.css'

const Chocolate_cake = () => {
  return (
    <div>
      <div className="body">
      <div className="title">
        <h1>Chocolate Cake</h1>
      </div>

    

      <img className='imgs' src={chocOne} alt='chocalate'/>

    <div className="content">
    <h3>Ingredients:</h3>
     <h4>For the cake:</h4>
     </div>
<div className="list1">
  <ul>
    <li>2 cups all-purpose flour</li>
    <li>1 3/4 cups granulated sugar</li>
    <li>3/4 cup unsweetened cocoa powder</li>
    <li>1 1/2 teaspoons baking powder</li>
    <li>1 1/2 teaspoons baking soda</li>
    <li>1 teaspoon salt</li>
    <li>2 large eggs</li>
    <li>1 cup milk</li>
    <li>1/2 cup vegetable oil</li>
    <li>2 teaspoons vanilla extract</li>
    <li>1 cup boiling water</li>
    </ul>
</div>
  <h4 className='content'>For the frosting:</h4>
<div className='list2'>
  <ul>
    <li>1/2 cup unsalted butter, softened</li>
    <li>2/3 cup unsweetened cocoa powder</li>
    <li>3 cups powdered sugar</li>
    <li>1/3 cup milk</li>
    <li>1 teaspoon vanilla extract</li>
    </ul>
</div>

<h3 className='content'>Instructions:</h3>
<div className="par">
<p>
Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.

In a large mixing bowl, combine the flour, sugar, cocoa powder, baking powder, baking soda, and salt. Mix well.

Add the eggs, milk, vegetable oil, and vanilla extract to the dry ingredients. Beat on medium speed for about 2 minutes until well combined.

Stir in the boiling water. The batter will be thin, but that's normal.

Pour the batter evenly into the prepared cake pans.

Bake in the preheated oven for 30 to 35 minutes, or until a toothpick inserted into the center of the cakes comes out clean.

Remove the cakes from the oven and allow them to cool in the pans for about 10 minutes. Then, transfer them to a wire rack to cool completely.

While the cakes are cooling, prepare the frosting. In a mixing bowl, cream the butter until smooth.

Gradually add the cocoa powder, powdered sugar, milk, and vanilla extract. Beat until the frosting reaches a spreading consistency.

Once the cakes have cooled, place one layer on a serving plate and spread a generous amount of frosting on top.

Place the second layer on top and frost the top and sides of the cake with the remaining frosting.

Decorate the cake as desired, or simply leave it plain.

Let the frosting set for a few minutes before slicing and serving.

Enjoy your homemade chocolate cake!</p>
</div>

    </div>


    <div className="footer">
        © 2023 Tipcy All Rights Reserved. An elite Dessert food
        publisher.
      </div>

    </div>
    
  )
}

export default Chocolate_cake
