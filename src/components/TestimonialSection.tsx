import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card border border-border/30">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-accent" />
              </div>
            </div>

            <blockquote className="text-center">
              <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-8 italic">
                "Grâce à Béatrice, j'ai osé quitter mon CDI pour monter mon entreprise en permaculture – sans regret !"
              </p>
              <footer className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="font-display text-2xl font-semibold text-primary">L</span>
                </div>
                <cite className="not-italic">
                  <span className="font-semibold text-foreground block">Loïc</span>
                  <span className="text-muted-foreground text-sm">Entrepreneur en permaculture</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
