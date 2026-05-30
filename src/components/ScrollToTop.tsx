import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Tell the browser NOT to restore the scroll position on a page refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Force the window to scroll back to the absolute top-left corner.
    // We wrap it in a setTimeout to ensure it executes right after the 
    // browser finishes rendering the updated DOM elements.
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Forces an immediate jump without slow transition lag
      });
    }, 0);

    // Cleanup timer if the component unmounts mid-render
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}