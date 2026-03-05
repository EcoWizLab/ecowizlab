import { Shield, Cpu, Lock, Network } from "lucide-react";

const areas = [
  {
    icon: Cpu,
    title: "Ethereum Client Development",
    description:
      "Building and optimizing execution and consensus layer clients for maximum performance, reliability, and security.",
  },
  {
    icon: Lock,
    title: "ZK Proof Systems",
    description:
      "Designing efficient zero-knowledge proof circuits and protocols that enable scalable, private computation on-chain.",
  },
  {
    icon: Shield,
    title: "Protocol Security Audits",
    description:
      "Rigorous formal verification and security analysis of smart contracts, consensus mechanisms, and cryptographic primitives.",
  },
  {
    icon: Network,
    title: "Consensus Research",
    description:
      "Advancing consensus algorithms with novel approaches to finality, validator economics, and network resilience.",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Research <span className="text-gradient">Areas</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our core focus spans the full stack of Ethereum infrastructure and zero-knowledge cryptography.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className="glass rounded-xl p-8 group hover:glow-primary transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <area.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
