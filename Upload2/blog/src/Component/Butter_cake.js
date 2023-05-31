import React from 'react'
import butterOne from './images/butter2.jpg';
import './content.css'

const Butter_cake = () => {
  return (
    <div>
      <div className="body">
      <div className="title">
        <h1>Butter cake</h1>
      </div>

    

      <img className='imgs' src={butterOne} alt='butter'/>

    <div className="content">
    <h3>Ingredients:</h3>
     <h4>For the cake:</h4>
     </div>
<div className="list1">
  <ul>
    <li>1 1/2 cups all-purpose flour</li>
    <li>1 1/2 teaspoons baking powder</li>
    <li>1/4 teaspoon salt</li>
    <li>1 cup unsalted butter, softened</li>
    <li>1 cup granulated sugar</li>
    <li>4 large eggs</li>
    <li>2 teaspoons vanilla extract</li>
    <li>1/2 cup whole milk</li>
    </ul>
</div>


<h3>Instructions:</h3>
<div className="par">
<p>
Preheat your oven to 350°F (175°C). Grease and flour a 9-inch round cake pan.

In a medium bowl, whisk together the flour, baking powder, and salt. Set aside.

In a large mixing bowl, cream together the softened butter and granulated sugar until light and fluffy. You can use an electric mixer or do it by hand with a wooden spoon.

Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.

Gradually add the flour mixture to the butter mixture, alternating with the milk. Begin and end with the flour mixture, mixing just until combined after each addition. Do not overmix.

Pour the batter into the prepared cake pan and smooth the top with a spatula.

Bake in the preheated oven for about 35-40 minutes or until a toothpick inserted into the center comes out clean.

Remove the cake from the oven and let it cool in the pan for about 10 minutes. Then transfer it to a wire rack to cool completely.</p>
</div>

    </div>


    <div className="footer">
        © 2023 Tipcy All Rights Reserved. An elite Dessert food
        publisher.
      </div>

    </div>
    
  )
}
export default Butter_cake
