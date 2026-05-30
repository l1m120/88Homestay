import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Stop the browser from trying to remember the scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. THE MAGIC TIMING FIX: 
    // Your Framer Motion fade-out takes 300ms (0.3s). 
    // We wait exactly 350ms to jump to the top right as the new page appears!
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTo({ top: 0, behavior: "instant" });
      document.body.scrollTo({ top: 0, behavior: "instant" });
    }, 350); 

    // Cleanup timer if the component unmounts mid-render
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}