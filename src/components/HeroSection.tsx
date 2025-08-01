import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-black overflow-hidden">
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 sm:py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Excel in Your{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              IGCSE & IAL
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
              Journey
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Join CADEMY for comprehensive learning resources, expert faculty guidance, 
            and proven strategies to achieve your academic goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full font-semibold w-full sm:w-auto"
            >
              Book a Demo Class
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Link to="/past-papers" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-900 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full font-semibold w-full"
              >
                View Past Papers
              </Button>
            </Link>
          </div>

          {/* Quick Stats - One line on mobile */}
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-orange-500 mb-1 sm:mb-2" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">2000+</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Past Papers</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-cyan-400 mb-1 sm:mb-2" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">50+</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Expert Faculty</p>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-orange-500 mb-1 sm:mb-2" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">95%</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;