import { Eye, Lightbulb, Target, Compass, Rocket } from "lucide-react";

const enjeux = [
  { icon: Eye, label: "Clarifier une vision professionnelle ambitieuse et réaliste" },
  { icon: Lightbulb, label: "Renforcer sa posture et sa légitimité" },
  { icon: Target, label: "Structurer une stratégie de transition" },
  { icon: Compass, label: "Prendre des décisions complexes avec discernement" },
  { icon: Rocket, label: "Passer de la réflexion à l'action" },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Enjeux */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Pour quels enjeux ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Les situations dans lesquelles je vous accompagne
              </p>
              <div className="space-y-4">
                {enjeux.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/50 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mon expertise */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Mon expertise
              </h2>
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Coach certifiée <span className="text-foreground font-medium">(ICF Level 2 et RNCP)</span> et experte en transitions professionnelles, j'accompagne depuis plusieurs années des profils exigeants dans leurs décisions professionnelles.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mon parcours allie <span className="text-foreground font-medium">25 ans d'expérience en marketing stratégique (LVMH)</span>, entrepreneuriat (500 clients avec URBAIN, institut au masculin) et formation (Audencia, ISG).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cette double expertise <span className="text-primary font-medium">stratégique et humaine</span> me permet de combiner vision, structure et profondeur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
