import React from 'react'
import smoothieOne from './images/strawberry-smoothie-2.jpg'


const Smoothie = () => {
  return (
    <div>
      <div>
      <div className="body">
      <div className="title">
        <h1>The Perfect Strawberry Smoothie</h1>
      </div>

    

      <img className='imgs' src={smoothieOne} alt='strawberry-smoothie'/>

    <div className="content">
    <h3>Ingredients:</h3>
     <h4>For the Strawberry Smoothie:</h4>
     </div>
<div className="list1">
  <ul>
    <li>2 cups of Frozen strawberries: It’s easy to find and store frozen berries, and they add a great icy texture to this smoothie. If you want to use fresh berries, use a frozen banana.</li>
    <li>1 Fresh banana: Our pet peeve is smoothie recipes that call for frozen bananas, because we never keep them on hand! Usually we want a smoothie recipe now. So we customized this one to use a fresh banana.</li>
    <li>1/4 Greek yogurt: Greek yogurt gives this recipe a protein boost and helpful probiotics. (If you love yogurt you could add a touch more.) It also makes for a perfect creamy texture.</li>
    <li>1/2 cup Ice: Here’s the most important part — ice is essential to a perfect strawberry smoothie! It makes just the right frothy texture. We’ve tried it without and it really makes a difference. Do not omit it!</li>
    <li>1 cup Milk: You need just the right amount of liquid in a smoothie to get it to blend. Not enough and the blender gets stuck (the worst!), and too much it tastes milky. You can also use non-dairy milk.</li>
    <li>1 1/2Maple syrup: Adding a hint of maple brings out the sweetness in the berries. If you eat a low sugar diet you could omit, but it doesn’t quite taste sweet enough with no sweetener.</li>
    </ul>
</div>
<h4 className='content'>Optional add-ins and variances:</h4>
<div className='list2'>
  <ul>
    <li>Almond butter. Almond goes well with strawberry. Use about 1 tablespoon, 2 for a stronger almond flavor (it will also dull the color a bit).</li>
    <li>Vanilla. Use ¼ to ½ teaspoon vanilla to heighten the flavors.</li>
    <li>Mint or basil. Add a few fresh mint or basil leaves for an herbaceous spin.</li>
    <li>Pineapple. Substitute 1 cup of the frozen berries for 1 cup frozen pineapple</li>
    <li>Mango. Substitute 1 cup of the frozen berries for 1 cup frozen mango</li>
    <li>Banana. Add another ripe banana and remove the Greek yogurt</li>
    <li>Blueberries. Substitute 1 cup of the frozen strawberries for blueberry</li>
    <li>Chocolate. Add cocoa powder</li>
    </ul>
</div>

<h3>Instructions:</h3>
<div className="par">
<p>
Place all ingredients in a blender, breaking the banana into pieces. Blend until creamy and frothy, stopping and scraping down the sides as necessary. If desired, garnish with a frozen strawberry and mint sprig. Serve immediately or store in a covered jar in the refrigerator for 2 days.
Enjoy your homemade Strawberry Smoothie! </p>
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

export default Smoothie
