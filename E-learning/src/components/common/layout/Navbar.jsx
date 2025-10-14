import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { FaBars, FaTimes, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useAuth } from '../../../context/AuthContext';
import { useCourse } from '../../../context/CourseContext';

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { cartItems, wishlistItems } = useCourse();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-neutral-medium/50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side: Logo & Search Bar */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="font-heading text-3xl font-bold text-primary flex-shrink-0">
              E-Learn
            </Link>
            <div className="relative w-full max-w-md hidden lg:block">
              <input 
                type="text" 
                placeholder="Search for anything..." 
                className="bg-neutral-light border border-neutral-medium rounded-full py-2.5 px-6 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-dark/60" />
            </div>
          </div>

          {/* Right Side: Links, Icons & Auth */}
          <div className="hidden lg:flex items-center space-x-6 text-base font-medium">
            <Link to="/courses" className="text-neutral-dark hover:text-primary transition-colors">Courses</Link>
            <Link to="/teach" className="text-neutral-dark hover:text-primary transition-colors">Teach with Us</Link>
            <Link to="/about" className="text-neutral-dark hover:text-primary transition-colors">About</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-neutral-dark hover:text-primary transition-colors">My Courses</Link>
                <Link to="/wishlist" className="relative text-neutral-dark hover:text-primary transition-colors text-2xl" aria-label="Wishlist">
                  <FaHeart />
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center">{wishlistItems.length}</span>
                  )}
                </Link>
                <Link to="/cart" className="relative text-neutral-dark hover:text-primary transition-colors text-2xl" aria-label="Cart">
                  <FaShoppingCart />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItems.length}</span>
                  )}
                </Link>
                <Button variant="primary" onClick={handleLogout}>Log Out</Button>
              </>
            ) : (
              <>
                <div className="h-8 border-l border-neutral-medium"></div>
                <Link to="/cart" className="relative text-neutral-dark hover:text-primary transition-colors text-2xl" aria-label="Cart">
                  <FaShoppingCart />
                   {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItems.length}</span>
                  )}
                </Link>
                <Button variant="ghost" onClick={() => navigate('/login')}>Log In</Button>
                <Button variant="primary" onClick={() => navigate('/signup')}>Sign Up</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open menu">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-3 bg-white border-t">
          <div className="relative w-full my-2">
            <input type="text" placeholder="Search..." className="bg-neutral-light border border-neutral-medium rounded-full py-2.5 px-6 w-full"/>
            <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-dark/60" />
          </div>
          <hr/>
          <Link to="/courses" className="block py-2 text-neutral-dark hover:text-primary" onClick={() => handleLinkClick('/courses')}>Courses</Link>
          <Link to="/teach" className="block py-2 text-neutral-dark hover:text-primary" onClick={() => handleLinkClick('/teach')}>Teach with Us</Link>
          <Link to="/about" className="block py-2 text-neutral-dark hover:text-primary" onClick={() => handleLinkClick('/about')}>About</Link>
          
          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="block py-2 text-neutral-dark hover:text-primary" onClick={() => handleLinkClick('/dashboard')}>My Courses</Link>
              <Link to="/wishlist" className="block py-2 text-neutral-dark hover:text-primary" onClick={() => handleLinkClick('/wishlist')}>
                My Wishlist {wishlistItems.length > 0 && `(${wishlistItems.length})`}
              </Link>
            </>
          )}
          <hr/>
           {isAuthenticated ? (
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="primary" className="w-full" onClick={handleLogout}>Log Out</Button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="ghost" className="w-full" onClick={() => handleLinkClick('/login')}>Log In</Button>
                <Button variant="primary" className="w-full" onClick={() => handleLinkClick('/signup')}>Sign Up</Button>
              </div>
            )}
        </div>
      )}
    </nav>
  );
};