import { useParams, Link, Navigate } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { getTourBySlug } from "../data/tours.js";
import { useLang } from "../LanguageContext.jsx";

const TEXT = {
  investment: { en: "Investment", mn: "Хөрөнгө оруулалт" },
  perPerson: { en: "per person", mn: "нэг хүнд" },
  duration: { en: "Duration", mn: "Хугацаа" },
  days: { en: "Days", mn: "Өдөр" },
  region: { en: "Region", mn: "Бүс нутаг" },
  difficulty: { en: "Difficulty", mn: "Бэрхшээл" },
  bookNow: { en: "Reserve Your Place", mn: "Байраа захиалах" },
  itinerary: { en: "Day by Day", mn: "Өдөр өдрөөр" },
  highlights: { en: "Highlights", mn: "Онцлох зүйлс" },
  backToAll: { en: "← All Expeditions", mn: "← Бүх аялалууд" },
  day: { en: "Day", mn: "Өдөр" },
};

export default function Itinerary() {
  const { slug } = useParams();
  const tour = getTourBySlug(slug);
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;

  if (!tour) return <Navigate to="/expeditions" replace />;

  return (
    <div>
      {/* ─── HERO STRIP ─── */}
      <section className="relative h-[65vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={tour.heroImage}
          alt={t(tour.name)}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-14 sm:px-10">
          <Reveal>
            <Link
              to="/expeditions"
              className="mb-6 inline-block font-utility text-[11px] font-semibold uppercase tracking-[0.12em] text-paper/60 hover:text-paper/90 transition-colors"
            >
              {t(TEXT.backToAll)}
            </Link>
            <h1 className="font-serif text-display font-medium leading-[0.98] tracking-[-0.02em] text-paper">
              {t(tour.name)}
            </h1>
            <p className="mt-2 font-utility text-[12px] font-semibold uppercase tracking-[0.14em] text-paper/55">
              {t(tour.region)} · {tour.days} {t(TEXT.days)}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_360px]">
        {/* ─── MAIN CONTENT ─── */}
        <div>
          {/* Summary */}
          <Reveal>
            <p className="font-sans text-lede leading-relaxed text-earth max-w-2xl">
              {t(tour.summary)}
            </p>
          </Reveal>

          {/* Highlights */}
          <Reveal delay={0.1} className="mt-14">
            <h2 className="font-serif text-h2 font-medium text-ink">
              {t(TEXT.highlights)}
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t(tour.highlights).map((h, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-sans text-[14px] text-earth"
                >
                  <span className="h-px w-5 bg-steppe shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Divider */}
          <div className="my-20 h-px bg-line" />

          {/* Itinerary */}
          <Reveal>
            <h2 className="font-serif text-h2 font-medium text-ink">
              {t(TEXT.itinerary)}
            </h2>
          </Reveal>

          <ol className="relative mt-12 border-l border-line pl-10">
            {tour.itinerary.map((stop, i) => (
              <Reveal key={stop.day} delay={i * 0.06}>
                <li className="relative pb-14 last:pb-0">
                  <span className="absolute -left-[42px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-steppe bg-paper font-utility text-[10px] font-bold text-steppe">
                    {stop.day}
                  </span>
                  <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.12em] text-earth/50">
                    {t(TEXT.day)} {stop.day}
                  </p>
                  <h3 className="mt-1.5 font-serif text-[22px] font-medium text-ink">
                    {t(stop.title)}
                  </h3>
                  <p className="mt-2 max-w-lg font-sans text-[14px] leading-relaxed text-earth">
                    {t(stop.desc)}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ─── STICKY SIDEBAR ─── */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border border-line bg-paper-dim p-8">
            <div className="pb-7 border-b border-line">
              <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-earth">
                {t(TEXT.investment)}
              </p>
              <p className="mt-1 font-serif text-h1 font-medium text-ink">
                ${tour.price.toLocaleString()}
              </p>
              <p className="font-sans text-[13px] text-earth">
                {t(TEXT.perPerson)}
              </p>
            </div>

            <dl className="mt-7 space-y-4 font-sans text-[14px]">
              <div className="flex justify-between">
                <dt className="text-earth">{t(TEXT.duration)}</dt>
                <dd className="font-medium text-ink">
                  {tour.days} {t(TEXT.days)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-earth">{t(TEXT.region)}</dt>
                <dd className="font-medium text-ink">{t(tour.region)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-earth">{t(TEXT.difficulty)}</dt>
                <dd className="font-medium text-ink">{t(tour.difficulty)}</dd>
              </div>
            </dl>

            <Link to="/booking" className="mt-8 block">
              <button className="w-full bg-earth px-8 py-4 font-sans text-[13px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-ink">
                {t(TEXT.bookNow)}
              </button>
            </Link>
          </div>

          {/* Small print */}
          <p className="mt-4 px-1 font-sans text-[12px] leading-relaxed text-earth/60">
            {lang === "en"
              ? "Price includes accommodation, meals, guides, and all in-country transport. Excludes international flights."
              : "Үнэ нь байр, хоол, хөтөч, улс дотоодын бүх тээврийг агуулдаг. Олон улсын нислэгийг оруулаагүй."}
          </p>
        </aside>
      </div>
    </div>
  );
}
