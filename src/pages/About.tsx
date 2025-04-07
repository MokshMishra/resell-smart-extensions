
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink, Shield, Clock, Lock, Star, Users, Sparkles, MessageSquare, BookOpen, Pencil, Recycle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-100 py-1">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Reimagining University Stationery Exchange</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ReSell is on a mission to create a sustainable, affordable marketplace for buying and selling second-hand stationery, books, and academic materials among university students.
          </p>
        </div>
        
        {/* Our Story */}
        <Card className="mb-16">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, ReSell emerged from a simple observation: university students often discard perfectly usable stationery, textbooks, and academic materials at the end of each semester.
                </p>
                <p className="text-gray-600 mb-4">
                  After witnessing this waste firsthand, our team of university graduates set out to create a platform that connects students looking to buy affordable supplies with those wanting to recoup some of their investment in academic materials.
                </p>
                <p className="text-gray-600">
                  Today, we're building the most trusted university marketplace for academic supplies, combining AI-powered tools with robust buyer and seller protections to ensure everyone can trade with confidence within their university ecosystem.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600 italic">
                    "To reduce waste and make education more affordable by creating a trusted, university-based marketplace where students can easily buy and sell second-hand academic materials."
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
              Our platform combines cutting-edge technology with student-centric features to create a uniquely safe and efficient marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="h-10 w-10 text-purple-600" />}
              title="AI Price Prediction"
              description="Get accurate market value estimates for your stationery and books based on condition, demand, and campus trends"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-purple-600" />}
              title="Fraud Detection"
              description="Our AI system analyzes listings for red flags and suspicious patterns to protect university buyers"
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10 text-purple-600" />}
              title="Secure Escrow"
              description="Payments are held safely until buyers receive and approve their academic purchases"
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-purple-600" />}
              title="Campus Messaging"
              description="Communicate directly with fellow students within our secure platform"
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-purple-600" />}
              title="University Filtering"
              description="Find materials specific to your university and courses for perfect relevance"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-600" />}
              title="Verified Profiles"
              description="Know you're dealing with real students through our comprehensive verification system"
            />
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">How ReSell Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform simplifies buying and selling academic materials between university students
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-gray-100"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ProcessStep
                number={1}
                title="List or Browse"
                description="Create detailed listings with AI assistance or browse verified academic products"
              />
              <ProcessStep
                number={2}
                title="Connect On-Campus"
                description="Communicate with fellow students through our platform's encrypted messaging"
              />
              <ProcessStep
                number={3}
                title="Payment & Exchange"
                description="Funds are secured in escrow while items are exchanged on campus"
              />
              <ProcessStep
                number={4}
                title="Verify & Complete"
                description="Buyer inspects the stationery or books and releases payment when satisfied"
              />
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="I saved over $200 on textbooks this semester using ReSell. The verification system made me feel safe buying from seniors."
              author="Priya M."
              role="Freshman, Engineering"
              rating={5}
            />
            <TestimonialCard
              quote="As a graduating senior, I recovered almost 40% of what I spent on art supplies by selling them to underclassmen through ReSell."
              author="James K."
              role="Senior, Fine Arts"
              rating={5}
            />
            <TestimonialCard
              quote="The university-specific filtering helped me find exactly the right edition of textbooks for my courses. Super convenient!"
              author="Emma L."
              role="Sophomore, Business"
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
              <div className="text-4xl font-bold text-purple-600 mb-2">15K+</div>
              <div className="text-gray-600">Student Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">35K+</div>
              <div className="text-gray-600">Successful Exchanges</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$850K+</div>
              <div className="text-gray-600">Student Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">University Networks</div>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're a team of former students passionate about sustainability and education affordability
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TeamMember
              name="Nina Patel"
              title="Founder & CEO"
              bio="Former student government president with passion for campus sustainability"
            />
            <TeamMember
              name="Jason Wong"
              title="CTO"
              bio="Computer science graduate specialized in marketplace algorithms and security"
            />
            <TeamMember
              name="Taylor Reed"
              title="Head of Student Relations"
              bio="Education advocate focused on making academic resources more affordable"
            />
            <TeamMember
              name="Aisha Johnson"
              title="Head of Trust & Safety"
              bio="Campus security expert dedicated to creating safer student marketplaces"
            />
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center bg-purple-600 text-white rounded-xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students already buying and selling academic materials with confidence on ReSell
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
              question="How does the university verification work?"
              answer="We verify users through their university email addresses. This ensures that only current students or faculty can access the platform, creating a safe and trusted community for exchanging academic materials."
            />
            <FAQItem
              question="What fees does ReSell charge?"
              answer="Buyers pay no fees. Sellers pay a 5% fee on successful transactions, which includes payment processing, escrow protection, and access to our AI pricing tools. This is significantly less than the depreciation you'd face if you tried to resell to bookstores."
            />
            <FAQItem
              question="How accurate is the AI price prediction?"
              answer="Our AI price prediction tool analyzes current campus demand, the condition of the item, original retail price, and historical sale data to suggest optimal pricing. For textbooks and common supplies, it's typically within 10-15% of final selling prices."
            />
            <FAQItem
              question="What happens if I receive damaged stationery or the wrong textbook edition?"
              answer="Our buyer protection allows you to report issues within 48 hours of meeting and receiving the item. If the academic materials significantly differ from their description, you can request a return and refund through our resolution center."
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
            <strong>Email:</strong> support@resell.edu
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +1 (555) 234-5678
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
