import React from "react";
export async function generateMetadata() {
    return {
      title: "Privacy Policy | ArunZeds",
      description: "Privacy Policy of ArunZeds - Your trusted source for automobile specs and reviews.",
    }
  }
const PrivacyPolicy = () => {
  return (
    <div className="pt-20 flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-sm text-center text-gray-600 mb-4">Last Updated: March 2025</p>
        
        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p className="mt-2">Welcome to Arun Zed Automobiles ("Website", "we", "our"). This Privacy Policy explains how we collect, use, and protect your personal data when you visit <a href="https://www.arunzeds.com/" className="text-blue-500">https://www.arunzeds.com/</a>.</p>
        
        <h2 className="text-xl font-semibold mt-6">2. Information We Collect</h2>
        <p className="mt-2">We may collect personal data such as your name, email address, IP address, and browsing behavior through cookies and analytics tools.</p>
        
        <h2 className="text-xl font-semibold mt-6">3. How We Use Your Information</h2>
        <p className="mt-2">We use the collected data for website improvements, ad personalization, affiliate marketing, and analytics purposes.</p>
        
        <h2 className="text-xl font-semibold mt-6">4. Cookies and Tracking Technologies</h2>
        <p className="mt-2">Our website uses cookies to enhance user experience and provide targeted ads. You can manage cookie settings in your browser.</p>
        
        <h2 className="text-xl font-semibold mt-6">5. Third-Party Services</h2>
        <p className="mt-2">We may share data with third-party services like Google AdSense, affiliate programs, and analytics providers.</p>
        
        <h2 className="text-xl font-semibold mt-6">6. Data Protection</h2>
        <p className="mt-2">We implement security measures to safeguard your personal information against unauthorized access or misuse.</p>
        
        <h2 className="text-xl font-semibold mt-6">7. Your Rights</h2>
        <p className="mt-2">You have the right to access, update, or delete your personal data. Contact us for any data-related requests.</p>
        
        <h2 className="text-xl font-semibold mt-6">8. Changes to Privacy Policy</h2>
        <p className="mt-2">We reserve the right to update this policy at any time. Changes will be posted on this page.</p>
        
        <h2 className="text-xl font-semibold mt-6">9. Contact Information</h2>
        <p className="mt-2">For privacy concerns, contact us at <a href="mailto:azspecification@gmail.com" className="text-blue-500">azspecification@gmail.com</a>.</p>
        
        <p className="mt-6 text-center text-gray-600">By using our website, you consent to this Privacy Policy.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
