import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Home as HomeIcon, MapPin, MessageSquare, Globe, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Click outside listener for language dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Track page scroll to style the navbar dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { namePath: "nav.space", path: "/", icon: HomeIcon },
    { namePath: "nav.discover", path: "/location", icon: MapPin },
    { namePath: "nav.connect", path: "/connect", icon: MessageSquare },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "ch", label: "简体中文" },
    { code: "ms", label: "Bahasa Melayu" },
  ];

  const currentLanguageLabel = languages.find(l => l.code === language)?.label || "English";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-sand-dark/40 py-3"
          : "bg-brand-cream/80 backdrop-blur-sm border-b border-transparent py-4"
      }`}
      id="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Frame */}
          <Link
            to="/"
            id="brand-logo"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full group-hover:scale-105 transition-transform duration-300 shadow-md shadow-brand-amber/20 bg-white">
              
              {/* Replaced '88' text with your image */}
              <img 
                src="images/logo_cropped.png" 
                alt="88 Homestay Logo" 
                className="w-full h-full object-cover rounded-full"
              />

              {/* Decorative small oriental fortune mark inside (Kept intact!) */}
              <span className="absolute -bottom-1 -right-1 text-[8px] bg-[#92400E] text-white font-extrabold px-1 rounded-sm border border-white z-10">
                吉
              </span>
            </div>
            
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-lg tracking-wide text-brand-charcoal leading-none group-hover:text-brand-amber transition-colors duration-200">
                88 HOMESTAY
              </span>
              <span className="font-sans text-[10px] font-bold tracking-widest text-[#D97706] mt-0.5 uppercase">
                Yong Peng · Johor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5" id="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-brand-terracotta-light text-brand-terracotta font-semibold"
                      : "text-brand-charcoal/70 hover:text-brand-terracotta hover:bg-white"
                  }`
                }
              >
                <link.icon className="w-4 h-4 opacity-75" />
                {t(link.namePath)}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Utilities (Language Switcher + CTA Button) */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Dropdown Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-brand-charcoal/80 hover:text-brand-amber hover:bg-white border border-brand-sand/50 transition-colors focus:outline-none"
                aria-label={t("nav.selectLanguage")}
                id="language-selector-desktop"
              >
                <Globe className="w-4.5 h-4.5 text-[#D97706]" />
                <span className="font-medium text-xs">{currentLanguageLabel}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-44 bg-white border border-brand-sand-dark/60 rounded-xl shadow-lg py-1.5 focus:outline-none z-50 text-left"
                    id="language-dropdown-menu"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className="w-full px-4 py-2 text-xs font-semibold hover:bg-brand-cream text-brand-charcoal flex items-center justify-between transition-colors pointer-events-auto"
                      >
                        <span>{lang.label}</span>
                        {language === lang.code && (
                          <Check className="w-4 h-4 text-brand-amber shrink-0" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book Now Button */}
            <Link
              to="/connect"
              id="cta-book-now"
              className="bg-[#92400E] hover:bg-brand-terracotta-dark text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-1.5 transform hover:-translate-y-0.5"
            >
              {t("nav.bookNow")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-2.5">
            {/* Simple Inline Mobile Lanugage Quick Selector */}
            <div className="flex items-center bg-white border border-brand-sand/50 rounded-lg p-0.5 text-[10px] font-bold">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 rounded-md uppercase tracking-wider transition-colors ${
                    language === lang.code
                      ? "bg-brand-amber text-white"
                      : "text-brand-charcoal/50 hover:text-brand-charcoal"
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white hover:bg-brand-sand border border-brand-sand/40 text-brand-charcoal transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="hamburger-btn"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-brand-sand-dark/40 overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 text-left">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-sans text-base font-semibold flex items-center gap-3 transition-colors ${
                      isActive
                        ? "bg-brand-terracotta-light text-brand-terracotta"
                        : "text-brand-charcoal/80 hover:bg-brand-cream hover:text-[#92400E]"
                    }`
                  }
                >
                  <link.icon className="w-5 h-5 text-brand-amber" />
                  {t(link.namePath)}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-brand-sand-dark/20">
                <Link
                  to="/connect"
                  className="w-full bg-[#92400E] text-white font-sans font-bold py-3 px-5 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2"
                >
                  {t("nav.bookNow")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
