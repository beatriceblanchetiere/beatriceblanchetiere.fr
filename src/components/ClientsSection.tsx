import { Briefcase, RefreshCw, GraduationCap } from "lucide-react";

const clients = [
  {
    icon: RefreshCw,
    title: "Professionnels en transition",
    description: "Vous questionnez votre parcours et cherchez à clarifier votre prochaine étape avec discernement.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs & managers",
    description: "Vous voulez structurer et légitimer votre projet, ou évoluer dans votre positionnement de leader.",
  },
  {
    icon: GraduationCap,
    title: "Étudiants & jeunes diplômés",
    description: "En école de commerce, design ou luxe, vous préparez votre entrée dans le monde professionnel.",
  },
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Pourquoi ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            J'accompagne ceux qui veulent avancer avec intention et construire un projet qui leur ressemble
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center border border-border/50"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <client.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {client.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
