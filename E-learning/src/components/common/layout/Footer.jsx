import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-heading text-3xl font-bold text-white">
              E-Learn
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering minds by making education accessible to everyone, everywhere.
            </p>
          </div>

          {/* Column 2: Courses */}
          <div>
            <h4 className="font-bold text-white tracking-wider uppercase mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-primary transition-colors">Development</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Design</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Business</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Marketing</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-white tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/teach" className="hover:text-primary transition-colors">Teach with Us</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="font-bold text-white tracking-wider uppercase mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {currentYear} E-Learn. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-2xl">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};