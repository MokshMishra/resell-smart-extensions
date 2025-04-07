
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
    title: "iPhone 13 Pro Max - 256GB",
    category: "Smartphones",
    condition: "Like New",
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "TechTreasures",
    verified: true,
  },
  {
    id: 2,
    title: "MacBook Pro 16\" - M1 Pro",
    category: "Laptops",
    condition: "Good",
    price: 1799,
    originalPrice: 2399,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "AppleReseller",
    verified: true,
  },
  {
    id: 3,
    title: "Samsung Galaxy Tab S8 Ultra",
    category: "Tablets",
    condition: "Excellent",
    price: 649,
    originalPrice: 899,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "GalaxyGear",
    verified: false,
  },
  {
    id: 4,
    title: "Sony WH-1000XM4 Headphones",
    category: "Audio",
    condition: "Like New",
    price: 249,
    originalPrice: 349,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "AudioPhile",
    verified: true,
  },
  {
    id: 5,
    title: "Nintendo Switch OLED",
    category: "Gaming",
    condition: "Good",
    price: 299,
    originalPrice: 349,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "GameStation",
    verified: true,
  },
  {
    id: 6,
    title: "Canon EOS R5 Camera",
    category: "Cameras",
    condition: "Excellent",
    price: 2899,
    originalPrice: 3899,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    seller: "PhotoPro",
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
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Seller:</span>
          <span className="font-medium flex items-center">
            {product.seller}
            {product.verified && (
              <Badge className="ml-1 h-4 px-1 bg-green-500">✓</Badge>
            )}
          </span>
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
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Browse Products</h1>
          <p className="text-gray-600 mb-6">Find quality pre-owned electronics at great prices</p>
        
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search for products, brands, or categories..." 
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
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="smartphones">Smartphones</TabsTrigger>
              <TabsTrigger value="laptops">Laptops</TabsTrigger>
              <TabsTrigger value="tablets">Tablets</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
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
                    <SelectItem value="smartphones">Smartphones</SelectItem>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="tablets">Tablets</SelectItem>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="cameras">Cameras</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Condition</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">Like New</Button>
                  <Button variant="outline" size="sm" className="justify-start">Excellent</Button>
                  <Button variant="outline" size="sm" className="justify-start">Good</Button>
                  <Button variant="outline" size="sm" className="justify-start">Fair</Button>
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
                  defaultValue={[0, 5000]}
                  max={5000}
                  step={100}
                  onValueChange={(value) => setPriceRange(value)}
                  className="py-4"
                />
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
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Brand</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="samsung">Samsung</SelectItem>
                    <SelectItem value="sony">Sony</SelectItem>
                    <SelectItem value="microsoft">Microsoft</SelectItem>
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
