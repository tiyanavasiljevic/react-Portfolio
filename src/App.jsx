import { useState } from 'react'         
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './pages/MainLayout'
import About from './pages/About'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Error404 from './Error404'
import Contact from './pages/Contact'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
    <BrowserRouter>
    <Routes>

      <Route path= '/' element={<MainLayout></MainLayout>}>

      <Route index element={<Home></Home>}></Route>

      <Route path= '/about' element={<About></About>}></Route>

      <Route path= '/skills' element={<Skills></Skills>}></Route>

      
      <Route path="/contact" element={<Contact></Contact>}></Route>

      <Route path='*' element={<Error404></Error404>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
</div>
    </>
  );
}

export default App;
