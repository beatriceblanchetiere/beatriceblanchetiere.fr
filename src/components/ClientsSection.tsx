import { Briefcase, RefreshCw, GraduationCap } from "lucide-react";

const clients = [
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description: "Vous voulez structurer et légitimer votre projet de reprise ou de création d'entreprise.",
  },
  {
    icon: RefreshCw,
    title: "Managers & cadres",
    description: "En évolution ou en repositionnement, vous cherchez à affirmer votre posture de leader.",
  },
  {
    icon: GraduationCap,
    title: "Professionnels en transition",
    description: "Vous souhaitez clarifier votre prochaine étape avec discernement et confiance.",
  },
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Pour qui ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je travaille avec des profils exigeants qui s'engagent dans une reprise ou une création d'entreprise et veulent en faire une décision stratégique maîtrisée, pas un saut dans le vide.
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
