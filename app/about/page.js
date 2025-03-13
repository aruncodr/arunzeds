import React from "react";
export async function generateMetadata() {
    return {
      title: "About Us | ArunZeds",
      description: "Learn more about ArunZeds, your go-to source for the latest automobile specifications, reviews, and insights.",
    }
  }
const About = () => {
  return (
    <div className="pt-20 flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">About Arun Zed Automobiles</h1>
        <p className="text-sm text-center text-gray-600 mb-4">Last Updated: March 2025</p>
        
        <h2 className="text-xl font-semibold mt-6">Who We Are</h2>
        <p className="mt-2">Welcome to <strong>Arun Zed Automobiles</strong>, your ultimate destination for in-depth automobile reviews, technical specifications, industry news, and expert insights. Our mission is to provide reliable and engaging content for automobile enthusiasts, buyers, and industry professionals.</p>
        
        <h2 className="text-xl font-semibold mt-6">What We Offer</h2>
        <p className="mt-2">At <a href="https://www.arunzeds.com/" className="text-blue-500">https://www.arunzeds.com/</a>, we cover:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Comprehensive car and bike reviews</li>
          <li>Detailed technical specifications</li>
          <li>Latest automobile industry news</li>
          <li>Maintenance tips and buying guides</li>
          <li>Exclusive insights on upcoming vehicles</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Our Commitment</h2>
        <p className="mt-2">We strive to offer accurate, unbiased, and up-to-date information. Whether you&apos;re looking for a new car, motorcycle, or industry trends, we aim to be your go-to source for all things automobiles.</p>
        
        <h2 className="text-xl font-semibold mt-6">Monetization & Affiliate Disclosure</h2>
        <p className="mt-2">To support our platform, we use advertisements and affiliate marketing. Some of the links on our site may be affiliate links, meaning we may earn a small commission at no extra cost to you. We only recommend products and services that align with our values and audience interests.</p>
        
        <h2 className="text-xl font-semibold mt-6">Why Trust Us?</h2>
        <p className="mt-2">Our team consists of automobile experts, researchers, and passionate enthusiasts dedicated to delivering high-quality content. We prioritize transparency, integrity, and in-depth research in everything we publish.</p>
        
        <h2 className="text-xl font-semibold mt-6">Connect With Us</h2>
        <p className="mt-2">Stay updated with the latest in the automobile world:</p>
        <ul className="list-disc list-inside mt-2">
          <li><a href="https://www.instagram.com/mother_motor" className="text-blue-500">Instagram</a></li>
          <li><a href="https://pin.it/3IFlg6o0T" className="text-blue-500">Pinterest</a></li>
          <li><a href="https://linkedin.com/in/arunzeds" className="text-blue-500">LinkedIn</a></li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
        <p className="mt-2">For inquiries, collaborations, or feedback, reach out to us at <a href="mailto:azspecification@gmail.com" className="text-blue-500">azspecification@gmail.com</a>.</p>
        
        <p className="mt-6 text-center text-gray-600">Thank you for being a part of Arun Zed Automobiles. We look forward to fueling your passion for automobiles!</p>
      </div>
    </div>
  );
};

export default About;