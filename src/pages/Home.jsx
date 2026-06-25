import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { TOURS } from "../data/tours.js";
import { useLang } from "../LanguageContext.jsx";

const TRUST = {
  en: [
    "Safety First",
    "Local Guides",
    "Small Groups",
    "Sustainable Travel",
    "20 Years on the Steppe",
  ],
  mn: [
    "Аюулгүй байдал",
    "Орон нутгийн хөтөч",
    "Бага бүлгийн хэмжээ",
    "Тогтвортой аялал",
    "20 жилийн туршлага",
  ],
};

const WHY = {
  en: [
    {
      num: "01",
      title: "Truly Remote",
      body: "We go where tour operators don't. Every route is scouted on foot before a single guest joins.",
    },
    {
      num: "02",
      title: "Small Groups",
      body: "Maximum eight guests per departure. Enough for shared joy, small enough for honest silence.",
    },
    {
      num: "03",
      title: "Local First",
      body: "Your guides, cooks, and horsemen are from the regions you travel through. Full stop.",
    },
    {
      num: "04",
      title: "No Carbon Guilt",
      body: "We offset every flight, run on solar at base camps, and pay the communities who protect these landscapes.",
    },
  ],
  mn: [
    {
      num: "01",
      title: "Жинхэнэ алслагдсан",
      body: "Бид аялал жуулчлалын компаниуд очдоггүй газарт явдаг. Нэг ч зочин нэгдэхээс өмнө бүх маршрутыг явган тагнана.",
    },
    {
      num: "02",
      title: "Бага бүлэг",
      body: "Нэг гарааны хамгийн их найман зочин. Хамтын баяр баясгаланд хангалттай, үнэн нам гүмд хангалттай бага.",
    },
    {
      num: "03",
      title: "Орон нутаг тэргүүнд",
      body: "Таны хөтөч, тогооч, морьчид таний аялдаг бүс нутгийн хүмүүс. Цэг тавина.",
    },
    {
      num: "04",
      title: "Нүүрстөрөгчийн гэмгүй",
      body: "Бид бүх нислэгийг нөхөж, баазуудад нарны эрчим хүч ашиглаж, эдгээр газар нутгийг хамгаалдаг нийгэмлэгүүдэд төлдөг.",
    },
  ],
};

const TEXT = {
  hero: {
    eyebrow: {
      en: "Khairkhan Expeditions · Est. Mongolia",
      mn: "Хайрхан Экспедишн · Монгол улс",
    },
    h1: { en: "Into the Wild", mn: "Зэрлэг байгаль руу" },
    sub: {
      en: "Premium expeditions through Mongolia's most untouched frontiers.",
      mn: "Монголын хамгийн онгон газруудаар хийх дээд зэрэглэлийн аялал.",
    },
    cta: { en: "Explore Expeditions", mn: "Аялал сонгох" },
  },
  featured: { en: "Featured Expeditions", mn: "Тэргүүлэх аялалууд" },
  why: { en: "Why Khairkhan", mn: "Яагаад Хайрхан вэ" },
  whySub: {
    en: "We run a deliberately small number of departures each year. Here is what that decision costs us — and what it buys you.",
    mn: "Бид жил бүр зориудаар цөөн тооны гарааг ажиллуулдаг. Энэ шийдвэр бидэнд юу зардаг — танд юу авч өгдөг.",
  },
  days: { en: "Days", mn: "Өдөр" },
  from: { en: "From", mn: "Эхлэн" },
  viewTour: { en: "View Expedition →", mn: "Аялал үзэх →" },
};

