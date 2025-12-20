import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import AccessModal from "@/components/AccessModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleGetAccess = () => {
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background dot-grid">
      <Header onGetAccess={handleGetAccess} />
      <main>
        <HeroSection onGetAccess={handleGetAccess} />
        <QuoteSection />
      </main>
      <AccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
