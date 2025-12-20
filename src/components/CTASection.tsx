import { Button } from "@/components/ui/button";
import { Users, Target, Sparkles } from "lucide-react";

interface CTASectionProps {
  onGetAccess: () => void;
}

const CTASection = ({ onGetAccess }: CTASectionProps) => {
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
          <div className="flex justify-center gap-8 mb-12 animate-fade-in-up">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center border border-border">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30 -mt-2">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center border border-border">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
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
