import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { useLang } from "../LanguageContext.jsx";

const TEXT = {
  eyebrow: {
    en: "Our Story · Est. 2004",
    mn: "Манай түүх · 2004 оноос",
  },
  heroHeading: {
    en: "Born on the Steppe,\nBuilt for the Wild.",
    mn: "Талд төрж,\nзэрлэгт зориулагдсан.",
  },
  storyLabel: { en: "Origin", mn: "Гарал" },
  story: {
    en: "Khairkhan began as a single horse, a single season, and a single question: what does Mongolia look like when nobody is watching? Two decades later we have answered it across every province—on foot, on horseback, and occasionally on our knees in the mud—and the answer is still the same. It looks like nothing else on earth.",
    mn: "Хайрхан нэг морь, нэг улирал, нэг асуултаас эхэлсэн: хэн ч харахгүй үед Монгол ямар харагддаг вэ? Хорин жилийн дараа бид энэ асуултад бүх аймгаар явган, морин дээр, заримдаа шавар дотроо өвдөг дээрээ суун хариулсан. Хариулт өөрчлөгдөөгүй хэвээр: дэлхийн өөр юутай ч зүйрлэшгүй.",
  },
  story2: {
    en: "We have never run a tour that looked like someone else's. Every route is scouted in the year it runs; every guide is from the land they lead you through. This is not a differentiator. It is the only way we know how to work.",
    mn: "Бид хэзээ ч өөр хэний ч аялалтай адилхан аялал зохион байгуулаагүй. Маршрут бүрийг тухайн жилд нь тагнана; хөтөч бүр өөрийн газар нутгаас гардаг. Энэ ялгаатай байх гэсэн хүсэл биш. Бидний ажиллах цорын ганц арга зам энэ.",
  },
  valuesLabel: { en: "What we believe", mn: "Бидний итгэл үнэмшил" },
  values: [
    {
      title: {
        en: "Remoteness is a privilege.",
        mn: "Алслагдмал байдал давуу тал.",
      },
      body: {
        en: "We go where access is earned, not purchased. The distance is the point.",
        mn: "Бид зөвхөн очиход хүчин чармайлт шаарддаг газарт явдаг. Зай нь учир шалтгаан.",
      },
    },
    {
      title: { en: "Slow is the only speed.", mn: "Удаан — цорын ганц хурд." },
      body: {
        en: "A week in one valley beats seven valleys in a week. We build space into every itinerary.",
        mn: "Нэг хөндийд нэг долоо хоног хоёр мянган дотор долоо хоноглохоос дээр. Бид маршрут бүрт зай завсар бий болгодог.",
      },
    },
    {
      title: {
        en: "The land pays us back.",
        mn: "Газар нутаг бидэнд хариулна.",
      },
      body: {
        en: "We offset all internal flights, run solar at every fixed camp, and return a portion of each booking to the local communities who maintain the landscapes we travel through.",
        mn: "Бид дотоодын бүх нислэгийн нүүрстөрөгчийг нөхөж, тогтмол баазуудад нарны эрчим хүч ашиглаж, захиалга бүрийн нэг хэсгийг бидний аялдаг газар нутгийг хамгаалдаг орон нутгийн нийгэмлэгүүдэд буцаан өгдөг.",
      },
    },
    {
      title: { en: "Guides first, always.", mn: "Хөтчүүд — үргэлж тэргүүнд." },
      body: {
        en: "Your guide is the highest-paid member of every team. Their knowledge cannot be replicated in a briefing document.",
        mn: "Таны хөтөч аливаа багийн хамгийн өндөр цалинтай гишүүн. Тэдний мэдлэгийг товч танилцуулах баримт бичигт хуулбарлаж болохгүй.",
      },
    },
  ],
  teamLabel: { en: "The people", mn: "Хүмүүс" },
  team: [
    {
      name: "Baterdene Gantulga",
      role: {
        en: "Founder & Head of Routes",
        mn: "Үүсгэн байгуулагч & Маршрутын дарга",
      },
      note: {
        en: "Twenty years on horseback across every aimag. Still the fastest at making camp in a storm.",
        mn: "Хорин жил морин дээр, бүх аймгаар. Шуурганд хамгийн хурдан бааз барьдаг хүн.",
      },
    },
    {
      name: "Narantsetseg Oyun",
      role: {
        en: "Expedition Logistics & Guest Experience",
        mn: "Экспедицийн логистик & Зочны туршлага",
      },
      note: {
        en: "Former wilderness medic. Reads weather systems like other people read menus.",
        mn: "Хуучин зэрлэг газрын эмч. Цаг агаарын системийг бусад хүмүүс цэс уншдаг шигээ уншдаг.",
      },
    },
    {
      name: "Altangerel Davaajav",
      role: {
        en: "Senior Guide — Western Mongolia",
        mn: "Ахлах хөтөч — Баруун Монгол",
      },
      note: {
        en: "Born in Bayan-Ölgii. Speaks Kazakh, Mongolian, Russian, and passable English. Eagle hunter.",
        mn: "Баян-Өлгийд төрсөн. Казак, Монгол, Орос, тодорхой хэмжээгээр Англи хэлтэй. Бүргэдч.",
      },
    },
  ],
  ctaLabel: { en: "Ready to move?", mn: "Аялахад бэлэн үү?" },
  cta: { en: "See all expeditions →", mn: "Бүх аялалыг үзэх →" },
};

