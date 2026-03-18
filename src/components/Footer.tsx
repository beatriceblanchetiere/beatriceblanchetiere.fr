import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">
              Béatrice Blanchetière
            </h3>
            <p className="text-muted-foreground text-sm">
              Coach professionnelle certifiée ICF Level 2 & RNCP
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Nantes · contact@beatriceblanchetiere.fr
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/béatrice-blanchetiere-3a0361a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="mailto:contact@beatriceblanchetiere.fr"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Béatrice Blanchetière — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
