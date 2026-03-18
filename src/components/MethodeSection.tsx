import { Search, Map, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Clarté",
    description: "Vos moteurs, vos forces, vos priorités. Ce qui fait de vous un dirigeant singulier.",
  },
  {
    icon: Map,
    number: "02",
    title: "Stratégie",
    description: "Un plan structuré, cohérent et ancré dans votre réalité.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Action",
    description: "Des décisions assumées. Des résultats concrets.",
  },
];

const MethodeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ma méthode
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="relative z-10">
                <div className="w-20 h-20 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block">
                  Étape {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodeSection;
