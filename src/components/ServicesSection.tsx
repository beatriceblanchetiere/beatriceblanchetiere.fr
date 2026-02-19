import { Users, Sparkles, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    icon: Calendar,
    title: "Appel découverte",
    subtitle: "Offert",
    details: ["30 minutes pour faire connaissance", "Explorer vos besoins", "Sans engagement"],
    highlight: true,
  },
  {
    icon: Users,
    title: "Coaching individuel",
    subtitle: "À partir de 150€/séance",
    details: ["Parcours de 6 à 10 séances", "Présentiel (Nantes) ou visio", "Accompagnement personnalisé"],
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Coaching collectif / ateliers",
    subtitle: "À partir de 150€/personne",
    details: ["½ journée – 5 à 10 personnes", "Plan d'action structuré", "Dynamique de groupe"],
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Formations sur mesure",
    subtitle: "Sur devis",
    details: ["En entreprise ou en école", "Modules de 3h à 24h", "4,5/5 de satisfaction (Audencia)"],
    highlight: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="offres" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Mes offres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement adapté à chaque étape de votre parcours
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className={`group relative bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                offer.highlight ? "border-2 border-primary/30 ring-1 ring-primary/10" : "border border-border/50"
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {offer.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Gratuit
                </div>
              )}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <offer.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {offer.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">{offer.subtitle}</p>
              <ul className="space-y-2">
                {offer.details.map((detail) => (
                  <li key={detail} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              {offer.highlight && (
                <Button variant="hero" size="sm" className="w-full mt-5 group" asChild>
                  <a href="#contact">Réserver</a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
