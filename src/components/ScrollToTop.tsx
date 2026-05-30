import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleScroll = () => {
      // 1. Scroll the standard window object
      window.scrollTo(0, 0);

      // 2. Fallback: Catch any scrollable layout elements (like #root, body, or main wrappers)
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      
      const appRoot = document.getElementById("root");
      if (appRoot) appRoot.scrollTo(0, 0);
    };

    // Use a small 10ms delay to force it after GitHub Pages finishes DOM rendering
    const timer = setTimeout(handleScroll, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
