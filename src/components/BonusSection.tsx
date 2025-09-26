import { Card } from "@/components/ui/card";
import { Gift, Target, BookOpen } from "lucide-react";
import FloatingFoodEmojis from "@/components/FloatingFoodEmojis";

const BonusSection = () => {
  const bonuses = [
    {
      icon: <Target className="w-12 h-12 text-orange-500" />,
      title: "Bônus 1",
      subtitle: "40 Técnicas de Perda de Peso em casa",
      description: "Métodos eficazes para acelerar sua perda de peso no conforto da sua casa"
    },
    {
      icon: <Gift className="w-12 h-12 text-purple-500" />,
      title: "Bônus 2", 
      subtitle: "Pacote com +100 Técnicas de Perda de Peso em Casa",
      description: "Arsenal completo de estratégias avançadas para maximizar seus resultados"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-green-500" />,
      title: "Bônus 3",
      subtitle: "+100 Receitas Gostosas Fáceis",
      description: "Receitas deliciosas e saudáveis para variar seu cardápio sem sair da dieta"
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-yellow-50 to-orange-50">
      <FloatingFoodEmojis density={15} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            🎁 <span className="gradient-text">Bônus Exclusivos</span> 🎁
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Além de tudo isso, você ainda ganha esses bônus incríveis totalmente GRÁTIS!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-orange-200 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-bl-full opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-orange-300 to-yellow-300 rounded-tr-full opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white rounded-full shadow-lg">
                    {bonus.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-orange-600">
                  {bonus.title}
                </h3>
                
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  {bonus.subtitle}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {bonus.description}
                </p>

                <div className="mt-4 inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ✨ GRÁTIS ✨
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-lg">
            <p className="text-lg font-bold">
              🔥 Valor total dos bônus: R$ 297,00 - HOJE: GRÁTIS! 🔥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;