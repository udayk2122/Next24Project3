import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allCourses } from '../data/mockCourses';
import { FaStar, FaPlayCircle, FaCertificate, FaInfinity, FaHeart, FaRegHeart, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Button } from '../components/common/Button';
import { useCourse } from '../context/CourseContext';

// A self-contained Accordion Item component for the curriculum
const AccordionItem = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-medium rounded-lg">
      <button
        className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-black bg-neutral-light hover:bg-gray-200 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{section.title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 border-t border-neutral-medium">
          <ul className="space-y-3">
            {section.lectures.map(lecture => (
              <li key={lecture.id} className="flex items-center text-neutral-dark">
                <FaPlayCircle className="mr-3 text-teal-500/70" />
                <span>{lecture.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = allCourses.find(c => c.id === parseInt(courseId));
  const { addToCart, isItemInCart, addToWishlist, removeFromWishlist, isItemInWishlist } = useCourse();

  if (!course) {
    return (
      <div className="text-center py-20 bg-neutral-light min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-heading text-4xl font-bold mb-4">Course Not Found</h1>
        <p className="text-neutral-dark mb-6">We couldn't find the course you're looking for.</p>
        <Link to="/courses">
          <Button size="lg">Browse Other Courses</Button>
        </Link>
      </div>
    );
  }

  const learningObjectives = [
    `Master the fundamentals of ${course.title.split(' ')[0]}`,
    'Build real-world applications from scratch',
    'Understand advanced concepts and best practices',
    'Prepare for a career in the tech industry',
    'Learn to debug and solve common problems',
    'Deploy applications to a live server'
  ];

  const reviews = [
    { name: 'Priya Sharma', rating: 5, comment: 'This is the best course I have ever taken on this subject. The instructor is clear, concise, and very knowledgeable. Highly recommended!' },
    { name: 'Amit Singh', rating: 5, comment: 'Absolutely fantastic! I went from knowing nothing to building my own application. The project-based approach is incredibly effective.' },
  ];

  return (
    <div>
      {/* --- Main Header Section --- */}
      <header className="bg-neutral-black text-black py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-teal-400 font-semibold">Development  Web Development</p>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mt-2">{course.title}</h1>
          <p className="text-xl text-neutral-light mt-2">{`A comprehensive guide to mastering ${course.title.split(' ')[0]} and beyond.`}</p>
          <div className="flex items-center mt-4">
            <span className="text-amber-400 font-bold mr-2 text-lg">{course.rating}</span>
            <div className="flex text-amber-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-600" /></div>
            <span className="text-sm ml-2 text-neutral-light hover:underline cursor-pointer">({course.reviews} reviews)</span>
          </div>
          <p className="mt-2 text-sm">Created by <span className="text-teal-400 font-semibold">{course.instructor}</span></p>
        </div>
      </header>

      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          
          {/* --- Right Column (Sticky Purchase Card) --- */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-24 border">
              <img src={course.imageUrl} alt={course.title} className="w-full rounded-md mb-4" />
              <p className="font-heading text-4xl font-bold text-center my-4">${course.price}</p>
              
              <div className="flex items-center gap-2">
                <Button 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={() => addToCart(course)}
                  disabled={isItemInCart(course.id)}
                >
                  {isItemInCart(course.id) ? 'Added to Cart' : 'Add to Cart'}
                </Button>
                
                <button 
                  onClick={() => isItemInWishlist(course.id) ? removeFromWishlist(course.id) : addToWishlist(course)}
                  className="p-3 border-2 border-neutral-dark rounded-lg text-neutral-dark text-2xl hover:bg-gray-100 transition-colors"
                  aria-label="Add to wishlist"
                >
                  {isItemInWishlist(course.id) ? <FaHeart className="text-red-500"/> : <FaRegHeart/>}
                </button>
              </div>
              <p className="text-xs text-neutral-dark text-center mt-3">30-Day Money-Back Guarantee</p>

              <div className="text-sm text-neutral-dark space-y-3 mt-6">
                <h3 className="font-bold text-lg text-neutral-black">This course includes:</h3>
                <p className="flex items-center"><FaPlayCircle className="mr-3 text-teal-500/80"/> 22 hours on-demand video</p>
                <p className="flex items-center"><FaInfinity className="mr-3 text-teal-500/80"/> Full lifetime access</p>
                <p className="flex items-center"><FaCertificate className="mr-3 text-teal-500/80"/> Certificate of completion</p>
              </div>
            </div>
          </div>

          {/* --- Left Column (Course Info) --- */}
          <div className="lg:w-2/3">
            {/* What you'll learn Section */}
            <div className="border border-neutral-medium p-6 rounded-lg">
              <h2 className="font-heading text-3xl font-bold mb-4">What you'll learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-neutral-dark">
                {learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="mr-3 mt-1 text-teal-500 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum Section */}
            <div className="mt-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Course Curriculum</h2>
              <div className="space-y-2">
                {course.curriculum?.map((section, index) => (
                  <AccordionItem key={index} section={section} />
                ))}
              </div>
            </div>

            {/* Instructor Section */}
            <div className="mt-12">
              <h2 className="font-heading text-3xl font-bold mb-4">About the Instructor</h2>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?img=12" alt={course.instructor} className="w-24 h-24 rounded-full" />
                <div>
                  <h3 className="font-bold text-xl text-teal-500">{course.instructor}</h3>
                  <p className="text-neutral-dark">Web Developer, Teacher & Entrepreneur</p>
                </div>
              </div>
              <p className="text-neutral-dark mt-4">
                {course.instructor} is one of the most popular instructors on our platform, with over a decade of experience in web development. He is passionate about teaching complex topics in a simple, project-based way.
              </p>
            </div>
            
            {/* Student Reviews Section */}
            <div className="mt-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Student Feedback</h2>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded-full bg-neutral-dark text-white flex items-center justify-center font-bold text-lg">
                         {review.name.charAt(0)}
                       </div>
                       <div>
                          <h4 className="font-bold text-neutral-black">{review.name}</h4>
                          <div className="flex text-amber-400 mt-1">
                            {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                          </div>
                       </div>
                    </div>
                    <p className="text-neutral-dark mt-3">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};