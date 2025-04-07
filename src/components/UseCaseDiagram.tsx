
import React from "react";

const UseCaseDiagram = () => {
  return (
    <div className="bg-white p-8 max-w-5xl mx-auto my-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-8">ReSell - Use Case Diagram</h2>
      <div className="relative bg-gray-100 p-4 rounded-lg border border-gray-300" style={{ height: "700px" }}>
        {/* System boundary */}
        <div className="absolute top-10 left-56 w-[500px] h-[650px] border-2 border-gray-400 rounded-lg bg-gray-50 flex flex-col items-center">
          <div className="bg-gray-200 px-4 py-1 rounded-t-lg border-b-2 border-gray-400 w-full text-center">
            <span className="font-semibold">ReSell System</span>
          </div>
          
          {/* Use Cases */}
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-20 left-[150px] text-sm text-center">
            User Registration & Authentication
          </div>
          
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-80 left-[150px] text-sm text-center">
            Product Listing Management
          </div>
          
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-140 left-[150px] text-sm text-center">
            Search & Filter Products
          </div>
          
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-200 left-[150px] text-sm text-center">
            Order Management
          </div>
          
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-260 left-[150px] text-sm text-center">
            Payment Processing
          </div>
          
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-320 left-[150px] text-sm text-center">
            Review & Rating System
          </div>
          
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-380 left-[150px] text-sm text-center">
            Profile Management
          </div>
          
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-440 left-[150px] text-sm text-center">
            AI Price Prediction
          </div>
          
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-500 left-[150px] text-sm text-center">
            Fraud Detection
          </div>
          
          <div className="oval bg-blue-100 border border-blue-400 rounded-full px-6 py-3 absolute top-560 left-[150px] text-sm text-center">
            Dispute Resolution
          </div>
        </div>
        
        {/* Actors */}
        {/* Student Buyer */}
        <div className="absolute top-160 left-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 mb-1 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-sm font-medium">Student (Buyer)</span>
        </div>
        
        {/* Student Seller */}
        <div className="absolute top-350 left-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 mb-1 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-sm font-medium">Student (Seller)</span>
        </div>
        
        {/* Administrator */}
        <div className="absolute top-520 left-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 mb-1 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-sm font-medium">Administrator</span>
        </div>
        
        {/* Payment Gateway */}
        <div className="absolute top-260 right-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 mb-1 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <span className="text-sm font-medium">Payment Gateway</span>
        </div>
        
        {/* Connections - Lines connecting actors to use cases */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {/* Student Buyer connections */}
          <line x1="55" y1="165" x2="150" y2="80" stroke="black" strokeWidth="1" />
          <line x1="55" y1="165" x2="150" y2="140" stroke="black" strokeWidth="1" />
          <line x1="55" y1="165" x2="150" y2="200" stroke="black" strokeWidth="1" />
          <line x1="55" y1="165" x2="150" y2="260" stroke="black" strokeWidth="1" />
          <line x1="55" y1="165" x2="150" y2="320" stroke="black" strokeWidth="1" />
          
          {/* Student Seller connections */}
          <line x1="55" y1="355" x2="150" y2="80" stroke="black" strokeWidth="1" />
          <line x1="55" y1="355" x2="150" y2="260" stroke="black" strokeWidth="1" />
          <line x1="55" y1="355" x2="150" y2="320" stroke="black" strokeWidth="1" />
          <line x1="55" y1="355" x2="150" y2="380" stroke="black" strokeWidth="1" />
          <line x1="55" y1="355" x2="150" y2="440" stroke="black" strokeWidth="1" />
          
          {/* Administrator connections */}
          <line x1="55" y1="525" x2="150" y2="500" stroke="black" strokeWidth="1" />
          <line x1="55" y1="525" x2="150" y2="560" stroke="black" strokeWidth="1" />
          <line x1="55" y1="525" x2="150" y2="80" stroke="black" strokeWidth="1" />
          
          {/* Payment Gateway connections */}
          <line x1="600" y1="265" x2="350" y2="260" stroke="black" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Legend */}
      <div className="mt-6 bg-gray-50 p-3 border border-gray-300 rounded">
        <h3 className="font-medium mb-2">Legend</h3>
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-sm">Actor</span>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-100 border border-blue-400 rounded-full px-4 py-1 mr-2 text-sm">
            Use Case
          </div>
          <span className="text-sm">System Functionality</span>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>ReSell Use Case Diagram - Based on Software Requirements Specification</p>
      </div>
    </div>
  );
};

export default UseCaseDiagram;
