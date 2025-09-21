import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import testimonialAline from "@/assets/testimonial-aline.jpg";
import testimonial31kg from "@/assets/testimonial-31kg.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";
import testimonialVideo from "@/assets/testimonial-video.mp4";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      type: "image",
      image: testimonialAline,
      alt: "Transformação da Aline Azevedo - 130kg para 85kg"
    },
    {
      id: 2,
      type: "image",
      image: testimonial31kg,
      alt: "Perda de 31kg com o LifeApp - Só agradecer ao LifeApp"
    },
    {
      id: 3,
      type: "image",
      image: testimonial1,
      alt: "Depoimento sobre perda de peso - 3,8kg perdidos"
    },
    {
      id: 4,
      type: "image",
      image: testimonial3,
      alt: "Café da manhã com contagem de calorias"
    },
    {
      id: 5,
      type: "image",
      image: testimonial4,
      alt: "Prato com contagem nutricional"
    },
    {
      id: 6,
      type: "image",
      image: testimonial6,
      alt: "Depoimento positivo do usuário sobre o app"
    },
    {
      id: 7,
      type: "image",
      image: testimonial7,
      alt: "Comentários dos usuários elogiando o aplicativo"
    },
    {
      id: 8,
      type: "video",
      video: testimonialVideo,
      alt: "Depoimento em vídeo de usuário"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Veja o que nossos usuários estão dizendo sobre o LifeApp
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-4 hover:shadow-lg transition-all duration-300 border-border/50 bg-card backdrop-blur-sm overflow-hidden h-full">
                    <div className="w-full h-auto">
                      {testimonial.type === "video" ? (
                        <video 
                          src={testimonial.video} 
                          controls
                          className="w-full h-auto object-contain rounded-lg"
                          preload="metadata"
                        />
                      ) : (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.alt}
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      )}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;