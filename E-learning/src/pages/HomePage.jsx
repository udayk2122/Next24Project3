import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { CourseCard } from '../components/common/CourseCard';
import { featuredCourses } from '../data/mockCourses';
import { FaCode, FaPalette, FaBullhorn, FaBriefcase, FaCamera, FaMusic, FaStar } from 'react-icons/fa';

// Helper to map category names to icons
const categoryIcons = {
  Development: <FaCode size={32} />,
  Design: <FaPalette size={32} />,
  Marketing: <FaBullhorn size={32} />,
  Business: <FaBriefcase size={32} />,
  Photography: <FaCamera size={32} />,
  Music: <FaMusic size={32} />,
};

export const HomePage = () => {
  const categories = ['Development', 'Design', 'Marketing', 'Business', 'Photography', 'Music'];
  
  const testimonials = [
    { name: 'Rahul Kumar', course: 'React Developer', quote: 'This platform transformed my career. The hands-on projects in the React course were exactly what I needed to land my dream job.', avatar: 'https://i.pravatar.cc/100?img=5' },
    { name: 'Anjali Desai', course: 'UX Design Essentials', quote: 'I always wanted to get into UX design, and the Figma course was the perfect start. The instructor was engaging, and the community was incredibly supportive.', avatar: 'https://i.pravatar.cc/100?img=6' },
  ];

  return (
    <main>
      {/* --- Hero Section --- */}
      <section className="bg-blue-200">
         <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-neutral-black mb-4 leading-tight">
              Learn in-demand skills, your way.
            </h1>
            <p className="text-lg text-neutral-dark mb-8">
              Master new skills with our expert-led online courses. Join thousands of learners and unlock your true potential.
            </p>
            <Link to="/courses">
              <Button size="lg" className="text-lg">Explore Courses</Button>
            </Link>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
              alt="People learning on laptops" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* --- Trusted By Section --- */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase">Trusted by leading companies in India</h3>
          {/* CHANGED: Replaced placeholder company names */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-4 text-gray-500 font-semibold">
            <span className="text-xl">Infosys</span>
            <span className="text-xl">TCS</span>
            <span className="text-xl">Swiggy</span>
            <span className="text-xl">Zomato</span>
            <span className="text-xl">Paytm</span>
          </div>
        </div>
      </section>

      {/* --- Featured Courses Section --- */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="secondary">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* --- Categories Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="font-heading text-4xl font-bold text-center mb-12">Browse by Category</h2>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map(category => (
              // CHANGED: Replaced 'hover:text-primary' and 'text-primary' with direct color classes
              <Link to="/courses" key={category} className="bg-white p-6 rounded-lg border border-neutral-medium text-center font-bold text-neutral-dark hover:shadow-lg hover:-translate-y-1 hover:text-teal-500 transition-all duration-300 flex flex-col items-center justify-center gap-4">
                <span className="text-teal-500">{categoryIcons[category]}</span>
                <span>{category}</span>
              </Link>
            ))}
           </div>
        </div>
      </section>
      
       {/* --- Testimonial Section --- */}
       <section className="py-20 bg-neutral-light">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-left">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-neutral-dark italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
                  <div>
                    <h4 className="font-bold text-neutral-black">{testimonial.name}</h4>
                    {/* CHANGED: Replaced 'text-primary' with direct color class */}
                    <p className="text-sm text-teal-500">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       </section>
    </main>
  );
};