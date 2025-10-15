import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      content: (
        <>
          Cobán, Alta Verapaz, Guatemala
          <div className="mt-2">
            <a
              href="https://ul.waze.com/ul?place=ChIJ8xFrWDdBioURja2lwBX1c4U&ll=15.47370700%2C-90.35879200&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(59,130,246)] hover:underline"
            >
              Waze
            </a>{" "}
            |{" "}
            <a
              href="https://www.google.com/maps?q=15.473707,-90.358792"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(59,130,246)] hover:underline"
            >
              Google Maps
            </a>
          </div>
        </>
      ),
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+502 7951-3898",
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      content: "info@colegiooxford.edu.gt",
    },
  ];

  return (
    <section
      id="contacto"
      ref={ref}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(230,0,126)]">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Contáctanos para conocer más sobre nuestra oferta educativa y el
            proceso de admisión.
          </p>
        </div>

        {/* Tarjetas de contacto */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-12 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          {contactInfo.map((info, i) => (
            <Card
              key={i}
              className="border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-[rgb(230,0,126)]/40 rounded-2xl transition-all duration-300"
            >
              <CardContent className="pt-6 text-center flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[rgb(59,130,246)]/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[rgb(59,130,246)]" />
                </div>
                <h3 className="font-semibold text-[rgb(0,200,150)] mb-2">
                  {info.title}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {info.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Botones */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* WhatsApp */}
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/50255748357", "_blank")}
            className="w-full sm:w-auto bg-[rgb(0,200,150)] hover:bg-[rgb(0,180,130)] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <MessageCircle className="mr-2" size={20} />
            WhatsApp
          </Button>

          {/* Facebook */}
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61562861189831",
                "_blank"
              )
            }
            className="w-full sm:w-auto border-[rgb(59,130,246)] text-[rgb(59,130,246)] hover:bg-[rgb(59,130,246)] hover:text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Facebook className="mr-2" size={20} />
            Facebook
          </Button>

          {/* Plataforma */}
          <Button
            size="lg"
            onClick={() =>
              window.open(
                "https://artesgraficasverapaz.com/admin/login",
                "_blank"
              )
            }
            className="w-full sm:w-auto bg-[rgb(255,150,0)] hover:bg-[rgb(230,120,0)] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ExternalLink className="mr-2" size={20} />
            Plataforma
          </Button>
        </div>

        {/* Horario */}
        <div
          className={`mt-14 p-6 md:p-8 rounded-2xl bg-white border border-[rgb(255,150,0)] shadow-sm hover:shadow-md transition-all duration-300 text-center max-w-xl mx-auto ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-xl font-semibold text-[rgb(59,130,246)] mb-3">
            Horario de Atención
          </h3>
          <p className="text-gray-700">Lunes a Viernes: 7:00 AM - 2:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
