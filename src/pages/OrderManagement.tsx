
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { Box, ChevronRight, MessageCircle, Package, Send, Star, Truck, Shield, CheckCircle, Clock, Bell, X } from "lucide-react";

// Mock data for demonstration
const mockOrders = [
  {
    id: "ORD-12345",
    date: "2023-10-15",
    product: {
      title: "iPhone 13 Pro Max - 256GB",
      image: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: 899,
    },
    seller: {
      name: "TechTreasures",
      avatar: "T",
      rating: 4.8,
    },
    status: "in-transit",
    progress: 60,
    tracking: "1ZW12345678901234",
    carrier: "UPS",
    estimatedDelivery: "Oct 23, 2023",
    messages: [
      {
        id: 1,
        sender: "seller",
        text: "Your order has been shipped! The tracking number is 1ZW12345678901234 via UPS.",
        timestamp: "Oct 17, 2023 - 10:34 AM",
      },
      {
        id: 2,
        sender: "buyer",
        text: "Thanks for the update! Do you know when it's expected to arrive?",
        timestamp: "Oct 17, 2023 - 11:20 AM",
      },
      {
        id: 3,
        sender: "seller",
        text: "The estimated delivery date is October 23. Let me know if you have any other questions!",
        timestamp: "Oct 17, 2023 - 11:45 AM",
      },
    ],
  },
  {
    id: "ORD-67890",
    date: "2023-10-12",
    product: {
      title: "MacBook Pro 16\" - M1 Pro",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: 1799,
    },
    seller: {
      name: "AppleReseller",
      avatar: "A",
      rating: 4.7,
    },
    status: "delivered",
    progress: 100,
    tracking: "9405123456789012345678",
    carrier: "USPS",
    estimatedDelivery: "Oct 18, 2023",
    deliveredDate: "Oct 17, 2023",
    messages: [
      {
        id: 1,
        sender: "seller",
        text: "Thank you for your order! We've shipped your MacBook Pro and it's on its way.",
        timestamp: "Oct 13, 2023 - 09:15 AM",
      },
      {
        id: 2,
        sender: "system",
        text: "Your order has been delivered! Please inspect the item and mark it as received if everything is satisfactory.",
        timestamp: "Oct 17, 2023 - 02:30 PM",
      },
    ],
  },
  {
    id: "ORD-24680",
    date: "2023-10-10",
    product: {
      title: "Sony WH-1000XM4 Headphones",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: 249,
    },
    seller: {
      name: "AudioPhile",
      avatar: "A",
      rating: 4.9,
    },
    status: "completed",
    progress: 100,
    tracking: "7196543210987654321",
    carrier: "FedEx",
    estimatedDelivery: "Oct 15, 2023",
    deliveredDate: "Oct 14, 2023",
    completedDate: "Oct 16, 2023",
    feedback: {
      rating: 5,
      comment: "Great headphones and fast shipping! The seller was very responsive and helpful.",
    },
    messages: [
      {
        id: 1,
        sender: "seller",
        text: "Your headphones have shipped! You can track them using the provided tracking number.",
        timestamp: "Oct 11, 2023 - 11:30 AM",
      },
      {
        id: 2,
        sender: "buyer",
        text: "Received the headphones today, they look fantastic! Thanks for the quick shipping.",
        timestamp: "Oct 14, 2023 - 04:15 PM",
      },
      {
        id: 3,
        sender: "seller",
        text: "Great to hear! Enjoy your new headphones and please let me know if you have any questions about using them.",
        timestamp: "Oct 14, 2023 - 05:22 PM",
      },
    ],
  },
];

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  let color = "bg-gray-100 text-gray-800";
  let icon = <Clock className="h-3 w-3 mr-1" />;
  let text = "Processing";

  switch (status) {
    case "pending":
      color = "bg-yellow-100 text-yellow-800";
      icon = <Clock className="h-3 w-3 mr-1" />;
      text = "Pending";
      break;
    case "processing":
      color = "bg-blue-100 text-blue-800";
      icon = <Box className="h-3 w-3 mr-1" />;
      text = "Processing";
      break;
    case "in-transit":
      color = "bg-purple-100 text-purple-800";
      icon = <Truck className="h-3 w-3 mr-1" />;
      text = "In Transit";
      break;
    case "delivered":
      color = "bg-green-100 text-green-800";
      icon = <Package className="h-3 w-3 mr-1" />;
      text = "Delivered";
      break;
    case "completed":
      color = "bg-green-100 text-green-800";
      icon = <CheckCircle className="h-3 w-3 mr-1" />;
      text = "Completed";
      break;
    case "cancelled":
      color = "bg-red-100 text-red-800";
      icon = <X className="h-3 w-3 mr-1" />;
      text = "Cancelled";
      break;
  }

  return (
    <Badge className={`${color} flex items-center`} variant="outline">
      {icon}
      {text}
    </Badge>
  );
};

