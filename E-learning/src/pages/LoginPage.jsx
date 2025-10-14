import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-100 p-4"> {/* Gradient Background */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden"> {/* Deeper Shadow */}
        
        {/* Left Column: Branding & Image */}
        <div className="hidden md:flex md:w-1/2 p-12 flex-col justify-center items-center bg-gradient-to-br from-teal-500 to-blue-600 text-white rounded-l-xl"> {/* Gradient */}
          <h1 className="font-heading text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-center text-lg text-teal-100"> {/* Lighter text for contrast */}
            Log in to continue your learning journey and access your personalized dashboard.
          </p>
          <img 
            src="./src/assets/e-learning.jpg" // Updated image for better fit
            alt="Online Learning" 
            className="w-full max-w-xs mt-8"
          />
        </div>

        {/* Right Column: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="font-heading text-3xl font-bold text-neutral-black text-center mb-4">Log In to E-Learn</h2>
          
          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2 border-gray-300 py-3"> {/* Added vertical padding */}
              <FaGoogle size={20} className="text-red-500" /> {/* Explicit icon size */}
              Continue with Google
            </Button>
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2 border-gray-300 py-3"> {/* Added vertical padding */}
              <FaFacebook size={20} className="text-blue-600" /> {/* Explicit icon size */}
              Continue with Facebook
            </Button>
          </div>

          {/* Separator */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300"/>
            <span className="px-3 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-t border-gray-300"/>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <Input label="Email Address" type="email" placeholder="you@example.com" />
            <div>
              <Input label="Password" type="password" placeholder="••••••••" />
              <Link to="/forgot-password" className="text-xs text-teal-500 hover:underline text-right block mt-1">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full text-lg bg-teal-500 hover:bg-teal-600" size="lg">Log In</Button> {/* Direct color */}
          </form>

          <p className="text-center text-sm text-neutral-dark mt-6">
            Don't have an account? <Link to="/signup" className="text-teal-500 font-bold hover:underline">Sign Up</Link> {/* Direct color */}
          </p>
        </div>
      </div>
    </div>
  );
};