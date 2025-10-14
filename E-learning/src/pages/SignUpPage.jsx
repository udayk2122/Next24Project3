import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc'; // Google Icon
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi'; // Input Icons

// An illustrative image for the left panel. 
// You can download one from sites like undraw.co or use your own branding.
// import signUpIllustration from '../assets/signup-illustration.svg'; 

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();
    // In a real app, you'd create a new user here
    login();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Panel: Branding & Illustration */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-tr from-blue-500 to-primary p-12 text-white relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-heading text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-lg text-blue-100 mb-8">
            Unlock exclusive features and content. Your journey starts here.
          </p>
          {/* <img src={signUpIllustration} alt="Sign Up Illustration" className="w-full max-w-sm mx-auto" /> */}
        </motion.div>
      </div>

      {/* Right Panel: Sign-Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          {/* You can add your logo here */}
          {/* <img src="/logo.png" alt="Logo" className="w-24 mx-auto mb-6" /> */}
          <h1 className="font-heading text-3xl font-bold text-center mb-2 text-gray-800">Create Your Account</h1>
          <p className="text-center text-sm text-gray-500 mb-6">Let's get you started!</p>

          {/* Social Login Button */}
          <Button variant="outline" className="w-full mb-4 flex items-center justify-center gap-2">
            <FcGoogle size={22} />
            Sign Up with Google
          </Button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-xs font-semibold text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <Input 
              label="Full Name" 
              type="text" 
              placeholder="John Doe" 
              icon={<HiOutlineUser className="text-gray-400" />} 
            />
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="you@example.com" 
              icon={<HiOutlineMail className="text-gray-400" />} 
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••" 
              icon={<HiOutlineLockClosed className="text-gray-400" />} 
            />
            <Button type="submit" className="w-full" size="lg">Create Account</Button>
          </form>

          <p className="text-center text-sm text-neutral-dark mt-6">
            Already have an account? <Link to="/login" className="text-primary hover:underline font-semibold">Log In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};