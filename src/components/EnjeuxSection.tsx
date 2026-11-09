import { Check } from "lucide-react";

const enjeux = [
  "Décider si vous développez, recentrez ou repositionnez votre activité",
  "Préparer une reprise ou une cession, et choisir le bon moment",
  "Trancher une décision qui vous bloque depuis des mois",
  "Réorganiser votre entreprise quand elle a grandi",
  "Trouver votre place face à vos associés et vos équipes",
  "Passer de la réflexion à un plan d'action daté",
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
              Ce que nous travaillons ensemble
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
