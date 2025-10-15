const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[rgb(59,130,246)] to-[rgb(37,99,235)] text-white py-10 relative overflow-hidden">
      {/* Fondo decorativo suave */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Izquierda */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">
              Oxford{" "}
              <span className="text-white/90 font-semibold">Bilingual School</span>
            </h3>
            <p className="text-sm text-white/80">
              Somos tu colegio, somos tu familia.
            </p>
          </div>

          {/* Derecha */}
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Oxford Bilingual School
            </p>
            <p className="text-sm text-white/80">Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
