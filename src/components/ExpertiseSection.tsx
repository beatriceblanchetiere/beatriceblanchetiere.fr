import { Award, Clock, GraduationCap, Star } from "lucide-react";

const stats = [
  { icon: Clock, value: "25+ ans", label: "du luxe à l'entrepreneuriat" },
  { icon: GraduationCap, value: "20 ans", label: "d'enseignement à Audencia et à l'ISG Luxury Management" },
  { icon: Star, value: "4,5/5", label: "de satisfaction (Audencia)" },
  { icon: Award, value: "RNCP", label: "coach certifiée" },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Mon expertise
            </h2>
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-10 border border-border/40 shadow-card mb-10">
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              J'ai commencé dans le luxe, chez <span className="text-foreground font-medium">Parfums Céline</span> puis au <span className="text-foreground font-medium">Bon Marché</span>. Puis j'ai créé <span className="text-foreground font-medium">URBAIN</span>, un institut de soin au masculin, que j'ai dirigé trois ans avant de m'en séparer. Continuer, changer de cap, céder : ces questions, je me les suis posées.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Depuis près de 20 ans, j'enseigne le marketing stratégique et l'entrepreneuriat à <span className="text-foreground font-medium">Audencia</span> (4,5/5 de satisfaction) et à l'<span className="text-foreground font-medium">ISG Luxury Management</span>. Coach certifiée RNCP, formée chez <span className="text-foreground font-medium">Coaching Ways France</span> (école accréditée ICF Level 2), je vous aide à prendre vos grandes décisions avec le regard d'une stratège et l'écoute d'une coach.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center bg-background rounded-xl p-5 border border-border/40">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="font-display text-xl md:text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
