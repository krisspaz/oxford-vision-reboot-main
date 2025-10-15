import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Estudiantes en Oxford Bilingual School" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight animate-fade-in-up">
            ¡Somos tu Colegio, <span className="gradient-text bg-gradient-to-r from-accent to-gold">Somos tu Familia!</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 text-balance max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Formamos estudiantes con valores, pensamiento crítico y excelencia académica. 
            Tu futuro comienza aquí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              variant="accent"
              onClick={() => scrollToSection("#contacto")}
              className="text-base font-semibold group"
            >
              Solicitar Información
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Button>
            <Button 
              size="lg" 
              variant="minimal"
              onClick={() => scrollToSection("#about")}
              className="text-base font-semibold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
            >
              Conoce Más
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
