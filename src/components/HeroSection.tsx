import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import beatricePhoto from "@/assets/beatrice-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20">
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 opacity-0 animate-fade-in-up">
              Coach certifiée ICF Level 2 & RNCP · 25 ans d'expérience
            </p>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-semibold text-foreground leading-[1.15] mb-5 opacity-0 animate-fade-in-up animation-delay-100">
              Coaching stratégique pour dirigeants exigeants
            </h1>

            <p className="font-display text-xl md:text-2xl text-primary italic mb-6 opacity-0 animate-fade-in-up animation-delay-150">
              Vision · Positionnement · Décision
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
              Je vous accompagne pour clarifier votre projet, renforcer votre
              légitimité et passer à l'action avec confiance — que vous soyez
              entrepreneur, manager ou en transition professionnelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-300">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="#contact">
                  Réserver un appel offert
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="group border-primary/30 text-foreground hover:bg-primary/5" asChild>
                <a href="#offres">
                  Découvrir mes offres
                  <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in-up animation-delay-200">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-primary/5 rounded-3xl blur-2xl" />
              <img
                src={beatricePhoto}
                alt="Béatrice Blanchetière — Coach professionnelle certifiée ICF"
                className="relative rounded-2xl shadow-xl w-full max-w-sm lg:max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
