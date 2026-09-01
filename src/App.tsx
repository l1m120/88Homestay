import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop"; // We keep this just to block browser refresh memory
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Connect from "./pages/Connect";

// Ensures the favicon icon stays active even across GitHub Pages SPA history replacements & refreshes
function FaviconEnforcer() {
  const location = useLocation();

  useEffect(() => {
    const faviconHref = "/logo_cropped.png";

    // Standard Favicon
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = faviconHref;

    // Apple touch icon
    let appleLink: HTMLLinkElement | null = document.querySelector("link[rel='apple-touch-icon']");
    if (!appleLink) {
      appleLink = document.createElement("link");
      appleLink.rel = "apple-touch-icon";
      document.head.appendChild(appleLink);
    }
    appleLink.href = faviconHref;
  }, [location.pathname]);

  return null;
}

// Animated wrap module to support elegant fade-and-slide page transitions
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-grow flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/discover-yong-peng" element={<Location />} />
          <Route path="/connect" element={<Connect />} />
          {/* Backward compatibility redirect */}
          <Route path="/location" element={<Navigate to="/discover-yong-peng" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <FaviconEnforcer />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-amber selection:text-brand-charcoal font-sans">
          {/* Sticky Header Navigation */}
          <Navbar />

          {/* Dynamic page contents with transition wrappers */}
          <main className="flex-grow flex flex-col">
            <AnimatedRoutes />
          </main>

          {/* Persistent bottom footer details */}
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
