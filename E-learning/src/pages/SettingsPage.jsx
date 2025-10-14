import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { DashboardSidebar } from '../components/common/layout/DashboardSidebar';

// A simple, self-contained toggle switch component
const ToggleSwitch = ({ label, enabled, setEnabled }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-neutral-dark">{label}</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? 'bg-black' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    promotions: false,
    updates: true,
  });

  return (
    <div className="flex min-h-screen bg-neutral-light">
      <DashboardSidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-neutral-black mb-8">Settings</h1>
          
          {/* Account Settings */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-neutral-black mb-6 border-b pb-4">Account</h2>
            <form className="space-y-6">
              <Input label="Current Password" type="password" placeholder="••••••••" />
              <Input label="New Password" type="password" placeholder="••••••••" />
              <Input label="Confirm New Password" type="password" placeholder="••••••••" />
              <div className="text-right">
                <Button type="submit">Change Password</Button>
              </div>
            </form>
          </div>
          
          {/* Notification Settings */}
          <div className="bg-white p-8 rounded-lg shadow-md">
             <h2 className="text-2xl font-bold text-neutral-black mb-6 border-b pb-4">Notifications</h2>
             <div className="space-y-4">
              <ToggleSwitch 
                label="Email notifications for course activity" 
                enabled={notifications.email}
                setEnabled={(value) => setNotifications(p => ({...p, email: value}))}
              />
              <ToggleSwitch 
                label="Promotional offers and newsletters" 
                enabled={notifications.promotions}
                setEnabled={(value) => setNotifications(p => ({...p, promotions: value}))}
              />
               <ToggleSwitch 
                label="Product updates and announcements" 
                enabled={notifications.updates}
                setEnabled={(value) => setNotifications(p => ({...p, updates: value}))}
              />
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};