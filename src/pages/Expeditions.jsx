import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { TOURS } from "../data/tours.js";
import { useLang } from "../LanguageContext.jsx";

const TEXT = {
  title: { en: "Expeditions Directory", mn: "Аяллын жагсаалт" },
  sub: {
    en: "Every route is run on its own season, with group sizes kept deliberately small.",
    mn: "Газар тус бүрийг өвөрмөц хугацаа, бэрхшээлийн түвшинд тааруулан зохион байгуулна.",
  },
  days: { en: "Days", mn: "Өдөр" },
  difficulty: { en: "Difficulty", mn: "Бэрхшээл" },
  perPerson: { en: "per person", mn: "нэг хүнд" },
  viewRoute: { en: "View route →", mn: "Маршрут үзэх →" },
};

export default function Expeditions() {
  const [hovered, setHovered] = useState(null);
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;
  const active = TOURS.find((tr) => tr.id === hovered);

  return (
    <div className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h1 className="font-serif text-display font-medium leading-[0.98] tracking-[-0.02em] text-ink">
            {t(TEXT.title)}
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mt-6 max-w-lg">
          <p className="font-sans text-lede text-earth">{t(TEXT.sub)}</p>
        </Reveal>

        {/* Tour list */}
        <ul className="mt-24 border-t border-line">
          {TOURS.map((tour, i) => (
            <li key={tour.id} className="border-b border-line">
              <Link
                to={`/expeditions/${tour.slug}`}
                onMouseEnter={() => setHovered(tour.id)}
                onMouseLeave={() => setHovered(null)}
                className="group flex flex-col gap-4 py-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Name cluster */}
                <div
                  className={`flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:flex-row sm:items-baseline sm:gap-6 ${
                    hovered === tour.id ? "sm:translate-x-5" : ""
                  }`}
                >
                  <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-earth/50 sm:w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-serif text-h2 font-medium text-ink transition-colors group-hover:text-steppe">
                      {t(tour.name)}
                    </h2>
                    <p className="mt-0.5 font-sans text-[14px] text-earth max-w-sm leading-relaxed">
                      {lang === "en"
                        ? tour.summary.en.split(".")[0] + "."
                        : tour.summary.mn.split("—")[0].trim()}
                    </p>
                  </div>
                </div>

                {/* Meta cluster */}
                <div className="flex flex-wrap items-center gap-6 font-utility text-[12px] font-semibold uppercase tracking-[0.1em]">
                  <span className="text-earth">{t(tour.region)}</span>
                  <span className="text-earth">
                    {tour.days} {t(TEXT.days)}
                  </span>
                  <span className="text-earth">{t(tour.difficulty)}</span>
                  <span className="text-ink">
                    ${tour.price.toLocaleString()}
                  </span>
                  <span className="hidden font-normal normal-case tracking-normal text-steppe text-[13px] italic sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t(TEXT.viewRoute)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Cursor-pinned image preview — desktop only */}
      <div className="pointer-events-none fixed inset-0 z-30 hidden lg:block">
        <AnimatePresence>
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 6 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-[7%] top-1/2 h-[400px] w-[300px] -translate-y-1/2 overflow-hidden shadow-2xl"
            >
              <img
                src={active.heroImage}
                alt={t(active.name)}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6">
                <p className="font-serif text-[18px] font-medium text-paper">
                  {t(active.name)}
                </p>
                <p className="font-sans text-[13px] text-paper/60">
                  {t(active.region)}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
