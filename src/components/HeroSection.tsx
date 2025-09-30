import { Button } from "@/components/ui/button";
import iphoneMockup from "@/assets/iphone-mockup.png";
import heroDemoVideo from "@/assets/hero-demo-video.mp4";
import PersonalizedPlanForm from "@/components/PersonalizedPlanForm";
const HeroSection = () => {
  const foodEmojis = ["🍎", "🥕", "🥦", "🍌", "🍓", "🥑", "🍊", "🥬", "🍇", "🫐", "🥒", "🍅", "🥝", "🥭", "🍑", "🥔", "🌶️", "🫑", "🧄", "🧅", "🍋", "🥥", "🥜", "🥗", "🍉", "🍒", "🥐", "🥖", "🧀", "🥞", "🍳", "🥪", "🌽", "🍠", "🥨", "🫒", "🍍", "🫚", "🥦", "🫛", "🌮", "🥙", "🍱", "🥘", "🍲", "🥣", "🥟", "🍜"];
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden pb-2">
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

      <div className="container mx-auto px-4 pt-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
                O Método Secreto que não te contam e não querem que você saiba, pois querem que você continue gastando dinheiro com Personal Trainer ou Nutricionista!
                <br />
                O Aplicativo Secreto chamado LifeApp que não é divulgado em lugar nenhum, somente quem é da industria de Hollywood e está entre o mundo dos famosos sabe!
                <br />
                Emagrecer em casa sem muita dificuldade, sem se privar de nada e sem precisar gastar com Nutri ou Personal!
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-bold">
                Não sabemos até quando esse app vai durar no ar! Então peço que aproveite enquanto á tempo!
              </p>
            </div>

            {/* Animated Text with Arrow */}
            <div className="text-center lg:text-left">
              <p className="text-lg lg:text-xl font-bold text-primary animate-pulse mb-2">
                ASSISTA O VÍDEO COMPLETO ABAIXO E DESCUBRA COMO!
              </p>
              <div className="flex justify-center lg:justify-start">
                <svg className="w-8 h-8 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* YouTube Shorts Video */}
            <div className="mt-8 w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/C4DQQi1DzpA?vq=highres" 
                  title="YouTube shorts video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Buy Button After Video */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Button variant="hero" size="xl" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all" onClick={() => document.getElementById('pricing')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Comprar agora
              </Button>
            </div>

            {/* Personalized Plan Form */}
            <div className="mt-8 w-full">
              <PersonalizedPlanForm />
            </div>

          </div>

          {/* Right Content - Phone Mockup with Video */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative max-w-sm">
              
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-75 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;