import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, Twitter, Linkedin } from "lucide-react";

const team = [
  { name: "Alex Chen", role: "Founder & CEO", initials: "AC" },
  { name: "Maya Patel", role: "Head of ZK Research", initials: "MP" },
  { name: "Liam Okafor", role: "Protocol Engineer", initials: "LO" },
  { name: "Sofia Ruiz", role: "Security Researcher", initials: "SR" },
  { name: "Jin Tanaka", role: "Consensus Engineer", initials: "JT" },
  { name: "Ava Lindström", role: "Cryptographer", initials: "AL" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            World-class researchers and engineers pushing the boundaries of Ethereum and ZK technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="glass rounded-xl p-6 text-center group hover:glow-accent transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                <AvatarFallback className="bg-muted text-foreground font-display text-lg font-semibold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-display font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
              <div className="flex justify-center gap-3">
                {[Twitter, Github, Linkedin].map((Icon, j) => (
                  <a
                    key={j}
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
