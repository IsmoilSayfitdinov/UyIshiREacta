import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from "../src/componets/nav/Nav"
import Discover from './page/Discover'
import Home from './page/Home'
import Gran from './page/Grand'
import Fun from './componets/fun/Fun'


function App() {

  return (
    <div className='container'>
             <Nav/>
                 <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/Discover' element={<Discover/>}/>
                 <Route path='/Fun' element={<Fun/>}/>
                 <Route path='/Grand' element={<Gran/>}/>
        </Routes>
             </div>
        
  )
}

export default App