export default function Home() {
  const heroRef = useRef(null);
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.65]);

  const trust = TRUST[lang] ?? TRUST.en;
  const why = WHY[lang] ?? WHY.en;

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative h-[100vh] min-h-[640px] overflow-hidden"
      >
        <motion.div
          style={{ y: imgY }}
          className="absolute inset-0 -top-[15%] h-[130%]"
        >
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2400&auto=format&fit=crop"
            alt="Mongolian Altai at dawn"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-ink"
        />

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-16 pt-36 sm:px-10">
          <Reveal delay={0.1}>
            <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/60">
              {t(TEXT.hero.eyebrow)}
            </span>
          </Reveal>

          <div>
            <Reveal delay={0.2}>
              <h1 className="font-serif text-display font-medium leading-[0.96] tracking-[-0.02em] text-paper">
                {t(TEXT.hero.h1)}
              </h1>
            </Reveal>

            <Reveal delay={0.35} className="mt-8 max-w-lg">
              <p className="font-sans text-lede leading-relaxed text-paper/75">
                {t(TEXT.hero.sub)}
              </p>
            </Reveal>

            <Reveal delay={0.5} className="mt-10">
              <Link to="/expeditions">
                <button className="border border-paper/50 px-8 py-4 font-sans text-[13px] uppercase tracking-[0.1em] text-paper transition-colors hover:border-paper hover:bg-paper/10">
                  {t(TEXT.hero.cta)}
                </button>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 right-6 sm:right-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <span className="h-10 w-px bg-paper/30" />
        </motion.div>
      </section>

      {/* ─── TRUST MARQUEE ─── */}
      <section className="border-b border-line bg-paper py-8 overflow-hidden">
        <div className="flex">
          <motion.div
            className="flex shrink-0 items-center gap-16 pr-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[...trust, ...trust, ...trust, ...trust].map((item, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-4 whitespace-nowrap"
              >
                <span className="h-1 w-1 rounded-full bg-steppe" />
                <span className="font-utility text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED EXPEDITIONS ─── */}
      <section className="px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h2 className="font-serif text-h1 font-medium tracking-[-0.01em] text-ink">
              {t(TEXT.featured)}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TOURS.map((tour, i) => (
              <Reveal key={tour.id} delay={i * 0.1}>
                <Link
                  to={`/expeditions/${tour.slug}`}
                  className="group relative flex h-[460px] flex-col justify-end overflow-hidden bg-paper-dim"
                >
                  <img
                    src={tour.heroImage}
                    alt={tour.name.en}
                    className="absolute inset-0 h-full w-full object-cover scale-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />

                  <div className="relative z-10 p-8">
                    <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.12em] text-paper/60">
                      {t(tour.region)} · {tour.days} {t(TEXT.days)}
                    </p>
                    <h3 className="mt-2 font-serif text-[28px] font-medium leading-tight text-paper">
                      {t(tour.name)}
                    </h3>
                    <p className="mt-1 font-sans text-[13px] text-paper/50">
                      {t(TEXT.from)} ${tour.price.toLocaleString()}
                    </p>
                    <p className="mt-5 font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-paper/0 transition-all duration-500 group-hover:text-paper/70 translate-y-2 group-hover:translate-y-0">
                      {t(TEXT.viewTour)}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY KHAIRKHAN ─── */}
      <section className="border-t border-line bg-paper-dim px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h2 className="font-serif text-h1 font-medium tracking-[-0.01em] text-ink">
              {t(TEXT.why)}
            </h2>
            <p className="mt-4 max-w-xl font-sans text-lede text-earth">
              {t(TEXT.whySub)}
            </p>
          </Reveal>

          <div className="mt-20 grid gap-px border border-line overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-paper p-10 h-full">
                  <span className="font-utility text-[11px] font-semibold text-earth/40 tracking-[0.1em]">
                    {item.num}
                  </span>
                  <h3 className="mt-6 font-serif text-[22px] font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-sans text-[14px] leading-relaxed text-earth">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE BREAK ─── */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2400&auto=format&fit=crop"
          alt="Pack horses in high mountain valley"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <Reveal className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-serif text-h2 italic text-paper/90 text-center max-w-2xl">
            {lang === "en"
              ? '"We go places that require preparation, not just a passport."'
              : '"Бид зөвхөн паспорт биш, бэлтгэл шаарддаг газарт явдаг."'}
          </p>
        </Reveal>
      </section>
    </div>
  );
}
