import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
// Use the actual Cademy logo
const cademyLogo = "/uploads/080c1eda-6c65-44eb-a5f0-92cbd203b11e.png";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Past Papers", path: "/past-papers" },
    { name: "Store", path: "/compilations" },
    { name: "Lecture Videos", path: "/videos" },
    { name: "Faculty", path: "/faculty" },
    { name: "Routine", path: "/routine" },
  ];

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 relative">
          {/* Mobile menu button - Left side */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-orange-500 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Logo - Centered on mobile, left on desktop */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:transform-none flex items-center space-x-2">
            <img src={cademyLogo} alt="Cademy Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
          </Link>

          {/* Desktop Navigation - Centered both horizontally and vertically */}
          <div className="hidden md:flex items-center justify-center flex-1 h-full">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors py-2 px-1 ${
                    location.pathname === item.path
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Invisible spacer for mobile to maintain centering */}
          <div className="md:hidden w-10 h-10"></div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                    location.pathname === item.path
                      ? "text-orange-500 bg-gray-900"
                      : "text-white hover:text-orange-500 hover:bg-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;