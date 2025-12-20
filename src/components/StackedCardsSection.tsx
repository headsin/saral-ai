import { useEffect, useRef, useState } from "react";
import card1Image from "@/assets/card-1-search-ui.png";
import card2Image from "@/assets/card-2-flow-abstract.png";
import card3Image from "@/assets/card-3-nodes-icon.png";
import card4Image from "@/assets/card-4-dashboard.png";

const StackedCardsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute("data-card-index") || "0");
            setVisibleCards((prev) => {
              if (!prev.includes(cardIndex)) {
                return [...prev, cardIndex];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-card-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getCardAnimation = (index: number) => {
    const isVisible = visibleCards.includes(index);
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(40px)",
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
    };
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Wide card with image on right */}
          <div
            data-card-index="0"
            style={getCardAnimation(0)}
            className="lg:col-span-2 bg-[#121212] rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Intelligent hiring software is the <span className="text-muted-foreground">future</span>
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  Saral AI understands hiring intent, candidate signals, and decision outcomes, not just resumes.
                </p>
              </div>
              <div className="relative">
                <img
                  src={card1Image}
                  alt="AI-powered candidate search interface with match scores"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - Small card with abstract visual */}
          <div
            data-card-index="1"
            style={getCardAnimation(1)}
            className="bg-[#121212] rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="space-y-6">
              <img
                src={card2Image}
                alt="Abstract flow visualization representing AI reasoning"
                className="w-full h-40 object-contain"
              />
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  It doesn't just use AI. It's built <span className="text-muted-foreground">around</span> it.
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Every layer is designed around reasoning, ranking, and recruiter judgment.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Small card with gradient background */}
          <div
            data-card-index="2"
            style={getCardAnimation(2)}
            className="bg-gradient-to-br from-[#121212] to-[#1a0a2e] rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="space-y-6">
              <img
                src={card3Image}
                alt="Connected nodes representing system architecture"
                className="w-full h-40 object-contain"
              />
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  Built for builders and <span className="text-muted-foreground">recruiters</span>
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Fewer steps. Higher signal. Faster hiring decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Wide card with image on left */}
          <div
            data-card-index="3"
            style={getCardAnimation(3)}
            className="lg:col-span-2 bg-[#121212] rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src={card4Image}
                  alt="Dashboard showing ranked candidate shortlist with signal indicators"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Power to <span className="text-muted-foreground">hiring teams</span>
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  AI should reduce noise, not add more. Saral AI filters chaos into clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCardsSection;
