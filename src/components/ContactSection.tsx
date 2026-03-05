import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground">
              Interested in collaborating or learning more? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input
                  required
                  placeholder="Your name"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea
                required
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/80 glow-primary font-display font-semibold"
            >
              {loading ? "Sending..." : "Send Message"} <Send size={16} />
            </Button>
          </form>

          <div className="flex justify-center gap-6 mt-10">
            {[
              { icon: Mail, label: "Email", href: "mailto:hello@ecowizlab.com" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Github, label: "GitHub", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
