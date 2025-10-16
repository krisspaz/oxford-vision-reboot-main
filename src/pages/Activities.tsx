import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import familyDay from "@/assets/BBL_6819.jpg"; // Día de la familia
import camp from "@/assets/HL_09313.jpg"; // Campamento
import celebration from "@/assets/IMG_5703.jpeg"; // Celebraciones (niña con listón)
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const activities = [
  {
    title: "Día de la Familia",
    description:
      "Celebramos a la familia como base de la sociedad, fomentando el apoyo, la unión y el desarrollo integral de nuestros alumnos.",
    image: familyDay,
    color: "from-[rgb(59,130,246)]/20 to-[rgb(59,130,246)]/5",
  },
  {
    title: "Campamentos",
    description:
      "Experiencias inolvidables donde los estudiantes desarrollan liderazgo, trabajo en equipo y amor por la naturaleza.",
    image: camp,
    color: "from-[rgb(0,200,150)]/20 to-[rgb(0,200,150)]/5",
  },
  {
    title: "Celebraciones",
    description:
      "Celebramos nuestras tradiciones y valores con orgullo. En cada acto cultural fomentamos la identidad, el respeto y la unión como comunidad educativa.",
    image: celebration,
    color: "from-[rgb(255,150,0)]/20 to-[rgb(255,150,0)]/5",
  },
];

const Activities = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-center">
      <Navigation />

      <main
        ref={ref}
        className="flex-1 flex flex-col items-center px-6 py-24 md:py-28"
      >
        {/* 🔹 Título principal */}
        <div
          className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[rgb(230,0,126)] mb-6">
            Nuestras Actividades
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En Oxford Bilingual School celebramos la vida, la familia y el
            aprendizaje. A lo largo del año realizamos diversas actividades que
            fortalecen la unión, la creatividad y los valores.
          </p>
        </div>

        {/* 🔹 Grid de actividades */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {activities.map((act, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 bg-gradient-to-br ${act.color} ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Imagen con animación */}
              <img
                src={act.image}
                alt={act.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Texto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">
                  {act.title}
                </h3>
                <p className="text-sm text-white/90 drop-shadow-sm leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Texto final */}
        <div
          className={`mt-20 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <h2 className="text-3xl font-semibold text-[rgb(59,130,246)] mb-4">
            Aprender también es disfrutar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada actividad es una oportunidad para crear recuerdos, fortalecer
            valores y seguir aprendiendo en comunidad. En Oxford formamos
            personas felices, comprometidas y con propósito.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Activities;
