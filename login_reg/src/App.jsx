import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './login'
function App() {

  return (
   
     <BrowserRouter>
      <Routes>
       <Route path='/register' element={<Signup />}>
       </Route>
       <Route path='/log' element={<Login />}>
       </Route>  
      </Routes>
     </BrowserRouter>
  )
}

export default App;
