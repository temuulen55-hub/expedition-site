import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { useLang } from "../LanguageContext.jsx";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    span: "row-span-2",
    cap: {
      en: "Altai summits at first light",
      mn: "Алтайн оргилууд, анхны гэрэлд",
    },
    loc: { en: "Western Mongolia", mn: "Баруун Монгол" },
  },
  {
    src: "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1600&auto=format&fit=crop",
    span: "",
    cap: { en: "Khongoryn Els, golden hour", mn: "Хонгорын Элс, алтан цаг" },
    loc: { en: "South Gobi", mn: "Өмнөд Говь" },
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop",
    span: "",
    cap: { en: "Lake Khuvsgul shoreline", mn: "Хөвсгөл нуурын эрэг" },
    loc: { en: "Northern Mongolia", mn: "Хойд Монгол" },
  },
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1600&auto=format&fit=crop",
    span: "row-span-2",
    cap: {
      en: "Pack horses crossing a high valley",
      mn: "Морин аялал — өндөр хөндийгөөр",
    },
    loc: { en: "Altai Region", mn: "Алтайн бүс" },
  },
  {
    src: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=1600&auto=format&fit=crop",
    span: "",
    cap: { en: "Inside base camp at dusk", mn: "Баазын дотор, бүрэнхийд" },
    loc: { en: "Tavan Bogd", mn: "Таван Богд" },
  },
  {
    src: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1600&auto=format&fit=crop",
    span: "",
    cap: {
      en: "A herding family's welcome",
      mn: "Малчин гэр бүлийн угтан авалт",
    },
    loc: { en: "Central Steppe", mn: "Төв Тал" },
  },
];

const TEXT = {
  title: { en: "The Journal", mn: "Аяллын тэмдэглэл" },
  sub: {
    en: "Almost no words. Just the light, as it was.",
    mn: "Үг бараг хэрэггүй. Зөвхөн гэрэл, тэр байдлаараа.",
  },
};

export default function Journal() {
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;

  return (
    <div className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h1 className="font-serif text-display font-medium leading-[0.98] tracking-[-0.02em] text-ink">
            {t(TEXT.title)}
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mt-5 max-w-md">
          <p className="font-sans text-lede italic text-earth">{t(TEXT.sub)}</p>
        </Reveal>

        {/* Masonry-style grid */}
        <div className="mt-20 grid auto-rows-[260px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {PHOTOS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07} className={p.span}>
              <figure className="group relative h-full w-full overflow-hidden bg-paper-dim">
                <motion.img
                  src={p.src}
                  alt={p.cap.en}
                  loading={i > 2 ? "lazy" : "eager"}
                  className="h-full w-full scale-100 object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-ink/85 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-utility text-[10px] font-semibold uppercase tracking-[0.1em] text-paper/50">
                    {t(p.loc)}
                  </p>
                  <p className="mt-1 font-serif text-[15px] text-paper">
                    {t(p.cap)}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
