
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="" element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path="home" element={<HomePage/>}/>
    </Routes>
   </BrowserRouter>

  )
}

export default App