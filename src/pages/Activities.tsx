import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import familyDay from "@/assets/BBL_6819.jpg";
import camp from "@/assets/IMG_1149.jpg"; // ✅ Campamento ajustado correctamente
import celebration from "@/assets/IMG_5703.jpeg";

import img1 from "@/assets/BBL_5716.jpg";
import img2 from "@/assets/BBL_6418.jpg";
import img3 from "@/assets/BBL_6426.jpg";
import img4 from "@/assets/BBL_6430.jpg";
import img5 from "@/assets/BBL_6444.jpg";
import img6 from "@/assets/BBL_7394.jpg";
import img7 from "@/assets/BBL_7400.jpg";
import img8 from "@/assets/IMG_3835.jpg";
import img9 from "@/assets/IMG_7973.jpg";
import img10 from "@/assets/BBL_7460.jpg";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Activities = () => {
  const { ref, isVisible } = useScrollAnimation();

  const activities = [
    {
      title: "Día de la Familia",
      description:
        "Un día para reír, compartir, agradecer y fortalecer los lazos que nos unen.",
      image: familyDay,
      color: "from-[rgb(59,130,246)]/20 to-[rgb(59,130,246)]/5",
    },
    {
      title: "Campamento",
      description:
        "Una experiencia llena de energía, trabajo en equipo, diversión y convivencia que fortalecen la amistad, la confianza y los valores.",
      image: camp,
      color: "from-[rgb(0,200,150)]/20 to-[rgb(0,200,150)]/5",
    },
    {
      title: "Celebraciones",
      description:
        "Nuestro colegio vive una vida escolar activa, alegre y formativa.",
      image: celebration,
      color: "from-[rgb(255,150,0)]/20 to-[rgb(255,150,0)]/5",
    },
  ];

  const rollImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-28">
          {activities.map((act, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 bg-gradient-to-br ${act.color} ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <img
                src={act.image}
                alt={act.title}
                className={`w-full h-72 transform group-hover:scale-110 transition-transform duration-700
                ${
                  act.title === "Campamento"
                    ? "object-cover object-[50%_40%]" // ✅ centrado y ajustado
                    : "object-cover object-center"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
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

        {/* 🎬 Sección Cambiamos Vidas (intacta) */}
        <section className="relative w-full overflow-hidden py-20 bg-gradient-to-b from-white to-[rgb(245,248,255)]">
          <div className="text-center mb-16 px-6">
            <h2 className="text-5xl font-bold text-[rgb(230,0,126)] mb-4 drop-shadow-sm">
              Vivimos momentos, disfrutamos la vida.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              En cada historia, sonrisa y logro de nuestros estudiantes se
              refleja nuestro compromiso con la educación.
            </p>
          </div>

          {/* 🎞️ Rollo (sin tocar) */}
          <div className="scroll-container relative w-full overflow-hidden py-6">
            <div
              className="scroll-content flex gap-8 md:gap-10"
              style={{ width: "max-content" }}
            >
              {rollImages.concat(rollImages).map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 relative rounded-[1.5rem] overflow-hidden bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                             hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transform hover:-translate-y-1
                             transition-all duration-700 group"
                  style={{ width: "320px", height: "360px" }}
                >
                  <img
                    src={img}
                    alt={`foto-${i}`}
                    className="w-full h-full object-contain bg-white rounded-[1.5rem] transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-10 text-gray-500 text-sm italic">
            💡 Consejo: Coloca el cursor sobre el rollo para pausar y capturar el momento de tu hijo.
          </p>
        </section>

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
