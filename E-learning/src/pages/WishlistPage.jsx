import { useCourse } from '../context/CourseContext';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { CourseCard } from '../components/common/CourseCard';
import { allCourses } from '../data/mockCourses';
import { FaHeart, FaStar, FaTrash } from 'react-icons/fa';

export const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, addToCart, isItemInCart } = useCourse(); 

  // Recommendations for the "You might also like" section
  const recommendations = allCourses.slice(0, 3);

  // --- Empty Wishlist View ---
  if (wishlistItems.length === 0) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <FaHeart className="text-gray-300 text-6xl mx-auto mb-6" />
          <h1 className="font-heading text-4xl font-bold mb-4 text-neutral-black">Your Wishlist is Empty</h1>
          <p className="text-neutral-dark mb-8">Click the heart icon on any course to save it for later. Your saved courses will appear here.</p>
          <Link to="/courses">
            <Button size="lg">Explore Courses</Button>
          </Link>
        </div>
        
        {/* Recommendations Section */}
        <section className="py-16 bg-neutral-light border-t">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-center mb-10">Recommended for You</h2>
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

  // --- Wishlist with Items View ---
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold text-neutral-black">My Wishlist</h1>
          <p className="text-neutral-dark mt-1">{wishlistItems.length} courses saved</p>
        </div>
        
        {/* Wishlist Items List */}
        <div className="space-y-6">
          {wishlistItems.map(item => (
            <div key={item.id} className="bg-white border border-neutral-medium rounded-lg p-4 flex flex-col md:flex-row gap-6 items-center">
              <img src={item.imageUrl} alt={item.title} className="w-full md:w-56 h-auto object-cover rounded-md" />
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-neutral-black">{item.title}</h3>
                <p className="text-sm text-neutral-dark mt-1">By {item.instructor}</p>
                <div className="flex items-center mt-2">
                  <span className="text-amber-500 font-bold mr-1">{item.rating}</span>
                  <FaStar className="text-amber-400" />
                  <span className="text-xs text-neutral-dark ml-2">({item.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto flex md:flex-col items-center justify-between gap-4">
                <p className="font-bold text-xl text-primary">${item.price.toFixed(2)}</p>
                <div className="flex gap-2 w-full md:w-auto">
                  <Button 
                    onClick={() => addToCart(item)} 
                    disabled={isItemInCart(item.id)} 
                    className="w-full"
                  >
                    {isItemInCart(item.id) ? 'In Cart' : 'Add to Cart'}
                  </Button>
                  <button 
                    onClick={() => removeFromWishlist(item.id)} 
                    className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors" 
                    aria-label="Remove from wishlist"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Recommendations Section */}
        <section className="py-20 mt-12 border-t">
          <h2 className="font-heading text-3xl font-bold mb-8">More Courses to Explore</h2>
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