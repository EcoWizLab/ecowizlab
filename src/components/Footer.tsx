const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-display font-semibold text-gradient">EcoWizLab</span>
      <span>© {new Date().getFullYear()} EcoWizLab. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
