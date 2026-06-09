import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Navigation,
  Compass,
  Smile,
  Sparkles,
  Car,
  Utensils,
  ChevronRight,
  Store
} from "lucide-react";

export default function Location() {
  const [activeTab, setActiveTab] = useState<"attractions" | "food">("attractions");
  const { language, t } = useLanguage();

  // Why Choose Us Info Cards linked to translations
  const strengths = [
    {
      id: "strength-1",
      icon: <Smile className="w-6 h-6 text-brand-amber" />,
      title: t("discover.strengths.familyTitle"),
      description: t("discover.strengths.familyDesc")
    },
    {
      id: "strength-2",
      icon: <Sparkles className="w-6 h-6 text-brand-amber" />,
      title: t("discover.strengths.cleanTitle"),
      description: t("discover.strengths.cleanDesc")
    },
    {
      id: "strength-3",
      icon: <Car className="w-6 h-6 text-brand-amber" />,
      title: t("discover.strengths.parkingTitle"),
      description: t("discover.strengths.parkingDesc")
    }
  ];

  // Attractions Timeline Data linked to translations
  const attractions = [
    {
      id: "temple-1",
      name: t("discover.templesList.temple1Name"),
      duration: language === "ch" ? "乘车约 2 分钟" : language === "ms" ? "2 min memandu" : "2 mins drive",
      description: t("discover.templesList.temple1Desc"),
      history: t("discover.templesList.temple1History"),
      imageUrl: "/images/tianpaokong.jpg",
      googleDirections: "https://share.google/o6xN9RT7Ixi6qN7Bz"
    },
    {
      id: "temple-2",
      name: t("discover.templesList.temple2Name"),
      duration: language === "ch" ? "乘车约 5 分钟" : language === "ms" ? "5 min memandu" : "5 mins drive",
      description: t("discover.templesList.temple2Desc"),
      history: t("discover.templesList.temple2History"),
      imageUrl: "/images/dejiaohui.jpg",
      googleDirections: "https://share.google/maEIB6UhWneaiyD90"
    },
    {
      id: "temple-3",
      name: t("discover.templesList.temple3Name"),
      duration: language === "ch" ? "乘车约 7 分钟" : language === "ms" ? "7 min memandu" : "7 mins drive",
      description: t("discover.templesList.temple3Desc"),
      history: t("discover.templesList.temple3History"),
      imageUrl: "/images/heilongdong.jpeg",
      googleDirections: "https://maps.google.com/?q=Black+Dragon+Cave+Temple+Yong+Peng"
    }
  ];

  // Food and Convenience Data linked to translations
  const foodSpots = [
    {
      id: "food-1",
      name: t("discover.foodList.food1Name"),
      category: t("discover.foodList.food1Category"),
      specialty: t("discover.foodList.food1Spec"),
      description: t("discover.foodList.food1Desc"),
      imageUrl: "https://cassette.sphdigital.com.sg/image/zaobao/a9454924c31f1c15e346e14e29a30fa4f1ffd0ff20bc37021b27e9b52305d7d4"
    },
    {
      id: "food-2",
      name: t("discover.foodList.food2Name"),
      category: t("discover.foodList.food2Category"),
      specialty: t("discover.foodList.food2Spec"),
      description: t("discover.foodList.food2Desc"),
      imageUrl: "/images/mianxian.jpg"
    },
    {
      id: "food-3",
      name: t("discover.foodList.food3Name"),
      category: t("discover.foodList.food3Category"),
      specialty: t("discover.foodList.food3Spec"),
      description: t("discover.foodList.food3Desc"),
      imageUrl: "/images/toast.jpg"
    },
    {
      id: "food-4",
      name: t("discover.foodList.food4Name"),
      category: t("discover.foodList.food4Category"),
      specialty: t("discover.foodList.food4Spec"),
      description: t("discover.foodList.food4Desc"),
      imageUrl: "/images/fishball.jpeg"
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-16" id="location-discover-page">
      
      {/* 1. Header Hero Panel */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden" id="location-hero">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#92400E]/5 blur-3xl -z-10" />
        
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-amber/15 text-brand-amber font-display font-bold text-xs uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-brand-amber" />
            {t("discover.badge")}
          </div>
          
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-brand-charcoal tracking-tight leading-tight">
            {t("discover.titleLine1")} <br className="sm:hidden" />
            <span className="text-brand-amber"> {t("discover.titleLine2")}</span>
          </h1>
          
          <p className="font-sans text-sm sm:text-base text-brand-earth/80 max-w-xl mx-auto leading-relaxed">
            {t("discover.desc")}
          </p>
        </div>
      </section>

      {/* 2. Why Choose Us Section */}
      <section className="py-16 bg-white border-t border-brand-sand-dark/30" id="location-strengths">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-brand-charcoal">
              {t("discover.whyUsTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed">
              {t("discover.whyUsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((item) => (
              <div
                key={item.id}
                className="bg-brand-cream/30 rounded-xl border border-brand-sand-dark/60 p-6 text-left flex flex-col items-start gap-4 hover:shadow-sm transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-xs flex items-center justify-center shrink-0 border border-brand-sand-dark/30">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-brand-charcoal mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Sliding Tab Switcher: Attractions vs Food & Convenience */}
      <section className="py-16 bg-brand-cream/30 border-t border-brand-sand-dark/20" id="location-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Switcher Controls */}
          <div className="flex items-center justify-center mb-16">
            <div className="bg-white border border-brand-sand-dark/60 p-1.5 rounded-2xl flex items-center gap-1 shadow-xs">
              <button
                onClick={() => setActiveTab("attractions")}
                className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "attractions"
                    ? "bg-[#92400E] text-white shadow-xs"
                    : "text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-cream"
                }`}
                id="tab-attractions"
              >
                <MapPin className="w-4 h-4 text-brand-amber" />
                {t("discover.tabs.temples")}
              </button>
              <button
                onClick={() => setActiveTab("food")}
                className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "food"
                    ? "bg-[#92400E] text-white shadow-xs"
                    : "text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-cream"
                }`}
                id="tab-food"
              >
                <Utensils className="w-4 h-4 text-brand-amber" />
                {t("discover.tabs.food")}
              </button>
            </div>
          </div>

          {/* Attractions Timeline Content */}
          {activeTab === "attractions" && (
            <div className="space-y-12 max-w-5xl mx-auto" id="attractions-timeline">
              <div className="text-center max-w-md mx-auto mb-10">
                <h3 className="font-display font-semibold text-lg text-brand-charcoal">
                  {t("discover.templesList.title")}
                </h3>
                <p className="text-xs text-brand-charcoal/50 mt-1">
                  {t("discover.templesList.sub")}
                </p>
              </div>

              <div className="relative border-l border-brand-sand-dark/80 pl-6 sm:pl-10 space-y-16 text-left">
                {attractions.map((temple, idx) => (
                  <div key={temple.id} className="relative group">
                    {/* Circle Indicator on vertical timeline line */}
                    <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 bg-white border-2 border-[#92400E] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                      <div className="w-1.5 h-1.5 bg-[#92400E] rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Text Column */}
                      <div className="lg:col-span-7 space-y-4 text-left">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-mono text-xs font-bold text-[#92400E] bg-brand-terracotta-light px-2.5 py-1 rounded">
                            0{idx + 1}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-bold text-brand-amber">
                            <Clock className="w-3.5 h-3.5 text-brand-amber" />
                            {temple.duration}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-display font-bold text-xl text-brand-charcoal group-hover:text-brand-amber transition-colors">
                            {temple.name}
                          </h4>
                          <p className="font-sans text-xs sm:text-sm text-brand-earth/80 mt-2 leading-relaxed">
                            {temple.description}
                          </p>
                        </div>

                        {temple.history && (
                          <div className="bg-white border border-brand-sand-dark/40 p-4 rounded-xl text-xs text-brand-charcoal/60 leading-relaxed italic">
                            💡 {temple.history}
                          </div>
                        )}

                        <div className="pt-2">
                          <a
                            href={temple.googleDirections}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-amber hover:text-brand-terracotta-dark"
                          >
                            <Navigation className="w-3.5 h-3.5 text-brand-amber" />
                            {t("discover.templesList.directions")}
                            <ChevronRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      {/* Image Column */}
                      <div className="lg:col-span-5">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-brand-sand-dark/50">
                          <img
                            src={temple.imageUrl}
                            alt={temple.name}
                            className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Food and Convenience Content */}
          {activeTab === "food" && (
            <div className="space-y-10" id="culinary-convenience">
              <div className="text-center max-w-md mx-auto mb-10">
                <h3 className="font-display font-semibold text-lg text-brand-charcoal">
                  {t("discover.foodList.title")}
                </h3>
                <p className="text-xs text-brand-charcoal/50 mt-1">
                  {t("discover.foodList.sub")}
                </p>
              </div>

              {/* Grid block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {foodSpots.map((spot: any) => (
                  <div
                    key={spot.id}
                    className="bg-white rounded-2xl border border-brand-sand-dark/40 p-5 flex flex-col sm:flex-row gap-5 hover:shadow-xs transition-shadow duration-300"
                  >
                    {/* Visual segment */}
                    <div className="sm:w-1/3 aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden shrink-0 bg-brand-sand/20">
                      <img
                        src={spot.imageUrl}
                        alt={spot.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Meta segment */}
                    <div className="flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold text-brand-amber uppercase tracking-all font-sans">
                            {spot.category}
                          </span>
                          {spot.distance && (
                            <span className="bg-brand-sand-dark/30 text-brand-charcoal text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
                              <Store className="w-2.5 h-2.5 text-brand-amber" />
                              {spot.distance}
                            </span>
                          )}
                        </div>

                        <h4 className="font-display font-bold text-base text-brand-charcoal">
                          {spot.name}
                        </h4>

                        <p className="text-xs text-brand-charcoal/60 leading-relaxed">
                          {spot.description}
                        </p>
                      </div>

                      {/* Accent special details */}
                      <div className="p-3 bg-brand-cream rounded-lg text-[10px] text-brand-charcoal/80 flex items-start gap-1">
                        <span className="font-bold text-brand-amber shrink-0">Specialty:</span>
                        <span>{spot.specialty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. Contact/Directions Pitch */}
      <section className="py-20 bg-white border-t border-brand-sand-dark/20" id="directions-pitch">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display font-medium text-2xl text-brand-charcoal">
            {t("discover.routeTitle")}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-earth/80 max-w-lg mx-auto leading-relaxed">
            {t("discover.routeDesc")}
          </p>
          
          <div className="pt-2">
            <Link
              to="/connect"
              className="bg-brand-charcoal hover:bg-[#2D241E] text-white font-sans text-xs font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200"
            >
              {t("discover.routeBtn")}
              <ChevronRight className="w-4 h-4 text-brand-amber" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
