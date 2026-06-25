import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../LanguageContext.jsx";

const LINKS = [
  { to: "/", en: "Home", mn: "Нүүр" },
  { to: "/about", en: "About", mn: "Бидний тухай" },
  { to: "/expeditions", en: "Expeditions", mn: "Аялалууд" },
  { to: "/guide", en: "Guide", mn: "Гарын авлага" },
  { to: "/contact", en: "Contact", mn: "Холбоо барих" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-line">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-[20px] font-medium leading-none text-ink"
        >
          Khairkhan
          <span className="ml-2 align-middle font-sans text-[11px] italic text-earth">
            Expeditions
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-utility text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-steppe ${
                  isActive ? "text-steppe" : "text-ink"
                }`
              }
            >
              {lang === "en" ? l.en : l.mn}
            </NavLink>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-5 md:flex">
          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-earth transition-colors hover:border-steppe hover:text-steppe"
          >
            <span className={lang === "en" ? "text-ink" : "text-earth/50"}>
              EN
            </span>
            <span className="text-earth/30">/</span>
            <span className={lang === "mn" ? "text-ink" : "text-earth/50"}>
              МН
            </span>
          </button>

          <Link to="/booking">
            <button className="bg-earth text-paper px-6 py-3 font-utility text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-ink">
              {lang === "en" ? "Book Now" : "Захиалга"}
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggle}
            className="font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-earth"
          >
            {lang === "en" ? "МН" : "EN"}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-[5px]"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              className="block h-px w-6 bg-ink origin-center"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block h-px w-6 bg-ink"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              className="block h-px w-6 bg-ink origin-center"
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
            className="overflow-hidden bg-paper md:hidden"
          >
            <nav className="flex flex-col gap-6 border-t border-line px-6 py-10">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-utility text-[14px] font-semibold uppercase tracking-[0.12em] text-ink hover:text-steppe"
                >
                  {lang === "en" ? l.en : l.mn}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
