import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Nav from './Component/Nav';
import Homepage from './Component/Homepage';
import Recipie from './Component/Recipie';
import About from './Component/About';
import Cake from './Component/Cake';
import Icecream from './Component/Icecream';
import Beverage from './Component/Beverage';


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
        </Routes>
      
     
    </div>
  );
}
 
export default App;