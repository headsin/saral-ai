import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AccessModal = ({ open, onOpenChange }: AccessModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", company: "", role: "" });
      }, 300);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md border-border/50 shadow-2xl">
        {!submitted ? (
          <>
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-2xl font-semibold tracking-tight text-center">
                Step inside Saral AI
              </DialogTitle>
              <p className="text-muted-foreground text-center text-sm">
                We are opening access in small circles. Share a few details and we will reach out.
              </p>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-11 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent/20"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Work email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent/20"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="h-11 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent/20"
                  placeholder="Your company"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium">
                  Role
                </Label>
                <Input
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="h-11 bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent/20"
                  placeholder="Your role"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base rounded-full transition-all duration-200 hover:scale-[1.02]"
              >
                Request Access
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-accent"
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
            <p className="text-foreground font-medium text-lg">
              Got it. If Saral AI fits your hiring flow, you will hear from us.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AccessModal;
