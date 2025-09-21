import { Card } from "@/components/ui/card";

const WhyChooseSection = () => {
  const features = [
    {
      icon: "🏃",
      title: "Registro de exercícios",
      description: "Registre seus exercícios para entender seu balanço calórico diário. Adicione atividades manualmente ou sincronize com seu relógio.",
    },
    {
      icon: "⚖️",
      title: "Registro de medidas",
      description: "Agora é possível registrar e acompanhar seu peso, circunferência e dobras corporais de forma prática. Visualize sua evolução por meio de gráficos detalhados.",
    },
    {
      icon: "🎯",
      title: "Defina metas",
      description: "Defina suas metas de macronutrientes e calorias e acompanhe diariamente se está atingindo.",
    },
    {
      icon: "🤖",
      title: "Assistente com AI",
      description: "Faça perguntas, tire dúvidas, gere sugestões de alimentos e cardápios através da interação com o assistente do LifeApp.",
    },
    {
      icon: "📖",
      title: "Cadastre receitas",
      description: "Salve suas receitas através dos ingredientes e use de forma proporcional quando quiser.",
    },
    {
      icon: "📊",
      title: "Relatórios",
      description: "Acompanhe relatórios de evolução, consumo de macronutrientes, calorias, peso, água e muito mais.",
    },
    {
      icon: "🍰",
      title: "Receba avaliações",
      description: "Obtenha uma avaliação e estimativa do índice glicêmico, carga glicêmica ou colesterol de cada alimento registrado. Auxiliamos você na escolha de opções mais saudáveis.",
    },
    {
      icon: "⏰",
      title: "Lembretes personalizáveis",
      description: "Crie seu próprio lembrete e receba notificações diretamente via App. Por exemplo: lembretes para tomar água, medicamentos, refeições e etc",
    },
    {
      icon: "🔥",
      title: "Emagreça comendo à vontade",
      description: "Acompanhe o seu progresso pelo App.",
    },
    {
      icon: "🧍",
      title: "Análise corporal",
      description: "Faça uma análise corporal utilizando Inteligência Artificial e descubra sua porcentagem de gordura corporal, taxa metabólica basal e etc.",
    },
    {
      icon: "🛍️",
      title: "Clube de Benefícios",
      description: "Descontos e cashback em mais de 30.000 marcas, como suplementos, farmácias, roupas fitness e muito mais.",
      isNew: true,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Mais funcionalidades para facilitar sua vida
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 bg-card backdrop-blur-sm relative"
            >
              {feature.isNew && (
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  novo ⚡
                </div>
              )}
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              {feature.title === "Clube de Benefícios" && (
                <p className="text-primary font-medium mt-2 text-sm">e muito mais...</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;