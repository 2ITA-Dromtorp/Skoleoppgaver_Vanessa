import './App.css'
import Layout from './Layout'
import Login from './Login'
import Sigunup from './Sigunup'
import Profile from './Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App =() => {

  return (
    <BrowserRouter>

        <Routes>

            <Route path='/' element={<Layout />}>

              <Route index element={<Login/>}/>
              <Route path='/signup' element={<Sigunup/>}/>
              <Route path='/profile' element={<Profile/>}/>

            </Route>

        </Routes>

    </BrowserRouter>
  )

}
export default App
