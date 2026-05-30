import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Stop the browser from trying to remember the scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Wait exactly 50ms for the new page components to finish rendering
    const timer = setTimeout(() => {
      
      // Attempt 1: Standard Window Scroll
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);

      // Attempt 2: Target ALL scrollable internal <div> containers
      const allDivs = document.querySelectorAll("div");
      allDivs.forEach((div) => {
        // If the div's inner content is taller than the div itself, it is scrolling
        if (div.scrollHeight > div.clientHeight) {
          // Force it to the top
          div.scrollTo({ top: 0, behavior: "instant" });
          div.scrollTop = 0; // Hard fallback
        }
      });

    }, 50); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}