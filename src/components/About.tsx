import { GraduationCap, Globe, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import schoolBuilding from "@/assets/school-building.jpg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: GraduationCap,
      title: "Excelencia Académica",
      description:
        "Metodología innovadora con altos estándares educativos y enfoque en resultados.",
    },
    {
      icon: Globe,
      title: "Educación Bilingüe",
      description:
        "Dominio integral del inglés y el español para formar estudiantes con visión global.",
    },
    {
      icon: Users,
      title: "Formación Integral",
      description:
        "Desarrollo de valores, liderazgo, empatía y pensamiento crítico.",
    },
    {
      icon: Award,
      title: "Reconocimiento",
      description:
        "Respaldo de entidades educativas nacionales e internacionales.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-card relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-700 group">
              <img
                src={schoolBuilding}
                alt="Instalaciones Oxford Bilingual School"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-80 transition-opacity"></div>
              <h3 className="absolute bottom-6 left-6 text-white text-3xl font-bold drop-shadow-md">
                Educación que{" "}
                <span className="text-[rgb(59,130,246)]">Transforma Vidas</span>
              </h3>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>

          {/* Contenido */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Acerca de{" "}
              <span className="gradient-text bg-gradient-accent">Nosotros</span>
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-primary">
                  Oxford Bilingual School
                </span>{" "}
                es una institución comprometida con la formación integral de cada
                estudiante, desde los niveles iniciales hasta el bachillerato.
              </p>

              <p>
                Nos caracteriza una{" "}
                <span className="font-semibold text-accent-vibrant">
                  excelencia académica bilingüe
                </span>{" "}
                respaldada por{" "}
                <span className="font-semibold">valores firmes</span>, un
                ambiente acogedor y una enseñanza que inspira curiosidad y
                pensamiento crítico.
              </p>

              <p>
                En Oxford formamos{" "}
                <span className="font-semibold text-primary">
                  jóvenes que analizan, preguntan y comprenden
                </span>
                . Creemos que aprender no es repetir, sino{" "}
                <span className="font-semibold text-accent-vibrant">
                  descubrir y crecer con propósito
                </span>
                .
              </p>
            </div>

            {/* Valores */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-background border border-border hover:shadow-glow hover:border-accent-vibrant/30 hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent-vibrant/20 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-accent-vibrant group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent-vibrant transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fondos decorativos suaves */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-vibrant/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default About;
