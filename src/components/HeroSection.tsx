import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-secondary/50 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Coach certifiée ICF Level 2 + RNCP
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            Osez votre{" "}
            <span className="text-gradient">transformation</span>
            <br />
            professionnelle
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
            Vous êtes créateur/repreneur d'entreprise ou en transition professionnelle ? 
            Je vous accompagne pour clarifier votre projet, lever vos blocages et passer à l'action avec confiance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" className="group">
              Réserver un appel découverte
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              En savoir plus
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/30 opacity-0 animate-fade-in-up animation-delay-400">
            <p className="text-sm text-muted-foreground mb-4">Accompagnement personnalisé depuis plus de 10 ans</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground">Entrepreneurs accompagnés</p>
              </div>
              <div className="w-px h-10 bg-border/50 hidden sm:block" />
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-foreground">ICF</p>
                <p className="text-sm text-muted-foreground">Certification Level 2</p>
              </div>
              <div className="w-px h-10 bg-border/50 hidden sm:block" />
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-foreground">RNCP</p>
                <p className="text-sm text-muted-foreground">Titre certifié</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
