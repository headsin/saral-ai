import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface AccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AccessModal = ({ open, onOpenChange }: AccessModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 300);
    }
    onOpenChange(open);
  };

  // Avatar images for social proof
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 border-border/20 bg-card rounded-2xl shadow-2xl overflow-hidden">
        {!submitted ? (
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6">
              <span className="text-lg font-bold text-foreground">Saral AI</span>
            </div>

            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                Access opening in 2025
              </span>
            </div>

            {/* Main content */}
            <div className="space-y-3 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Get access to Saral AI
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                An AI native sourcing and screening OS built for high signal hiring teams.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-secondary/50 border-border/50 rounded-xl focus:border-primary focus:ring-primary/20 placeholder:text-muted-foreground/60"
                placeholder="Enter your work email"
              />
              <Button
                type="submit"
                className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-medium text-base rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-foreground/10"
              >
                Request Access
              </Button>
            </form>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/50">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-card object-cover"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">
                200+ recruiters and founders are already inside
              </span>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground/60 text-center">
                © 2025 Saral AI. All rights reserved.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 animate-fade-in">
            {/* Header */}
            <div className="mb-8">
              <span className="text-lg font-bold text-foreground">Saral AI</span>
            </div>

            {/* Success icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Confirmation message */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                You're on our radar.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                If Saral AI fits your hiring flow, we will reach out personally.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground/60 text-center">
                © 2025 Saral AI. All rights reserved.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AccessModal;
