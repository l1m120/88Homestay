import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop"; // We keep this just to block browser refresh memory
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
        
        // THIS IS THE ULTIMATE FIX 👇
        // It fires the millisecond the new page physically enters the DOM
        onAnimationStart={() => {
          // 1. Standard window scroll
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          
          // 2. Aggressive fallback for mobile browsers and HashRouter
          document.documentElement.scrollTo({ top: 0, behavior: "instant" });
          document.body.scrollTo({ top: 0, behavior: "instant" });
          
          // 3. Absolute brute-force fallback just in case
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
