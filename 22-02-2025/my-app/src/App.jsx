import { BrowserRouter as Router, Route,  Routes, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import { GlobalProvider } from './Contexts/GlobalContexts';
import './App.css'
import AdminLogin from './Pages/AdminLogin';
import AdminPage from './Pages/AdminPage';


function App() {

  return (
    <>
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/admin' element={<AdminLogin/>} />
          <Route path='/adminPage' element={<AdminPage/>}/>
        </Routes>
      </Router>
    </GlobalProvider>
    </>
  )
}

export default App
