import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    // Enlace externo
    if (sectionId.startsWith("http")) {
      window.open(sectionId, "_blank");
      return;
    }

    // Si NO estamos en la página principal, redirigir y luego hacer scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
      return;
    }

    // Scroll directo si ya estamos en /
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Acerca de Nosotros", href: "#about" },
    { label: "Grados", href: "#grados" },
    { label: "Actividades", href: "/actividades" },
    { label: "Plataforma", href: "https://colegiooxford.edu.gt/admin/login" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/98 backdrop-blur-xl shadow-large"
          : "bg-card/80 backdrop-blur-md"
      } border-b border-border`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#inicio")}
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary-light transition-colors"
          >
            Oxford <span className="text-accent-vibrant">Bilingual School</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => {
                  if (item.href.startsWith("http")) {
                    window.open(item.href, "_blank");
                  } else if (item.href.startsWith("/")) {
                    navigate(item.href);
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                className="text-foreground hover:text-primary"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:bg-accent/20 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card/98 backdrop-blur-md">
          <div className="container-custom px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => {
                  if (item.href.startsWith("http")) {
                    window.open(item.href, "_blank");
                  } else if (item.href.startsWith("/")) {
                    navigate(item.href);
                  } else {
                    scrollToSection(item.href);
                  }
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start text-foreground hover:text-primary hover:bg-accent/20"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
