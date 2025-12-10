import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import beatricePhoto from "@/assets/beatrice-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Coach certifiée ICF Level 2
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-100">
              Clarté, confiance &{" "}
              <span className="text-gradient">alignement</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-xl mb-6 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
              J'accompagne les entrepreneurs et les professionnels en transition à (re)trouver clarté, confiance et alignement pour construire un projet solide, viable et profondément juste pour eux.
            </p>

            {/* Strength */}
            <p className="text-base font-medium text-foreground mb-8 opacity-0 animate-fade-in-up animation-delay-300">
              <span className="text-primary">Ma force :</span> allier une vision stratégique héritée du marketing et une écoute profonde issue du coaching.
            </p>

            {/* Promise, Posture, Positioning */}
            <div className="space-y-3 mb-8 opacity-0 animate-fade-in-up animation-delay-400">
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">→</span>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Une promesse claire :</span>{" "}
                  avancer avec cohérence, calme et discernement
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">→</span>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Une posture :</span>{" "}
                  structurée, exigeante, humaine
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">→</span>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Un positionnement :</span>{" "}
                  premium, sobre, professionnel
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-500">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="#contact">
                  Réserver un appel découverte
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in-up animation-delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={beatricePhoto}
                alt="Béatrice Blanchetière - Coach certifiée ICF"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
