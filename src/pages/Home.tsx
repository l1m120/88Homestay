import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  Users,
  Bed,
  Bath,
  Clock,
  CheckCircle,
  Wifi,
  Tv,
  Wind,
  Droplet,
  VolumeX,
  Wine,
  Cctv,
  Car,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Dumbbell,
  Mic,
  Scissors,
  Store,
  Utensils
} from "lucide-react";

interface Bedroom {
  id: string;
  name: string;
  beds: string;
  bathroom: string;
  capacity: string;
  badge: string;
  description: string;
  images: string[];
  amenities: string[];
}

function BedroomCard({ room, t }: { room: any; t: any; key?: any }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIdx((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIdx((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="bg-brand-cream/40 rounded-2xl border border-brand-sand-dark/60 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group/card"
    >
      {/* Room Image Frame */}
      <div className="relative aspect-[3/2] overflow-hidden bg-brand-sand/30 group/carousel">
        <motion.img
          key={currentIdx}
          src={room.images[currentIdx]}
          alt={`${room.name} view ${currentIdx + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Carousel controls - left arrow */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 z-10 focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel controls - right arrow */}
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 z-10 focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Room Badge Overlays */}
        <span className="absolute top-4 left-4 bg-brand-charcoal text-white text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider z-10">
          {room.badge}
        </span>

        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold text-brand-charcoal flex items-center gap-1.5 shadow-sm z-10">
          <Users className="w-3.5 h-3.5 text-brand-amber" />
          {room.capacity}
        </div>

        {/* Mini Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {room.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setCurrentIdx(index);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIdx
                  ? "bg-brand-amber w-3"
                  : "bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-left space-y-4">
        <div>
          <h3 className="font-display font-bold text-lg text-brand-charcoal mb-1 group-hover/card:text-brand-amber transition-colors">
            {room.name}
          </h3>
          
          {/* Setup spec highlights */}
          <div className="flex flex-col gap-1.5 mt-3 text-xs text-brand-earth/90">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-brand-terracotta-light rounded-sm text-brand-terracotta flex items-center justify-center shrink-0">
                <Bed className="w-3 h-3 text-brand-amber" />
              </span>
              <span>{t("rooms.bedsLabel")}: <strong>{room.beds}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-brand-terracotta-light rounded-sm text-brand-terracotta flex items-center justify-center shrink-0">
                <Bath className="w-3 h-3 text-brand-amber" />
              </span>
              <span>{t("rooms.bathroomLabel")}: <strong>{room.bathroom}</strong></span>
            </div>
          </div>
        </div>

        <p className="text-xs text-brand-charcoal/70 leading-relaxed flex-grow">
          {room.description}
        </p>

        <div className="pt-4 border-t border-brand-sand-dark/40">
          <div className="flex flex-wrap gap-1.5">
            {room.amenities.map((item, idx) => (
              <span
                key={idx}
                className="bg-white text-brand-charcoal/80 text-[10px] font-semibold px-2 py-1 rounded-md border border-brand-sand-dark/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { language, t } = useLanguage();
  // Accordion state for House Rules
  const [activeRule, setActiveRule] = useState<string | null>("checkout");

  // Dynamic Bedroom Catalog Data with localized details
  const bedrooms = [
    {
      id: "bed-1",
      name: t("rooms.rosewoodName"), // 如果你没用 i18n 也可以直接写 "Bedroom 1"
      beds: language === "ch" ? "1 张优质特大双人床 (Premium King Bed)" : language === "ms" ? "1 × Katil King Premium" : "1 × Premium King Bed",
      bathroom: language === "ch" ? "专属热水淋浴浴室" : language === "ms" ? "Bilik Mandi Peribadi En-suite" : "Ensuite Private Bathroom (Water Heater)",
      capacity: language === "ch" ? "1-2 位宾客" : language === "ms" ? "1-2 Tetamu" : "1-2 Guests",
      
      // 修改 1：Badge 改成强调“明亮”和“主人房”，去掉“最大间”
      badge: language === "ch" ? "明亮主人房 (有大窗户)" : language === "ms" ? "Bilik Utama Ceria" : "Bright Master Room",
      
      // 修改 2：根据图片（有窗、梳妆台）和 400sqft 写的道地 Description
      description: language === "ch" 
        ? "这间主人房非常宽阔（400方尺），有明亮的大窗户和加厚的遮光窗帘，白天采光很好，晚上睡觉也很安静。里面还特地准备了一张专属梳妆台，让你舒舒服服地坐着打扮吹头发。" 
        : language === "ms" 
        ? "Bilik utama ini sangat luas (400 sqft), ada tingkap besar dan langsir tebal. Siang terang, malam tidur lena. Kami juga sediakan meja solek untuk keselesaan anda bersiap." 
        : "This master room is very spacious (400 sqft) with a large window and thick blackout curtains. It also features a dedicated vanity desk for your comfort.",
        
      images: [
        "/images/IMG-20260407-WA0023.jpg",
        "/images/IMG-20260407-WA0019.jpg",
        "/images/IMG-20260407-WA0026.jpg",
        "/images/IMG-20260407-WA0027.jpg",
        "/images/IMG-20260407-WA0025.jpg"
      ],
      amenities: language === "ch" 
        ? ["明亮大窗口", "2马力Daikin静音冷气", "精致梳妆台", "热水套房卫浴", "置有吹风机", "400方尺宽阔空间", "热水壶"] 
        : language === "ms" 
        ? ["Pendingin Hawa 2HP Daikin", "Meja Solek", "Shower Bilik Mandi", "Pengering Rambut", "Tingkap Besar", "Ruang Luas 400 sqft", "Cerek Elektrik"] 
        : ["2HP Daikin Cassette Air-con", "Vanity Desk", "Ensuite Bathroom", "Hairdryer included", "Large Window", "400 sqft Spacious Room", "Electric Kettle"]
    },
    {
      id: "bed-2",
      name: t("rooms.ochreName"),
      beds: language === "ch" ? "1 张优质特大双人床 (Premium King Bed)" : language === "ms" ? "1 × Katil King Premium" : "1 × Premium King Bed",
      bathroom: language === "ch" ? "专属热水淋浴浴室" : language === "ms" ? "Bilik Mandi Peribadi En-suite" : "Ensuite Private Bathroom (Water Heater)",
      capacity: language === "ch" ? "1-2 位宾客" : language === "ms" ? "1-2 Tetamu" : "1-2 Guests",
      
      // 修改 1：Badge
      badge: language === "ch" ? "温馨舒畅双人房" : language === "ms" ? "Bilik Berdua Selesa" : "Cozy Double Room",
      
      // 修改 2：根据图片（暗色花纹壁纸、行李架、暖光）写的 Description
      description: language === "ch" 
        ? "这间房走的是温馨舒服的路线，墙上有很特别的图案壁纸设计。虽然没有大窗户，但是灯光调得很柔和，加上安静的环境，保证让你一觉睡到自然醒！" 
        : language === "ms" 
        ? "Bilik ini berkonsepkan selesa dan cozy dengan rekaan kertas dinding yang unik. Walaupun tiada tingkap besar, lampunya lembut dan sangat tenang, sesuai untuk berehat panjang!" 
        : "This room features a cozy vibe with unique wallpaper design. The soft lighting and quiet environment guarantee a good night's sleep！",
        
      images: [
        "/images/IMG-20260407-WA0020.jpg",
        "/images/IMG-20260407-WA0030.jpg"
      ],
      amenities: language === "ch" 
        ? ["2马力Daikin静音冷气", "私密套房浴室", "遮光物理窗帘", "热水壶", "置有吹风机", "200方尺空间"] 
        : language === "ms" 
        ? ["Penghawa Dingin 2HP Daikin", "Bilik Mandi Sendiri", "Langsir Blackout", "Cerek Elektrik", "Pengering Rambut", "Ruang 200 sqft"] 
        : ["2HP Daikin Cassette Air-con", "Ensuite Bathroom", "Blackout Curtains", "Electric Kettle", "Hair Dryer", "200 sqft Space"]
    },
    {
      id: "bed-3",
      name: t("rooms.twinName"),
      beds: language === "ch" ? "2 张特大豪华双人床 (Luxury King Beds)" : language === "ms" ? "2 × Katil King Berkualiti" : "2 × Premium King Beds",
      bathroom: language === "ch" ? "2 × 专属热水淋浴浴室" : language === "ms" ? "2 × Bilik Mandi En-suite Peribadi" : "2 × Ensuite Private Bathroom (Water Heater)",
      capacity: language === "ch" ? "3-4 位宾客" : language === "ms" ? "3-4 Tetamu" : "3-4 Guests",
      
      // 修改 1：Badge 改成“最大间”，因为这间才是 620sqft
      badge: language === "ch" ? "超大家庭房 / 全屋最大间" : language === "ms" ? "Bilik Keluarga / Paling Besar" : "Large Family Room / Biggest",
      
      // 修改 2：根据图片（两张床、海洋壁画）和 620sqft 写的 Description
      description: language === "ch" 
        ? "这间是我们最大的一间房（足足有 620方尺那么大！），里面放了两张特大双人床 (King Bed)，墙上还有很抢眼的海洋壁画。空间超宽阔，最适合一家大小或者一班好朋友晚上围在一起吹水聊天看电视。" 
        : language === "ms" 
        ? "Ini bilik kami yang paling besar (620 sqft!), dilengkapi dua katil King dan mural laut yang cantik. Ruang sangat luas, paling ngam untuk satu keluarga atau kawan-kawan lepak bersembang pada waktu malam." 
        : "This is our largest room (a whopping 620 sqft!), featuring two King beds and a beautiful ocean mural. The massive space is perfect for families or a group of friends to hang out and chat at night.",
        
      images: [
        "/images/IMG-20260407-WA0021.jpg",
        "/images/IMG-20260407-WA0022.jpg",
        "/images/room 3 amended.jpeg",
        "/images/IMG-20260407-WA0028.jpg",
        "/images/IMG-20260407-WA0029.jpg"
      ],
      amenities: language === "ch" 
        ? ["2马力Daikin静音冷气", "两张特大双人床", "套间高压淋浴", "超多插座", "微波炉", "热水壶", "50寸大电视", "置有吹风机", "饮水机", "冰箱", "620方尺超大空间"] 
        : language === "ms" 
        ? ["Air-con Kuasa Tinggi Daikin", "Katil Dua King", "Bilik Air Peribadi", "Soket Tepi Katil", "Microwave", "Cerek Elektrik", "TV 50 Inci", "Penapis Air", "Pengering Rambut", "Peti Sejuk", "Ruang Luas 620 sqft"] 
        : ["2HP Daikin Cassette Air-con", "Dual King Beds", "Ensuite Bathroom", "Power Strips Near Bed", "Microwave", "Water Dispenser", "50-inch TV", "Water Dispenser", "Hair Dryer", "Fridge", "620 sqft Spacious Room"] 
    }
  ];

  // Premium Amenities list with icon components linked to translations
  const premiumAmenities = [
    {
      id: "wifi",
      icon: <Wifi className="w-6 h-6 text-[#D97706]" />,
      title: t("amenities.wifiTitle"),
      description: t("amenities.wifiDesc")
    },
    {
      id: "tv",
      icon: <Tv className="w-6 h-6 text-[#D97706]" />,
      title: t("amenities.tvTitle"),
      description: t("amenities.tvDesc")
    },
    {
      id: "aircon",
      icon: <Wind className="w-6 h-6 text-[#D97706]" />,
      title: t("amenities.airconTitle"),
      description: t("amenities.airconDesc")
    },
    {
      id: "water",
      icon: <Droplet className="w-6 h-6 text-[#D97706]" />,
      title: t("amenities.waterTitle"),
      description: t("amenities.waterDesc")
    },
    {
      id: "sound",
      icon: <VolumeX className="w-6 h-6 text-[#D97706]" />,
      title: t("amenities.soundproofingTitle"),
      description: t("amenities.soundproofingDesc")
    },
    {
      id: "mini",
      icon: <Wine className="w-6 h-6 text-[#D97706]" />,
      title: t("amenities.refreshmentTitle"),
      description: t("amenities.refreshmentDesc")
    },
    {
      id: "dining",
      icon: <Cctv className="w-6 h-6 text-[#D97706]" />,
      title: t("amenities.diningTitle"),
      description: t("amenities.diningDesc")
    },
    {
      id: "parking",
      icon: <Car className="w-6 h-6 text-[#D97706]" />,
      title: t("amenities.parkingTitle"),
      description: t("amenities.parkingDesc")
    }
  ];

  // House Rules Accordion Data linked to translations
  const houseRules = [
    {
      id: "checkout",
      title: t("rules.checkoutTitle"),
      description: t("rules.checkoutDesc"),
      isAccent: true,
      accentText: t("rules.checkoutAccent")
    },
    {
      id: "smoking",
      title: t("rules.smokingTitle"),
      description: t("rules.smokingDesc")
    },
    {
      id: "pets",
      title: t("rules.petsTitle"),
      description: t("rules.petsDesc")
    },
    {
      id: "stairs",
      title: t("rules.stairsTitle"),
      description: t("rules.stairsDesc")
    },
    {
      id: "facilities",
      title: t("rules.facilitiesTitle"),
      description: t("rules.facilitiesDesc"),
      isAccent: true,
      accentText: t("rules.facilitiesAccent")
    }
  ];

  const toggleRule = (id: string) => {
    setActiveRule(activeRule === id ? null : id);
  };

  return (
    <div className="bg-brand-cream min-h-screen pt-16" id="home-page-container">
      
      {/* 1. Hero Block */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8" id="hero-section">
        {/* Decorative ambient spots */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-brand-amber/10 blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brand-terracotta/5 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Selling Points */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-terracotta-light text-brand-terracotta text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                {t("hero.badge")}
              </div>
              
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-5xl text-brand-charcoal tracking-tight leading-[1.15]">
                {t("hero.headingLine1")} <br className="hidden sm:inline" />
                <span className="text-brand-amber font-semibold block sm:inline mt-1 sm:mt-0">{t("hero.headingLine2")}</span>
              </h1>
              
              <p className="font-sans text-base sm:text-lg text-brand-earth/80 max-w-xl leading-relaxed">
                {t("hero.description")}
              </p>

              {/* Core quick statistics panel */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 pb-2" id="hero-stats-panel">
                <div className="bg-white/80 backdrop-blur border border-brand-sand-dark/40 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <Users className="w-5 h-5 text-brand-amber mb-1.5" />
                  <span className="font-display font-bold text-base text-brand-charcoal">{t("hero.stats.guests")}</span>
                  <span className="text-[10px] text-brand-charcoal/60 uppercase font-semibold">{t("hero.stats.guestsSub")}</span>
                </div>

                <div className="bg-white/80 backdrop-blur border border-brand-sand-dark/40 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <Bed className="w-5 h-5 text-brand-amber mb-1.5" />
                  <span className="font-display font-bold text-base text-brand-charcoal">{t("hero.stats.bedrooms")}</span>
                  <span className="text-[10px] text-brand-charcoal/60 uppercase font-semibold">{t("hero.stats.bedroomsSub")}</span>
                </div>

                <div className="bg-white/80 backdrop-blur border border-brand-sand-dark/40 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <Bath className="w-5 h-5 text-brand-amber mb-1.5" />
                  <span className="font-display font-bold text-base text-brand-charcoal">{t("hero.stats.bathrooms")}</span>
                  <span className="text-[10px] text-brand-charcoal/60 uppercase font-semibold">{t("hero.stats.bathroomsSub")}</span>
                </div>

                <div className="bg-white/80 backdrop-blur p-4 rounded-xl flex flex-col items-center justify-center text-center bg-brand-amber-light border-brand-amber/20 border">
                  <Clock className="w-5 h-5 text-brand-amber mb-1.5" />
                  <span className="font-display font-bold text-base text-[#78350F]">{t("hero.stats.checkout")}</span>
                  <span className="text-[10px] text-brand-amber uppercase font-bold">{t("hero.stats.checkoutSub")}</span>
                </div>
              </div>

              {/* Action and highlights shortcut */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  to="/connect"
                  className="w-full sm:w-auto bg-[#92400E] hover:bg-brand-terracotta-dark text-white font-sans font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300 text-center shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
                
                <Link
                   to="/location"
                  className="w-full sm:w-auto bg-white hover:bg-brand-sand/30 text-brand-charcoal border border-brand-sand-dark font-sans font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  {t("hero.ctaSecondary")}
                </Link>
              </div>
            </div>

            {/* Right Column: Beautiful Mosaic Showcase */}
            <div className="lg:col-span-5 relative" id="hero-image-block">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-square">
                <img
                  src="/images/IMG-20260407-WA0021.jpg"
                  alt="88 Homestay welcoming living space"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-left">
                    <span className="text-xs font-bold text-brand-amber uppercase tracking-wider">88 Homestay Yong Peng</span>
                    <h3 className="font-display font-medium text-lg mt-0.5">Spacious & Comfortably Furnished</h3>
                  </div>
                </div>
              </div>
              {/* Decorative side badge */}
            </div>

          </div>
        </div>
      </section>

      {/* 2. The Space / Catalog Section */}
      <section className="py-20 bg-white border-t border-brand-sand-dark/30" id="space-catalog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-brand-amber uppercase tracking-widest block">
              {t("rooms.badge")}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal">
              {t("rooms.title")}
            </h2>
            <div className="w-12 h-1 bg-brand-amber mx-auto" />
            <p className="font-sans text-sm sm:text-base text-brand-earth/70">
              {t("rooms.subtitle")}
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="bedroom-catalog-grid">
            {bedrooms.map((room) => (
              <BedroomCard key={room.id} room={room} t={t} />
            ))}
          </div>

          {/* Special Shoplot stairs design annotation */}
          <div className="mt-12 bg-brand-amber-light rounded-2xl border border-brand-amber/20 p-5 max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-brand-amber shrink-0 mt-0.5" />
            <div className="text-left space-y-1">
              <h4 className="font-display font-bold text-sm text-brand-charcoal">
                {t("rooms.stairsNoticeTitle")}
              </h4>
              <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                {t("rooms.stairsNoticeDesc")}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Premium Amenities Grid */}
      <section className="py-20 bg-brand-cream/50" id="premium-amenities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-[#92400E] uppercase tracking-widest block">
              {t("amenities.badge")}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal">
              {t("amenities.title")}
            </h2>
            <div className="w-12 h-1 bg-brand-amber mx-auto" />
            <p className="font-sans text-sm sm:text-base text-brand-earth/70">
              {t("amenities.subtitle")}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="amenity-grid">
            {premiumAmenities.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-white rounded-xl border border-brand-sand-dark/40 p-6 text-left hover:scale-[1.02] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    {amenity.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm text-brand-charcoal">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/60 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Sleek Interactive Accordion House Rules */}
      <section className="py-20 bg-white border-t border-brand-sand-dark/20" id="house-rules">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-[#92400E] uppercase tracking-widest block">
              {t("rules.badge")}
            </span>
            <h2 className="font-display font-bold text-3xl text-brand-charcoal">
              {t("rules.title")}
            </h2>
            <div className="w-12 h-1 bg-brand-amber mx-auto" />
            <p className="font-sans text-xs sm:text-sm text-brand-earth/70 max-w-lg mx-auto">
              {t("rules.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Golden Convenience Perks Highlight Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#FEFBF6] to-[#FAF5EC] border-2 border-brand-sand-dark/40 shadow-xs rounded-2xl p-6 sm:p-8 space-y-6 text-left relative overflow-hidden">
              {/* Decorative accent background spot */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand-amber/5 blur-2xl pointer-events-none" />
              
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-amber/10 text-brand-amber rounded-full">
                  <MapPin className="w-3 h-3 animate-bounce" />
                  Yong Peng Strategic Area
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-charcoal text-balance">
                  {t("rules.perksTitle")}
                </h3>
                <p className="font-sans text-xs text-brand-earth/70 leading-relaxed">
                  {t("rules.perksSub")}
                </p>
              </div>

              {/* List of key lifestyle perks */}
              <div className="space-y-3 pt-1">
                {[
                  { icon: <Dumbbell className="w-4 h-4 text-[#D97706]" />, label: t("rules.perkGym") },
                  { icon: <Mic className="w-4 h-4 text-[#D97706]" />, label: t("rules.perkKtv") },
                  { icon: <Scissors className="w-4 h-4 text-[#D97706]" />, label: t("rules.perkSalon") },
                  { icon: <Store className="w-4 h-4 text-[#D97706]" />, label: t("rules.perkStores") },
                  { icon: <Utensils className="w-4 h-4 text-[#D97706]" />, label: t("rules.perkFood") },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white hover:bg-white/80 p-3 rounded-lg border border-brand-sand-dark/15 transition-colors duration-200 shadow-3xs">
                    <div className="flex-shrink-0 p-2 bg-brand-cream rounded-md border border-brand-sand-dark/25">
                      {item.icon}
                    </div>
                    <span className="font-sans text-xs sm:text-sm font-semibold text-brand-charcoal">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Accordion Frame */}
            <div className="lg:col-span-7 space-y-3 font-sans" id="rules-accordion">
              {houseRules.map((rule) => {
                const isSelected = activeRule === rule.id;
                return (
                  <div
                    key={rule.id}
                    className={`rounded-xl border transition-all duration-300 text-left ${
                      isSelected
                        ? rule.isAccent
                          ? "bg-brand-amber-light border-brand-amber/30 shadow-sm"
                          : "bg-brand-cream border-brand-sand-dark shadow-xs"
                        : "bg-white border-brand-sand-dark/40 hover:border-brand-sand-dark/80"
                    }`}
                  >
                    <button
                      onClick={() => toggleRule(rule.id)}
                      className="w-full px-6 py-4 flex items-center justify-between font-display font-medium text-sm sm:text-base text-brand-charcoal focus:outline-none"
                      aria-expanded={isSelected}
                    >
                      <span className="flex items-center gap-2 font-semibold">
                        {rule.title}
                      </span>
                      {isSelected ? (
                        <ChevronUp className="w-4 h-4 text-[#D97706]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-brand-charcoal/40" />
                      )}
                    </button>

                    {/* Body with simple expand animation */}
                    {isSelected && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed border-t border-brand-sand-dark/20">
                        <p>{rule.description}</p>
                        {rule.isAccent && rule.accentText && (
                          <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] bg-[#FEF3C7] text-[#78350F] font-bold px-2.5 py-1 rounded">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-amber" />
                            {rule.accentText}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final Call to Action banner */}
          <div className="mt-16 bg-[#2D241E] text-white rounded-2xl p-8 text-center space-y-6 relative overflow-hidden shadow-lg border border-brand-sand-dark/50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#92400E]/15 blur-3xl -z-10" />
            
            <h3 className="font-display font-medium text-2xl text-white">
              {t("rules.readyTitle")}
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              {t("rules.readyDesc")}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/connect"
                className="bg-[#D97706] hover:bg-brand-amber text-brand-charcoal font-sans text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm"
              >
                {t("rules.ctaBtn")}
              </Link>
              <Link
                to="/location"
                className="text-white hover:text-brand-amber font-sans text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1"
              >
                {t("rules.ctaExplore")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
