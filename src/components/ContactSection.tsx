import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message envoyé avec succès ! Je vous répondrai rapidement.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-background mb-4">
              Prenons contact
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Prêt(e) à avancer ? Réservez un appel découverte gratuit ou envoyez-moi un message.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Calendly CTA */}
            <div className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-background/10 flex flex-col justify-center">
              <Calendar className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-display text-2xl font-semibold text-background mb-4">
                Réserver un appel découverte
              </h3>
              <p className="text-background/70 mb-8 leading-relaxed">
                30 minutes pour faire connaissance, explorer vos besoins et voir comment je peux vous accompagner. Sans engagement.
              </p>
              <Button variant="hero" size="lg" className="w-fit group" asChild>
                <a href="https://calendly.com/bblanchetiere/" target="_blank" rel="noopener noreferrer">
                  Choisir un créneau
                  <Calendar className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-2xl p-8 text-foreground">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Envoyer un message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nom</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Décrivez brièvement votre situation..." rows={4} required className="resize-none" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
