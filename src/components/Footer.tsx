
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ReSell</h3>
            <p className="text-gray-600 max-w-xs">
              Your trusted university marketplace for buying and selling second-hand stationery, books, and academic materials.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/price-prediction" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Price Prediction
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@resell.edu</li>
              <li>Phone: +1 (555) 234-5678</li>
              <li>Address: University Campus Mall, Box #247</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} ReSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
