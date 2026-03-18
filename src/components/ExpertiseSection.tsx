import { Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "25 ans", label: "d'expérience" },
  { icon: Users, value: "500+", label: "clients accompagnés" },
  { icon: Award, value: "ICF Level 2", label: "Certification" },
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
              Coach certifiée <span className="text-foreground font-medium">ICF Level 2 & RNCP</span>, j'accompagne des créateurs et repreneurs d'entreprise dans leurs décisions les plus structurantes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Mon parcours est celui d'une entrepreneuse : le marketing stratégique chez <span className="text-foreground font-medium">LVMH</span>, la création d'<span className="text-foreground font-medium">URBAIN</span> — institut de soin au masculin, plus de 500 clients accompagnés — puis le développement d'une activité de formation auprès des grandes écoles de commerce, dont <span className="text-foreground font-medium">Audencia</span> et l'<span className="text-foreground font-medium">ISG Luxury Program</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Je sais ce que c'est que de se lancer, de douter, de chercher sa place tout en gardant le cap. C'est cette expérience — autant que mes certifications — qui me permet de vous accompagner avec <span className="text-primary font-medium">exigence et bienveillance</span>.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6">
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
