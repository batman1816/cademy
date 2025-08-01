import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Lock, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Compilations = () => {
  const resources = [
    {
      id: 1,
      title: "Mathematics Complete Guide",
      description: "Comprehensive compilation of all mathematics topics with step-by-step solutions and practice questions.",
      subject: "Mathematics",
      level: "IGCSE",
      price: "1,500",
      isPurchased: false
    },
    {
      id: 2,
      title: "Physics Question Bank",
      description: "Extensive collection of physics problems covering mechanics, electricity, and modern physics.",
      subject: "Physics",
      level: "A-Level",
      price: "2,000",
      isPurchased: true
    },
    {
      id: 3,
      title: "Chemistry Lab Manual",
      description: "Practical chemistry experiments with detailed procedures and safety guidelines.",
      subject: "Chemistry",
      level: "IGCSE",
      price: "1,800",
      isPurchased: false
    },
    {
      id: 4,
      title: "Biology Chapter Notes",
      description: "Detailed chapter-wise notes with diagrams and key concepts for biology students.",
      subject: "Biology",
      level: "A-Level",
      price: "1,600",
      isPurchased: false
    },
    {
      id: 5,
      title: "Business Studies Case Studies",
      description: "Real-world business case studies with analysis and strategic recommendations.",
      subject: "Business",
      level: "IGCSE",
      price: "1,200",
      isPurchased: false
    },
    {
      id: 6,
      title: "Computer Science Programming",
      description: "Programming exercises and algorithms with solutions in multiple languages.",
      subject: "Computer Science",
      level: "A-Level",
      price: "2,200",
      isPurchased: false
    }
  ];

  const handlePurchase = (resourceId: number) => {
    // Handle purchase logic here
    console.log(`Purchasing resource ${resourceId}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Store & Chapter-wise Resources</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Premium study materials crafted by expert educators
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="p-4 sm:p-6 hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      {resource.level}
                    </Badge>
                  </div>
                </div>
                {/* Price - Hidden on mobile, shown on desktop */}
                <div className="hidden md:block text-right">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">Tk {resource.price}</p>
                  <p className="text-xs text-muted-foreground">One-time purchase</p>
                </div>
              </div>

              {/* Price - Mobile layout: below level badge, left aligned */}
              <div className="md:hidden mb-3 flex flex-col items-start">
                <p className="text-lg font-bold text-primary">Tk {resource.price}</p>
                <p className="text-xs text-muted-foreground">One-time purchase</p>
              </div>

              <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base md:text-lg">
                {resource.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex-grow leading-relaxed">
                {resource.description}
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-muted-foreground">Subject:</span>
                  <Badge variant="outline" className="text-xs">{resource.subject}</Badge>
                </div>

                {resource.isPurchased ? (
                  <Button className="w-full text-xs sm:text-sm py-2 sm:py-3" variant="default">
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Download Now
                  </Button>
                ) : (
                  <Button 
                    className="w-full text-xs sm:text-sm py-2 sm:py-3" 
                    variant="secondary"
                    onClick={() => handlePurchase(resource.id)}
                  >
                    <Lock className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Purchase for Tk {resource.price}
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Purchase Info */}
        <Card className="mt-8 sm:mt-12 p-4 sm:p-6 bg-cademy-blue/5">
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">How to Purchase</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-medium mb-2 text-sm sm:text-base">Payment Methods</h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>• bKash: 01XXXXXXXXX</li>
                <li>• Nagad: 01XXXXXXXXX</li>
                <li>• Rocket: 01XXXXXXXXX</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-sm sm:text-base">After Payment</h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>• Send transaction ID to WhatsApp</li>
                <li>• Manual approval within 24 hours</li>
                <li>• Download link will be activated</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Compilations;