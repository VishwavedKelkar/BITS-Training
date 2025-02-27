import { Link, useNavigate } from "react-router-dom"
import { Button } from "./button"

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <Button onClick={() => navigate('/')} className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md mx-2">
          Back
        </Button>
        <h1 className="text-xl font-bold mx-auto flex justify-center">Ecommerce Website</h1>
        <nav className="flex space-x-4">

          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/cart" className="hover:underline">Your Cart</Link>
        </nav>
      </header>
    </>
  )
}

export default Navbar