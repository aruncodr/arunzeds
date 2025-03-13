import React from "react";
export async function generateMetadata() {
    return {
      title: "Disclaimer | ArunZeds",
      description: "Disclaimer of ArunZeds - Your trusted source for automobile specs and reviews.",
    }
  }
const Disclaimer = () => {
  return (
    <div className="pt-20 flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">Disclaimer</h1>
        <p className="text-sm text-center text-gray-600 mb-4">Last Updated: March 2025</p>
        
        <h2 className="text-xl font-semibold mt-6">1. General Information</h2>
        <p className="mt-2">The information provided by Arun Zed Automobiles we on <a href="https://www.arunzeds.com/" className="text-blue-500">https://www.arunzeds.com/</a> is for general informational purposes only. All content is provided in good faith, but we make no representation or warranty of any kind, express or implied, regarding the accuracy, reliability, or completeness of any information on the site.</p>
        
        <h2 className="text-xl font-semibold mt-6">2. Professional Disclaimer</h2>
        <p className="mt-2">The website may contain automobile reviews, technical specifications, and maintenance tips. However, this should not be considered professional advice. Always consult a qualified professional before making any automotive decisions.</p>
        
        <h2 className="text-xl font-semibold mt-6">3. Affiliate Disclaimer</h2>
        <p className="mt-2">Our website may contain affiliate links, which means we may earn a commission if you purchase products through these links. This comes at no additional cost to you and helps support our content.</p>
        
        <h2 className="text-xl font-semibold mt-6">4. Advertisement Disclaimer</h2>
        <p className="mt-2">We display third-party advertisements on our website. These ads do not imply an endorsement or recommendation by us. We are not responsible for the content or policies of the advertisers.</p>
        
        <h2 className="text-xl font-semibold mt-6">5. External Links Disclaimer</h2>
        <p className="mt-2">Our website may contain links to external sites that are not owned or controlled by us. We do not guarantee the accuracy, relevance, or security of any external websites.</p>
        
        <h2 className="text-xl font-semibold mt-6">6. Limitation of Liability</h2>
        <p className="mt-2">Under no circumstances shall we be held liable for any loss or damage incurred due to the use of our website or reliance on any information provided.</p>
        
        <h2 className="text-xl font-semibold mt-6">7. Changes to This Disclaimer</h2>
        <p className="mt-2">We reserve the right to modify this Disclaimer at any time. Any updates will be posted on this page.</p>
        
        <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
        <p className="mt-2">If you have any questions about this Disclaimer, you can contact us at <a href="mailto:azspecification@gmail.com" className="text-blue-500">azspecification@gmail.com</a>.</p>
        
        <p className="mt-6 text-center text-gray-600">By using this website, you agree to this Disclaimer.</p>
      </div>
    </div>
  );
};

export default Disclaimer;