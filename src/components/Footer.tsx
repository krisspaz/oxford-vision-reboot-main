import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[rgb(20,60,130)] via-[rgb(35,25,80)] to-[rgb(15,10,40)] text-white py-10">
      {/* Efecto de brillo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shine" />

      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA0IiBkPSJNMCwxMCBMNzAsMTAgTTAsMzUgTDcwLDM1IE0wLDYwIEw3MCw2MCIvPjwvc3ZnPg==')]" />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Izquierda */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide">
              <span className="text-white/95">Oxford</span>{" "}
              <span className="text-[rgb(255,180,80)] font-bold">
                Bilingual School
              </span>
            </h3>
            <p className="text-sm text-white/70 mt-1">
              Somos tu colegio, somos tu familia.
            </p>
          </div>

          {/* Derecha */}
          <div className="text-sm text-white/70">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-white/90">Oxford Bilingual School</span>
            </p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

      {/* Animación CSS nativa */}
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .shine {
          animation: shine 10s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
