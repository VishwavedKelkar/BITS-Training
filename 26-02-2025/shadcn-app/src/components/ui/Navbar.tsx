import { Link } from "react-router-dom"
  
const Navbar = () => {
  return (
    <>
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold mx-auto">Ecommerce Website</h1>
      <nav className="flex space-x-4">
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/" className="hover:underline">Home</Link>
      </nav>
    </header>
    </>
  )
}

export default Navbar