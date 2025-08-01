import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Expert Mathematics teacher with 15+ years experience in A-level curriculum",
      whatsapp: "8801XXXXXXXXX"
    },
    {
      id: 2,
      name: "Prof. Karim Rahman",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Physics specialist focusing on practical applications and problem-solving techniques",
      whatsapp: "8801XXXXXXXXX"
    },
    {
      id: 3,
      name: "Ms. Fatima Khan",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Chemistry educator passionate about making complex concepts simple and engaging",
      whatsapp: "8801XXXXXXXXX"
    },
    {
      id: 4,
      name: "Dr. Nasir Uddin",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Biology teacher with research background in molecular biology and genetics",
      whatsapp: "8801XXXXXXXXX"
    },
    {
      id: 5,
      name: "Prof. Rashida Begum",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Business Studies expert with real-world corporate experience and academic excellence",
      whatsapp: "8801XXXXXXXXX"
    },
    {
      id: 6,
      name: "Mr. Jamal Hossain",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Computer Science educator specializing in programming and algorithmic thinking",
      whatsapp: "8801XXXXXXXXX"
    }
  ];

  const handleWhatsAppContact = (whatsapp: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I'm interested in learning more about your courses at Cademy.`);
    window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Expert Faculty</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with our experienced educators who are dedicated to helping you achieve academic excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {facultyMembers.map((faculty) => (
            <div 
              key={faculty.id} 
              className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden hover-scale cursor-pointer group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${faculty.image})`,
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                  {faculty.name}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  {faculty.description}
                </p>

                {/* Get In Touch Button */}
                <button 
                  onClick={() => handleWhatsAppContact(faculty.whatsapp, faculty.name)}
                  className="w-full bg-white text-black font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center justify-center space-x-2 hover:bg-white/90 transition-all duration-200 text-sm sm:text-base"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <Card className="mt-12 sm:mt-16 p-6 sm:p-8 bg-cademy-blue/5 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Need Personal Guidance?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our faculty members are available for one-on-one consultations, personalized study plans, 
            and academic counseling. Reach out via WhatsApp to get started.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold text-primary text-sm sm:text-base">Response Time</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Within 2 hours</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-primary text-sm sm:text-base">Consultation</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Free initial session</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-primary text-sm sm:text-base">Availability</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">9 AM - 9 PM</p>
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Faculty;