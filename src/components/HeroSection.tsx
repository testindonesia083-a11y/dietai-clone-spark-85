import { Button } from "@/components/ui/button";
import iphoneMockup from "@/assets/iphone-mockup.png";

const HeroSection = () => {
  const foodEmojis = [
    "🍎", "🥕", "🥦", "🍌", "🍓", "🥑", "🍊", "🥬", 
    "🍇", "🫐", "🥒", "🍅", "🥝", "🥭", "🍑", "🥔",
    "🌶️", "🫑", "🧄", "🧅", "🍋", "🥥", "🥜", "🥗",
    "🍉", "🍒", "🥐", "🥖", "🧀", "🥞", "🍳", "🥪",
    "🌽", "🍠", "🥨", "🫒", "🍍", "🫚", "🥦", "🫛",
    "🌮", "🥙", "🍱", "🥘", "🍲", "🥣", "🥟", "🍜"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      {/* Floating Food Emojis Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {foodEmojis.map((emoji, index) => (
          <div
            key={index}
            className="absolute text-2xl animate-float-food"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Emagreça mais rápido em casa! LifeApp com{" "}
                <span className="gradient-text">Inteligência Artificial Nutricionista e Personal Trainer</span>{" "}
                exclusivo!
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Feita exclusivamente para te ajudar nos treinos, alimentação e perda de peso!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl" 
                className="animate-pulse-glow"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Comprar agora
              </Button>
            </div>

          </div>

          {/* Right Content - Phone Mockup with Video */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative max-w-sm">
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2.2rem] overflow-hidden">
                  <video
                    src="src/assets/hero-demo-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                    style={{ aspectRatio: "9/19.5" }}
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-75 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;