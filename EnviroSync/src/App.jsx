import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Cart from './pages/cart';
import Becomeaseller from './pages/becseller';
import Error from './pages/error';
import './App.css'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/home' element = {<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/becomeaseller' element = {<Becomeaseller/>}/>
            <Route path='*' element = {<Error/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
