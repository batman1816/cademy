import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const Routine = () => {
  // Mock routine data - in real app this would come from admin uploads
  const routines = [{
    id: 1,
    teacher: "Dr. Sarah Ahmed",
    subject: "Mathematics",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    uploadDate: "2024-01-20",
    week: "Week 1"
  }, {
    id: 2,
    teacher: "Prof. Karim Rahman",
    subject: "Physics",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    uploadDate: "2024-01-19",
    week: "Week 1"
  }, {
    id: 3,
    teacher: "Ms. Fatima Khan",
    subject: "Chemistry",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    uploadDate: "2024-01-18",
    week: "Week 1"
  }, {
    id: 4,
    teacher: "Dr. Nasir Uddin",
    subject: "Biology",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    uploadDate: "2024-01-17",
    week: "Week 1"
  }];
  return <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Teacher Routines</h1>
          
        </div>

        {/* Info Banner */}
        

        {/* Routines List */}
        <div className="space-y-8">
          {routines.map(routine => <Card key={routine.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300">
              {/* Banner Image with Overlay */}
              <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden">
                <img src={routine.image} alt={`${routine.subject} Routine`} className="w-full h-full object-cover" />
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Header overlay with subject and teacher */}
                <div className="absolute top-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    
                    
                  </div>
                </div>

                {/* Main content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {routine.subject}
                  </h2>
                  <p className="text-lg text-white/90">
                    by {routine.teacher}
                  </p>
                </div>
              </div>

              {/* Additional Info Section */}
              
            </Card>)}
        </div>

        {/* Admin Info */}
        
      </div>
      <Footer />
    </div>;
};
export default Routine;