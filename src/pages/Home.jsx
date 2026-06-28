import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { TOURS } from "../data/tours.js";
import { useLang } from "../LanguageContext.jsx";

const TRUST = {
  en: [
    "Safety First",
    "Local Guides Only",
    "Max 8 Guests",
    "Sustainable Travel",
    "20 Years on the Steppe",
    "Solar-Powered Camps",
    "Community Partnerships",
  ],
  mn: [
    "Аюулгүй байдал",
    "Зөвхөн орон нутгийн хөтч",
    "Хамгийн ихдээ 8 хүн",
    "Тогтвортой аялал",
    "20 жилийн туршлага",
    "Нарны эрчим хүчний бааз",
    "Орон нутгийн хамтын ажиллагаа",
  ],
};

const STATS = {
  en: [
    { num: "20", label: "Years on the steppe" },
    { num: "8", label: "Max guests per trip" },
    { num: "400+", label: "Km of scouted trail" },
    { num: "100%", label: "Local guides" },
  ],
  mn: [
    { num: "20", label: "Жилийн туршлага" },
    { num: "8", label: "Нэг аяллын хамгийн их тоо" },
    { num: "400+", label: "Тагнасан маршрут (км)" },
    { num: "100%", label: "Орон нутгийн хөтч" },
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
      body: "Maximum eight guests per departure — enough for shared joy, small enough for honest silence.",
    },
    {
      num: "03",
      title: "Local First",
      body: "Your guides, cooks, and horsemen are from the regions you travel through. Full stop.",
    },
    {
      num: "04",
      title: "Leave It Better",
      body: "We offset every flight, run on solar at base camps, and give back to the communities who protect these landscapes.",
    },
  ],
  mn: [
    {
      num: "01",
      title: "Жинхэнэ алслагдсан",
      body: "Ихэнх аялал компаниуд хүрдэггүй газарт хүрдэг. Нэг ч зочин нэгдэхээс өмнө бүх маршрутыг явган тагнана.",
    },
    {
      num: "02",
      title: "Бага бүлэг",
      body: "Нэг гарааны хамгийн ихдээ найман зочин — хамтын баяр баясгаланд хангалттай, үнэн нам гүмд хангалттай бага.",
    },
    {
      num: "03",
      title: "Орон нутаг тэргүүнд",
      body: "Таны хөтч, тогооч, морьчид таний аялдаг нутгийн хүмүүс. Цэг.",
    },
    {
      num: "04",
      title: "Байгальд хүндэтгэлтэй",
      body: "Бүх нислэгийн нүүрстөрөгчийг нөхдөг, баазуудад нарны эрчим хүч ашигладаг, эдгээр газрыг хамгаалдаг нийгэмлэгүүдэд буцааж өгдөг.",
    },
  ],
};

