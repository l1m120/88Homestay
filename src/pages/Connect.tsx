import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import {
  MessageSquare,
  CheckCircle,
  Mail,
  MapPin,
  Send,
  Languages,
  User,
  ExternalLink,
  Phone,
  BookmarkCheck,
  Compass,
  Globe,
  CalendarDays,
  Copy
} from "lucide-react";
import {
  WhatsAppIcon,
  AirbnbIcon,
  AgodaIcon,
  BookingIcon,
  TripIcon,
  XiaohongshuIcon,
  InstagramIcon,
  FacebookIcon
} from "../components/BrandIcons";

export default function Connect() {
  const { language, t } = useLanguage();

  // Dynamic brand icon getter helper
  const getBrandIcon = (id: string, className: string = "w-5 h-5", size: number = 20) => {
    switch (id) {
      case "whatsapp":
        return <WhatsAppIcon className={className} size={size} />;
      case "airbnb":
        return <AirbnbIcon className={className} size={size} />;
      case "agoda":
        return <AgodaIcon className={className} size={size} />;
      case "booking":
        return <BookingIcon className={className} size={size} />;
      case "trip":
        return <TripIcon className={className} size={size} />;
      case "redbook":
        return <XiaohongshuIcon className={className} size={size} />;
      case "instagram":
        return <InstagramIcon className={className} size={size} />;
      case "facebook":
        return <FacebookIcon className={className} size={size} />;
      default:
        return null;
    }
  };

  // Booking channels with localized descriptions and labels
  const bookingChannels = [
    {
      id: "whatsapp",
      name: language === "ch" ? "WhatsApp 预订 (88 Buddy)" : language === "ms" ? "Daftar Tempah WhatsApp (88 Buddy)" : "WhatsApp Booking (88 Buddy)",
      description: language === "ch" ? "保证官方底价！无中介平台手续费（可替您省下高达 15%）" : language === "ms" ? "Jaminan Harga Rendah Peribadi! Muat jimat komisen agensi sehingga 15%" : "Best Price Guarantee! Save on agency commissions (Save up to 15%)",
      url: "https://wa.me/60103219588",
      colorClass: "bg-white border-brand-sand-dark/60 hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-emerald-900/15 hover:shadow-lg hover:text-white transform hover:-translate-y-0.5",
      iconColor: "text-[#25D366] bg-emerald-50/50 group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent",
      ctaLabel: language === "ch" ? "直接预订" : language === "ms" ? "WhatsApp Segera" : "Chat to Book Instantly",
      isPremium: true
    },
    {
      id: "airbnb",
      name: "Airbnb",
      description: language === "ch" ? "超赞房东认证 · 尊享爱彼迎官方平台全面房客保险与安全退换" : language === "ms" ? "Pengesahan Superhost · Perlindungan platform yang terjamin dan selamat" : "Superhost Verified · Complete platform protection and security",
      url: "https://airbnb.com/h/88homestayyp",
      colorClass: "bg-white border-brand-sand-dark/60 hover:bg-[#FF5A5F] hover:border-[#FF5A5F] hover:shadow-rose-900/15 hover:shadow-lg hover:text-white transform hover:-translate-y-0.5",
      iconColor: "text-[#FF5A5F] bg-rose-50/50 group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent",
      ctaLabel: language === "ch" ? "前往 Airbnb 预订" : language === "ms" ? "Buka di Airbnb" : "View on Airbnb",
      isPremium: false
    },
    {
      id: "agoda",
      name: "Agoda",
      description: language === "ch" ? "官方认证 Agoda Homes 甄选合作伙伴。点击查看限时直降优惠" : language === "ms" ? "Rakan kongsi Agoda Homes rasmi. Semak diskaun tular dengan segera" : "Official Agoda Homes partner. Check live discount promotions",
      url: "https://www.agoda.com/3-new-rooms-with-private-bathrooms-yong-peng/hotel/batu-pahat-my.html?cid=1844104&ds=BXSbY%2Be0YNC4Mlcx",
      colorClass: "bg-white border-brand-sand-dark/60 hover:bg-[#8D3FE7] hover:border-[#8D3FE7] hover:shadow-purple-900/15 hover:shadow-lg hover:text-white transform hover:-translate-y-0.5",
      iconColor: "bg-purple-50/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent",
      ctaLabel: language === "ch" ? "在 Agoda 搜房" : language === "ms" ? "Cari di Agoda" : "Find Room on Agoda",
      isPremium: false
    },
    {
      id: "booking",
      name: "Booking.com",
      description: language === "ch" ? "支持 Genius 常客升房特权以及极其弹性的免订金退订方案" : language === "ms" ? "Ganjaran taraf kesetiaan Genius dan tatasusila pembatalan fleksibel" : "Genius loyalty discounts and flexible cancellation terms",
      url: "booking.com/hotel/my/yong-peng-3-rooms-new-homestay-near-tian-pao-kong.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaKEBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALvlZbRBsACAdICJDNlY2FlN2I1LTcwM2UtNGYwNy1hZjUyLTllMjkxYjgzZTc1ZtgCAeACAQ&aid=304142&ucfs=1&arphpl=1&checkin=2027-02-01&checkout=2027-02-04&dest_id=-2405393&dest_type=city&group_adults=6&req_adults=6&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=127e376fee5a03ca&srepoch=1780991587&all_sr_blocks=1658563201_437763493_8_0_0&highlighted_blocks=1658563201_437763493_8_0_0&matching_block_id=1658563201_437763493_8_0_0&sr_pri_blocks=1658563201_437763493_8_0_0__99900&from=searchresults",
      colorClass: "bg-white border-brand-sand-dark/60 hover:bg-[#003580] hover:border-[#003580] hover:shadow-blue-900/15 hover:shadow-lg hover:text-white transform hover:-translate-y-0.5",
      iconColor: "text-[#003580] bg-blue-50/50 group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent",
      ctaLabel: language === "ch" ? "前往 Booking.com 选择" : language === "ms" ? "Buka di Booking.com" : "Select on Booking.com",
      isPremium: false
    },
    {
      id: "trip",
      name: "Trip.com",
      description: language === "ch" ? "携程亚太精选民宿计划，累积高额旅程积分，客服支持省心" : language === "ms" ? "Pilihan portal Trip.com Asia. Penarafan tinggi dan mengumpul mata ganjaran" : "Standard Asian booking portal. High ratings and easy points",
      url: "https://www.trip.com/w/8xaM7ckitU2",
      colorClass: "bg-white border-brand-sand-dark/60 hover:bg-[#0066E6] hover:border-[#0066E6] hover:shadow-sky-900/15 hover:shadow-lg hover:text-white transform hover:-translate-y-0.5",
      iconColor: "text-[#0066E6] bg-sky-50/50 group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent",
      ctaLabel: language === "ch" ? "在 Trip.com 预订" : language === "ms" ? "Tempah di Trip.com" : "Book on Trip.com",
      isPremium: false
    }
  ];

  // Social Channels Media with localized descriptions
  const socialChannels = [
    {
      id: "redbook",
      name: "Xiaohongshu (小红书 · RED)",
      username: "@永平88民宿",
      description: language === "ch" 
        ? "探索 88 Homestay 最真实的房间导览与住宿记录！" 
        : language === "ms" 
        ? "Room tour & pengalaman sebenar 88 Homestay!" 
        : "Real room tours & stay experiences!",
      url: "https://xhslink.com/m/A6I2KGp93OI",
      colorClass: "bg-white border-brand-sand-dark/60 hover:bg-[#FF2442] hover:border-[#FF2442] hover:shadow-rose-900/15 hover:shadow-lg hover:text-white transition-all duration-300 transform hover:-translate-y-0.5",
      iconColor: "text-[#FF2442] bg-rose-50/50 border border-rose-100 group-hover:bg-white group-hover:text-[#FF2442] group-hover:border-transparent"
    },
    {
      id: "instagram",
      name: "Instagram",
      username: "@yp88homestay",
      description: language === "ch" 
        ? "客人的打卡美照、日常点滴与对 88 Homestay 的真实评价！" 
        : language === "ms" 
        ? "Foto tetamu & review jujur homestay!" 
        : "Guest photos & genuine homestay reviews!",
      url: "https://www.instagram.com/yp88homestay?igsh=OHQzeWNuOWxsbHVv",
      colorClass: "bg-white border-brand-sand-dark/60 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:border-transparent hover:shadow-pink-900/15 hover:shadow-lg hover:text-white transition-all duration-300 transform hover:-translate-y-0.5",
      iconColor: "text-[#E1306C] bg-purple-50/50 border border-purple-100 group-hover:bg-white/25 group-hover:text-white group-hover:border-transparent"
    },
    {
      id: "facebook",
      name: "Facebook",
      username: "88 Homestay Yong Peng",
      description: language === "ch" 
        ? "永平旅游攻略、88 Homestay 最新优惠与住宿资讯！" 
        : language === "ms" 
        ? "Info Yong Peng & promo homestay terkini!" 
        : "Yong Peng guides & latest homestay promos!",
      url: "https://www.facebook.com/share/18eDAZALq8/",
      colorClass: "bg-white border-brand-sand-dark/60 hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-blue-900/15 hover:shadow-lg hover:text-white transition-all duration-300 transform hover:-translate-y-0.5",
      iconColor: "text-[#1877F2] bg-blue-50/50 border border-blue-100 group-hover:bg-white group-hover:text-[#1877F2] group-hover:border-transparent"
    }
  ];

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "8",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          dates: "",
          guests: "8",
          message: ""
        });
      }, 5000);
    }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText("Level 1, Yong Peng Town Center, Yong Peng, 83700 Johor, Malaysia");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-brand-cream min-h-screen pt-16 text-left" id="connect-page-container">
      
      {/* 1. Page Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center bg-white/40 border-b border-brand-sand-dark/30" id="connect-hero">
        <div className="max-w-2xl mx-auto space-y-3">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal">
            {t("connect.title")}
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-earth/80">
            {t("connect.subtitle")}
          </p>
          <div className="w-12 h-0.5 bg-[#92400E] mx-auto" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SECTION (Col Span 7): linktree direct links matrix */}
          <div className="lg:col-span-7 space-y-8" id="linktree-side">
            
            {/* Host Presentation Card */}
            <div className="bg-white rounded-2xl border border-brand-sand-dark/60 p-6 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6" id="host-card">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-brand-sand/30 shrink-0 relative border-2 border-brand-amber shadow-sm">
                <img
                  src="/images/WhatsApp Image 2026-05-28 at 16.48.35.jpeg"
                  alt="88 Buddy Host Mascot"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-charcoal leading-snug">
                      {t("connect.hostTitle")}
                    </h3>
                    <p className="text-xs text-brand-amber font-semibold mt-0.5">
                      {t("connect.hostRole")}
                    </p>
                  </div>
                  
                  {/* Languages Block */}
                  <div className="flex items-center justify-center sm:justify-start gap-1 bg-brand-cream/80 border border-brand-sand-dark/40 px-2.5 py-1 rounded-lg text-[10px] text-brand-charcoal font-semibold shrink-0">
                    <Languages className="w-3.5 h-3.5 text-brand-amber" />
                    <span>{t("connect.hostLanguages")}</span>
                  </div>
                </div>

                <p className="text-xs text-brand-charcoal/70 leading-relaxed md:leading-relaxed text-left">
                  {t("connect.hostBio")}
                </p>

                <div className="text-[11px] text-[#92400E] font-medium flex items-center justify-center sm:justify-start gap-1 text-left mt-1">
                  <User className="w-3.5 h-3.5 text-[#92400E] shrink-0" />
                  <span className="font-semibold">{t("connect.hostQuotes")}</span>
                </div>
              </div>
            </div>

            {/* A. Reserve stay buttons matrix */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-brand-sand-dark/40 justify-between">
                <div className="flex items-center gap-2">
                  <BookmarkCheck className="w-5 h-5 text-brand-amber" />
                  <h2 className="font-display font-bold text-lg text-brand-charcoal">
                    {t("connect.sectionA")}
                  </h2>
                </div>
                <span className="text-[10px] text-brand-amber font-bold uppercase tracking-wider bg-[#FEF3C7] px-2 py-0.5 rounded">
                  {t("connect.sectionABadge")}
                </span>
              </div>

              <div className="space-y-3.5" id="booking-matrix-buttons">
                {bookingChannels.map((channel) => (
                  <a
                    key={channel.id}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full group rounded-2xl border p-5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 transition-all duration-300 text-left relative overflow-hidden ${channel.colorClass}`}
                  >
                    {/* Background decorations with subtle movement/blur */}
                    {channel.id === "whatsapp" && (
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none group-hover:bg-white/10 transition-all duration-300" />
                    )}

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 flex-1 w-full">
                      {/* Branded Logo wrapper */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-brand-sand-dark/20 transition-all duration-300 ${channel.iconColor}`}>
                        {getBrandIcon(channel.id, "w-6 h-6", 24)}
                      </div>

                      <div className="space-y-1 text-center sm:text-left flex-1">
                        <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap text-left">
                          <span className="font-display font-bold text-base sm:text-lg text-brand-charcoal group-hover:text-white transition-colors duration-200">
                            {channel.name}
                          </span>
                          {channel.isPremium && (
                            <span className="bg-[#FEF3C7] text-[#78350F] group-hover:bg-amber-100 group-hover:text-[#78350F] text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-sm border border-amber-300/40">
                              ★ Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-brand-charcoal/60 group-hover:text-white/80 transition-colors duration-200 leading-normal">
                          {channel.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 text-xs font-bold leading-none px-4 py-2.5 rounded-xl border border-slate-200 bg-neutral-50 text-brand-charcoal group-hover:bg-white/20 group-hover:border-white/30 group-hover:text-white transition-all duration-300 self-center sm:self-auto">
                      {channel.ctaLabel}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* B. Social channels matrix */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-brand-sand-dark/40 text-left">
                <Globe className="w-5 h-5 text-brand-amber" />
                <h2 className="font-display font-medium text-lg text-brand-charcoal">
                  {t("connect.sectionB")}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="social-media-channels">
                {socialChannels.map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-xl border p-4.5 flex flex-col justify-between text-left transition-all duration-300 hover:shadow-lg min-h-[155px] group ${soc.colorClass}`}
                  >
                    <div className="space-y-2">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${soc.iconColor}`}>
                        {getBrandIcon(soc.id, "w-5 h-5", 20)}
                      </div>

                      <div>
                        <h4 className="font-display font-bold text-xs text-brand-charcoal group-hover:text-white leading-tight">
                          {soc.name}
                        </h4>
                        <p className="text-[10px] text-brand-charcoal/50 group-hover:text-white/70 leading-normal mt-0.5 font-sans">
                          {soc.username}
                        </p>
                      </div>
                    </div>

                    <p className="text-[10px] text-brand-charcoal/60 group-hover:text-white/80 leading-normal line-clamp-2 mt-2 transition-colors duration-200">
                      {soc.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SECTION (Col Span 5): contact form & map locator */}
          <div className="lg:col-span-5 space-y-8" id="contact-side">
            
            {/* C. Direct Email form container */}
            <div className="bg-white rounded-2xl border border-brand-sand-dark/60 p-6 sm:p-8 shadow-sm">
              <div className="space-y-2 text-left mb-6">
                <h3 className="font-display font-bold text-lg text-brand-charcoal flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#92400E]" />
                  {t("connect.sectionC")}
                </h3>
                <p className="text-xs text-brand-charcoal/50 leading-relaxed">
                  {t("connect.sectionCSub")}
                </p>
              </div>

              {/* Form markup */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left" id="contact-form">
                <div>
                  <label className="block text-[11px] font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                    {t("connect.form.name")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("connect.form.namePlaceholder")}
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-sand-dark/60 bg-brand-cream/20 text-xs focus:ring-1 focus:ring-brand-amber focus:outline-none placeholder-brand-charcoal/40 text-brand-charcoal font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                      {t("connect.form.email")}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("connect.form.emailPlaceholder")}
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand-dark/60 bg-brand-cream/20 text-xs focus:ring-1 focus:ring-brand-amber focus:outline-none placeholder-brand-charcoal/40 text-brand-charcoal font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                      {t("connect.form.phone")}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t("connect.form.phonePlaceholder")}
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand-dark/60 bg-brand-cream/20 text-xs focus:ring-1 focus:ring-brand-amber focus:outline-none placeholder-brand-charcoal/40 text-brand-charcoal font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                      {t("connect.form.dates")}
                    </label>
                    <input
                      type="text"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      placeholder={t("connect.form.datesPlaceholder")}
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand-dark/60 bg-brand-cream/20 text-xs focus:ring-1 focus:ring-brand-amber focus:outline-none placeholder-brand-charcoal/40 text-brand-charcoal font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                      {t("connect.form.guests")}
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand-dark/60 bg-brand-cream/20 text-xs focus:ring-1 focus:ring-brand-amber focus:outline-none text-brand-charcoal font-sans"
                    >
                      <option value="1-4">{t("connect.form.guestsOpt1")}</option>
                      <option value="5-8">{t("connect.form.guestsOpt2")}</option>
                      <option value="8">{t("connect.form.guestsOpt3")}</option>
                      <option value="11">{t("connect.form.guestsOpt4")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                    {t("connect.form.message")}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("connect.form.messagePlaceholder")}
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-sand-dark/60 bg-brand-cream/20 text-xs focus:ring-1 focus:ring-brand-amber focus:outline-none placeholder-brand-charcoal/40 text-brand-charcoal font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#92400E] hover:bg-brand-terracotta-dark text-white text-xs font-bold py-3 px-5 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  {t("connect.form.submit")}
                </button>

                {/* Form receipt feedback */}
                {isSubmitted && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-4 rounded-lg flex items-start gap-2 text-left">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{t("connect.form.successTitle")}</p>
                      <p className="text-[10px] text-emerald-700/80 mt-1">
                        {t("connect.form.successDesc")}
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Google Map indicator block */}
            <div className="bg-white rounded-2xl border border-brand-sand-dark/60 p-6 text-left space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-brand-amber uppercase tracking-wide block">
                  {t("connect.map.howToReach")}
                </span>
                <h3 className="font-display font-medium text-lg text-brand-charcoal flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-amber" />
                  {t("connect.map.title")}
                </h3>
              </div>

              {/* Styled clean Address Plate */}
              <div className="bg-brand-cream/50 border border-brand-sand-dark/60 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1 text-left">
                  <p className="text-xs font-bold text-brand-charcoal font-display">{t("connect.map.addressLabel")}</p>
                  <p className="text-[11px] text-brand-charcoal/60 leading-normal max-w-xs">
                    {t("connect.map.address")}
                  </p>
                </div>
                
                <button
                  onClick={copyAddress}
                  className="bg-white hover:bg-[#F3EFE9] border border-brand-sand-dark/80 px-2.5 py-1.5 rounded text-[10px] font-semibold text-brand-charcoal flex items-center gap-1 shrink-0 transition-colors duration-200"
                >
                  <Copy className="w-3 h-3 text-[#92400E]" />
                  {copied ? t("connect.map.copied") : t("connect.map.copyBtn")}
                </button>
              </div>

              {/* Map embed placeholder / clean anchor card */}
              <a
                href="https://maps.google.com/?q=88+Homestay+Yong+Peng+Johor"
                target="_blank"
                rel="noopener noreferrer"
                className="block group rounded-xl overflow-hidden border border-brand-sand-dark/50 relative aspect-[2/1] bg-brand-sand/20"
              >
                {/* Visual map rendering view */}
                <img
                  src="/images/IMG_20260528_190033.jpg"
                  alt="Google Map preview for Yong Peng town center"
                  className="w-full h-full object-cover opacity-80 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                
                <div className="absolute inset-0 bg-brand-charcoal/40 group-hover:bg-brand-charcoal/20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold text-brand-charcoal shadow-md">
                    <Compass className="w-4 h-4 text-[#92400E]" />
                    {t("connect.map.openMap")}
                  </div>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
