import { Check } from "lucide-react";

const resources = [
  "Mon expertise en marketing stratégique / marque / luxe",
  "Mon expérience pédagogique",
  "Mes compétences de coach certifiée (ICF niveau 2 / RNCP)",
  "Ma posture (écoute, profondeur, clarté)",
  "Mes ressources matérielles : site web, Linkedin, logiciel visio, outils coaching",
  "Supervision & formation continue",
];

const ExpertiseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ressources clés
            </h2>
            <p className="text-lg text-muted-foreground">
              L'expertise et les outils au service de votre transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/50"
              >
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{resource}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