const SEASONS = {
  en: [
    {
      name: "Spring",
      months: "May — Jun",
      body: "Newborn animals, wildflowers across the steppe, rivers high from snowmelt. Cold nights worth every layer.",
      best: "Khuvsgul · Central Mongolia",
      accent: "bg-steppe/20",
      border: "border-steppe",
    },
    {
      name: "Summer",
      months: "Jul — Aug",
      body: "Peak season. Long light, full rivers. Time it right and you catch the Naadam Festival in July.",
      best: "All regions",
      accent: "bg-earth/10",
      border: "border-earth",
    },
    {
      name: "Autumn",
      months: "Sep — Oct",
      body: "The clearest skies of the year. Taiga larches turn gold. Elk in rut. Far fewer people everywhere.",
      best: "Altai · Khuvsgul",
      accent: "bg-paper-dim",
      border: "border-line",
    },
    {
      name: "Winter",
      months: "Dec — Feb",
      body: "Extreme cold, extreme quiet. Eagle hunting season in the west. For those who know what they want from a landscape.",
      best: "Bayan-Ölgii",
      accent: "bg-ink/5",
      border: "border-ink/20",
    },
  ],
  mn: [
    {
      name: "Хавар",
      months: "Тав — Зургаа",
      body: "Шинэ төлсөн амьтад, талаар цэцэг дэлгэрч, цасны хайлснаас гол дүүрэн. Хүйтэн шөнө нь нэмэлт давхарын л хэрэг.",
      best: "Хөвсгөл · Төв Монгол",
      accent: "bg-steppe/20",
      border: "border-steppe",
    },
    {
      name: "Зун",
      months: "Долоо — Найм",
      body: "Оргил улирал. Урт гэрэл, дүүрэн гол. Долоодугаар сарын Наадамтай тохирвол бүр сайн.",
      best: "Бүх бүс нутаг",
      accent: "bg-earth/10",
      border: "border-earth",
    },
    {
      name: "Намар",
      months: "Ес — Арав",
      body: "Оны хамгийн тунгалаг тэнгэр. Тайгын шинэс алтандана. Буга хашааддаг. Хаа сайгүй хүн цөөн.",
      best: "Алтай · Хөвсгөл",
      accent: "bg-paper-dim",
      border: "border-line",
    },
    {
      name: "Өвөл",
      months: "Арван хоёр — Хоёр",
      body: "Хүйтэн, нам гүм. Баруунд бүргэд барих улирал. Газар нутгаас юу хүсэхийгээ мэддэг хүмүүст зориулсан.",
      best: "Баян-Өлгий",
      accent: "bg-ink/5",
      border: "border-ink/20",
    },
  ],
};

const TESTIMONIALS = {
  en: [
    {
      quote: "I've travelled on four continents. Temuulen is the only outfit I've wanted to return to in the same year.",
      name: "James T.",
      from: "Edinburgh",
      trip: "Altai Peaks, 2023",
    },
    {
      quote: "Eight people in a landscape that size — that ratio is everything. You have company, but the silence stays yours.",
      name: "Mia L.",
      from: "Amsterdam",
      trip: "Khuvsgul Retreat, 2022",
    },
    {
      quote: "They gave us space to be slow. I didn't expect that from a travel company, and I didn't know I needed it.",
      name: "David & Sarah C.",
      from: "Melbourne",
      trip: "Gobi Crossing, 2024",
    },
  ],
  mn: [
    {
      quote: "Дөрвөн тивд аялсан ч нэг жилдээ дахин очмоор байсан цорын ганц компани нь Хайрхан байлаа.",
      name: "Жеймс Т.",
      from: "Эдинбург",
      trip: "Алтай, 2023",
    },
    {
      quote: "Тийм том газарт найман хүн — энэ харьцаа бол бүх зүйл. Хамт явагч байгаа, гэхдээ нам гүм чинийх хэвээр.",
      name: "Миа Л.",
      from: "Амстердам",
      trip: "Хөвсгөл, 2022",
    },
    {
      quote: "Тэд бидэнд удаан байх зай завсар өгсөн. Аялал компаниас ингэж хүлээгээгүй байсан — хэрэгтэй байгаагаа мэдээгүй.",
      name: "Дэйвид & Сара C.",
      from: "Мельбурн",
      trip: "Говь, 2024",
    },
  ],
};

