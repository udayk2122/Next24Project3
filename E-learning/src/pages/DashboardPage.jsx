import { Link } from 'react-router-dom';
import { featuredCourses } from '../data/mockCourses';
import { Button } from '../components/common/Button';
import { DashboardSidebar } from '../components/common/layout/DashboardSidebar';
import { FaBookOpen, FaCheckCircle, FaAward } from 'react-icons/fa';

// A new, specific card for enrolled courses
const EnrolledCourseCard = ({ course, progress }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-heading text-lg font-bold text-neutral-black">{course.title}</h3>
        <p className="text-sm text-neutral-dark mt-1">By {course.instructor}</p>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-neutral-light rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-neutral-dark mt-1">{progress}% Complete</p>
      </div>
      <div className="p-4 pt-0">
        <Link to={`/learn/${course.id}`}>
          <Button className="w-full">
            {progress > 0 ? 'Continue Learning' : 'Start Course'}
          </Button>
        </Link>
      </div>
    </div>
  );
};


export const DashboardPage = () => {
  // In a real app, you'd fetch the user's enrolled courses and their progress
  const enrolledCourses = featuredCourses.slice(0, 3); 
  const courseProgress = { 1: 60, 2: 25, 3: 0 }; // Mock progress for courses by ID

  return (
    <div className="flex min-h-screen bg-neutral-light">
      <DashboardSidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-heading text-4xl font-bold text-neutral-black">Welcome Back, User!</h1>
            <p className="text-neutral-dark mt-1">Let's continue your learning journey today.</p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow flex items-center">
              <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                <FaBookOpen size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold text-neutral-black">3</p>
                <p className="text-sm text-neutral-dark">Courses in Progress</p>
              </div>
            </div>
             <div className="bg-white p-6 rounded-lg shadow flex items-center">
              <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                <FaCheckCircle size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold text-neutral-black">1</p>
                <p className="text-sm text-neutral-dark">Completed Courses</p>
              </div>
            </div>
             <div className="bg-white p-6 rounded-lg shadow flex items-center">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full mr-4">
                <FaAward size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold text-neutral-black">1</p>
                <p className="text-sm text-neutral-dark">Certificates Earned</p>
              </div>
            </div>
          </div>
          
          {/* Continue Learning Section */}
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6 text-neutral-black">Continue Learning</h2>
            {enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {enrolledCourses.map(course => (
                  <EnrolledCourseCard 
                    key={course.id} 
                    course={course} 
                    progress={courseProgress[course.id] || 0}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <p className="text-neutral-dark">You are not enrolled in any courses yet.</p>
                <Link to="/courses" className="mt-4 inline-block">
                  <Button>Explore Courses</Button>
                </Link>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};