export default function About() {
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.68]);

  return (
    <div>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative h-[88vh] min-h-[560px] overflow-hidden"
      >
        <motion.div
          style={{ y: imgY }}
          className="absolute inset-0 -top-[12%] h-[124%]"
        >
          <img
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2400&auto=format&fit=crop"
            alt="Pack horses in a Mongolian highland valley"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-ink"
        />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:px-10">
          <Reveal delay={0.1}>
            <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/55">
              {t(TEXT.eyebrow)}
            </span>
          </Reveal>
          <Reveal delay={0.22}>
            <h1 className="mt-4 font-serif text-display font-medium leading-[0.97] tracking-[-0.02em] text-paper whitespace-pre-line">
              {t(TEXT.heroHeading)}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-[1440px] grid gap-16 lg:grid-cols-[200px_1fr]">
          <Reveal>
            <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-earth/50 lg:pt-2">
              {t(TEXT.storyLabel)}
            </p>
          </Reveal>
          <div className="max-w-2xl space-y-8">
            <Reveal delay={0.1}>
              <p className="font-serif text-lede leading-relaxed text-ink">
                {t(TEXT.story)}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="font-sans text-[15px] leading-relaxed text-earth">
                {t(TEXT.story2)}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED BREAK ── */}
      <div className="h-px bg-line mx-6 sm:mx-10" />

      {/* ── VALUES ── */}
      <section className="px-6 py-28 sm:px-10 bg-paper-dim">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-earth/50 mb-14">
              {t(TEXT.valuesLabel)}
            </p>
          </Reveal>
          <div className="grid gap-px border border-line overflow-hidden sm:grid-cols-2">
            {TEXT.values.map((v, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="bg-paper p-10 h-full">
                  <h3 className="font-serif text-[22px] font-medium text-ink leading-snug">
                    {t(v.title)}
                  </h3>
                  <p className="mt-4 font-sans text-[14px] leading-relaxed text-earth">
                    {t(v.body)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-earth/50 mb-16">
              {t(TEXT.teamLabel)}
            </p>
          </Reveal>
          <ul className="border-t border-line">
            {TEXT.team.map((person, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <li className="grid gap-4 border-b border-line py-10 sm:grid-cols-[1fr_1fr_1fr]">
                  <p className="font-serif text-[22px] font-medium text-ink">
                    {person.name}
                  </p>
                  <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-earth self-center">
                    {t(person.role)}
                  </p>
                  <p className="font-sans text-[14px] leading-relaxed text-earth italic">
                    {t(person.note)}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="border-t border-line px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-[1440px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Reveal>
            <p className="font-serif text-h2 font-medium text-ink">
              {t(TEXT.ctaLabel)}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/expeditions"
              className="font-utility text-[12px] font-semibold uppercase tracking-[0.14em] text-steppe underline decoration-steppe/30 underline-offset-8 transition-colors hover:decoration-steppe"
            >
              {t(TEXT.cta)}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
