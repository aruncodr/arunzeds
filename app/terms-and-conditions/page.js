import React from "react";
export async function generateMetadata() {
    return {
      title: "Terms and Conditions | ArunZeds",
      description: "Terms and Conditions of ArunZeds - Your trusted source for automobile specs and reviews.",
    }
  }
const TermsAndConditions = () => {
  return (
    <div className="pt-20 flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
        <p className="text-sm text-center text-gray-600 mb-4">Last Updated: March 2025</p>
        
        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p className="mt-2">Welcome to Arun Zed Automobiles ("Website", "we", "our"). By accessing our website (<a href="https://www.arunzeds.com/" className="text-blue-500">https://www.arunzeds.com/</a>), you agree to comply with these Terms and Conditions.</p>
        
        <h2 className="text-xl font-semibold mt-6">2. Intellectual Property</h2>
        <p className="mt-2">All content, including text, images, logos, and data, is the property of Arun Zed Automobiles unless otherwise stated. Unauthorized use of content is strictly prohibited.</p>
        
        <h2 className="text-xl font-semibold mt-6">3. User Responsibilities</h2>
        <p className="mt-2">Users must not misuse our website, engage in unlawful activities, or violate any applicable laws.</p>
        
        <h2 className="text-xl font-semibold mt-6">4. Advertisements and Affiliates</h2>
        <p className="mt-2">We display ads and use affiliate links for monetization. Clicking on these links may generate a commission at no extra cost to you.</p>
        
        <h2 className="text-xl font-semibold mt-6">5. Third-Party Links</h2>
        <p className="mt-2">Our website may contain links to third-party sites. We are not responsible for their content or policies.</p>
        
        <h2 className="text-xl font-semibold mt-6">6. Limitation of Liability</h2>
        <p className="mt-2">We do not guarantee accuracy or availability of content. Use our site at your own risk.</p>
        
        <h2 className="text-xl font-semibold mt-6">7. Changes to Terms</h2>
        <p className="mt-2">We reserve the right to modify these Terms at any time. Users will be notified of significant changes.</p>
        
        <h2 className="text-xl font-semibold mt-6">8. Contact Information</h2>
        <p className="mt-2">For any queries, contact us at <a href="mailto:azspecification@gmail.com" className="text-blue-500">azspecification@gmail.com</a>.</p>
        
        <p className="mt-6 text-center text-gray-600">By using our website, you acknowledge that you have read and agreed to these Terms and Conditions.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;