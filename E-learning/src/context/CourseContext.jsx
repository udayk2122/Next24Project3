import { createContext, useState, useContext } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Cart Functions
  const addToCart = (course) => {
    if (!cartItems.find(item => item.id === course.id)) {
      setCartItems([...cartItems, course]);
    }
  };
  const removeFromCart = (courseId) => {
    setCartItems(cartItems.filter(item => item.id !== courseId));
  };
  const isItemInCart = (courseId) => {
    return cartItems.some(item => item.id === courseId);
  };

  // Wishlist Functions
  const addToWishlist = (course) => {
    if (!wishlistItems.find(item => item.id === course.id)) {
      setWishlistItems([...wishlistItems, course]);
    }
  };
  const removeFromWishlist = (courseId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== courseId));
  };
  const isItemInWishlist = (courseId) => {
    return wishlistItems.some(item => item.id === courseId);
  };

  return (
    <CourseContext.Provider value={{ 
      cartItems, addToCart, removeFromCart, isItemInCart,
      wishlistItems, addToWishlist, removeFromWishlist, isItemInWishlist 
    }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  return useContext(CourseContext);
};