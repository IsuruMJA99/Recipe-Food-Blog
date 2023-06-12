import React from 'react'
import smoresOne from './images/Smores3.jpg';
import './content.css'

const Smores_cake = () => {
  return (
    <div>
      <div className="body">
      <div className="title">
        <h1>S'mores cake</h1>
      </div>

    

      <img className='image' src={smoresOne} alt='smores'/>

    <div className="content">
    <h3>Ingredients:</h3>
     <h4>For the cake:</h4>
     </div>
<div className="list1">
  <ul>
    <li>2 1/2 cups all-purpose flour</li>
    <li>2 1/2 cups all-purpose flour</li>
    <li>1/2 cup unsweetened cocoa powder</li>
    <li>2 teaspoons baking powder</li>
    <li>1/2 teaspoon baking soda</li>
    <li>1/2 teaspoon salt</li>
    <li>1/2 cup vegetable oil</li>
    <li>1 cup milk</li>
    <li>2 large eggs</li>
    <li>2 teaspoons vanilla extract</li>
    <li>1 cup boiling water</li>
    <li>1 cup graham cracker crumbs</li>
    <li>1 1/2 cups mini marshmallows</li>
    <li>1 1/2 cups chocolate chips</li>
    <li>Additional graham cracker crumbs and marshmallows for topping (optional)</li>
    </ul>
</div>


<h3>Instructions:</h3>
<div className="par">

Preheat your oven to 350°F (175°C). Grease and flour a 9-inch round cake pan.

In a large mixing bowl, combine the flour, sugar, cocoa powder, baking powder, baking soda, and salt. Mix well.

Add the vegetable oil, milk, eggs, and vanilla extract to the dry ingredients. Beat on medium speed for about 2 minutes until the batter is well combined.

Stir in the boiling water, slowly incorporating it into the batter. The batter will be thin, but that's normal.

Pour half of the batter into the prepared cake pan. Sprinkle the graham cracker crumbs, mini marshmallows, and chocolate chips evenly over the batter.

Carefully pour the remaining batter over the toppings, making sure they are covered.

Bake in the preheated oven for 30-35 minutes or until a toothpick inserted into the center comes out clean.

Once baked, remove the cake from the oven and let it cool in the pan for about 10 minutes. Then transfer it to a wire rack to cool completely.

Optional: For an extra touch, you can sprinkle additional graham cracker crumbs and marshmallows on top of the cooled cake.

Slice and serve the s'mores cake, and enjoy!
</div>

    </div>


    <div className="footer">
        © 2023 Tipcy All Rights Reserved. An elite Dessert food
        publisher.
      </div>

    </div>
    
  )
}

export default Smores_cake
