import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal, Heart, Star, Plus } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    title: "Statistics Textbook - 5th Edition",
    category: "Books",
    condition: "Good",
    price: 25,
    originalPrice: 45,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "BookWorm101",
    university: "Stanford University",
    verified: true,
  },
  {
    id: 2,
    title: "Scientific Calculator - Casio FX-991EX",
    category: "Calculators",
    condition: "Like New",
    price: 15,
    originalPrice: 22,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1564223288351-a96944ffc595?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "MathGenius",
    university: "MIT",
    verified: true,
  },
  {
    id: 3,
    title: "Parker Fountain Pen Set",
    category: "Writing Instruments",
    condition: "Excellent",
    price: 18,
    originalPrice: 30,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc1b937?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "PenEnthusiast",
    university: "Harvard University",
    verified: false,
  },
  {
    id: 4,
    title: "Leather Notebook - Ruled 200 pages",
    category: "Notebooks",
    condition: "Good",
    price: 12,
    originalPrice: 20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "NotesTaker",
    university: "Oxford University",
    verified: true,
  },
  {
    id: 5,
    title: "Highlighter Set - 12 Colors",
    category: "Markers",
    condition: "New",
    price: 8,
    originalPrice: 15,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581682543291-cfd9daaeccc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "ColorCreator",
    university: "Cambridge University",
    verified: true,
  },
  {
    id: 6,
    title: "Engineering Drawing Tools Set",
    category: "Art Supplies",
    condition: "Good",
    price: 22,
    originalPrice: 40,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1601815581002-3d5da98d5100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "ArchStudent",
    university: "California Institute of Technology",
    verified: false,
  }
];

const ProductCard = ({ product }: { product: typeof mockProducts[0] }) => {
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.title}
          className="h-48 w-full object-cover"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 rounded-full h-8 w-8"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-500">
            {discountPercentage}% OFF
          </Badge>
        )}
      </div>
      <CardHeader className="py-4 px-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">{product.category}</p>
            <CardTitle className="text-base mt-1 line-clamp-2">{product.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-0 px-4 flex-grow">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Badge variant="outline" className="mr-2">{product.condition}</Badge>
          <div className="flex items-center ml-auto">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span>{product.rating}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <span className="text-gray-600">Seller: <span className="font-medium">{product.seller}</span>
            {product.verified && (
              <Badge className="ml-1 h-4 px-1 bg-green-500">✓</Badge>
            )}
          </span>
          <span className="text-gray-600">University: <span className="font-medium">{product.university}</span></span>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-4 px-4 border-t mt-auto">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">View Item</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const ProductListing = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Browse Academic Materials</h1>
          <p className="text-gray-600 mb-6">Find quality second-hand stationery and academic supplies at great prices</p>
        
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search for books, stationery, or academic supplies..." 
              className="pl-10 pr-10"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-2 md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="stationery">Stationery</TabsTrigger>
              <TabsTrigger value="calculators">Calculators</TabsTrigger>
              <TabsTrigger value="art">Art Supplies</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="w-full md:w-1/3 flex justify-end">
          <Button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700" asChild>
            <Link to="#">
              <Plus className="mr-2 h-4 w-4" />
              List an Item
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters - Mobile Expandable / Desktop Always Visible */}
        <div className={`w-full md:w-64 lg:w-72 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="stationery">Stationery</SelectItem>
                    <SelectItem value="calculators">Calculators</SelectItem>
                    <SelectItem value="notebooks">Notebooks</SelectItem>
                    <SelectItem value="pens">Writing Instruments</SelectItem>
                    <SelectItem value="art">Art Supplies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Condition</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">New</Button>
                  <Button variant="outline" size="sm" className="justify-start">Like New</Button>
                  <Button variant="outline" size="sm" className="justify-start">Good</Button>
                  <Button variant="outline" size="sm" className="justify-start">Used</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Price Range</Label>
                  <span className="text-sm text-gray-600">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <Slider
                  defaultValue={[0, 100]}
                  max={100}
                  step={5}
                  onValueChange={(value) => setPriceRange(value)}
                  className="py-4"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">University</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Universities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Universities</SelectItem>
                    <SelectItem value="stanford">Stanford University</SelectItem>
                    <SelectItem value="mit">MIT</SelectItem>
                    <SelectItem value="harvard">Harvard University</SelectItem>
                    <SelectItem value="oxford">Oxford University</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Seller Rating</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Rating</SelectItem>
                    <SelectItem value="4plus">4+ Stars</SelectItem>
                    <SelectItem value="3plus">3+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" className="flex-1">Reset</Button>
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Apply</Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-600">Showing {mockProducts.length} results</div>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-1">1</Button>
            <Button variant="outline" className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">3</Button>
            <Button variant="outline" className="mx-1">...</Button>
            <Button variant="outline" className="mx-1">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Types
interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

const Label = ({ className, children }: LabelProps) => (
  <label className={`block ${className || ""}`}>{children}</label>
);

export default ProductListing;
