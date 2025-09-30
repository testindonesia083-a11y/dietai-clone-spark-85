import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";

const CaloriesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayRef = useRef<NodeJS.Timeout>();

  const images = [
    {
      id: 1,
      src: "https://i.ibb.co/My6Bdz0w/site-3.jpg",
      alt: "LifeApp Interface Screenshot 1"
    },
    {
      id: 2,
      src: "https://i.ibb.co/TMqSCQmv/site-1.jpg",
      alt: "LifeApp Interface Screenshot 2"
    },
    {
      id: 3,
      src: "https://i.ibb.co/zWjknF3n/site-0.jpg",
      alt: "LifeApp Interface Screenshot 3"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      autoplayRef.current = setTimeout(() => {
        api.scrollNext();
      }, 10000); // 10 seconds delay
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };

    const onSelect = () => {
      stopAutoplay();
      startAutoplay();
    };

    api.on("select", onSelect);
    startAutoplay();

    return () => {
      api.off("select", onSelect);
      stopAutoplay();
    };
  }, [api]);

  return (
    <section className="relative py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Images Carousel */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {images.map((image) => (
                    <CarouselItem key={image.id}>
                      <div className="w-full h-auto">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Content Below Chart */}
          <div className="space-y-8">
            <div className="text-6xl">🔥</div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                LifeApp nós principais Sites de Notícias!
              </h2>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Grandes meios de comunicação mostrando e contando sobre como o LifeApp é inovador e como mudou vidas!
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                variant="default" 
                size="xl" 
                className="font-semibold px-12 py-4 text-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Comprar agora →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaloriesSection;