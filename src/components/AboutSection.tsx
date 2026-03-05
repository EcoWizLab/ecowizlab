import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Projects Shipped" },
  { value: 25, suffix: "+", label: "Research Papers" },
  { value: 8, suffix: "", label: "Team Members" },
  { value: 99, suffix: "%", label: "Uptime Guarantee" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Advancing the <span className="text-gradient">Ethereum Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EcoWizLab is at the forefront of Ethereum client optimization and
            zero-knowledge proof systems. We combine rigorous academic research
            with practical engineering to push the boundaries of what's possible
            in decentralized infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center hover:glow-primary transition-shadow duration-300">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
