import { Users, Presentation, GraduationCap, Calendar, TrendingUp, Handshake, Globe } from "lucide-react";

const services = [
  { icon: Users, label: "Coaching individuel et collectif" },
  { icon: Presentation, label: "Préparation & animation des ateliers" },
  { icon: GraduationCap, label: "Interventions dans les écoles" },
  { icon: Calendar, label: "Rendez-vous découverte" },
  { icon: TrendingUp, label: "Veille (coaching, marketing, tendances sociales)" },
  { icon: Handshake, label: "Réseautage & partenariats" },
  { icon: Globe, label: "Développement du site / communication" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Activités clés
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement complet pour votre développement professionnel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="group flex items-center gap-4 bg-background rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium text-sm leading-tight">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
