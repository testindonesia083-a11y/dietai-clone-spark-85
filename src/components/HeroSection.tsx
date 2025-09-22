import { Button } from "@/components/ui/button";
import iphoneMockup from "@/assets/iphone-mockup.png";
import heroDemoVideo from "@/assets/hero-demo-video.mp4";
const HeroSection = () => {
  const foodEmojis = ["🍎", "🥕", "🥦", "🍌", "🍓", "🥑", "🍊", "🥬", "🍇", "🫐", "🥒", "🍅", "🥝", "🥭", "🍑", "🥔", "🌶️", "🫑", "🧄", "🧅", "🍋", "🥥", "🥜", "🥗", "🍉", "🍒", "🥐", "🥖", "🧀", "🥞", "🍳", "🥪", "🌽", "🍠", "🥨", "🫒", "🍍", "🫚", "🥦", "🫛", "🌮", "🥙", "🍱", "🥘", "🍲", "🥣", "🥟", "🍜"];
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      {/* Floating Food Emojis Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {foodEmojis.map((emoji, index) => <div key={index} className="absolute text-2xl animate-float-food" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${4 + Math.random() * 2}s`
      }}>
            {emoji}
          </div>)}
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                O Metodo Secreto que não tem contam e não querem que você saiba!
                O Aplicativo Secreto chamado LifeApp que não é divulgado em lugar nenhum, somente quem é da industria de Hollywood e está entre o mundo dos famosos sabe!
                Emagrecer em casa sem muita dificuldade e sem se privar de nada!
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Não sabemos até quando esse app vai durar no ar! Então peço que aproveite enquanto á tempo!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="animate-pulse-glow" onClick={() => document.getElementById('pricing')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Comprar agora
              </Button>
            </div>

          </div>

          {/* Right Content - Phone Mockup with Video */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative max-w-sm">
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2.2rem] overflow-hidden">
                  
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-75 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;