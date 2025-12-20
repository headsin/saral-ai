import { useEffect, useRef, useState } from "react";

const QuoteSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="quote-section" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-slow"
          style={{ background: "var(--gradient-glow)" }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-relaxed text-foreground">
            "The AI native hiring OS designed around{" "}
            <span className="gradient-text">human decision making</span>."
          </blockquote>
          
          {/* Decorative line */}
          <div 
            className={`mt-8 mx-auto h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-1000 delay-300 ${
              isVisible ? "w-32 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