const JOURNAL_TEASERS = {
  en: [
    {
      category: "Field Notes",
      title: "What the Kazakh Eagle Hunters Know",
      excerpt: "A morning with Altangerel and his eagle on the frozen slopes of Tavan Bogd — and what patience looks like when it involves a 6kg bird.",
      date: "Oct 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Landscape",
      title: "The Gobi at Its Quietest",
      excerpt: "Day seven of eight in the desert. No agenda. Just sand and the kind of silence that takes two days to stop fighting.",
      date: "Aug 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Behind the Routes",
      title: "How We Scout a New Itinerary",
      excerpt: "Before any guest sets foot on a new route, we do it twice — once in the wrong season, once again to be sure.",
      date: "Jun 2024",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    },
  ],
  mn: [
    {
      category: "Тэмдэглэл",
      title: "Казах бүргэдчид юу мэддэг вэ",
      excerpt: "Алтангэрэл болон түүний бүргэдтэй хамт Таван Богдын мөсөн хажуу дахь өглөө — тэвчээр гэдэг нь 6 кг шувуутай ямар харагддаг вэ.",
      date: "2024 арван сар",
      readTime: "7 мин",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Газар нутаг",
      title: "Говь хамгийн нам гүм байхдаа",
      excerpt: "Найм хоногийн долоо дахь өдөр. Хөтөлбөр байхгүй. Зөвхөн элс, хоёр өдрийн тэмцсэний дараа л зогсдог нам гүм.",
      date: "2024 наймдугаар сар",
      readTime: "5 мин",
      image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Маршрутын ард",
      title: "Шинэ маршрут хэрхэн тагнадаг вэ",
      excerpt: "Ямар ч зочин шинэ маршрутад хэдийч гараагүй байхад бид хоёр удаа явдаг — нэгийг нь буруу улиралд, нөгөөг нь итгэлтэй болохын тулд.",
      date: "2024 зургаадугаар сар",
      readTime: "9 мин",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    },
  ],
};

