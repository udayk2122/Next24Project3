import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { FaBullseye, FaEye, FaUsers, FaLinkedin, FaTwitter, FaHeart, FaLightbulb, FaBookOpen } from 'react-icons/fa';

export const AboutPage = () => {
  const teamMembers = [
    { name: 'Aarav Sharma', role: 'Founder & CEO', img: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Diya Mehta', role: 'Head of Content', img: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Rohan Joshi', role: 'Lead Instructor', img: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Saanvi Patel', role: 'Community Manager', img: 'https://i.pravatar.cc/150?img=4' },
  ];

  const values = [
    { icon: <FaBookOpen size={32} />, title: 'Accessibility', description: 'Making learning accessible to everyone, everywhere.' },
    { icon: <FaHeart size={32} />, title: 'Passion', description: 'We are driven by a passion for teaching and learning.' },
    { icon: <FaLightbulb size={32} />, title: 'Innovation', description: 'Constantly improving our platform and course offerings.' },
    { icon: <FaUsers size={32} />, title: 'Community', description: 'Fostering a supportive and collaborative learning environment.' },
  ];

  return (
    <main>
      {/* --- Hero Section --- */}
      <section 
        className="relative bg-neutral-black text-white py-24 lg:py-40 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Empowering Minds, Shaping Futures.
          </h1>
          <p className="text-lg md:text-xl text-neutral-light">
            We believe education is the key to unlocking human potential. Our mission is to provide high-quality, affordable, and accessible learning for everyone in India and beyond.
          </p>
        </div>
      </section>

      {/* --- Mission & Vision Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <FaBullseye className="text-primary text-5xl mx-auto md:mx-0 mb-4" />
            <h2 className="font-heading text-3xl font-bold text-neutral-black mb-4">Our Mission</h2>
            <p className="text-neutral-dark text-lg">
              To democratize education by providing a platform where anyone can learn real-world skills from industry experts, regardless of their background or location.
            </p>
          </div>
          <div className="text-center md:text-left">
            <FaEye className="text-primary text-5xl mx-auto md:mx-0 mb-4" />
            <h2 className="font-heading text-3xl font-bold text-neutral-black mb-4">Our Vision</h2>
            <p className="text-neutral-dark text-lg">
              To become the most trusted and comprehensive online learning ecosystem, fostering a global community of lifelong learners and passionate instructors.
            </p>
          </div>
        </div>
      </section>
      
      

      {/* --- Our Values Section --- */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-neutral-black mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <div key={value.title} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-2">{value.title}</h3>
                <p className="text-neutral-dark">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Meet the Team Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-neutral-black mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="flex flex-col items-center">
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mb-4 shadow-lg" />
                <h3 className="font-bold text-xl text-neutral-black">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <div className="flex space-x-3 mt-2 text-neutral-dark">
                  <a href="#" className="hover:text-primary"><FaTwitter /></a>
                  <a href="#" className="hover:text-primary"><FaLinkedin /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="bg-primary text-black text-center py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8">Start your learning journey today or share your expertise with the world.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses">
              <Button size="lg" className="bg-white text-primary hover:bg-neutral-light w-full">Explore Courses</Button>
            </Link>
            <Link to="/teach">
              <Button size="lg" variant="secondary" className="border-white text-white hover:bg-white/10 w-full">Become an Instructor</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};