import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con overlay degradado más oscuro */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Estudiantes en Oxford Bilingual School"
          className="w-full h-full object-cover"
        />
        {/* Overlay que mejora contraste: gradiente vertical */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/30"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container-custom px-4 md:px-8 py-20 md:py-32 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            ¡Somos tu Colegio,{" "}
            <span className="text-[rgb(230,0,126)]">Somos tu Familia!</span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl animate-fade-in-up drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: "0.1s" }}
          >
            Formamos estudiantes con valores, pensamiento crítico y excelencia
            académica. Tu futuro comienza aquí.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Botón morado */}
            <Button
              size="lg"
              variant="accent"
              onClick={() => scrollToSection("#contacto")}
              className="text-base font-semibold bg-[rgb(130,53,141)] hover:bg-[rgb(100,30,120)] text-white shadow-lg hover:shadow-xl transition-all"
            >
              Solicitar Información →
            </Button>

            {/* Botón anaranjado */}
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#about")}
              className="text-base font-semibold border-none bg-[rgb(255,180,0)] hover:bg-[rgb(255,150,0)] text-white shadow-lg hover:shadow-xl transition-all"
            >
              Conoce Más
            </Button>
          </div>
        </div>
      </div>

      {/* Flecha inferior */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white hover:text-[rgb(230,0,126)] transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
