import { Check } from "lucide-react";

const enjeux = [
  "Clarifier une vision professionnelle ambitieuse et réaliste",
  "Renforcer sa posture et sa légitimité",
  "Structurer une stratégie de transition",
  "Prendre des décisions complexes avec discernement",
  "Passer de la réflexion à l'action",
];

const EnjeuxSection = () => {
  return (
    <section id="enjeux" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Pour quels enjeux ?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Les situations dans lesquelles je vous accompagne
            </p>
          </div>

          <div className="space-y-4">
            {enjeux.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border/40 hover:shadow-card transition-all duration-300"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnjeuxSection;
