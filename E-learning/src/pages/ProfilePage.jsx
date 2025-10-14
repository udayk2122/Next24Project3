import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { DashboardSidebar } from '../components/common/layout/DashboardSidebar';

export const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: 'Uday Kumar', // Placeholder name
    email: 'uday.k@example.com', // Placeholder email
    headline: 'Aspiring Web Developer',
    bio: 'I am passionate about learning new technologies and building amazing web applications. Currently focused on mastering the MERN stack.',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Profile saved:', profile);
    alert('Profile updated successfully!');
  };

  return (
    <div className="flex min-h-screen bg-neutral-light">
      <DashboardSidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-neutral-black mb-8">My Profile</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6 mb-6">
              <img 
                src="https://i.pravatar.cc/150?u=uday" 
                alt="Profile Avatar"
                className="w-24 h-24 rounded-full border-4 border-primary"
              />
              <div>
                <h2 className="text-2xl font-bold text-neutral-black">{profile.fullName}</h2>
                <p className="text-neutral-dark">{profile.email}</p>
                <Button variant="secondary" className="mt-2 text-sm">Change Photo</Button>
              </div>
            </div>

            {/* Profile Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input 
                label="Full Name" 
                name="fullName"
                value={profile.fullName}
                onChange={handleInputChange}
              />
              <Input 
                label="Email Address" 
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
              />
              <Input 
                label="Headline"
                name="headline"
                placeholder="e.g., Full Stack Developer"
                value={profile.headline}
                onChange={handleInputChange}
              />
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1">Bio</label>
                <textarea
                  name="bio"
                  rows="4"
                  className="w-full px-4 py-2 border border-neutral-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={profile.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us a little about yourself..."
                ></textarea>
              </div>
              
              <div className="text-right">
                <Button type="submit" size="lg">Save Changes</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};