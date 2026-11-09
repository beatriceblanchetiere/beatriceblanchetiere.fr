import { Briefcase, RefreshCw, GraduationCap } from "lucide-react";

const clients = [
  {
    icon: Briefcase,
    title: "Dirigeants de PME",
    description: "Votre entreprise tourne, mais la suite pose question : croissance, repositionnement, arrivée d'un associé, transmission.",
  },
  {
    icon: RefreshCw,
    title: "Créateurs et repreneurs",
    description: "Vous lancez ou reprenez une entreprise et voulez prendre vos premières décisions de dirigeant avec méthode.",
  },
  {
    icon: GraduationCap,
    title: "Professionnels en transition",
    description: "Vous êtes à un tournant et choisissez d'avancer avec discernement, à votre rythme et en pleine confiance.",
  },
];

const ClientsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Pour qui ?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            J'accompagne les dirigeants de PME, créateurs et repreneurs, à chaque tournant de leur entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center border border-border/40"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <client.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {client.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
