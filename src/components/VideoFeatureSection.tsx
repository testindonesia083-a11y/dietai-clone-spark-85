import { Button } from "@/components/ui/button";
import cameraIcon from "@/assets/camera-icon.webp";
import phoneDemoVideo from "@/assets/phone-demo-video.mp4";

const VideoFeatureSection = () => {
  return (
    <section className="relative py-20 bg-amber-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Video */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-md">
              <video
                src={phoneDemoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative">
                <img 
                  src={cameraIcon} 
                  alt="Camera" 
                  className="w-16 h-16"
                />
                <div className="absolute -top-2 -right-2 text-yellow-400 text-2xl">✨</div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Treinos secretos para fazer a gordura desaparecer do seu corpo e Receitas de alimentos gostosos para você
              </h2>
              
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                <strong>Fora que nesse Aplicativo das celebridades tem uma Inteligência artificial única que te da todo o passo a passo para o corpo e a meta que deseja!</strong>
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="xl" 
                className="font-semibold px-12 py-4 text-xl"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Comprar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoFeatureSection;