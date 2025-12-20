import { Button } from "@/components/ui/button";

interface HeaderProps {
  onGetAccess: () => void;
}

const Header = ({ onGetAccess }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Saral AI
          </span>
        </div>
        <Button
          onClick={onGetAccess}
          className="rounded-full px-6 h-10 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all duration-200 hover:scale-[1.02]"
        >
          Get Access
        </Button>
      </div>
    </header>
  );
};

export default Header;
