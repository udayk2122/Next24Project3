import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

export const CourseCard = ({ course }) => {
  return (
    // Wrap with Link, pointing to the course detail page
    <Link to={`/courses/${course.id}`}> 
      <div className="bg-gradient-to-br from-yellow-500 to-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
        <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover" />
        <div className="p-4 flex flex-col">
          <h3 className="font-heading text-lg font-bold text-neutral-black">{course.title}</h3>
          <p className="text-sm text-neutral-dark mt-1">By {course.instructor}</p>
          <div className="flex items-center mt-2">
            <span className="text-amber-500 font-bold mr-1">{course.rating}</span>
            <FaStar className="text-amber-400" />
            <span className="text-xs text-neutral-dark ml-2">({course.reviews} reviews)</span>
          </div>
          <p className="font-heading text-xl font-bold text-neutral-black mt-4">${course.price}</p>
        </div>
      </div>
    </Link>
  );
};