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

    if (sectionId.startsWith("http")) {
      window.open(sectionId, "_blank");
      return;
    }

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

    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Inicio", href: "#inicio", color: "#0073e6" },
    { label: "Acerca de Nosotros", href: "#about", color: "#00c896" },
    { label: "Grados", href: "#grados", color: "#ff9600" },
    { label: "Contacto", href: "#contacto", color: "#e6007e" },
    { label: "Actividades", href: "/actividades", color: "#00b8ff" },
    { label: "Plataforma", href: "https://colegiooxford.edu.gt/admin/login", color: "#d4af37" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#inicio")}
            className="text-xl md:text-2xl font-extrabold text-[rgb(59,130,246)] hover:text-[rgb(0,200,150)] transition-colors"
          >
            Oxford <span className="text-[rgb(255,150,0)]">Bilingual School</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item, i) => (
              <Button
                key={i}
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
                className="font-medium rounded-full px-5 py-2 text-sm shadow-sm transition-all duration-300"
                style={{
                  color: item.color,
                  border: `1.5px solid ${item.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = item.color;
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.boxShadow = `0 0 12px ${item.color}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = item.color;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[rgb(59,130,246)] hover:bg-[rgb(59,130,246)]/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-lg shadow-md">
          <div className="container-custom px-4 py-4 flex flex-col gap-2">
            {navItems.map((item, i) => (
              <Button
                key={i}
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
                className="w-full justify-start font-medium rounded-lg transition-all duration-300"
                style={{
                  color: item.color,
                  border: `1.5px solid ${item.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = item.color;
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.boxShadow = `0 0 10px ${item.color}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = item.color;
                  e.currentTarget.style.boxShadow = "none";
                }}
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
