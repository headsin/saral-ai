import { Button } from "@/components/ui/button";
import GeometricIllustration from "./GeometricIllustration";

interface HeroSectionProps {
  onGetAccess: () => void;
}

const HeroSection = ({ onGetAccess }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              One Chat.{" "}
              <span className="gradient-text">Real</span>{" "}
              Hiring Intelligence.
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl text-foreground/90 font-medium leading-relaxed">
                Write intent. Saral finds, scores, and ranks candidates in real time.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                An AI native sourcing and screening OS built for recruiters who care about signal, not volume.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={onGetAccess}
                size="lg"
                className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/10"
              >
                Get Access
              </Button>
              <button
                onClick={() => {
                  document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-foreground font-medium text-base transition-colors duration-200 underline-offset-4 hover:underline"
              >
                See how it works
              </button>
            </div>
          </div>

          {/* Right illustration */}
          <div 
            className="relative lg:pl-12 animate-fade-in-up" 
            style={{ animationDelay: "0.3s" }}
          >
            <GeometricIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
