import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, User, Building2, Mail, Phone } from "lucide-react";

interface AccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  fullName: string;
  email: string;
  orgName: string;
  mobile: string;
  role: string;
  teamSize: string;
}

const AccessModal = ({ open, onOpenChange }: AccessModalProps) => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    orgName: "",
    mobile: "",
    role: "",
    teamSize: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleClose = (open: boolean) => {
    if (!open) {
      setTimeout(() => {
        setStep(0);
        setSubmitted(false);
        setForm({ fullName: "", email: "", orgName: "", mobile: "", role: "", teamSize: "" });
      }, 300);
    }
    onOpenChange(open);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const isStepValid = () => {
    if (step === 0) return form.fullName.trim() !== "" && form.email.trim() !== "";
    if (step === 1) return form.orgName.trim() !== "";
    if (step === 2) return form.mobile.trim() !== "";
    return false;
  };

  const steps = [
    { label: "You", icon: User },
    { label: "Company", icon: Building2 },
    { label: "Contact", icon: Phone },
  ];

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
            <div className="flex items-center justify-between mb-5">
              <span className="text-lg font-bold text-foreground">Saral AI</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                Early Access
              </span>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mb-6">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      i === step
                        ? "bg-primary/15 text-primary"
                        : i < step
                        ? "bg-primary/10 text-primary/70"
                        : "bg-secondary/50 text-muted-foreground/50"
                    }`}
                  >
                    <s.icon className="w-3 h-3" />
                    {s.label}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-4 h-px transition-colors duration-300 ${
                        i < step ? "bg-primary/40" : "bg-border/40"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step content */}
            <form onSubmit={handleSubmit}>
              <div className="min-h-[160px]">
                {step === 0 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-1">Tell us about yourself</h2>
                      <p className="text-muted-foreground text-sm">We'd love to know who's joining.</p>
                    </div>
                    <Input
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      placeholder="Full name"
                      required
                      className="h-11 bg-secondary/50 border-border/50 rounded-xl placeholder:text-muted-foreground/60"
                    />
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="Work email"
                      required
                      className="h-11 bg-secondary/50 border-border/50 rounded-xl placeholder:text-muted-foreground/60"
                    />
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-1">Where do you work?</h2>
                      <p className="text-muted-foreground text-sm">Helps us tailor your experience.</p>
                    </div>
                    <Input
                      value={form.orgName}
                      onChange={(e) => update("orgName", e.target.value)}
                      placeholder="Company or organization name"
                      required
                      className="h-11 bg-secondary/50 border-border/50 rounded-xl placeholder:text-muted-foreground/60"
                    />
                    <Input
                      value={form.role}
                      onChange={(e) => update("role", e.target.value)}
                      placeholder="Your role (e.g. Founder, Head of Talent)"
                      className="h-11 bg-secondary/50 border-border/50 rounded-xl placeholder:text-muted-foreground/60"
                    />
                    <select
                      value={form.teamSize}
                      onChange={(e) => update("teamSize", e.target.value)}
                      className="w-full h-11 bg-secondary/50 border border-border/50 rounded-xl px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 appearance-none"
                    >
                      <option value="" className="bg-card text-muted-foreground/60">Team size (optional)</option>
                      <option value="1-10" className="bg-card">1–10</option>
                      <option value="11-50" className="bg-card">11–50</option>
                      <option value="51-200" className="bg-card">51–200</option>
                      <option value="200+" className="bg-card">200+</option>
                    </select>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-1">How can we reach you?</h2>
                      <p className="text-muted-foreground text-sm">We'll only contact you when it matters.</p>
                    </div>
                    <Input
                      type="tel"
                      value={form.mobile}
                      onChange={(e) => update("mobile", e.target.value)}
                      placeholder="Mobile number (with country code)"
                      required
                      className="h-11 bg-secondary/50 border-border/50 rounded-xl placeholder:text-muted-foreground/60"
                    />
                    <p className="text-xs text-muted-foreground/50 flex items-center gap-1.5">
                      <Mail className="w-3 h-3" />
                      We'll also reach out via {form.email || "your email"}
                    </p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-6">
                {step > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep(step - 1)}
                    className="h-11 px-4 rounded-xl text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                )}
                <Button
                  type="submit"
                  disabled={!isStepValid()}
                  className="flex-1 h-11 bg-foreground text-background hover:bg-foreground/90 font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-foreground/10 disabled:opacity-40"
                >
                  {step < 2 ? (
                    <>Continue <ArrowRight className="w-4 h-4 ml-1" /></>
                  ) : (
                    "Request Early Access"
                  )}
                </Button>
              </div>
            </form>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border/30">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-card object-cover"
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                200+ recruiters and founders are already inside
              </span>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 animate-fade-in">
            <div className="mb-8">
              <span className="text-lg font-bold text-foreground">Saral AI</span>
            </div>

            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Thanks, {form.fullName.split(" ")[0]}, for signing up as an early user of Saral AI.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We'll reach out to you directly with onboarding details soon.
              </p>
            </div>

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
