import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { useLang } from "../LanguageContext.jsx";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=900&auto=format&fit=crop",
    alt: { en: "Pack horses in a highland valley", mn: "Өндөр хөндийд ачааны морьд" },
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=900&auto=format&fit=crop",
    alt: { en: "Orkhon Waterfall", mn: "Орхоны хүрхрээ" },
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=900&auto=format&fit=crop",
    alt: { en: "Lake Khuvsgul at dawn", mn: "Хөвсгөл нуур — үүр цайх" },
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=900&auto=format&fit=crop",
    alt: { en: "Gobi dunes at golden hour", mn: "Говийн манхан — алтан цаг" },
    aspect: "tall",
  },
];

const TEXT = {
  eyebrow: {
    en: "Our story · Est. 2004",
    mn: "Манай түүх · 2004 оноос",
  },
  heroHeading: {
    en: "Born on the Steppe.\nBuilt for the Wild.",
    mn: "Талд төрсөн.\nЗэрлэгт зориулсан.",
  },
  storyLabel: { en: "Origin", mn: "Гарал" },
  story: {
    en: "Temuulen began as a single horse, a single season, and a single question: what does Mongolia look like when nobody is watching? Two decades later, we have answered it across every province — on foot, on horseback, and occasionally on our knees in the mud — and the answer is still the same. It looks like nothing else on earth.",
    mn: "Хайрхан нэг морь, нэг улирал, нэг асуултаас эхэлсэн: хэн ч харахгүй үед Монгол ямар харагддаг вэ? Хорин жилийн дараа бид энэ асуултад бүх аймгаар явган, морин дээр, заримдаа шавар дотроо өвдөг дээрээ суун хариулсан. Хариулт өөрчлөгдөөгүй — дэлхийн өөр ямар ч газартай зүйрлэшгүй.",
  },
  story2: {
    en: "We have never run a tour that looked like someone else's. Every route is scouted in the season before you walk it. Every guide is from the land they lead you through. This is not a differentiator — it is the only way we know how to work.",
    mn: "Бид хэзээ ч өөр хэний ч аялалтай адил аялал зохион байгуулаагүй. Маршрут бүрийг та явахаас нэг улирлын өмнө тагнана. Хөтч бүр өөрийн нутгаас гаралтай. Энэ ялгаатай байх гэсэн санаа биш — бидний ажиллах цорын ганц арга зам энэ.",
  },
  valuesLabel: { en: "What we believe", mn: "Бидний итгэл үнэмшил" },
  values: [
    {
      title: {
        en: "Remoteness is a privilege.",
        mn: "Алслагдмал байдал — давуу тал.",
      },
      body: {
        en: "We go where access is earned, not purchased. The distance is the point.",
        mn: "Зөвхөн очиход хүчин чармайлт шаарддаг газарт явдаг. Зай нь учир шалтгаан.",
      },
    },
    {
      title: {
        en: "Slow is the only speed.",
        mn: "Удаан — цорын ганц хурд.",
      },
      body: {
        en: "A week in one valley beats seven valleys in a week. We build space into every itinerary.",
        mn: "Нэг хөндийд нэг долоо хоног, долоо хоногт долоон хөндийгөөс дээр. Маршрут бүрт зай завсар бий болгодог.",
      },
    },
    {
      title: {
        en: "The land pays us back.",
        mn: "Газар нутгийг буцааж өгөх.",
      },
      body: {
        en: "We offset all internal flights, run solar at every fixed camp, and return a portion of each booking to local communities.",
        mn: "Дотоодын бүх нислэгийн нүүрстөрөгчийг нөхдөг, тогтмол баазуудад нарны эрчим хүч ашигладаг, захиалга бүрийн нэг хэсгийг орон нутгийн нийгэмлэгүүдэд буцаадаг.",
      },
    },
    {
      title: {
        en: "Guides first, always.",
        mn: "Хөтч — үргэлж тэргүүнд.",
      },
      body: {
        en: "Your guide is the highest-paid person on every team. Their knowledge cannot be replicated in a briefing document.",
        mn: "Таны хөтч аливаа багийн хамгийн өндөр цалинтай. Тэдний мэдлэгийг товч танилцуулах баримт бичигт шилжүүлж болохгүй.",
      },
    },
  ],
  teamLabel: { en: "The people", mn: "Хүмүүс" },
  team: [
    {
      name: "Temuulen Enkhbold",
      role: {
        en: "Founder",
        mn: "Үүсгэн байгуулагч",
      },
      note: {
        en: "The mind behind Temuulen Expeditions. Built this company from the ground up with a vision to share Mongolia's wild places with the world.",
        mn: "Темүүлэн Экспедишний санаачлагч. Монголын зэрлэг нутгийг дэлхийд танилцуулах зорилгоор энэ компанийг үүсгэн байгуулсан.",
      },
      since: { en: "Founder since 2004", mn: "2004 оноос үүсгэн байгуулагч" },
    },
    {
      name: "Baterdene Gantulga",
      role: {
        en: "Founder & Head of Routes",
        mn: "Үүсгэн байгуулагч — Маршрутын дарга",
      },
      note: {
        en: "Twenty years on horseback across every aimag. Still the fastest at making camp in a storm.",
        mn: "Хорин жил морин дээр, бүх аймгаар. Шуурганд хамгийн хурдан бааз барьдаг хүн.",
      },
      since: { en: "With Temuulen since 2004", mn: "2004 оноос Темүүлэнтэй" },
    },
    {
      name: "Narantsetseg Oyun",
      role: {
        en: "Logistics & Guest Experience",
        mn: "Логистик — Зочны туршлага",
      },
      note: {
        en: "Former wilderness medic. Reads weather systems like other people read menus.",
        mn: "Хуучин зэрлэг газрын эмч. Цаг агаарын системийг бусад хүмүүс цэс уншдаг шигээ уншдаг.",
      },
      since: { en: "With Temuulen since 2011", mn: "2011 оноос Темүүлэнтэй" },
    },
    {
      name: "Altangerel Davaajav",
      role: {
        en: "Senior Guide — Western Mongolia",
        mn: "Ахлах хөтч — Баруун Монгол",
      },
      note: {
        en: "Born in Bayan-Ölgii. Speaks Kazakh, Mongolian, Russian, and passable English. Eagle hunter.",
        mn: "Баян-Өлгийд төрсөн. Казак, Монгол, Орос, хэсэгчлэн Англи хэлтэй. Бүргэдч.",
      },
      since: { en: "With Temuulen since 2009", mn: "2009 оноос Темүүлэнтэй" },
    },
    {
      name: "Enkhjargal Batbold",
      role: {
        en: "Head Guide — Gobi & Central",
        mn: "Ахлах хөтч — Говь, Төв Монгол",
      },
      note: {
        en: "Raised in the South Gobi. Speaks English and guides with a precision that comes from growing up in country with no margin for error.",
        mn: "Өмнөд Говьд өссөн. Англи хэлтэй, алдааны зай байхгүй нутагт өссөнөөс ирсэн нарийвчлалтайгаар хөтөлдөг.",
      },
      since: { en: "With Temuulen since 2016", mn: "2016 оноос Темүүлэнтэй" },
    },
  ],
  pressLabel: { en: "As featured in", mn: "Хэвлэл мэдээлэлд" },
  press: [
    { name: "National Geographic", note: { en: "Best Expedition Operator, Central Asia", mn: "Төв Азийн шилдэг экспедицийн компани" } },
    { name: "The Guardian Travel", note: { en: "Top 10 Responsible Travel Operators", mn: "Хариуцлагатай аяллын шилдэг 10" } },
    { name: "Condé Nast Traveller", note: { en: "Readers' Choice: Mongolia", mn: "Уншигчийн сонголт: Монгол" } },
  ],
  ctaLabel: { en: "Ready to go?", mn: "Аялахад бэлэн үү?" },
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
        className="relative h-[85vh] min-h-[560px] overflow-hidden"
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
            <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50">
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

      {/* ── PHOTO GRID ── */}
      <section className="grid grid-cols-2 sm:grid-cols-4 h-[40vh] min-h-[240px]">
        {GALLERY.map((img, i) => (
          <div key={i} className="relative overflow-hidden bg-paper-dim">
            <motion.img
              src={img.src}
              alt={t(img.alt)}
              loading="lazy"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
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
              <Reveal key={i} delay={i * 0.07}>
                <li className="grid gap-4 border-b border-line py-10 sm:grid-cols-[1fr_1fr_1fr]">
                  <div>
                    <p className="font-serif text-[22px] font-medium text-ink">
                      {person.name}
                    </p>
                    <p className="mt-1 font-utility text-[10px] font-semibold uppercase tracking-[0.1em] text-earth/40">
                      {t(person.since)}
                    </p>
                  </div>
                  <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-earth self-center">
                    {t(person.role)}
                  </p>
                  <p className="font-sans text-[14px] leading-relaxed text-earth italic self-center">
                    {t(person.note)}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PRESS ── */}
      <section className="bg-paper-dim border-t border-line px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-earth/40 mb-12">
              {t(TEXT.pressLabel)}
            </p>
          </Reveal>
          <div className="grid gap-px border border-line overflow-hidden sm:grid-cols-3">
            {TEXT.press.map((item, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="bg-paper px-8 py-9">
                  <p className="font-serif text-[20px] font-medium text-ink">
                    {item.name}
                  </p>
                  <p className="mt-2 font-utility text-[11px] uppercase tracking-[0.1em] text-earth/50">
                    {t(item.note)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
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
