import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams, Link } from 'react-router-dom';
import { allCourses } from '../data/mockCourses';
import { FaCheckCircle, FaRegCircle, FaPlayCircle, FaQuestionCircle, FaStickyNote } from 'react-icons/fa'; // Added more icons for tabs
import { Button } from '../components/common/Button';

export const LearningPage = () => {
  const { courseId } = useParams();
  const course = allCourses.find(c => c.id === parseInt(courseId));

  const [currentLectureIndex, setCurrentLectureIndex] = useState(0);
  // Using localStorage for persistent completed lectures (basic implementation)
  const [completedLectures, setCompletedLectures] = useState(() => {
    const savedCompleted = localStorage.getItem(`completedLectures-${courseId}`);
    return savedCompleted ? new Set(JSON.parse(savedCompleted)) : new Set();
  });

  // Save completed lectures to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`completedLectures-${courseId}`, JSON.stringify(Array.from(completedLectures)));
  }, [completedLectures, courseId]);

  // Reset currentLectureIndex and completedLectures when courseId changes
  useEffect(() => {
    setCurrentLectureIndex(0);
    const savedCompleted = localStorage.getItem(`completedLectures-${courseId}`);
    setCompletedLectures(savedCompleted ? new Set(JSON.parse(savedCompleted)) : new Set());
  }, [courseId]);


  const flattenedCurriculum = course?.curriculum?.flatMap(section => 
    section.lectures.map(lecture => ({ ...lecture, sectionTitle: section.title }))
  ) || [];

  const currentLecture = flattenedCurriculum[currentLectureIndex];
  const totalLectures = flattenedCurriculum.length;
  const progress = totalLectures > 0 ? (completedLectures.size / totalLectures) * 100 : 0;
  const videoUrl = currentLecture?.videoUrl || "https://www.youtube.com/watch?v=bMknfKXIFA8"; 
  const [activeTab, setActiveTab] = useState('overview');

  if (!course || flattenedCurriculum.length === 0) {
    return (
      <div className="text-center py-20 bg-neutral-light min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-heading text-4xl font-bold mb-4 text-neutral-black">Course Not Found or No Content</h1>
        <p className="text-neutral-dark mb-6">
          We couldn't find the course or its curriculum. Please ensure the course ID is valid and has curriculum data.
        </p>
        <Link to="/courses">
          <Button size="lg">Browse Other Courses</Button>
        </Link>
      </div>
    );
  }

  const handleLectureSelect = (index) => {
    setCurrentLectureIndex(index);
  };

  const handleMarkComplete = (flatIndex) => {
    setCompletedLectures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(flatIndex)) {
        newSet.delete(flatIndex);
      } else {
        newSet.add(flatIndex);
      }
      return newSet;
    });
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaPlayCircle className="inline-block mr-2" /> },
    { id: 'q&a', label: 'Q&A', icon: <FaQuestionCircle className="inline-block mr-2" /> },
    { id: 'notes', label: 'Notes', icon: <FaStickyNote className="inline-block mr-2" /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-neutral-black text-white">
      {/* Main Video Content */}
      <main className="flex-1 lg:w-3/4 flex flex-col bg-[#0F0F0F]">
        {/* Course Progress Bar */}
        <div className="w-full bg-gray-700 h-2 relative">
          <div 
            className="bg-primary h-full transition-all duration-500 ease-out absolute top-0 left-0 rounded-r-sm shadow-md" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="w-full aspect-video bg-black flex items-center justify-center relative">
          {/* Enhanced ReactPlayer Wrapper */}
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls={true}
            playing={true} // Auto-play current lecture
            stopOnUnmount={false}
            config={{ youtube: { playerVars: { showinfo: 1 } } }}
          />
        </div>

        <div className="p-6">
          <h1 className="font-heading text-4xl font-bold text-gray-50 mb-3">{course.title}</h1>
          {currentLecture && (
            <p className="mt-2 text-neutral-light text-xl font-medium">
              <span className="font-bold text-primary">{currentLecture.sectionTitle}:</span> {currentLecture.title}
            </p>
          )}

          {/* Tabs for content below video */}
          <div className="mt-8 bg-[#1C1D1F] rounded-lg shadow-inner">
            <div className="flex border-b border-gray-700">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`flex items-center justify-center flex-1 py-3 px-4 text-lg font-medium transition-all duration-200 
                              ${activeTab === tab.id 
                                ? 'text-primary border-b-2 border-primary bg-gray-800' 
                                : 'text-gray-400 hover:text-white hover:bg-gray-700'} 
                              rounded-t-lg`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
            <div className="p-6 text-neutral-light">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gray-100">Lecture Overview</h3>
                  <p className="text-gray-300 leading-relaxed">This lecture covers the fundamental concepts of setting up your development environment for <span className="text-primary font-semibold">{course.title.split(' ')[0]}</span>. You'll learn essential steps to kickstart your journey.</p>
                  <ul className="list-disc list-inside mt-6 ml-4 text-gray-300 space-y-2">
                    <li>Comprehensive guide to required software installation</li>
                    <li>Best practices for configuring your code editor for optimal workflow</li>
                    <li>Step-by-step process for running your first application and troubleshooting common issues</li>
                    <li>Key takeaways and resources for further learning</li>
                  </ul>
                </div>
              )}
              {activeTab === 'q&a' && (
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gray-100">Questions & Answers</h3>
                  <p className="text-gray-300 mb-6">No questions have been asked yet for this lecture. Be the first to start a discussion!</p>
                  <Button className="mt-4 bg-primary text-white hover:bg-blue-600 focus:ring-primary" size="sm">
                    <FaQuestionCircle className="mr-2" /> Ask a Question
                  </Button>
                </div>
              )}
              {activeTab === 'notes' && (
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gray-100">My Notes</h3>
                  <p className="text-gray-300 mb-4">You can jot down your thoughts and key points here. These notes are saved locally.</p>
                  <textarea 
                    className="w-full bg-gray-800 p-4 rounded-lg mt-4 text-white placeholder-gray-500 
                               focus:outline-none focus:ring-2 focus:ring-primary border border-gray-700" 
                    rows="7" 
                    placeholder="Start typing your notes for this lecture..."
                  ></textarea>
                  <Button className="mt-4 bg-primary text-white hover:bg-blue-600 focus:ring-primary" size="sm">
                    <FaStickyNote className="mr-2" /> Save Notes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Curriculum Sidebar */}
      <aside className="lg:w-1/4 bg-[#1C1D1F] text-white flex-shrink-0 border-l border-gray-700">
        <h2 className="font-heading text-xl font-bold p-5 border-b border-gray-700 bg-gray-800">
          <span className="text-primary">Course</span> Content
        </h2>
        <div className="overflow-y-auto h-[calc(100vh-80px)] custom-scrollbar">
          {course.curriculum?.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-2 last:mb-0">
              <h3 className="font-bold text-lg p-4 bg-gray-800 text-gray-200 border-b border-gray-700">{section.title}</h3>
              <ul className="divide-y divide-gray-700">
                {section.lectures.map((lecture, lectureIdx) => {
                  const flatIndex = course.curriculum.slice(0, sectionIdx).flatMap(s => s.lectures).length + lectureIdx;
                  const isCompleted = completedLectures.has(flatIndex);
                  const isActive = currentLectureIndex === flatIndex;

                  return (
                    <li
                      key={lecture.id}
                      className={`flex items-center gap-3 p-4 pr-2 transition-all duration-200 cursor-pointer 
                                  ${isActive 
                                    ? 'bg-primary/20 text-primary font-bold shadow-inner' 
                                    : 'hover:bg-gray-800 text-gray-200 hover:text-white'}
                                  `}
                      onClick={() => handleLectureSelect(flatIndex)}
                    >
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleMarkComplete(flatIndex); }} 
                        className="flex-shrink-0 text-lg transition-colors duration-150"
                        aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                      >
                        {isCompleted ? <FaCheckCircle className="text-primary" /> : <FaRegCircle className="text-gray-500" />}
                      </button>
                      <span className={`flex-grow ${isActive ? 'font-bold' : ''}`}>{lecture.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};