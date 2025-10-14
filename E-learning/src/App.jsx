import { Routes, Route } from 'react-router-dom';

// Layout & Utility Components
import { Navbar } from './components/common/layout/Navbar';
import { ProtectedRoute } from './components/common/utils/ProtectedRoute';

// Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { Footer } from './components/common/layout/Footer';
import { CourseCatalogPage } from './pages/CourseCatalogPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { DashboardPage } from './pages/DashboardPage';
import { TeachPage } from './pages/TeachPage';
import { WishlistPage } from './pages/WishlistPage';
import { CartPage } from './pages/CartPage';
import { LearningPage } from './pages/LearningPage';
import { ProfilePage } from './pages/ProfilePage';   // Import ProfilePage
import { SettingsPage } from './pages/SettingsPage'; // Import SettingsPage

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/courses" element={<CourseCatalogPage />} />
        {/* ... other public routes ... */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/teach" element={<TeachPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/courses/:courseId" element={<ProtectedRoute><CourseDetailPage /></ProtectedRoute>} />
        <Route path="/my-courses" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} /> {/* Added for sidebar */}
        <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
        <Route path="/learn/:courseId" element={<ProtectedRoute><LearningPage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
      </Routes>
       <Footer />
    </div>
  );
}

export default App;