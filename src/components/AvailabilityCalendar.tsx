import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling
import { useLanguage } from '../context/LanguageContext';
import { CalendarDays } from 'lucide-react';

// --- CONFIGURATION ---
// 1. Paste your Google Apps Script URL here
const PROXY_URL = "https://script.google.com/macros/s/AKfycbxPHYuxHB_xx41Abi9PjcssKj0cJWYZgWkzyva98qgxMCmxfrigYEZUH4bGhyCnJR7_sQ/exec"; 

// 2. Paste your Airbnb, Agoda, Booking.com, or Trip.com iCal export links here in the array
const ICAL_URLS = [
  "https://ycs.agoda.com/en-us/api/ari/icalendar?key=hdbRog5p4Z1n5ptxBb6DuQKir626hXSv", // Agoda Live
  "https://www.airbnb.com/calendar/ical/1659344892270653322.ics?t=769fbec1bbba4f5f8ecac0d68fa2d5b5",
];

export default function AvailabilityCalendar() {
  const { language } = useLanguage();
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const locales = {
    ch: {
      title: "实时房态查询",
      available: "可预订",
      booked: "已预订 (不可选)",
      loading: "正在同步最新房态...",
      calendarLocale: "zh-CN"
    },
    ms: {
      title: "Kalendar Tempahan Terkini",
      available: "Boleh Ditempah",
      booked: "Telah Ditempah",
      loading: "Memuat status bilik...",
      calendarLocale: "ms"
    },
    en: {
      title: "Live Room Availability",
      available: "Available",
      booked: "Booked (Unavailable)",
      loading: "Checking live availability...",
      calendarLocale: "en-US"
    }
  };

  const currentTexts = locales[language as "ch" | "ms" | "en"] || locales.en;

  useEffect(() => {
    const fetchCalendars = async () => {
      try {
        const activeUrls = ICAL_URLS.filter(url => url && !url.startsWith("YOUR_") && url.startsWith("http"));
        if (activeUrls.length === 0) {
          setBookedDates([]);
          setLoading(false);
          return;
        }

        const fetchPromises = activeUrls.map(async (url) => {
          try {
            const response = await fetch(`${PROXY_URL}?url=${encodeURIComponent(url)}`);
            if (!response.ok) {
              console.warn(`Failed to fetch calendar from ${url}`, response.statusText);
              return "";
            }
            return await response.text();
          } catch (e) {
            console.error(`Error fetching calendar from ${url}:`, e);
            return "";
          }
        });

        const results = await Promise.all(fetchPromises);
        const aggregatedDates = new Set<string>();

        results.forEach((iCalData) => {
          if (!iCalData) return;
          const regex = /DTSTART(?:;VALUE=DATE)?:(\d{4})(\d{2})(\d{2})[\s\S]*?DTEND(?:;VALUE=DATE)?:(\d{4})(\d{2})(\d{2})/g;
          let match: RegExpExecArray | null;
          
          while ((match = regex.exec(iCalData)) !== null) {
            const startYear = parseInt(match[1], 10);
            const startMonth = parseInt(match[2], 10) - 1;
            const startDay = parseInt(match[3], 10);
            const endYear = parseInt(match[4], 10);
            const endMonth = parseInt(match[5], 10) - 1;
            const endDay = parseInt(match[6], 10);

            const start = new Date(startYear, startMonth, startDay);
            const end = new Date(endYear, endMonth, endDay);
            
            let d = new Date(start);
            while (d < end) {
              aggregatedDates.add(d.toDateString());
              d.setDate(d.getDate() + 1);
            }
          }
        });

        setBookedDates(Array.from(aggregatedDates));
        setLoading(false);
      } catch (error) {
        console.error("Failed to load calendars", error);
        setLoading(false);
      }
    };

    fetchCalendars();
  }, []);

  // This function tells the calendar which days to disable/grey out
  const tileDisabled = ({ date, view }: { date: Date; view: string }): boolean => {
    if (view === 'month') {
      return bookedDates.includes(date.toDateString());
    }
    return false;
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-sm border border-brand-sand-dark/60 min-h-[350px]">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <CalendarDays className="w-10 h-10 text-brand-amber animate-bounce" />
          <p className="font-sans text-xs text-brand-charcoal/60 font-semibold tracking-wide">
            {currentTexts.loading}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-brand-sand-dark/60 w-full relative overflow-hidden">
      {/* Dynamic Scoped CSS Overrides to match standard brand styling and meet user constraints */}
      <style>{`
        /* Remove outer border and default shadow completely */
        .react-calendar {
          border: none !important;
          background: transparent !important;
          font-family: inherit !important;
          width: 100% !important;
        }

        /* Clean and modernize navigation headers with deep slate */
        .react-calendar__navigation {
          display: flex;
          height: 40px !important;
          margin-bottom: 0.75rem !important;
          border-bottom: 1px solid rgba(229, 231, 235, 0.5);
          padding-bottom: 4px;
        }
        
        .react-calendar__navigation button {
          min-width: 40px;
          background: none;
          font-size: 14px;
          font-weight: 700;
          color: #1E293B !important;
          border-radius: 8px;
          transition: all 0.2s ease-in-out;
        }

        .react-calendar__navigation button:enabled:hover,
        .react-calendar__navigation button:enabled:focus {
          background-color: #FEF3C7 !important;
          color: #92400E !important;
        }

        .react-calendar__navigation button[disabled] {
          opacity: 0.3;
        }

        /* Styling individual tiles/days */
        .react-calendar__tile {
          padding: 0.8em 0.5em !important;
          background: none;
          text-align: center;
          font-size: 11px !important;
          font-weight: 600 !important;
          color: #475569 !important;
          border-radius: 8px !important;
          transition: all 0.15s ease-in-out;
        }

        /* Styling hover effect for active available dates */
        .react-calendar__tile:enabled:hover,
        .react-calendar__tile:enabled:focus {
          background-color: #FEF3C7 !important;
          color: #92400E !important;
        }

        /* Elegant soft warm amber highlight for the current day now tile */
        .react-calendar__tile--now {
          background-color: #FEF3C7 !important;
          color: #D97706 !important;
          font-weight: 800 !important;
          border: 1px solid #F59E0B !important;
        }

        /* Style the Booked (disabled) dates clearly to be terracotta/red-50 base */
        .react-calendar__tile:disabled {
          background-color: #FFF5F5 !important;
          color: #EF4444 !important;
          opacity: 0.55 !important;
          text-decoration: line-through !important;
          cursor: not-allowed !important;
          font-weight: 500 !important;
        }

        /* Style weekends beautifully to have slight distinction */
        .react-calendar__month-view__weekdays__weekday {
          font-size: 11px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          color: #64748B !important;
          padding-bottom: 0.5rem;
        }

        .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none !important;
          border-bottom: none !important;
        }

        /* Clean outer day views grid alignment */
        .react-calendar__month-view__days__day--neighboringMonth {
          color: #CBD5E1 !important;
          opacity: 0.4;
          text-decoration: none !important;
        }
      `}</style>

      <div className="flex items-center gap-2 mb-4 self-start border-b border-brand-cream pb-2 w-full text-left">
        <CalendarDays className="w-5 h-5 text-brand-amber shrink-0" />
        <h3 className="text-sm font-bold text-brand-charcoal font-display uppercase tracking-wider">
          {currentTexts.title}
        </h3>
      </div>
      
      <div className="calendar-container w-full max-w-md mx-auto my-1">
        <Calendar 
          tileDisabled={tileDisabled} 
          minDate={new Date()} // Prevents booking in the past
          locale={currentTexts.calendarLocale}
          className="w-full border-none shadow-sm rounded-xl p-3 font-sans !bg-[#FAF9F5] text-xs text-brand-charcoal"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-brand-charcoal/70 bg-brand-cream/40 px-4 py-2.5 rounded-xl border border-brand-sand-dark/40 w-full justify-center">
        <span className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-white border border-brand-sand-dark/60 rounded"></div> 
          <span>{currentTexts.available}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-[#FFF5F5] border border-red-200 text-red-500 rounded relative overflow-hidden flex items-center justify-center">
            <span className="line-through block text-[8px] leading-none opacity-50">15</span>
          </div> 
          <span>{currentTexts.booked}</span>
        </span>
      </div>
    </div>
  );
}