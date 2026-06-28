import { Link } from "react-router-dom";
import { useLang } from "../LanguageContext.jsx";

const TEXT = {
  tagline: {
    en: "The expedition is waiting.",
    mn: "Аялал хүлээж байна.",
  },
  sub: {
    en: "A small number of departures each year, on purpose. Based in Ulaanbaatar, Mongolia.",
    mn: "Жил бүр зориудаар цөөн аялал. Улаанбаатар, Монгол улс.",
  },
  inquire: { en: "Submit a request", mn: "Захиалга өгөх" },
  navLabel: { en: "Explore", mn: "Үзэх" },
  nav: [
    { to: "/expeditions", en: "Expeditions", mn: "Аялалууд" },
    { to: "/about", en: "About", mn: "Бидний тухай" },
    { to: "/journal", en: "Journal", mn: "Тэмдэглэл" },
    { to: "/guide", en: "Planning Guide", mn: "Гарын авлага" },
    { to: "/contact", en: "Contact", mn: "Холбоо барих" },
  ],
  contactLabel: { en: "Get in touch", mn: "Холбоо барих" },
  contact: [
    { label: { en: "Email", mn: "Имэйл" }, value: "hello@khairkhan.mn", href: "mailto:hello@khairkhan.mn" },
    { label: { en: "Phone", mn: "Утас" }, value: "+976 9911 0000", href: "tel:+97699110000" },
    { label: { en: "Location", mn: "Байршил" }, value: { en: "Ulaanbaatar, Mongolia", mn: "Улаанбаатар, Монгол улс" }, href: null },
  ],
  rights: { en: "All rights reserved.", mn: "Бүх эрх хамгаалагдсан." },
  season: {
    en: "Best season: May — October",
    mn: "Аяллын улирал: Тав — Аравдугаар сар",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = (dict) => (typeof dict === "object" && ("en" in dict || "mn" in dict) ? (dict[lang] ?? dict.en) : dict);

  return (
    <footer className="bg-ink text-paper">
      {/* Top section */}
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-16 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_auto]">
          {/* Left: tagline + CTA */}
          <div>
            <h2 className="font-serif text-h1 font-medium leading-tight tracking-[-0.01em] text-paper max-w-lg">
              {t(TEXT.tagline)}
            </h2>
            <p className="mt-5 max-w-sm font-sans text-[14px] leading-relaxed text-paper/45">
              {t(TEXT.sub)}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-block border border-paper/40 px-8 py-4 font-utility text-[12px] font-semibold uppercase tracking-[0.1em] text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                {t(TEXT.inquire)}
              </Link>
              <Link
                to="/expeditions"
                className="inline-block px-8 py-4 font-utility text-[12px] font-semibold uppercase tracking-[0.1em] text-paper/50 transition-colors hover:text-paper"
              >
                {lang === "en" ? "View expeditions →" : "Аялалуудыг үзэх →"}
              </Link>
            </div>
            <p className="mt-8 font-utility text-[10px] font-semibold uppercase tracking-[0.14em] text-paper/25">
              {t(TEXT.season)}
            </p>
          </div>

          {/* Right: nav columns */}
          <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
            <div>
              <p className="font-utility text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/30 mb-6">
                {t(TEXT.navLabel)}
              </p>
              <ul className="space-y-4">
                {TEXT.nav.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="font-utility text-[13px] font-semibold uppercase tracking-[0.08em] text-paper/55 transition-colors hover:text-paper"
                    >
                      {lang === "en" ? l.en : l.mn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-utility text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/30 mb-6">
                {t(TEXT.contactLabel)}
              </p>
              <ul className="space-y-4">
                {TEXT.contact.map((c, i) => (
                  <li key={i}>
                    <p className="font-utility text-[10px] font-semibold uppercase tracking-[0.1em] text-paper/30 mb-0.5">
                      {t(c.label)}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="font-utility text-[13px] text-paper/60 hover:text-paper transition-colors"
                      >
                        {typeof c.value === "object" ? t(c.value) : c.value}
                      </a>
                    ) : (
                      <p className="font-utility text-[13px] text-paper/60">
                        {typeof c.value === "object" ? t(c.value) : c.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-line mx-6 sm:mx-10">
        <div className="mx-auto max-w-[1440px] py-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] text-paper/30">
          <span className="font-utility uppercase tracking-[0.08em]">
            © {new Date().getFullYear()} Temuulen Expeditions. {t(TEXT.rights)}
          </span>
          <span className="font-utility uppercase tracking-[0.08em]">
            {lang === "en" ? "Site by " : "Вебсайт: "}
            <a
              href="https://temuulenenkhbold.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-paper/45 hover:text-paper/70 transition-colors"
            >
              Temuulen Enkhbold
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
