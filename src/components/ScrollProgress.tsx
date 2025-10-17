import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[4px] bg-gray-200/40 z-[9999]">
      <div
        className="h-full transition-all duration-200 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background:
            "linear-gradient(90deg, rgb(230,0,126) 0%, rgb(0,200,150) 100%)",
          boxShadow:
            "0 0 6px rgba(230,0,126,0.4), 0 0 10px rgba(0,200,150,0.4)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
