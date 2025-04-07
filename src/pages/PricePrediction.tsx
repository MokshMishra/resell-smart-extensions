
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Camera, Info, Sparkles, AlertCircle, CheckCircle, ChevronRight, Loader2, Upload } from "lucide-react";

const PricePrediction = () => {
  const [activeTab, setActiveTab] = useState("predict");
  const [deviceType, setDeviceType] = useState("smartphone");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("excellent");
  const [age, setAge] = useState([1]);
  const [storage, setStorage] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoURLs, setPhotoURLs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [verificationResult, setVerificationResult] = useState<any | null>(null);
  const { toast } = useToast();

  // Handle file selection
  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setPhotos([...photos, ...filesArray]);
      
      // Create preview URLs
      const newURLs = filesArray.map(file => URL.createObjectURL(file));
      setPhotoURLs([...photoURLs, ...newURLs]);
    }
  };

  // Remove a photo
  const removePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
    
    const newURLs = [...photoURLs];
    URL.revokeObjectURL(newURLs[index]);
    newURLs.splice(index, 1);
    setPhotoURLs(newURLs);
  };

  // Handle price prediction submission
  const handlePredictPrice = () => {
    setLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setLoading(false);
      
      // Mock response data
      const mockResult = {
        predictedPrice: getRandomPrice(),
        priceRange: {
          min: getRandomPrice(0.8),
          max: getRandomPrice(1.2),
        },
        marketTrend: getRandomTrend(),
        similarListings: generateSimilarListings(),
        confidence: Math.floor(Math.random() * 30) + 70, // 70-99%
      };
      
      setResult(mockResult);
      
      toast({
        title: "Price prediction complete",
        description: "We've analyzed your device and generated a market price prediction.",
      });
    }, 2000);
  };

  // Handle fraud verification submission
  const handleVerifyListing = () => {
    setLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setLoading(false);
      
      // Mock response data - mostly legitimate with occasional warnings
      const isSuspicious = Math.random() > 0.8;
      
      const mockResult = {
        score: isSuspicious ? Math.floor(Math.random() * 40) + 10 : Math.floor(Math.random() * 40) + 60,
        issues: isSuspicious 
          ? [
              "Listing images don't match the described model",
              "Price significantly below market average",
              "Seller account created recently"
            ]
          : [],
        recommendation: isSuspicious ? "Proceed with caution" : "Listing appears legitimate",
      };
      
      setVerificationResult(mockResult);
      
      toast({
        title: "Verification complete",
        description: "We've analyzed the listing for potential fraud indicators.",
      });
    }, 2000);
  };

  // Helper functions for generating mock data
  const getRandomPrice = (multiplier = 1) => {
    const basePrice = deviceType === "smartphone" 
      ? Math.floor(Math.random() * 500) + 300 
      : deviceType === "laptop"
        ? Math.floor(Math.random() * 900) + 600
        : Math.floor(Math.random() * 300) + 150;
    
    return Math.floor(basePrice * multiplier);
  };
  
  const getRandomTrend = () => {
    const trends = ["rising", "stable", "declining"];
    return trends[Math.floor(Math.random() * trends.length)];
  };
  
  const generateSimilarListings = () => {
    return Array(3).fill(null).map((_, i) => ({
      id: `listing-${i}`,
      title: `${brand || "Similar"} ${model || deviceType} - ${["128GB", "256GB", "512GB"][i % 3]}`,
      condition: ["Like New", "Excellent", "Good"][i % 3],
      price: getRandomPrice(0.9 + (i * 0.1)),
      daysAgo: Math.floor(Math.random() * 10) + 1,
    }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Price Prediction & Fraud Detection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get accurate market value estimates for your electronics and verify the legitimacy of listings before purchasing
          </p>
        </div>

        <Tabs defaultValue="predict" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="predict">
              <Sparkles className="h-4 w-4 mr-2" />
              Price Prediction
            </TabsTrigger>
            <TabsTrigger value="verify">
              <AlertCircle className="h-4 w-4 mr-2" />
              Fraud Detection
            </TabsTrigger>
          </TabsList>

          <TabsContent value="predict">
            <Card>
              <CardHeader>
                <CardTitle>Get Your Device's Market Value</CardTitle>
                <CardDescription>
                  Our AI analyzes your device details to provide an accurate price estimate based on current market conditions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="device-type">Device Type</Label>
                    <Select value={deviceType} onValueChange={setDeviceType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select device type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smartphone">Smartphone</SelectItem>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="tablet">Tablet</SelectItem>
                        <SelectItem value="smartwatch">Smartwatch</SelectItem>
                        <SelectItem value="audio">Audio Device</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Select value={brand} onValueChange={setBrand}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="samsung">Samsung</SelectItem>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="sony">Sony</SelectItem>
                        <SelectItem value="microsoft">Microsoft</SelectItem>
                        <SelectItem value="dell">Dell</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input 
                      id="model" 
                      placeholder={deviceType === "smartphone" ? "e.g. iPhone 13 Pro Max" : "e.g. MacBook Pro M1"}
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storage">Storage</Label>
                    <Select value={storage} onValueChange={setStorage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select storage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="64">64GB</SelectItem>
                        <SelectItem value="128">128GB</SelectItem>
                        <SelectItem value="256">256GB</SelectItem>
                        <SelectItem value="512">512GB</SelectItem>
                        <SelectItem value="1024">1TB</SelectItem>
                        <SelectItem value="2048">2TB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={condition} onValueChange={setCondition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="likenew">Like New</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Age (years)</Label>
                    <span className="text-sm font-medium">{age[0]} {age[0] === 1 ? "year" : "years"}</span>
                  </div>
                  <Slider 
                    value={age} 
                    min={0} 
                    max={5} 
                    step={0.5}
                    onValueChange={setAge}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Device Photos</Label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
                    {photoURLs.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                        {photoURLs.map((url, index) => (
                          <div key={index} className="relative">
                            <img 
                              src={url} 
                              alt={`Device ${index + 1}`} 
                              className="h-24 w-full object-cover rounded-md"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                              onClick={() => removePhoto(index)}
                            >
                              <span>×</span>
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    
                    <div className="text-center">
                      <Camera className="mx-auto h-8 w-8 text-gray-400" />
                      <div className="mt-2">
                        <label
                          htmlFor="photo-upload"
                          className="cursor-pointer bg-purple-50 hover:bg-purple-100 text-purple-600 px-4 py-2 rounded-md inline-flex items-center gap-2"
                        >
                          <Upload className="h-4 w-4" />
                          Add Photos
                          <Input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handlePhotoSelect}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Clear photos help provide more accurate estimates
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Add any other relevant information about your device..."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 min-w-[200px]"
                  onClick={handlePredictPrice}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Price Estimate
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            {result && (
              <Card className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle>Your Device Valuation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">Estimated Value</p>
                      <p className="text-3xl font-bold text-purple-600">${result.predictedPrice}</p>
                      <p className="text-xs text-gray-500 mt-1">Based on current market data</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">Price Range</p>
                      <p className="text-lg font-semibold">${result.priceRange.min} - ${result.priceRange.max}</p>
                      <p className="text-xs text-gray-500 mt-1">Depending on buyer demand</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">Market Trend</p>
                      <p className={`text-lg font-semibold ${
                        result.marketTrend === "rising" 
                          ? "text-green-600" 
                          : result.marketTrend === "declining" 
                            ? "text-red-600" 
                            : "text-blue-600"
                      }`}>
                        {result.marketTrend === "rising" && "↗ Rising"}
                        {result.marketTrend === "stable" && "→ Stable"}
                        {result.marketTrend === "declining" && "↘ Declining"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Over the last 30 days</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-3">Similar Listings</h3>
                    <div className="space-y-3">
                      {result.similarListings.map((listing: any) => (
                        <div key={listing.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{listing.title}</p>
                            <p className="text-sm text-gray-600">{listing.condition} • {listing.daysAgo} days ago</p>
                          </div>
                          <div className="text-lg font-semibold">${listing.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center text-blue-800">
                      <Info className="h-5 w-5 mr-2" />
                      <span className="font-medium">AI Confidence Score</span>
                    </div>
                    <div className="font-semibold">{result.confidence}%</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                    <Link to="/products">
                      List Your Device
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline">
                    Get Detailed Report
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="verify">
            <Card>
              <CardHeader>
                <CardTitle>Verify Listing Legitimacy</CardTitle>
                <CardDescription>
                  Our AI fraud detection system helps you identify potentially suspicious listings before making a purchase
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="listing-url">Listing URL or ID</Label>
                  <Input 
                    id="listing-url" 
                    placeholder="Enter the URL or ID of the listing you want to verify"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="seller-profile">Seller Profile URL (Optional)</Label>
                  <Input 
                    id="seller-profile" 
                    placeholder="Enter the seller's profile URL for additional verification"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="listing-photos">Listing Photos</Label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                    <div className="mb-3">
                      <Camera className="mx-auto h-8 w-8 text-gray-400" />
                      <div className="mt-2">
                        <label
                          htmlFor="listing-photo-upload"
                          className="cursor-pointer bg-purple-50 hover:bg-purple-100 text-purple-600 px-4 py-2 rounded-md inline-flex items-center gap-2"
                        >
                          <Upload className="h-4 w-4" />
                          Upload Images
                          <Input
                            id="listing-photo-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Upload photos from the listing to check for signs of manipulation
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="asking-price">Asking Price ($)</Label>
                    <Input 
                      id="asking-price" 
                      type="number"
                      placeholder="Enter the listing price"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="market-value">Typical Market Value ($)</Label>
                    <Input 
                      id="market-value" 
                      type="number"
                      placeholder="Enter the typical price for this item"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="enhanced-scan" />
                  <Label htmlFor="enhanced-scan" className="text-sm">
                    Perform enhanced verification scan (checks seller history, account age, etc.)
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 min-w-[200px]"
                  onClick={handleVerifyListing}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <AlertCircle className="mr-2 h-4 w-4" />
                      Verify Listing
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            {verificationResult && (
              <Card className={`mt-8 ${
                verificationResult.score >= 80 
                  ? "bg-gradient-to-r from-green-50 to-emerald-50" 
                  : verificationResult.score >= 50 
                    ? "bg-gradient-to-r from-yellow-50 to-amber-50"
                    : "bg-gradient-to-r from-red-50 to-orange-50"
              }`}>
                <CardHeader className="pb-2">
                  <CardTitle>Fraud Detection Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-lg">Trust Score</h3>
                    <div className="w-2/3">
                      <div className="h-4 rounded-full bg-gray-200 overflow-hidden">
                        <div 
                          className={`h-full ${
                            verificationResult.score >= 80 
                              ? "bg-green-500" 
                              : verificationResult.score >= 50 
                                ? "bg-yellow-500" 
                                : "bg-red-500"
                          }`}
                          style={{ width: `${verificationResult.score}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-gray-600">
                        <span>High Risk</span>
                        <span>Moderate</span>
                        <span>Trustworthy</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    verificationResult.score >= 80 
                      ? "bg-green-100" 
                      : verificationResult.score >= 50 
                        ? "bg-yellow-100" 
                        : "bg-red-100"
                  }`}>
                    <div className="flex items-start">
                      {verificationResult.score >= 80 ? (
                        <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                      )}
                      <div>
                        <p className="font-semibold mb-1">
                          {verificationResult.recommendation}
                        </p>
                        <p className="text-sm">
                          {verificationResult.score >= 80 
                            ? "This listing appears to be legitimate based on our analysis. No significant fraud indicators were detected." 
                            : "Our system has detected some potential issues with this listing. Review the details below before proceeding."}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {verificationResult.issues.length > 0 && (
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2">Potential Issues Detected</h3>
                      <ul className="space-y-2">
                        {verificationResult.issues.map((issue: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-3">Safety Tips</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Always use our secure escrow payment system</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Never send money directly to sellers outside our platform</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>If a deal seems too good to be true, it probably is</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Report Listing
                  </Button>
                  <Button variant="outline">
                    View Detailed Report
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Helper components
interface Link {
  children: React.ReactNode;
  to: string;
}

const Link = ({ children, to }: Link) => (
  <a href={to} className="inline-block">
    {children}
  </a>
);

export default PricePrediction;
