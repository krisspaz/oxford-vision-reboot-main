import { GraduationCap, Globe, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/BBL_6819.jpg"; // 👈 NUEVA FOTO (niñas sonriendo)

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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-700 group">
              <img
                src={aboutImage}
                alt="Estudiantes felices en Oxford Bilingual School"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-white text-3xl font-bold drop-shadow-md">
                Educación que{" "}
                <span className="text-[rgb(230,0,126)]">Transforma</span>{" "}
                <span className="text-[rgb(0,200,150)]">Vidas</span>
              </h3>
            </div>
          </div>

          {/* Texto */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[rgb(59,130,246)]">
              Acerca de Nosotros
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-[rgb(230,0,126)]">
                  Oxford Bilingual School
                </span>{" "}
                es una institución comprometida con la formación integral de cada
                estudiante, desde los niveles iniciales hasta el bachillerato.
              </p>

              <p>
                Nos caracteriza una{" "}
                <span className="font-semibold text-[rgb(0,200,150)]">
                  excelencia académica bilingüe
                </span>{" "}
                respaldada por{" "}
                <span className="font-semibold text-[rgb(230,0,126)]">
                  valores firmes
                </span>{" "}
                y un ambiente acogedor que fomenta la curiosidad y el pensamiento
                crítico.
              </p>
            </div>

            {/* Valores */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-background border border-border hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[rgb(59,130,246)]/10 group-hover:bg-[rgb(59,130,246)]/20 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-[rgb(59,130,246)] group-hover:text-[rgb(0,200,150)] transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-[rgb(0,200,150)] mb-2 group-hover:text-[rgb(230,0,126)] transition-colors">
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
    </section>
  );
};

export default About;
