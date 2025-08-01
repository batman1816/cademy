import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fatima Rahman",
      grade: "A-level Student",
      text: "Cademy's past papers helped me ace my A-level exams! The organized structure made studying so much easier.",
      rating: 5
    },
    {
      name: "Arif Hassan",
      grade: "O-level Student", 
      text: "The chapter-wise resources are incredibly detailed. I improved my grades significantly after using Cademy.",
      rating: 5
    },
    {
      name: "Nusrat Jahan",
      grade: "A-level Student",
      text: "Faculty profiles helped me connect with the right teachers. The video lectures are top-notch quality!",
      rating: 5
    },
    {
      name: "Ahmed Khan",
      grade: "O-level Student",
      text: "The study routine feature helped me stay organized and focused. Highly recommend Cademy for exam preparation!",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Students Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Join thousands of successful students across Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-3 sm:p-4 md:p-6 shadow-card hover:shadow-elevated transition-all duration-300 relative">
              {/* Quote bubble tail */}
              <div className="absolute -top-2 left-6 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-card border-l border-t border-border transform rotate-45"></div>
              
              {/* Rating */}
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-4 sm:mb-6 italic text-xs sm:text-sm md:text-base leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-3 sm:pt-4">
                <h4 className="font-semibold text-primary text-xs sm:text-sm md:text-base">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground">{testimonial.grade}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8 sm:mt-12">
          <Card className="inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-card">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="font-semibold text-primary text-sm sm:text-base">4.9/5</span>
              <span className="text-muted-foreground text-xs sm:text-sm">from 1,200+ reviews</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;