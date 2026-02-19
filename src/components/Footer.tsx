import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Béatrice Blanchetière
            </h3>
            <p className="text-muted-foreground mb-1">
              Coach professionnelle certifiée ICF Level 2 & RNCP
            </p>
            <p className="text-muted-foreground text-sm">Nantes</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/béatrice-blanchetiere-3a0361a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Profil LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="mailto:contact@beatriceblanchetiere.fr"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Envoyer un email"
              >
                <Mail className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="tel:0662381800"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Appeler"
              >
                <Phone className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              06 62 38 18 00 · contact@beatriceblanchetiere.fr
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Béatrice Blanchetière - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
