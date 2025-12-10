import { Award, Target, Heart, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Double certification",
    description: "ICF Level 2 + RNCP : Un gage de sérieux et d'éthique professionnelle reconnu internationalement.",
  },
  {
    icon: Target,
    title: "Spécialisation entrepreneuriale",
    description: "Expertise dédiée aux projets entrepreneuriaux et aux transitions professionnelles majeures.",
  },
  {
    icon: Lightbulb,
    title: "Outils éprouvés",
    description: "Quadrant d'Ofman, Triangle de Karpman et autres méthodes pour des résultats concrets et durables.",
  },
  {
    icon: Heart,
    title: "Approche bienveillante",
    description: "Un accompagnement sans jugement, car douter est normal et fait partie du chemin vers la réussite.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Pourquoi me choisir ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement sur-mesure pour transformer vos aspirations en réalité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
