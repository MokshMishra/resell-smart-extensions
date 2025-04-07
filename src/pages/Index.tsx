
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Book, CreditCard, ShoppingBag, BarChart3, Info } from "lucide-react";

const Index = () => {
  const pages = [
    {
      title: "Authentication & Profile Setup",
      description: "Sign in, create an account, and set up your university profile",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      path: "/auth",
      secondaryPath: "/profile-setup",
      secondaryLabel: "Profile Setup"
    },
    {
      title: "Product Listing",
      description: "Browse, search and filter through stationery and academic materials",
      icon: <Book className="h-6 w-6 text-purple-600" />,
      path: "/products"
    },
    {
      title: "Payment Gateway",
      description: "Secure payment processing and escrow system",
      icon: <CreditCard className="h-6 w-6 text-purple-600" />,
      path: "/payment"
    },
    {
      title: "Order Management",
      description: "Track orders and communicate with buyers/sellers",
      icon: <ShoppingBag className="h-6 w-6 text-purple-600" />,
      path: "/orders"
    },
    {
      title: "Price Prediction",
      description: "AI-based price prediction and fraud detection",
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      path: "/price-prediction"
    },
    {
      title: "About ReSell",
      description: "Learn more about our platform and mission",
      icon: <Info className="h-6 w-6 text-purple-600" />,
      path: "/about"
    }
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ReSell</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted university marketplace for buying and selling second-hand stationery, books, and academic gadgets.
          Intelligent pricing, secure transactions, and a seamless experience.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="p-2 bg-purple-50 rounded-md">{page.icon}</div>
                <ArrowRight className="h-5 w-5 text-purple-600" />
              </div>
              <CardTitle className="mt-3">{page.title}</CardTitle>
              <CardDescription>{page.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <Link
                to={page.path}
                className="text-purple-600 font-medium hover:underline"
              >
                Visit {page.title.split(" ")[0]}
              </Link>
              {page.secondaryPath && (
                <Link
                  to={page.secondaryPath}
                  className="text-purple-600 font-medium hover:underline"
                >
                  {page.secondaryLabel}
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
