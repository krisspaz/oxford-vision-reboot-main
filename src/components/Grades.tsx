import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Baby, Smile, BookOpen, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsImage from "@/assets/students-learning.jpg";

const Grades = () => {
  const { ref, isVisible } = useScrollAnimation();

  const grades = [
    {
      icon: Baby,
      level: "Preprimaria",
      age: "3 - 6 años",
      description:
        "Estimulación temprana y desarrollo de habilidades básicas en un ambiente bilingüe.",
      color: "bg-accent/10",
    },
    {
      icon: Smile,
      level: "Primaria",
      age: "7 - 12 años",
      description:
        "Educación integral con enfoque en lectoescritura, matemáticas y valores humanos.",
      color: "bg-accent-vibrant/10",
    },
    {
      icon: BookOpen,
      level: "Básicos",
      age: "13 - 15 años",
      description:
        "Fortalecimiento académico, pensamiento crítico y preparación para diversificado.",
      color: "bg-gold/10",
    },
    {
      icon: Brain,
      level: "Diversificado",
      age: "16 - 18 años",
      description:
        "Formación preuniversitaria y profesional con enfoque en liderazgo y excelencia.",
      color: "bg-primary/10",
    },
  ];

  return (
    <section
      id="grados"
      className="section-padding bg-muted/30 relative overflow-hidden"
      ref={ref}
    >
      {/* Fondos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <div
          className={`text-center mb-12 lg:mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Nuestros{" "}
            <span className="gradient-text bg-gradient-accent">Grados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrecemos educación de calidad desde preprimaria hasta diversificado,
            adaptada a cada etapa del desarrollo de nuestros estudiantes.
          </p>
        </div>

        {/* Cuadros de grados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {grades.map((grade, index) => (
            <Card
              key={index}
              className={`border-border bg-card hover:shadow-glow hover:border-accent-vibrant/40 hover:-translate-y-2 group transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-xl ${grade.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <grade.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent-vibrant transition-colors">
                  {grade.level}
                </CardTitle>
                <CardDescription className="text-accent-vibrant font-medium">
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
          className={`relative rounded-2xl overflow-hidden shadow-large hover:shadow-glow max-w-4xl mx-auto group ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <img
            src={studentsImage}
            alt="Estudiantes aprendiendo en Oxford"
            className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
            <div className="p-6 md:p-8 text-white transform group-hover:translate-y-0 transition-transform">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                Educación que Transforma Vidas
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                Metodología innovadora y compromiso con cada estudiante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grades;
