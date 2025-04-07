
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink, Shield, Clock, Lock, Star, Users, Sparkles, MessageSquare } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-100 py-1">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Reimagining the Electronics Resale Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ResellSmart is on a mission to create a safer, smarter marketplace for buying and selling pre-owned electronics
          </p>
        </div>
        
        {/* Our Story */}
        <Card className="mb-16">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, ResellSmart was born from a simple frustration: the risks and uncertainties of buying and selling used electronics online.
                </p>
                <p className="text-gray-600 mb-4">
                  After experiencing scams and misleading listings firsthand, our team set out to create a platform that uses advanced technology to remove the guesswork from electronics reselling.
                </p>
                <p className="text-gray-600">
                  Today, we're building the most trusted marketplace for pre-owned technology, combining AI-powered tools with robust buyer and seller protections to ensure everyone can trade with confidence.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600 italic">
                    "To create a world where the resale of electronics is as reliable, transparent, and trusted as buying new, but with the affordability and sustainability benefits of the secondary market."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Key Features */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with user-centric features to create a uniquely safe and efficient marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="h-10 w-10 text-purple-600" />}
              title="AI Price Prediction"
              description="Get accurate market value estimates for any device based on real-time data and comparables"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-purple-600" />}
              title="Fraud Detection"
              description="Our AI system analyzes listings for red flags and suspicious patterns to protect buyers"
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10 text-purple-600" />}
              title="Secure Escrow"
              description="Payments are held safely until buyers receive and approve their purchases"
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-purple-600" />}
              title="Integrated Messaging"
              description="Communicate directly with buyers and sellers within our secure platform"
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-purple-600" />}
              title="Streamlined Process"
              description="List items in minutes with our guided setup and AI-assisted descriptions"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-600" />}
              title="Verified Profiles"
              description="Know who you're dealing with through our comprehensive verification system"
            />
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">How ResellSmart Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform simplifies every step of buying and selling pre-owned electronics
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-gray-100"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ProcessStep
                number={1}
                title="List or Browse"
                description="Create detailed listings with AI assistance or browse verified products"
              />
              <ProcessStep
                number={2}
                title="Connect Securely"
                description="Communicate through our platform's encrypted messaging system"
              />
              <ProcessStep
                number={3}
                title="Payment & Shipping"
                description="Funds are secured in escrow while item is shipped and delivered"
              />
              <ProcessStep
                number={4}
                title="Verify & Complete"
                description="Buyer inspects the item and releases payment when satisfied"
              />
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What Users Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The AI price prediction tool saved me from undervaluing my MacBook by nearly $300. I couldn't believe how accurate it was!"
              author="Michael T."
              role="Seller"
              rating={5}
            />
            <TestimonialCard
              quote="The fraud detection system warned me about a suspicious listing that seemed perfect otherwise. That feature alone is worth using ResellSmart."
              author="Sarah K."
              role="Buyer"
              rating={5}
            />
            <TestimonialCard
              quote="I was nervous about selling my expensive camera gear online, but the escrow system gave me total peace of mind. Simple and secure."
              author="David L."
              role="Seller"
              rating={4}
            />
          </div>
        </div>
        
        {/* Stats */}
        <div className="mb-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Our Impact</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25K+</div>
              <div className="text-gray-600">Successful Transactions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$2.5M+</div>
              <div className="text-gray-600">Marketplace Volume</div>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of technologists, marketplace experts, and customer champions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TeamMember
              name="Alex Rivera"
              title="Founder & CEO"
              bio="Former marketplace product leader with a passion for consumer trust and security"
            />
            <TeamMember
              name="Priya Sharma"
              title="CTO"
              bio="AI and machine learning specialist with expertise in fraud detection systems"
            />
            <TeamMember
              name="Marcus Johnson"
              title="Head of Product"
              bio="User experience advocate focused on making complex technology accessible"
            />
            <TeamMember
              name="Sarah Chen"
              title="Head of Trust & Safety"
              bio="E-commerce security expert dedicated to creating safer online marketplaces"
            />
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center bg-purple-600 text-white rounded-xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users already buying and selling electronics with confidence on ResellSmart
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/products">Browse Listings</Link>
            </Button>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
              <Link to="/auth">Create Account</Link>
            </Button>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            <FAQItem
              question="How does the escrow system work?"
              answer="When a buyer makes a purchase, their payment is securely held by ResellSmart until they receive and approve the item. This protects both parties - sellers know the buyer has committed funds, and buyers know they can get their money back if the item isn't as described."
            />
            <FAQItem
              question="What fees does ResellSmart charge?"
              answer="Buyers pay no fees. Sellers pay a 5% fee on successful transactions, which includes payment processing, escrow protection, and access to our AI tools. Premium features like enhanced verification may have additional costs."
            />
            <FAQItem
              question="How accurate is the AI price prediction?"
              answer="Our AI price prediction tool is typically within 5-10% of actual selling prices, based on analysis of thousands of similar transactions, current market trends, and device-specific factors. The more information you provide, the more accurate the estimate."
            />
            <FAQItem
              question="What happens if I receive an item that doesn't match the description?"
              answer="Our buyer protection allows you to report issues within 48 hours of delivery. If the item significantly differs from its description, you can request a return and refund through our resolution center."
            />
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Contact */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> support@resellsmart.com
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4 z-10">
        {number}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ quote, author, role, rating }: { quote: string, author: string, role: string, rating: number }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col h-full">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600 italic mb-4 flex-grow">"{quote}"</p>
          <div>
            <p className="font-bold">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamMember = ({ name, title, bio }: { name: string, title: string, bio: string }) => {
  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <h3 className="font-bold">{name}</h3>
      <p className="text-purple-600 font-medium text-sm mb-2">{title}</p>
      <p className="text-sm text-gray-600">{bio}</p>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold mb-2">{question}</h3>
        <p className="text-gray-600">{answer}</p>
      </CardContent>
    </Card>
  );
};

export default AboutPage;
