import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import moneyBackGuarantee from "@/assets/money-back-guarantee.png";
import FloatingFoodEmojis from "@/components/FloatingFoodEmojis";

const PricingSection = () => {
  const plans = [
    {
      name: "Plano Básico",
      price: "R$ 17,90",
      period: "",
      description: "Perfeito para começar sua jornada",
      features: [
        "**Análise nutricional limitada**",
        "**1 Relatório Semanal**",
        "**40 Técnicas de Perda de Peso em casa**",
        "**Sem Suporte Personalizado**",
        "**Sem Inteligência Artificial**",
        "**Sem Acesso Vitalício**",
        "**Sem Atualização Semanal do Aplicativo**",
      ],
      popular: false,
      link: "https://www.ggcheckout.com/checkout/v2/D6UKDIIs8RxuATKAOTOr",
    },
    {
      name: "Plano Premium",
      price: "R$ 29,90",
      period: "",
      originalPrice: "R$ 97,00",
      description: "Melhor custo-benefício",
      features: [
        "**Tudo do plano básico**",
        "**Desconto de 70%**",
        "**+10 Relatórios Semanais**",
        "**Metas personalizadas**",
        "**Suporte Personalizado 24/7**",
        "**Backup na nuvem**",
        "**Pacote com +100 Técnicas de Perda de Peso em Casa**",
        "**Pacote com +100 Receitas Gostosas Fáceis**",
        "**1 Inteligência Artificial Saudável**",
        "**Acesso vitalício para sempre**",
        "**Atualizações Semanais do Aplicativo**",
      ],
      popular: true,
      link: "https://www.ggcheckout.com/checkout/v2/qIkJhw473rm4lMFcO9Em",
    },
  ];

  return (
    <section id="pricing" className="relative pt-8 pb-20 bg-background">
      <FloatingFoodEmojis density={25} />
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
              id={plan.popular ? "plano-premium" : undefined}
              className={`p-8 relative overflow-hidden ${
                plan.popular
                  ? "border-4 border-primary shadow-2xl scale-110 bg-gradient-to-br from-yellow-300 via-amber-200 to-orange-300 ring-4 ring-primary/30 animate-pulse-glow"
                  : "border-2 border-green-400 hover:border-green-500 bg-gradient-to-br from-green-200 via-emerald-100 to-green-300 shadow-lg hover:shadow-xl"
              } transition-all duration-500 hover:scale-105 transform`}
            >
              {plan.popular && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  🔥 MAIS POPULAR 🔥
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-center justify-center gap-2">
                  {plan.originalPrice && (
                    <span className="text-xl text-red-500 line-through font-bold">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className={`text-5xl font-extrabold ${plan.popular ? 'text-red-600 animate-pulse' : 'text-green-600'}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                {plan.popular && (
                  <div className="mt-2 text-sm font-bold text-red-600 animate-pulse">
                    ⚡ ECONOMIA DE R$ 67,10 ⚡
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span 
                      dangerouslySetInnerHTML={{
                        __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      }}
                    />
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className={`w-full font-bold text-lg py-4 ${
                  plan.popular 
                    ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-xl animate-pulse transform hover:scale-105" 
                    : "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg transform hover:scale-105"
                } transition-all duration-300`}
                asChild
              >
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  {plan.popular ? "🚀 GARANTIR AGORA! 🚀" : "Começar agora"}
                </a>
              </Button>
              {plan.popular && (
                <div className="mt-4 text-center">
                  <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                    <p className="text-red-700 font-bold text-sm">
                      ⏰ OFERTA LIMITADA - ÚLTIMAS VAGAS!
                    </p>
                  </div>
                </div>
              )}
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
