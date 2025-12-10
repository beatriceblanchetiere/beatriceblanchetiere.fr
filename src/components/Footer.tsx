import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Béatrice Blanchetière
            </h3>
            <p className="text-muted-foreground">
              Coach professionnelle certifiée ICF & RNCP
            </p>
          </div>

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
              href="mailto:contact@beatrice-coaching.fr"
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              aria-label="Envoyer un email"
            >
              <Mail className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
            </a>
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
