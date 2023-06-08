import React from 'react'
import faloodaOne from './images/falooda-2.jpg'

const Falooda = () => {
  return (
    <div>
      <div>
      <div className="body">
      <div className="title">
        <h1>The Lovely Falooda</h1>
      </div>

    

      <img className='imgs' src={faloodaOne} alt='falooda'/>

    <div className="content">
    <h3>Ingredients:</h3>
     <h4>For the Falooda:</h4>
     </div>
<div className="list1">
  <ul>
    <li>Milk (non-dairy milk is fine too)</li>
    <li>Vanilla ice cream (non-dairy ice cream works too)</li>
    <li>Falooda syrup</li>
    </ul>
</div>
<h4 className='content'>Optional add-ins:</h4>
<div className='list2'>
  <ul>
    <li>Tukmaria seeds, soaked</li>
    <li>Roasted vermicelli, cooked</li>
    <li>Red strawberry jello (or strawberry jelly for my non-american readers)</li>
    <li>Green or yellow jello</li>
    <li>Pistachio</li>
    </ul>
</div>

<h3>Instructions:</h3>
<div className="par">
<p>
Add the jello first, followed by vermicelli, and basil seeds. Next add milk, and then pour in the rose syrup. The rose syrup should sink to the bottom, creating a pink ombre look. Finally, top it with ice cream, and a little extra jello. Serve with a spoon and a straw. Remember to stir the milkshake before drinking.
Enjoy your homemade Falooda! </p>
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

export default Falooda
