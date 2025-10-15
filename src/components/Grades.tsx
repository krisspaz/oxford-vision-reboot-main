import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Baby, Smile, BookOpen, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsImage from "@/assets/_DSC2679.jpg"; // 👈 Nueva imagen (niña recortando)

const Grades = () => {
  const { ref, isVisible } = useScrollAnimation();

  const grades = [
    {
      icon: Baby,
      level: "Preprimaria",
      age: "3 - 6 años",
      description:
        "Estimulación temprana y desarrollo de habilidades básicas en un ambiente bilingüe.",
    },
    {
      icon: Smile,
      level: "Primaria",
      age: "7 - 12 años",
      description:
        "Educación integral con enfoque en lectoescritura, matemáticas y valores humanos.",
    },
    {
      icon: BookOpen,
      level: "Básicos",
      age: "13 - 15 años",
      description:
        "Fortalecimiento académico, pensamiento crítico y preparación para diversificado.",
    },
    {
      icon: Brain,
      level: "Diversificado",
      age: "16 - 18 años",
      description:
        "Formación preuniversitaria y profesional con enfoque en liderazgo y excelencia.",
    },
  ];

  return (
    <section
      id="grados"
      ref={ref}
      className="section-padding bg-muted/30 relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <div
          className={`text-center mb-12 lg:mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(230,0,126)]">
            Nuestros Grados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrecemos educación de calidad desde preprimaria hasta diversificado,
            adaptada a cada etapa del desarrollo de nuestros estudiantes.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {grades.map((grade, index) => (
            <Card
              key={index}
              className={`border border-border bg-card hover:border-[rgb(230,0,126)] hover:shadow-lg hover:-translate-y-2 group transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-[rgb(59,130,246)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <grade.icon className="w-7 h-7 text-[rgb(59,130,246)]" />
                </div>
                <CardTitle className="text-xl text-[rgb(255,150,0)] group-hover:text-[rgb(230,0,126)] transition-colors">
                  {grade.level}
                </CardTitle>
                <CardDescription className="text-[rgb(59,130,246)] font-medium">
                  {grade.age}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {grade.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Imagen inferior */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl max-w-5xl mx-auto group transition-all duration-700 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          <img
            src={studentsImage}
            alt="Estudiantes aprendiendo en Oxford"
            className="w-full h-80 md:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500"></div>

          {/* Texto visible sobre la imagen */}
          <h3 className="absolute bottom-8 left-8 text-white text-3xl md:text-4xl font-bold leading-snug drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
            Educación que{" "}
            <span className="text-[rgb(230,0,126)]">Transforma</span>{" "}
            <span className="text-[rgb(0,200,150)]">Vidas</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Grades;
