import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🤖",
      title: "Inteligência Artificial Avançada",
      description: "Nossa IA reconhece automaticamente os alimentos e calcula todos os nutrientes com precisão.",
    },
    {
      icon: "💬",
      title: "Interface WhatsApp",
      description: "Use o app que você já conhece. Sem necessidade de baixar nada novo ou aprender interfaces complexas.",
    },
    {
      icon: "📊",
      title: "Acompanhamento Completo",
      description: "Monitore calorias, macros, micros e seu progresso de forma visual e intuitiva.",
    },
    {
      icon: "⚡",
      title: "Resposta Instantânea",
      description: "Receba informações nutricionais em segundos. Fotografe o prato e receba a análise completa.",
    },
    {
      icon: "🎯",
      title: "Metas Personalizadas",
      description: "Defina objetivos específicos e receba orientações personalizadas para alcançá-los.",
    },
    {
      icon: "📱",
      title: "Simples e Prático",
      description: "Sem complicações. Envie uma foto, receba os dados nutricionais e siga sua dieta com facilidade.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Por que escolher o <span className="gradient-text">LifeApp</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolucione sua alimentação com tecnologia de ponta e a simplicidade que você precisa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;