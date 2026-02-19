import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Grâce à Béatrice, j'ai enfin osé lancer mon entreprise avec sérénité !",
    name: "Loïc",
    role: "Entrepreneur",
    initial: "L",
  },
  {
    text: "Son accompagnement m'a permis de clarifier mon projet en 2 séances seulement.",
    name: "Claire",
    role: "Professionnelle en reconversion",
    initial: "C",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ils en parlent
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-border/30"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-accent" />
              </div>
              <blockquote>
                <p className="font-display text-lg text-foreground leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <span className="font-display text-lg font-semibold text-primary">{t.initial}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block text-sm">{t.name}</span>
                    <span className="text-muted-foreground text-xs">{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
