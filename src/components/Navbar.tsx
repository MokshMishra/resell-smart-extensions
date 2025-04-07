
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Price Prediction", href: "/price-prediction" },
    { title: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">
            <span className="text-purple-600">Re</span>Sell
          </span>
        </Link>
        
        <div className="hidden md:flex md:items-center md:space-x-6">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/orders">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </Button>
            </Link>
            
            <Link to="/auth">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Sign In
                <User className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        <button
          className="flex items-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 px-4 pb-5 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="block py-2 text-base font-medium text-gray-600 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/orders"
            className="block py-2 text-base font-medium text-gray-600 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            My Orders
          </Link>
          <Link
            to="/auth"
            className="mt-4 block w-full py-2 text-center text-base font-medium text-white bg-purple-600 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
