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
  <div className="flex flex-col items-center text-center">
    <span>Cobán, Alta Verapaz, Guatemala</span>
    <div className="mt-1">
      <a
        href="https://ul.waze.com/ul?place=ChIJ8xFrWDdBioURja2lwBX1c4U&ll=15.47370700%2C-90.35879200&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Waze
      </a>{" "}
      |{" "}
      <a
        href="https://www.google.com/maps?q=15.473707,-90.358792"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Google Maps
      </a>
    </div>
  </div>
),
      action: null,
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+502 7951-3898",
      action: () => window.open("tel:+50279513898", "_blank"),
    },
    {
      icon: Mail,
      title: "Correo",
      content: "info@colegiooxford.edu.gt",
      action: () => window.open("mailto:info@colegiooxford.edu.gt", "_blank"),
    },
  ];

  return (
    <section
      id="contacto"
      className="section-padding bg-card relative overflow-hidden"
      ref={ref}
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-vibrant/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Encabezado */}
          <div
            className={`text-center mb-12 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              ¿Listo para{" "}
              <span className="gradient-text bg-gradient-accent">
                Comenzar?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contáctanos para conocer más sobre nuestra oferta educativa y
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
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`border-border hover:shadow-glow hover:border-accent-vibrant/30 transition-all duration-300 group ${
                  info.action ? "cursor-pointer hover:-translate-y-2" : ""
                }`}
                onClick={info.action || undefined}
              >
                <CardContent className="pt-6 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-vibrant/20 group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-accent-vibrant group-hover:rotate-12 transition-transform" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2 group-hover:text-accent-vibrant transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Botones de acción */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              variant="accent"
              onClick={() => window.open("https://wa.me/50255748357", "_blank")}
              className="w-full sm:w-auto group"
            >
              <MessageCircle
                className="mr-2 group-hover:rotate-12 transition-transform"
                size={20}
              />
              WhatsApp
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://www.facebook.com/profile.php?id=61562861189831", "_blank")}
              className="w-full sm:w-auto group"
            >
              <Facebook
                className="mr-2 group-hover:scale-110 transition-transform"
                size={20}
              />
              Facebook
            </Button>

            <Button
              size="lg"
              variant="default"
              onClick={() =>
                window.open("https://artesgraficasverapaz.com/admin/login", "_blank")
              }
              className="w-full sm:w-auto group"
            >
              <ExternalLink
                className="mr-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
              Plataforma
            </Button>
          </div>

          {/* Horario */}
          <div
            className={`mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-gold/5 border border-accent/20 hover:shadow-medium transition-all duration-300 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-xl font-semibold text-primary mb-3 text-center">
              Horario de Atención
            </h3>
            <p className="text-center text-muted-foreground">
              Lunes a Viernes: 7:00 AM - 2:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
