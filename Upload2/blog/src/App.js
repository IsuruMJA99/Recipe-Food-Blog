import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Nav from './Component/Nav';
import Homepage from './Component/Homepage';
import Recipie from './Component/Recipie';
import About from './Component/About';
import Cake from './Component/Cake';
import Icecream from './Component/Icecream';
import Beverage from './Component/Beverage';
import Chocolate_cake from './Component/Chocolate_cake';
import Smores_cake from './Component/Smores_cake';
import Butter_cake from './Component/Butter_cake';
import RedVelvet from './Component/RedVelvet';

import Vanilla_ice from './Component/Vanilla_ice';
import Chocolate_ice from './Component/Chocolate_ice';



 function App() {
  return (
    <div>
      <div className="App">
        <Nav/>
      </div>
        <Routes>
          <Route exact path ='/' element={<Homepage/>}/>
          <Route exact path ='/recipie' element={<Recipie/>}/>
          <Route exact path ='/about' element={<About/>}/>
          <Route exact path ='/recipie/cake' element={<Cake/>}/>
          <Route exact path ='/recipie/icecream' element={<Icecream/>}/>
          <Route exact path ='/recipie/beverage' element={<Beverage/>}/>

          <Route exact path ='/recipie/cake/chocolate-cake' element={<Chocolate_cake/>}/>
          <Route exact path ='/recipie/cake/smores-cake' element={<Smores_cake/>}/>
          <Route exact path ='/recipie/cake/butter-cake' element={<Butter_cake/>}/>
          <Route exact path ='/recipie/cake/red-velvet-cake' element={<RedVelvet/>}/>

          <Route exact path ='/recipie/cake/vanilla-ice' element={<Vanilla_ice/>}/>
          <Route exact path ='/recipie/cake/Chocolate-ice' element={<Chocolate_ice/>}/>
        </Routes>
      
     
    </div>
  );
}
 
export default App;
