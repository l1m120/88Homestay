import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ShieldAlert, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-neutral-300 border-t border-brand-earth/20 font-sans" id="site-footer">
      
      {/* Upper Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Col 1: Brand Pitch & Notice */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-brand-terracotta rounded-lg flex items-center justify-center text-white font-display font-extrabold text-lg">
                88
              </div>
              <span className="font-display font-bold text-lg tracking-wide text-white">
                88 Homestay (Yong Peng)
              </span>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Experience warm, seamless hospitality in the heart of Yong Peng, Johor. Perfect for custom staycations with families, bridal events, and tourist getaways. Comfortably sleep 8 guests!
            </p>

            <div className="flex items-center gap-2.5 text-xs text-brand-amber bg-brand-earth/30 px-3 py-2 rounded-lg border border-brand-amber/10 w-fit">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Checking out late? Standard checkout is at <strong>12:00 PM</strong>!</span>
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest text-brand-amber uppercase">
              Explore Site
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-brand-amber transition-colors">
                  Home & Catalog
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-neutral-400 hover:text-brand-amber transition-colors">
                  Discover Yong Peng
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-neutral-400 hover:text-brand-amber transition-colors">
                  Connect & Direct Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practical Footprint & Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest text-brand-amber uppercase">
              Contact & Address
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-terracotta shrink-0 mt-0.5" />
                <span className="text-neutral-400 line-clamp-2">
                  57A, Jalan Persiaran Cahaya Baru, Taman BCB, 83700 Yong Peng, Johor Darul Takzim
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-brand-terracotta shrink-0" />
                <a href="https://wa.me/60103219588" className="text-neutral-400 hover:text-brand-amber transition-colors">
                  +60 10-321 9588 (88 Buddy)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-brand-terracotta shrink-0" />
                <a href="mailto:yp88homestay@gmail.com" className="text-neutral-400 hover:text-brand-amber transition-colors break-all">
                  yp88homestay@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Note about Shoplot Layout */}
      <div className="bg-neutral-950/40 py-4 border-t border-neutral-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-neutral-500 flex flex-col sm:flex-row items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-brand-amber/80 shrink-0" />
            <span>Note: <strong>88 Homestay</strong> is located on Level 2 (requires walking up shoplot stairs; may not suit wheelchair access).</span>
          </div>
          <span className="text-neutral-600">Yong Peng, Johor, Malaysia</span>
        </div>
      </div>

      {/* Lower Copyright Panel */}
      <div className="bg-brand-charcoal dark:bg-black py-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Yong Peng 88 Homestay. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Lovingly designed for our family business by</span>
            <Heart className="w-3.5 h-3.5 text-brand-terracotta fill-brand-terracotta" />
            <span className="text-neutral-400 font-medium">88 Buddy</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
