import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import moneyBackGuarantee from "@/assets/money-back-guarantee.png";

const PricingSection = () => {
  const plans = [
    {
      name: "Plano Básico",
      price: "R$ 10,00",
      period: "",
      description: "Perfeito para começar sua jornada",
      features: [
        "Análise nutricional limitada",
        "Relatórios semanais",
        "Banco de +50mil alimentos",
      ],
      popular: false,
      link: "https://www.ggcheckout.com/checkout/v2/D6UKDIIs8RxuATKAOTOr",
    },
    {
      name: "Plano Premium",
      price: "R$ 19,90",
      period: "",
      originalPrice: "R$ 97,00",
      description: "Melhor custo-benefício",
      features: [
        "Tudo do plano básico",
        "Desconto de 80%",
        "Relatórios avançados",
        "Metas personalizadas",
        "Suporte VIP 24/7",
        "Backup na nuvem",
      ],
      popular: true,
      link: "https://www.ggcheckout.com/checkout/v2/qIkJhw473rm4lMFcO9Em",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Escolha seu <span className="gradient-text">plano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invista na sua saúde com preços que cabem no seu bolso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative overflow-hidden ${
                plan.popular
                  ? "border-primary shadow-lg scale-105 bg-gradient-to-b from-primary/5 to-accent/5"
                  : "border-border hover:border-primary/50"
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Mais popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-center justify-center gap-2">
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  Começar agora
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center">
            <img 
              src={moneyBackGuarantee} 
              alt="Seu dinheiro de volta - 7 dias de garantia"
              className="max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
