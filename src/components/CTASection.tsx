import { Button } from "@/components/ui/button";
import { Users, Target, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface CTASectionProps {
  onGetAccess: () => void;
}

const CTASection = ({ onGetAccess }: CTASectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 800);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const icons = [
    { Icon: Users, size: "w-8 h-8", containerSize: "w-16 h-16", offset: "" },
    { Icon: Target, size: "w-10 h-10", containerSize: "w-20 h-20", offset: "-mt-2" },
    { Icon: Sparkles, size: "w-8 h-8", containerSize: "w-16 h-16", offset: "" },
  ];

  const getIconStyles = (index: number) => {
    const isActive = activeIndex === index && !prefersReducedMotion;
    
    return {
      container: `${icons[index].containerSize} rounded-2xl flex items-center justify-center border ${icons[index].offset}`,
      containerStyle: {
        background: isActive ? "rgba(45, 212, 191, 0.15)" : "hsl(var(--secondary))",
        borderColor: isActive ? "rgba(45, 212, 191, 0.4)" : "hsl(var(--border))",
        transform: isActive ? "scale(1.05)" : "scale(1)",
        opacity: isActive ? 1 : 0.5,
        boxShadow: isActive ? "0 0 40px rgba(45, 212, 191, 0.25), 0 0 20px rgba(45, 212, 191, 0.15)" : "none",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      } as React.CSSProperties,
      icon: `${icons[index].size}`,
      iconStyle: {
        color: isActive ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.4)",
        transition: "color 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      } as React.CSSProperties,
    };
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow effect */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Illustration Icons */}
          <div 
            className="flex justify-center gap-8 mb-12 animate-fade-in-up"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {icons.map((item, index) => {
              const styles = getIconStyles(index);
              return (
                <div 
                  key={index} 
                  className={styles.container}
                  style={styles.containerStyle}
                >
                  <item.Icon className={styles.icon} style={styles.iconStyle} />
                </div>
              );
            })}
          </div>

          {/* Content */}
          <div className="text-center space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Hire smarter.{" "}
              <span className="gradient-text">Not harder.</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join recruiters who are already using AI to find the right candidates faster. 
              Less noise, more signal.
            </p>

            <div className="pt-4">
              <Button
                onClick={onGetAccess}
                size="lg"
                className="rounded-full px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-lg transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/20"
              >
                Get Access Now
              </Button>
            </div>
          </div>

          {/* Stats or trust indicators */}
          <div 
            className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-16 pt-12 border-t border-border animate-fade-in-up" 
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-foreground">10x</div>
              <div className="text-sm text-muted-foreground mt-1">Faster Screening</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-foreground">90%</div>
              <div className="text-sm text-muted-foreground mt-1">Less Manual Work</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-foreground">AI Native</div>
              <div className="text-sm text-muted-foreground mt-1">Built for Recruiters</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
