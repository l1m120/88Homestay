import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Connect from "./pages/Connect";

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
          <Route path="/location" element={<Location />} />
          <Route path="/connect" element={<Connect />} />
          {/* Fallback route to redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
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