// Message component
const Message = ({ message }: { message: any }) => {
  const isBuyer = message.sender === "buyer";
  const isSystem = message.sender === "system";

  if (isSystem) {
    return (
      <div className="flex justify-center my-4">
        <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-md text-sm max-w-[80%]">
          <Bell className="inline-block h-4 w-4 mr-2" />
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isBuyer ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`flex ${isBuyer ? "flex-row-reverse" : "flex-row"} items-start gap-2`}>
        <Avatar className="h-8 w-8">
          <AvatarFallback>{isBuyer ? "You" : "S"}</AvatarFallback>
        </Avatar>
        <div>
          <div className={`rounded-lg px-4 py-2 max-w-sm ${isBuyer ? "bg-purple-600 text-white" : "bg-gray-100"}`}>
            <p className="text-sm">{message.text}</p>
          </div>
          <span className="text-xs text-gray-500 mt-1 block">{message.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

const OrderDetail = ({ order, onBack }: { order: any, onBack: () => void }) => {
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [showRatingDialog, setShowRatingDialog] = useState(false);
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    toast({
      title: "Message sent",
      description: "Your message has been sent to the seller.",
    });
    
    setNewMessage("");
  };
  
  const handleSubmitReview = () => {
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!",
    });
    
    setShowRatingDialog(false);
  };
  
  const handleReleasePayment = () => {
    toast({
      title: "Payment released",
      description: "The payment has been released to the seller. Transaction complete!",
    });
  };
  
  const handleReportIssue = () => {
    toast({
      title: "Issue reported",
      description: "Our support team has been notified and will contact you soon.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="ghost" onClick={onBack} className="mr-2">
          <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
          Back
        </Button>
        <h2 className="text-xl font-bold">Order {order.id}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Order Information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Order Information</CardTitle>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">Placed on {order.date}</div>
              <StatusBadge status={order.status} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="w-20 h-20 flex-shrink-0">
                <img 
                  src={order.product.image} 
                  alt={order.product.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium">{order.product.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-600">Seller: {order.seller.name}</span>
                  <span className="ml-2 flex items-center text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {order.seller.rating}
                  </span>
                </div>
                <div className="mt-2 text-lg font-bold">${order.product.price}</div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Shipping Status</h4>
                <Progress value={order.progress} className="h-2" />
                <div className="grid grid-cols-2 md:grid-cols-4 mt-2 text-sm">
                  <div className="text-center">
                    <div className={`font-medium ${order.progress >= 25 ? "text-purple-600" : "text-gray-400"}`}>Order Placed</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-medium ${order.progress >= 50 ? "text-purple-600" : "text-gray-400"}`}>Shipped</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-medium ${order.progress >= 75 ? "text-purple-600" : "text-gray-400"}`}>Out for Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-medium ${order.progress >= 100 ? "text-purple-600" : "text-gray-400"}`}>Delivered</div>
                  </div>
                </div>
              </div>
              
              {order.tracking && (
                <div className="text-sm">
                  <div><span className="font-medium">Tracking Number:</span> {order.tracking}</div>
                  <div><span className="font-medium">Carrier:</span> {order.carrier}</div>
                  {order.status === "delivered" ? (
                    <div><span className="font-medium">Delivered on:</span> {order.deliveredDate}</div>
                  ) : (
                    <div><span className="font-medium">Estimated Delivery:</span> {order.estimatedDelivery}</div>
                  )}
                  
                  {order.status === "in-transit" && (
                    <Button variant="link" className="p-0 h-auto text-purple-600" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">Track Package</a>
                    </Button>
                  )}
                </div>
              )}
              
              {order.status === "delivered" && !order.feedback && (
                <div className="bg-blue-50 p-3 rounded-md text-sm">
                  <p className="font-medium text-blue-800 flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Your payment is held in escrow
                  </p>
                  <p className="text-blue-700 mt-1">
                    Please inspect your item and release the payment to complete the transaction.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleReleasePayment}>
                      Release Payment
                    </Button>
                    <Button variant="outline" onClick={handleReportIssue}>
                      Report Issue
                    </Button>
                  </div>
                </div>
              )}
              
              {order.status === "completed" && (
                <div className="bg-green-50 p-3 rounded-md text-sm">
                  <p className="font-medium text-green-800 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Transaction Completed
                  </p>
                  {order.feedback ? (
                    <div className="mt-2">
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Your Rating:</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${i < order.feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-1">"{order.feedback.comment}"</p>
                    </div>
                  ) : (
                    <div className="flex items-center mt-2">
                      <span className="mr-2">Leave a review:</span>
                      <Dialog open={showRatingDialog} onOpenChange={setShowRatingDialog}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            Rate this purchase
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Rate Your Purchase</DialogTitle>
                            <DialogDescription>
                              Share your experience with this transaction and the seller.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="flex justify-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`h-8 w-8 cursor-pointer ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  onClick={() => setRating(i + 1)}
                                />
                              ))}
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="comment" className="block text-sm font-medium">
                                Your Review
                              </label>
                              <textarea 
                                id="comment"
                                className="w-full min-h-[100px] p-3 border rounded-md"
                                placeholder="Share your experience with this purchase..."
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setShowRatingDialog(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleSubmitReview}>Submit Review</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Messaging */}
        <Card className="md:col-span-1 flex flex-col h-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Messages
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto">
            <div className="h-[300px] overflow-y-auto pr-2">
              {order.messages.map((message: any) => (
                <Message key={message.id} message={message} />
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-3">
            <div className="flex w-full">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="rounded-r-none"
              />
              <Button className="rounded-l-none bg-purple-600 hover:bg-purple-700" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

const OrderList = ({ orders, onSelectOrder }: { orders: any[], onSelectOrder: (order: any) => void }) => {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id} className="overflow-hidden cursor-pointer hover:border-purple-200" onClick={() => onSelectOrder(order)}>
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-32 h-32 md:h-full bg-gray-100">
                <img 
                  src={order.product.image} 
                  alt={order.product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{order.product.title}</h3>
                      <StatusBadge status={order.status} />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Order #{order.id} • {order.date}</p>
                  </div>
                  <div className="text-lg font-bold">${order.product.price}</div>
                </div>
                
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>{order.seller.avatar}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{order.seller.name}</span>
                  </div>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0 h-8">
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const OrderManagement = () => {
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  
  const filterOrders = () => {
    if (activeTab === "all") return mockOrders;
    return mockOrders.filter(order => order.status === activeTab);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {selectedOrder ? (
          <OrderDetail 
            order={selectedOrder} 
            onBack={() => setSelectedOrder(null)}
          />
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">My Orders</h1>
                <p className="text-gray-600">View and manage your orders and communications</p>
              </div>
            </div>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="in-transit">In Transit</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-0">
                {filterOrders().length > 0 ? (
                  <OrderList 
                    orders={filterOrders()} 
                    onSelectOrder={setSelectedOrder}
                  />
                ) : (
                  <div className="text-center py-16">
                    <Box className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No orders found</h3>
                    <p className="text-gray-600 mb-6">You don't have any {activeTab !== "all" ? activeTab : ""} orders yet.</p>
                    <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                      <Link to="/products">Browse Products</Link>
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
