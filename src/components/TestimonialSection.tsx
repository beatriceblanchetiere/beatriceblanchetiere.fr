import { Quote, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_REVIEWS_URL = "https://share.google/RKRWShptRbET6ecwq";

const testimonials = [
  {
    text: "Grâce à Béatrice, j'ai enfin osé lancer mon entreprise avec sérénité !",
    name: "Loïc",
    role: "Entrepreneur",
    initial: "L",
    google: false,
  },
  {
    text: "Béatrice est une professionnelle de grande qualité, ancrée et fiable. Elle maîtrise avec justesse sa posture de coach et comprend en profondeur les problématiques de ses clients, pour les avoir elle-même vécues.",
    name: "Christelle B.",
    initial: "C",
    google: true,
  },
  {
    text: "Béatrice maîtrise parfaitement son sujet et apporte une vraie valeur dans l'accompagnement des entrepreneurs et des créateurs de société.",
    name: "Thomas Z.",
    initial: "T",
    google: true,
  },
  {
    text: "Béatrice est une personne à la posture tellement juste et au questionnement efficace qu'elle nous permet d'avancer efficacement sur notre chemin.",
    name: "Delphine A.",
    initial: "D",
    google: true,
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4" aria-label="5 étoiles sur 5">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
    ))}
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ils en parlent
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Stars />
            <span className="text-sm text-muted-foreground">5/5 · 9 avis Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/40"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-5" />
              {t.google && <Stars />}
              <blockquote>
                <p className="font-display text-lg text-foreground leading-relaxed mb-6 italic">
                  « {t.text} »
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-display text-base font-semibold text-primary">{t.initial}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block text-sm">{t.name}</span>
                    <span className="text-muted-foreground text-xs">{t.google ? "Avis Google" : t.role}</span>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="group border-primary/30 text-foreground hover:bg-primary/5" asChild>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Voir tous les avis sur Google
              <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
