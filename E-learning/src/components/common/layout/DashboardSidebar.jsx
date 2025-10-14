import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { FaTachometerAlt, FaBook, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

export const DashboardSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };

  // Base classes for all links
  const linkClasses = "flex items-center px-4 py-3 text-gray-300 hover:bg-primary/20 hover:text-white transition-colors rounded-lg";
  
  // Classes to apply only when the link is active
  const activeLinkClasses = "bg-primary/20 text-black font-bold";

  return (
    <aside className="bg-black text-black w-64 p-4 flex flex-col flex-shrink-0">
      
      {/* Main Navigation Links */}
      <div className="flex-grow space-y-2">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
        >
          <FaTachometerAlt className="mr-3" /> Dashboard
        </NavLink>
        <NavLink 
          to="/my-courses" 
          className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
        >
          <FaBook className="mr-3" /> My Courses
        </NavLink>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
        >
          <FaUserCircle className="mr-3" /> Profile
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
        >
          <FaCog className="mr-3" /> Settings
        </NavLink>
      </div>

      {/* Logout Button at the bottom */}
      <div>
        <button onClick={handleLogout} className={`${linkClasses} w-full`}>
          <FaSignOutAlt className="mr-3" /> Log Out
        </button>
      </div>
    </aside>
  );
};