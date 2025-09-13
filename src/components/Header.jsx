import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-sm font-bold">
              <Link to="/" className="hover:text-blue-200">
                Licet Workshop
              </Link>
            </h1>
          </div>
          
          <nav className="flex space-x-8">
            <Link 
              to="/" 
              className="hover:text-blue-200 transition duration-300"
            >
              Home
            </Link>
            <Link 
              to="/youtube-feed" 
              className="hover:text-blue-200 transition duration-300"
            >
              YouTube Feed
            </Link>
            <Link 
              to="/counter" 
              className="hover:text-blue-200 transition duration-300"
            >
              counter
            </Link>
             <Link 
              to="/products" 
              className="hover:text-blue-200 transition duration-300"
            >
              Product
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
