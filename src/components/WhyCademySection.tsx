import { Card } from "@/components/ui/card";
import { FileText, UserCheck, Users, Award } from "lucide-react";

const WhyCademySection = () => {
  const valueProps = [
    {
      icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-secondary" />,
      title: "Organized, clean past paper access",
      description: "Well-structured archive of question papers and mark schemes from 2018-2025, sorted by subject and exam level."
    },
    {
      icon: <UserCheck className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-secondary" />,
      title: "Manual teacher routines & verified content",
      description: "Carefully curated content by experienced educators with regular updates and quality verification."
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-secondary" />,
      title: "Trusted by students across Bangladesh",
      description: "Join thousands of successful students who have achieved their academic goals with Cademy's resources."
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 text-secondary" />,
      title: "Proven success methodology",
      description: "Our systematic approach has helped students achieve outstanding results in their IGCSE and IAL examinations."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-cademy-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Cademy?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best educational resources for your academic success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {valueProps.map((prop, index) => (
            <Card key={index} className="p-4 sm:p-6 md:p-8 text-center h-full shadow-card hover:shadow-elevated transition-all duration-300 border-2 hover:border-secondary/20">
              <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                {prop.icon}
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-primary mb-2 sm:mb-3 md:mb-4">
                {prop.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
                {prop.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCademySection;