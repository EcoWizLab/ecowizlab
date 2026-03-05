import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-[15%] w-96 h-96 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Geometric decorations */}
      <div className="absolute top-32 right-[20%] w-16 h-16 border border-primary/30 rotate-45 animate-float" />
      <div className="absolute bottom-40 left-[15%] w-10 h-10 border border-accent/30 rotate-12 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 left-[8%] w-6 h-6 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-muted-foreground opacity-0 animate-fade-in-up">
          <Sparkles size={14} className="text-accent" />
          Pioneering the future of Ethereum
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Ethereum Client Research
          <br />
          <span className="text-gradient">& Zero Knowledge Proofs</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Building the next generation of blockchain infrastructure through
          cutting-edge research, protocol optimization, and zero-knowledge
          cryptography.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground glow-primary font-display font-semibold px-8">
            Get Started <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="border-border/60 hover:bg-muted font-display font-semibold px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
