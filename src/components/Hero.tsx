import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/HL_09313.jpg"; // 👈 NUEVA FOTO (niños de pie)

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Estudiantes en Oxford Bilingual School"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container-custom px-4 md:px-8 py-20 md:py-32 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ¡Somos tu Colegio,{" "}
            <span className="text-[rgb(230,0,126)]">Somos tu Familia!</span>
          </h1>

          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]">
            Formamos estudiantes con valores, pensamiento crítico y excelencia
            académica. Tu futuro comienza aquí.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contacto")}
              className="bg-[rgb(59,130,246)] hover:bg-[rgb(35,90,210)] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Solicitar Información →
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("#about")}
              className="border-none bg-[rgb(255,180,0)] hover:bg-[rgb(255,150,0)] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Conoce Más
            </Button>
          </div>
        </div>
      </div>

      {/* Flecha animada */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white hover:text-[rgb(230,0,126)] transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
