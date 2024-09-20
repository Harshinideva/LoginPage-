import React from 'react';
import Hi from './screens/login';
import description from './screens/description.png'
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './screens/signup'
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Hi />} />
        <Route path="/signup" element={<Signup />} />
      
       </Routes>
    
    <div>
      <div className="background"
          style={{
            position: 'fixed',
            height: `100vh`,
            width: `100vw`,
            backgroundImage: `url(${description})` ,/* assuming it's in public/screens/description.png */
            backgroundSize: `cover`,
            zIndex: `-1`,
            //filter: `blur(7px) brightness(0.8)`,
            top:`0` ,
            left: `0`,
            backgroundPosition:'center'
            }}  />
    
    
    </div>
    
    </BrowserRouter>
  );
}

export default App;
