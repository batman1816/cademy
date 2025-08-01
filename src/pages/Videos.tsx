import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Videos = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bkashTxnId: ""
  });

  const isSubscribed = false; // This would come from user context

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription form submission
    console.log("Subscription form submitted:", formData);
  };

  const courses = [
    {
      id: 1,
      title: "A-Level Mathematics Complete Course",
      duration: "45 hours",
      videos: 120,
      subject: "Mathematics",
      level: "A-level"
    },
    {
      id: 2,
      title: "O-Level Physics Fundamentals",
      duration: "30 hours", 
      videos: 85,
      subject: "Physics",
      level: "O-level"
    },
    {
      id: 3,
      title: "A-Level Chemistry Masterclass",
      duration: "40 hours",
      videos: 100,
      subject: "Chemistry", 
      level: "A-level"
    }
  ];

  if (!isSubscribed) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Lecture Videos</h1>
            <p className="text-lg text-muted-foreground">
              Premium video courses by expert faculty
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Subscription Info */}
              <Card className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Play className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-2">Monthly Subscription</h2>
                  <div className="text-4xl font-bold text-secondary mb-2">Tk 2,500</div>
                  <p className="text-muted-foreground">per month</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Unlimited access to all video courses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>HD quality video streaming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Expert faculty support</span>
                  </div>
                </div>

                {/* Available Courses Preview */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Available Courses:</h3>
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{course.title}</p>
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {course.duration}
                          </span>
                          <span className="flex items-center">
                            <Play className="h-3 w-3 mr-1" />
                            {course.videos} videos
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Subscription Form */}
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">Subscribe Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="bkashTxnId">bKash Transaction ID</Label>
                    <Input
                      id="bkashTxnId"
                      name="bkashTxnId"
                      value={formData.bkashTxnId}
                      onChange={handleInputChange}
                      placeholder="Enter your bKash TXN ID"
                      required
                    />
                  </div>

                  <div className="p-4 bg-cademy-blue/5 rounded-lg">
                    <h4 className="font-medium mb-2">Payment Instructions:</h4>
                    <ol className="text-sm text-muted-foreground space-y-1">
                      <li>1. Send Tk 2,500 to: 01XXXXXXXXX (bKash)</li>
                      <li>2. Copy the transaction ID</li>
                      <li>3. Fill out this form with the TXN ID</li>
                      <li>4. Wait for manual approval (within 24 hours)</li>
                    </ol>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Subscription Request
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Subscribed user view
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Lecture Videos</h1>
          <Badge variant="secondary" className="mb-4">Active Subscription</Badge>
          <p className="text-lg text-muted-foreground">
            Access all premium video courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="p-6 hover:shadow-elevated transition-all duration-300">
              <div className="mb-4">
                <Badge variant="outline" className="mb-2">{course.level}</Badge>
                <h3 className="font-semibold text-primary text-lg mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{course.subject}</p>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </span>
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {course.videos} videos
                </span>
              </div>

              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Videos;