const TEXT = {
  hero: {
    eyebrow: {
      en: "Temuulen Expeditions · Est. 2004 · Mongolia",
      mn: "Темүүлэн Экспедишн · 2004 оноос · Монгол улс",
    },
    h1: { en: "Into the Wild.", mn: "Зэрлэг рүү." },
    sub: {
      en: "Premium small-group expeditions through Mongolia's most untouched terrain. Real routes, real guides, no shortcuts.",
      mn: "Монголын хамгийн онгон газруудаар хийх бага бүлгийн дээд зэрэглэлийн аялал. Жинхэнэ маршрут, жинхэнэ хөтч, товчлолгүй.",
    },
    cta: { en: "See All Expeditions", mn: "Аялалуудыг үзэх" },
    cta2: { en: "Our Story", mn: "Бидний тухай" },
  },
  featured: { en: "Featured Expeditions", mn: "Тэргүүлэх аялалууд" },
  featuredSub: {
    en: "Four routes. Every one scouted the season before you walk it.",
    mn: "Дөрвөн маршрут. Та явахаас нэг улирлын өмнө бүгдийг тагнасан.",
  },
  why: { en: "Why Temuulen", mn: "Яагаад Темүүлэн вэ" },
  whySub: {
    en: "We run a deliberately small number of departures each year. Here's what that costs us — and what it gives you.",
    mn: "Бид жил бүр зориудаар цөөн аялал зохион байгуулдаг. Бидэнд юу зардаг, танд юу өгдгийг ийнхүү.",
  },
  stats: { en: "By the numbers", mn: "Тоон баримтаар" },
  seasons: { en: "When to go", mn: "Хэзээ явах вэ" },
  seasonsSub: {
    en: "Mongolia is a different country depending on the month. Each season has an honest case for it.",
    mn: "Монгол сар тутамд өөр өөр нүүр царайтай. Улирал бүр өөрийн гэсэн үнэтэй зүйл байдаг.",
  },
  bestFor: { en: "Best for:", mn: "Зориулсан:" },
  testimonials: { en: "From the field", mn: "Аяллаас ирсэн дуу хоолой" },
  testimonialsSub: {
    en: "We don't advertise. Most guests find us through someone who has already been.",
    mn: "Бид сурталчилдаггүй. Ихэнх зочид аль хэдийн явж ирсэн хэн нэгний дамжуулгаар ирдэг.",
  },
  journal: { en: "The Journal", mn: "Аяллын тэмдэглэл" },
  journalSub: {
    en: "Field notes from the routes. Honest accounts of what it's actually like out there.",
    mn: "Маршрутаас ирсэн тэмдэглэлүүд. Тэнд юу болдгийн үнэн дүрслэл.",
  },
  readAll: { en: "See all entries →", mn: "Бүгдийг үзэх →" },
  days: { en: "Days", mn: "Өдөр" },
  from: { en: "From", mn: "Үнэ" },
  viewTour: { en: "View Expedition →", mn: "Дэлгэрэнгүй →" },
  read: { en: "Read", mn: "Унших" },
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
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const trust = TRUST[lang] ?? TRUST.en;
  const why = WHY[lang] ?? WHY.en;
  const stats = STATS[lang] ?? STATS.en;
  const seasons = SEASONS[lang] ?? SEASONS.en;
  const testimonials = TESTIMONIALS[lang] ?? TESTIMONIALS.en;
  const journalTeasers = JOURNAL_TEASERS[lang] ?? JOURNAL_TEASERS.en;

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative h-[100dvh] min-h-[640px] overflow-hidden"
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

        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex h-full flex-col justify-between px-6 pb-20 pt-40 sm:px-10"
        >
          <Reveal delay={0.1}>
            <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/55">
              {t(TEXT.hero.eyebrow)}
            </span>
          </Reveal>

          <div>
            <Reveal delay={0.18}>
              <h1 className="font-serif text-display font-medium leading-[0.96] tracking-[-0.02em] text-paper">
                {t(TEXT.hero.h1)}
              </h1>
            </Reveal>

            <Reveal delay={0.32} className="mt-7 max-w-lg">
              <p className="font-sans text-lede leading-relaxed text-paper/70">
                {t(TEXT.hero.sub)}
              </p>
            </Reveal>

            <Reveal delay={0.46} className="mt-10 flex flex-wrap gap-4">
              <Link to="/expeditions">
                <button className="bg-paper text-ink px-8 py-4 font-utility text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-paper/90">
                  {t(TEXT.hero.cta)}
                </button>
              </Link>
              <Link to="/about">
                <button className="border border-paper/40 px-8 py-4 font-utility text-[12px] font-semibold uppercase tracking-[0.1em] text-paper transition-all duration-300 hover:border-paper/80 hover:bg-paper/8">
                  {t(TEXT.hero.cta2)}
                </button>
              </Link>
            </Reveal>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 right-8 sm:right-12 z-10 flex flex-col items-center gap-3"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
        >
          <span className="font-utility text-[9px] font-semibold uppercase tracking-[0.2em] text-paper/35 [writing-mode:vertical-lr]">
            Scroll
          </span>
          <span className="h-12 w-px bg-paper/25" />
        </motion.div>
      </section>

      {/* ─── TRUST MARQUEE ─── */}
      <section className="border-b border-line bg-paper py-7 overflow-hidden">
        <div className="flex">
          <motion.div
            className="flex shrink-0 items-center gap-16 pr-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          >
            {[...trust, ...trust, ...trust, ...trust].map((item, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-4 whitespace-nowrap"
              >
                <span className="h-1 w-1 rounded-full bg-steppe" />
                <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <h2 className="font-serif text-h1 font-medium tracking-[-0.01em] text-ink">
                {t(TEXT.featured)}
              </h2>
              <p className="mt-3 font-sans text-[14px] text-earth max-w-sm">
                {t(TEXT.featuredSub)}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/expeditions"
                className="font-utility text-[11px] font-semibold uppercase tracking-[0.12em] text-steppe underline decoration-steppe/30 underline-offset-8 transition-colors hover:decoration-steppe whitespace-nowrap"
              >
                {lang === "en" ? "All expeditions →" : "Бүх аялалууд →"}
              </Link>
            </Reveal>
          </div>

          {/* Main grid — first tour large, rest smaller */}
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:grid-rows-2">
            {/* Large featured card */}
            <Reveal className="lg:row-span-2">
              <Link
                to={`/expeditions/${TOURS[0].slug}`}
                className="group relative flex h-[520px] lg:h-full min-h-[520px] flex-col justify-end overflow-hidden"
              >
                <img
                  src={TOURS[0].heroImage}
                  alt={TOURS[0].name.en}
                  className="absolute inset-0 h-full w-full object-cover scale-[1.04] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="inline-block border border-paper/30 px-3 py-1.5 font-utility text-[10px] font-semibold uppercase tracking-[0.12em] text-paper/70">
                    {lang === "en" ? TOURS[0].difficulty.en : TOURS[0].difficulty.mn}
                  </span>
                </div>
                <div className="relative z-10 p-8">
                  <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.12em] text-paper/55">
                    {t(TOURS[0].region)} · {TOURS[0].days} {t(TEXT.days)}
                  </p>
                  <h3 className="mt-2 font-serif text-[32px] font-medium leading-tight text-paper">
                    {t(TOURS[0].name)}
                  </h3>
                  <p className="mt-3 font-sans text-[14px] leading-relaxed text-paper/65 max-w-sm">
                    {t(TOURS[0].summary).split(".")[0]}.
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="font-utility text-[13px] font-semibold text-paper/90">
                      {t(TEXT.from)} ${TOURS[0].price.toLocaleString()}
                    </p>
                    <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-paper/0 group-hover:text-paper/80 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                      {t(TEXT.viewTour)}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Smaller cards */}
            {TOURS.slice(1).map((tour, i) => (
              <Reveal key={tour.id} delay={(i + 1) * 0.08}>
                <Link
                  to={`/expeditions/${tour.slug}`}
                  className="group relative flex h-[240px] flex-col justify-end overflow-hidden"
                >
                  <img
                    src={tour.heroImage}
                    alt={t(tour.name)}
                    className="absolute inset-0 h-full w-full object-cover scale-[1.04] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="relative z-10 p-6">
                    <p className="font-utility text-[10px] font-semibold uppercase tracking-[0.12em] text-paper/55">
                      {t(tour.region)} · {tour.days} {t(TEXT.days)}
                    </p>
                    <h3 className="mt-1.5 font-serif text-[22px] font-medium leading-tight text-paper">
                      {t(tour.name)}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <p className="font-sans text-[13px] text-paper/55">
                        {t(TEXT.from)} ${tour.price.toLocaleString()}
                      </p>
                      <span className="font-utility text-[10px] font-semibold uppercase tracking-[0.1em] text-paper/0 group-hover:text-paper/75 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                        {t(TEXT.viewTour)}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-ink px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/35 mb-16">
              {t(TEXT.stats)}
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-px border border-ink-line overflow-hidden lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-r border-ink-line p-10 last:border-r-0">
                  <p className="font-serif text-[52px] sm:text-[64px] font-medium leading-none tracking-[-0.02em] text-paper">
                    {s.num}
                  </p>
                  <p className="mt-4 font-utility text-[12px] font-semibold uppercase tracking-[0.1em] text-paper/40">
                    {s.label}
                  </p>
                </div>
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
                  <span className="font-utility text-[11px] font-semibold text-earth/35 tracking-[0.1em]">
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
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2400&auto=format&fit=crop"
          alt="Pack horses crossing a high mountain valley in Mongolia"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <Reveal className="absolute inset-0 flex items-center justify-center px-8">
          <blockquote className="text-center max-w-2xl">
            <p className="font-serif text-h2 italic text-paper/90 leading-[1.2]">
              {lang === "en"
                ? '"The distance is the point."'
                : '"Зай нь учир шалтгаан."'}
            </p>
            <cite className="mt-6 block font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/45 not-italic">
              {lang === "en"
                ? "Temuulen founding principle"
                : "Темүүлэн экспедишний үндсэн зарчим"}
            </cite>
          </blockquote>
        </Reveal>
      </section>

      {/* ─── SEASONAL GUIDE ─── */}
      <section className="px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h2 className="font-serif text-h1 font-medium tracking-[-0.01em] text-ink">
              {t(TEXT.seasons)}
            </h2>
            <p className="mt-4 max-w-xl font-sans text-lede text-earth">
              {t(TEXT.seasonsSub)}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`${s.accent} border ${s.border} p-8 h-full flex flex-col`}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-[24px] font-medium text-ink">
                      {s.name}
                    </h3>
                    <span className="font-utility text-[10px] font-semibold uppercase tracking-[0.1em] text-earth/50 text-right">
                      {s.months}
                    </span>
                  </div>
                  <p className="mt-5 font-sans text-[14px] leading-relaxed text-earth flex-1">
                    {s.body}
                  </p>
                  <div className="mt-6 pt-5 border-t border-current border-opacity-10">
                    <p className="font-utility text-[10px] font-semibold uppercase tracking-[0.1em] text-earth/45">
                      {t(TEXT.bestFor)}
                    </p>
                    <p className="mt-1 font-utility text-[11px] font-semibold text-steppe">
                      {s.best}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-paper-dim border-t border-line px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h2 className="font-serif text-h1 font-medium tracking-[-0.01em] text-ink">
              {t(TEXT.testimonials)}
            </h2>
            <p className="mt-4 max-w-lg font-sans text-lede text-earth">
              {t(TEXT.testimonialsSub)}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="bg-paper border border-line p-10 h-full flex flex-col">
                  <p className="font-serif text-[32px] leading-none text-steppe/30 select-none">
                    "
                  </p>
                  <blockquote className="mt-2 font-sans text-[15px] leading-relaxed text-ink flex-1">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-line">
                    <p className="font-utility text-[12px] font-semibold text-ink">
                      {item.name}
                    </p>
                    <p className="mt-0.5 font-utility text-[11px] text-earth/60 uppercase tracking-[0.08em]">
                      {item.from} · {item.trip}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNAL PREVIEW ─── */}
      <section className="px-6 py-28 sm:px-10 border-t border-line">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-14">
            <Reveal>
              <h2 className="font-serif text-h1 font-medium tracking-[-0.01em] text-ink">
                {t(TEXT.journal)}
              </h2>
              <p className="mt-3 max-w-md font-sans text-[14px] text-earth">
                {t(TEXT.journalSub)}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/journal"
                className="font-utility text-[11px] font-semibold uppercase tracking-[0.12em] text-steppe underline decoration-steppe/30 underline-offset-8 transition-colors hover:decoration-steppe whitespace-nowrap"
              >
                {t(TEXT.readAll)}
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {journalTeasers.map((article, i) => (
              <Reveal key={i} delay={i * 0.09}>
                <Link to="/journal" className="group block">
                  <div className="relative h-[220px] overflow-hidden bg-paper-dim">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover scale-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-paper/90 px-3 py-1.5 font-utility text-[9px] font-semibold uppercase tracking-[0.12em] text-ink">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="pt-5">
                    <h3 className="font-serif text-[20px] font-medium text-ink leading-snug group-hover:text-steppe transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="mt-2 font-sans text-[13px] leading-relaxed text-earth line-clamp-2">
                      {article.excerpt}
                    </p>
                    <p className="mt-4 font-utility text-[10px] font-semibold uppercase tracking-[0.1em] text-earth/45">
                      {article.date} · {t(TEXT.read)} {article.readTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUBTLE CREDIT ─── */}
      <section className="bg-paper py-8 text-center border-t border-line">
        <p className="font-utility text-[10px] font-semibold uppercase tracking-[0.14em] text-earth/40">
          {lang === "en"
            ? "Site designed & built by "
            : "Вебсайтыг бүтээсэн: "}
          <a
            href="https://temuulenenkhbold.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-earth/70 transition-colors hover:text-steppe"
          >
            Temuulen Enkhbold
          </a>
        </p>
      </section>
    </div>
  );
}
