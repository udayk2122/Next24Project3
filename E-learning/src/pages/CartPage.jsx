import { Button } from '../components/common/Button';
import { FaTrash, FaStar } from 'react-icons/fa';
import { useCourse } from '../context/CourseContext';
import { Link } from 'react-router-dom';
import { CourseCard } from '../components/common/CourseCard';
import { allCourses } from '../data/mockCourses';

export const CartPage = () => {
  const { cartItems, removeFromCart, addToWishlist } = useCourse(); 
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Recommendations for empty cart / "You might also like"
  const recommendations = allCourses.slice(4, 7);

  const handleMoveToWishlist = (item) => {
    addToWishlist(item);
    removeFromCart(item.id);
  };

  // --- Empty Cart View ---
  if (cartItems.length === 0) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4 text-neutral-black">Your Cart is Empty</h1>
          <p className="text-neutral-dark mb-8">Looks like you haven't added anything yet. Let's change that!</p>
          <Link to="/courses">
            <Button size="lg">Keep Shopping</Button>
          </Link>
        </div>
        
        {/* "You might also like" section for empty cart */}
        <section className="py-16 bg-neutral-light">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-center mb-10">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // --- Cart with Items View ---
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-heading text-4xl font-bold mb-8">Shopping Cart ({cartItems.length} Items)</h1>
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items List */}
          <div className="lg:w-2/3 space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white border border-neutral-medium rounded-lg p-4 flex flex-col md:flex-row gap-4">
                <img src={item.imageUrl} alt={item.title} className="w-full md:w-48 h-auto object-cover rounded-md" />
                <div className="flex-grow flex flex-col">
                  <div>
                    <h3 className="font-bold text-lg text-neutral-black">{item.title}</h3>
                    <p className="text-sm text-neutral-dark mt-1">By {item.instructor}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-amber-500 font-bold mr-1">{item.rating}</span>
                      <FaStar className="text-amber-400" />
                    </div>
                  </div>
                  <div className="mt-4 md:mt-auto flex items-center gap-4 text-sm">
                    <button onClick={() => handleMoveToWishlist(item)} className="text-primary hover:underline">Move to Wishlist</button>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline" aria-label="Remove item">Remove</button>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-xl text-primary">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-neutral-light p-6 rounded-lg sticky top-24">
              <h2 className="font-heading text-2xl font-bold mb-4">Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-neutral-dark">
                  <span>Original Price</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-dark">
                  <span>Discounts</span>
                  <span>-$0.00</span>
                </div>
              </div>
              <hr className="my-4"/>
              <div className="flex justify-between font-bold text-xl mb-4 text-neutral-black">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <Button size="lg" className="w-full text-lg">Proceed to Checkout</Button>
              <p className="text-xs text-neutral-dark text-center mt-4">30-Day Money-Back Guarantee</p>
              
              <div className="mt-6">
                <label className="font-bold text-sm">Apply Coupon</label>
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="Enter Coupon" className="w-full px-3 py-2 border border-neutral-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"/>
                  <Button variant="secondary" className="border-primary text-primary">Apply</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* You might also like section */}
        <section className="py-20 mt-12 border-t">
          <h2 className="font-heading text-3xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};