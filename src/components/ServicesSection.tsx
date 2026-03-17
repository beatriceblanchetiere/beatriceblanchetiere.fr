import { Calendar, Users, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    icon: Calendar,
    price: "Gratuit",
    title: "Appel découverte",
    details: ["30 minutes pour faire connaissance", "Explorer vos besoins", "Sans engagement"],
    cta: "Réserver",
    href: "#contact",
    featured: true,
  },
  {
    icon: Users,
    price: "À partir de 150€/séance",
    title: "Coaching individuel",
    details: ["Parcours de 6 à 10 séances", "Présentiel (Nantes) ou visio", "Accompagnement personnalisé"],
    cta: "En savoir plus",
    href: "#contact",
    featured: false,
  },
  {
    icon: Sparkles,
    price: "À partir de 150€/personne",
    title: "Coaching collectif / Ateliers",
    details: ["½ journée – 5 à 10 personnes", "Plan d'action structuré", "Dynamique de groupe"],
    cta: "En savoir plus",
    href: "#contact",
    featured: false,
  },
  {
    icon: GraduationCap,
    price: "Sur devis",
    title: "Formations sur mesure",
    details: ["En entreprise ou en école", "Modules de 3h à 24h", "4,5/5 de satisfaction (Audencia)"],
    cta: "Me contacter",
    href: "#contact",
    featured: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="offres" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Mes offres
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement adapté à chaque étape de votre parcours
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                offer.featured
                  ? "border-2 border-primary/40 ring-1 ring-primary/10"
                  : "border border-border/40"
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Gratuit
                </div>
              )}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <offer.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                {offer.price}
              </p>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {offer.title}
              </h3>
              <ul className="space-y-2 mb-6 flex-1">
                {offer.details.map((detail) => (
                  <li key={detail} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Button
                variant={offer.featured ? "hero" : "outline"}
                size="sm"
                className={`w-full ${!offer.featured ? "border-primary/30 text-foreground hover:bg-primary/5" : ""}`}
                asChild
              >
                <a href={offer.href}>{offer.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
