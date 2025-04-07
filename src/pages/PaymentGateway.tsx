
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle, CreditCard, Shield, Lock } from "lucide-react";

// Mock product data
const mockProduct = {
  id: "123456",
  title: "iPhone 13 Pro Max - 256GB",
  condition: "Like New",
  price: 899,
  seller: "TechTreasures",
  sellerRating: 4.8,
  image: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [step, setStep] = useState(1);
  const [escrowStatus, setEscrowStatus] = useState("pending");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      setEscrowStatus("processing");
      setTimeout(() => {
        setEscrowStatus("secured");
        toast({
          title: "Payment secured in escrow",
          description: "Your payment is now secured. It will be released to the seller once you confirm receipt.",
        });
      }, 2000);
    } else {
      toast({
        title: "Transaction completed",
        description: "Your payment has been processed successfully!",
      });
      // In a real app, navigate to order confirmation
      navigate("/orders");
    }
  };

  const escrowStatusDisplay = () => {
    switch (escrowStatus) {
      case "pending":
        return {
          icon: <AlertCircle className="h-5 w-5 text-orange-500" />,
          text: "Awaiting Payment",
          color: "bg-orange-100 text-orange-800",
          progress: 0,
        };
      case "processing":
        return {
          icon: <Lock className="h-5 w-5 text-blue-500" />,
          text: "Processing",
          color: "bg-blue-100 text-blue-800",
          progress: 50,
        };
      case "secured":
        return {
          icon: <Shield className="h-5 w-5 text-green-500" />,
          text: "Secured in Escrow",
          color: "bg-green-100 text-green-800",
          progress: 100,
        };
      default:
        return {
          icon: <AlertCircle className="h-5 w-5 text-gray-500" />,
          text: "Unknown",
          color: "bg-gray-100 text-gray-800",
          progress: 0,
        };
    }
  };

  const status = escrowStatusDisplay();

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Secure Purchase</h1>
          <p className="text-gray-600">
            Your payment will be held in escrow until you've received and approved the item
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Summary Card */}
          <div className="w-full lg:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={mockProduct.image}
                    alt={mockProduct.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">{mockProduct.title}</h3>
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="mr-2">
                        {mockProduct.condition}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Seller: {mockProduct.seller} ({mockProduct.sellerRating}★)
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Item Price</span>
                    <span>${mockProduct.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Escrow Fee</span>
                    <span>${(mockProduct.price * 0.05).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${(mockProduct.price * 1.05).toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    {status.icon}
                    <span className="text-sm font-medium">Escrow Status: {status.text}</span>
                  </div>
                  <Progress value={status.progress} className="h-2" />
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-md text-sm">
                  <p className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Buyer Protection:</strong> Your payment is secured in escrow and will only
                      be released to the seller after you confirm receipt and approve the item.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Complete your purchase securely</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent>
                  {step === 1 ? (
                    <>
                      <Tabs defaultValue="credit-card" className="w-full" onValueChange={setPaymentMethod}>
                        <TabsList className="grid grid-cols-3 mb-6">
                          <TabsTrigger value="credit-card">
                            <CreditCard className="h-4 w-4 mr-2" />
                            Credit Card
                          </TabsTrigger>
                          <TabsTrigger value="paypal">
                            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M7.076 21.337H2.292a.641.641 0 0 1-.633-.74L4.9 2.92a.641.641 0 0 1 .634-.537h8.55c3.119 0 5.342 2.16 5.115 5.166-.324 4.317-2.979 5.513-5.145 5.513h-3.18c-.2 0-.371.145-.404.342l-.934 5.93Z" />
                              <path d="M18.116 8.869c.039-.514.647-3.295-2.062-3.32h-4.99c-.2 0-.371.146-.403.342L8.57 15.296c-.025.162.084.312.247.312h2.877s1.587-10.35 1.625-10.678c.037-.328.366-.461.552-.461h1.04c2.399 0 2.97.884 3.205 4.4Z" />
                            </svg>
                            PayPal
                          </TabsTrigger>
                          <TabsTrigger value="bank-transfer">
                            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <rect x="2" y="5" width="20" height="14" rx="2" />
                              <line x1="6" y1="9" x2="6" y2="9.01" />
                              <line x1="10" y1="9" x2="10" y2="9.01" />
                              <line x1="14" y1="9" x2="14" y2="9.01" />
                              <line x1="18" y1="9" x2="18" y2="9.01" />
                              <line x1="6" y1="13" x2="6" y2="13.01" />
                              <line x1="18" y1="13" x2="18" y2="13.01" />
                              <line x1="10" y1="13" x2="14" y2="13" />
                            </svg>
                            Bank Transfer
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="credit-card" className="space-y-4">
                          <div>
                            <Label htmlFor="card-name">Cardholder Name</Label>
                            <Input id="card-name" placeholder="John Doe" required />
                          </div>
                          <div>
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiration Date</Label>
                              <Input id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" required />
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="paypal" className="space-y-4">
                          <div className="text-center py-6">
                            <svg className="mx-auto h-12 w-12 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M7.076 21.337H2.292a.641.641 0 0 1-.633-.74L4.9 2.92a.641.641 0 0 1 .634-.537h8.55c3.119 0 5.342 2.16 5.115 5.166-.324 4.317-2.979 5.513-5.145 5.513h-3.18c-.2 0-.371.145-.404.342l-.934 5.93Z" />
                              <path d="M18.116 8.869c.039-.514.647-3.295-2.062-3.32h-4.99c-.2 0-.371.146-.403.342L8.57 15.296c-.025.162.084.312.247.312h2.877s1.587-10.35 1.625-10.678c.037-.328.366-.461.552-.461h1.04c2.399 0 2.97.884 3.205 4.4Z" />
                            </svg>
                            <p className="mt-4 text-sm text-gray-600">
                              Click "Continue to Payment" to be redirected to PayPal to complete your purchase securely.
                            </p>
                          </div>
                        </TabsContent>

                        <TabsContent value="bank-transfer" className="space-y-4">
                          <div>
                            <Label htmlFor="bank-name">Bank Name</Label>
                            <Input id="bank-name" placeholder="Enter your bank name" required />
                          </div>
                          <div>
                            <Label htmlFor="account-name">Account Name</Label>
                            <Input id="account-name" placeholder="Enter account name" required />
                          </div>
                          <div>
                            <Label htmlFor="account-number">Account Number</Label>
                            <Input id="account-number" placeholder="Enter account number" required />
                          </div>
                        </TabsContent>
                      </Tabs>

                      <div className="mt-4">
                        <Label htmlFor="billing-address">Billing Address</Label>
                        <Input id="billing-address" placeholder="123 Main St, City, Country" required className="mb-2" />
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" checked={agreedToTerms} onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)} />
                          <label htmlFor="terms" className="text-sm text-gray-700">
                            I agree to the escrow terms and conditions, including the refund policy
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="py-8 text-center">
                      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Payment Secured in Escrow!</h3>
                      <p className="text-gray-600 mb-6">
                        Your payment is now securely held in our escrow system. It will only be released to the seller after you confirm receipt and approve the item.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-md text-sm text-left">
                        <p className="font-medium mb-2">What happens next?</p>
                        <ol className="space-y-2 list-decimal pl-5">
                          <li>The seller will ship your item within 2 business days</li>
                          <li>You'll receive shipping updates via email and on your order page</li>
                          <li>Once delivered, you'll have 3 days to inspect the item</li>
                          <li>After approval or 3 days with no issues reported, the funds are released</li>
                        </ol>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  {step === 1 ? (
                    <Button 
                      type="submit" 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      disabled={!agreedToTerms}
                    >
                      Secure Payment in Escrow
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      Continue to Order Details
                    </Button>
                  )}
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components
interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium mb-1">
    {children}
  </label>
);

export default PaymentGateway;
