import { Card } from "@/components/ui/card";
// Use the actual Cademy logo
const cademyLogo = "/uploads/080c1eda-6c65-44eb-a5f0-92cbd203b11e.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={cademyLogo} alt="Cademy Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md text-sm sm:text-base leading-relaxed">
              Excel in your IGCSE & IAL journey with comprehensive learning resources, 
              expert faculty guidance, and proven strategies.
            </p>
          </div>
          
          {/* Quick Links and Contact - Side by side on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/past-papers" className="text-white hover:text-orange-500 transition-colors text-sm sm:text-base block py-1">Past Papers</a></li>
                <li><a href="/compilations" className="text-white hover:text-orange-500 transition-colors text-sm sm:text-base block py-1">Store</a></li>
                <li><a href="/videos" className="text-white hover:text-orange-500 transition-colors text-sm sm:text-base block py-1">Lecture Videos</a></li>
                <li><a href="/faculty" className="text-white hover:text-orange-500 transition-colors text-sm sm:text-base block py-1">Faculty</a></li>
              </ul>
            </div>
            
            {/* Contact - Only visible on mobile in this position */}
            <div className="sm:hidden">
              <h4 className="text-white font-semibold mb-4 text-base">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: info@cademy.com</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          {/* Contact - Only visible on desktop */}
          <div className="hidden sm:block">
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Email: info@cademy.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Cademy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;