// BackToTop.tsx
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setVisible(!isMobile && scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;
  return (
    <button
      id="backToTopBtn"
      onClick={scrollToTop}
      className="btn btn-secondary"
      style={{ position: "fixed", bottom: "2rem", right: "2rem" }}
    >
      ↑ Top
    </button>
  );
}
