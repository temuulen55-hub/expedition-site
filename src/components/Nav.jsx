import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../LanguageContext.jsx";

const LINKS = [
  { to: "/expeditions", en: "Expeditions", mn: "Аялалууд" },
  { to: "/about", en: "About", mn: "Бидний тухай" },
  { to: "/journal", en: "Journal", mn: "Тэмдэглэл" },
  { to: "/guide", en: "Guide", mn: "Гарын авлага" },
  { to: "/contact", en: "Contact", mn: "Холбоо барих" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const navBg = isHome
    ? scrolled
      ? "bg-paper/95 backdrop-blur-sm border-b border-line shadow-sm shadow-ink/5"
      : "bg-transparent border-b border-transparent"
    : "bg-paper/95 backdrop-blur-sm border-b border-line";

  const logoColor = isHome && !scrolled ? "text-paper" : "text-ink";
  const linkColor = isHome && !scrolled
    ? "text-paper/80 hover:text-paper"
    : "text-ink hover:text-steppe";
  const activeLinkColor = isHome && !scrolled ? "text-paper" : "text-steppe";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10">
        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-[20px] font-medium leading-none transition-colors duration-500 ${logoColor}`}
        >
          Temuulen
          <span className={`ml-2 align-middle font-sans text-[11px] italic transition-colors duration-500 ${
            isHome && !scrolled ? "text-paper/55" : "text-earth"
          }`}>
            Expeditions
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-utility text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isActive ? activeLinkColor : linkColor
                }`
              }
            >
              {lang === "en" ? l.en : l.mn}
            </NavLink>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-5 md:flex">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className={`flex items-center gap-1.5 rounded-full border px-4 py-2 font-utility text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
              isHome && !scrolled
                ? "border-paper/30 text-paper/60 hover:border-paper/60 hover:text-paper"
                : "border-line text-earth hover:border-steppe hover:text-steppe"
            }`}
          >
            <span className={lang === "en" ? (isHome && !scrolled ? "text-paper" : "text-ink") : "opacity-50"}>
              EN
            </span>
            <span className="opacity-30">/</span>
            <span className={lang === "mn" ? (isHome && !scrolled ? "text-paper" : "text-ink") : "opacity-50"}>
              МН
            </span>
          </button>

          <Link to="/booking">
            <button className={`px-6 py-3 font-utility text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
              isHome && !scrolled
                ? "bg-paper text-ink hover:bg-paper/90"
                : "bg-steppe text-paper hover:bg-ink"
            }`}>
              {lang === "en" ? "Book Now" : "Захиалах"}
            </button>
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-5 md:hidden">
          <button
            onClick={toggle}
            className={`font-utility text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
              isHome && !scrolled ? "text-paper/70" : "text-earth"
            }`}
          >
            {lang === "en" ? "МН" : "EN"}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-[5px] py-1"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              transition={{ duration: 0.3 }}
              className={`block h-px w-6 origin-center transition-colors duration-300 ${
                isHome && !scrolled ? "bg-paper" : "bg-ink"
              }`}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className={`block h-px w-6 transition-colors duration-300 ${
                isHome && !scrolled ? "bg-paper" : "bg-ink"
              }`}
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              transition={{ duration: 0.3 }}
              className={`block h-px w-6 origin-center transition-colors duration-300 ${
                isHome && !scrolled ? "bg-paper" : "bg-ink"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-paper md:hidden"
          >
            <nav className="flex flex-col border-t border-line">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={l.to}
                    className="block px-6 py-5 font-utility text-[13px] font-semibold uppercase tracking-[0.12em] text-ink hover:text-steppe border-b border-line/50 transition-colors"
                  >
                    {lang === "en" ? l.en : l.mn}
                  </Link>
                </motion.div>
              ))}
              <div className="px-6 py-6">
                <Link to="/booking" className="block">
                  <button className="w-full bg-steppe text-paper py-4 font-utility text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-ink transition-colors">
                    {lang === "en" ? "Book Now" : "Захиалах"}
                  </button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
