import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { FaChalkboardTeacher, FaGlobe, FaMoneyBillWave, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// A simple, self-contained Accordion Item for the FAQ section
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-neutral-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp className="text-[#4A90E2]" /> : <FaChevronDown className="text-neutral-dark" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-neutral-dark">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export const TeachPage = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState(500);
  const pricePerCourse = 49.99;
  const platformCut = 0.3;
  const potentialEarning = (students * pricePerCourse * (1 - platformCut)).toFixed(2);

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const faqData = [
    { question: "How much does it cost to become an instructor?", answer: "It's completely free to create and host a course on our platform. We only make money when you make money." },
    { question: "What do I need to get started?", answer: "You need a topic you're passionate about, a computer with a microphone, and screen recording software. We provide resources to help you with the rest." },
    { question: "How much can I earn?", answer: "Your earning potential is unlimited! It depends on your course topic, quality, and marketing efforts. Use our earning calculator below to estimate your potential." },
    { question: "Do I need to be an expert?", answer: "You don't need a formal degree, but you should have real-world experience and a deep passion for the subject you want to teach." },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#4A90E2] text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Share Your Passion. Change Lives.
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Become an instructor and join a global community dedicated to learning. Create the course you've always wanted to.
            </p>
            <Button size="lg" variant="secondary" className="bg-yellow-200 border-0 text-[#4A90E2] " onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
              alt="Person teaching online" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Reasons to Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-neutral-black mb-12">Why Teach on E-Learn?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-[#4A90E2] p-6 rounded-full mb-4">
                <FaChalkboardTeacher size={40} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Teach Your Way</h3>
              <p className="text-neutral-dark">Publish the course you want, in the way you want, and always have control of your own content.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-[#4A90E2] p-6 rounded-full mb-4">
                <FaGlobe size={40} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Reach a Global Audience</h3>
              <p className="text-neutral-dark">Teach students from all over the world and build your personal brand.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-[#4A90E2] p-6 rounded-full mb-4">
                <FaMoneyBillWave size={40} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Get Rewarded</h3>
              <p className="text-neutral-dark">Earn revenue from every paid enrollment. Our platform promotes your course for you.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Earning Potential Calculator Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-neutral-black mb-4">Your Earning Potential</h2>
          <p className="text-neutral-dark text-lg mb-8">
            Based on a course price of ${pricePerCourse}, see what you could earn per month.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between font-bold text-xl mb-4">
              <span>Monthly Students</span>
              <span className="text-[#4A90E2]">{students}</span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="5000" 
              step="50"
              value={students}
              onChange={(e) => setStudents(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4A90E2]"
            />
            <div className="mt-8 text-center">
              <p className="text-neutral-dark text-lg">Potential Monthly Earnings</p>
              <p className="font-heading text-5xl font-bold text-neutral-black mt-2">${potentialEarning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-neutral-black mb-8 text-center">Frequently Asked Questions</h2>
          <div>
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#4A90E2] text-white text-center py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-8">Ready to Begin?</h2>
          <Button size="lg" variant="secondary" className="bg-white text-[#4A90E2] hover:bg-gray-100 text-xl" onClick={handleGetStarted}>
            Get Started Today
          </Button>
        </div>
      </section>
    </main>
  );
};