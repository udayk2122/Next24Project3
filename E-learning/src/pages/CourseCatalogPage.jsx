import React, { useState, useMemo } from 'react';
import { CourseCard } from '../components/common/CourseCard';
import { allCourses } from '../data/mockCourses';
import { FaSearch } from 'react-icons/fa';
import { Button } from '../components/common/Button';

// A simple pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentPage === page
              ? 'bg-primary text-white font-bold'
              : 'bg-white text-neutral-dark hover:bg-neutral-light'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};


export const CourseCatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  const categories = ['Development', 'Design', 'Business', 'Marketing']; // Example categories

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredAndSortedCourses = useMemo(() => {
    return allCourses
      .filter(course => {
        // Search filter
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        // Category filter
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => course.title.toLowerCase().includes(cat.toLowerCase())); // Simple title-based category check
        // Rating filter
        const matchesRating = course.rating >= selectedRating;
        return matchesSearch && matchesCategory && matchesRating;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }
        // Default to 'popularity' (by number of reviews)
        return b.reviews - a.reviews;
      });
  }, [searchTerm, selectedCategories, selectedRating, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedCourses.length / coursesPerPage);
  const paginatedCourses = filteredAndSortedCourses.slice((currentPage - 1) * coursesPerPage, currentPage * coursesPerPage);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedRating(0);
    setSortBy('popularity');
    setCurrentPage(1);
  };
  
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-black">Explore Our Courses</h1>
          <p className="text-neutral-dark mt-2 text-lg">Find the perfect course to kickstart your career.</p>
          <div className="mt-6 max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-6 rounded-full border border-neutral-medium focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FaSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-dark/60" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="md:w-1/4 lg:w-1/5">
            <div className="sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl">Filters</h2>
                <button onClick={clearFilters} className="text-sm text-primary hover:underline">Clear All</button>
              </div>
              <div className="space-y-6 bg-neutral-light p-6 rounded-lg">
                <div>
                  <h3 className="font-bold mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="ml-3 text-neutral-dark">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Rating</h3>
                   <div className="space-y-2">
                    {[4.5, 4.0, 3.5].map(rating => (
                       <label key={rating} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={selectedRating === rating}
                          onChange={() => setSelectedRating(rating)}
                          className="h-4 w-4 text-primary focus:ring-primary"
                        />
                        <span className="ml-3 text-neutral-dark">{rating} & up</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Course Grid & Sort */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-neutral-dark">{filteredAndSortedCourses.length} results found</p>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border-neutral-medium focus:ring-primary focus:border-primary"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
            
            {paginatedCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-neutral-light rounded-lg">
                <h3 className="font-heading text-2xl font-bold">No Courses Found</h3>
                <p className="text-neutral-dark mt-2">Try adjusting your search or filter settings.</p>
              </div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </main>
        </div>
      </div>
    </div>
  );
};