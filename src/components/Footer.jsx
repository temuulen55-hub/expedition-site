import { Link } from "react-router-dom";
import { useLang } from "../LanguageContext.jsx";

const TEXT = {
  tagline: { en: "The expedition is waiting.", mn: "Адал явдал хүлээж байна." },
  sub: {
    en: "Ulaanbaatar, Mongolia. A small number of departures each year — on purpose.",
    mn: "Улаанбаатар, Монгол улс. Бид жилд цөөн тооны бүлэг л зориудаар хүлээн авдаг.",
  },
  inquire: { en: "Submit a request", mn: "Захиалга илгээх" },
  links: [
    { to: "/expeditions", en: "Expeditions", mn: "Аялалууд" },
    { to: "/journal", en: "Journal", mn: "Тэмдэглэл" },
    { to: "/booking", en: "Contact", mn: "Холбоо барих" },
  ],
  rights: { en: "All rights reserved.", mn: "Бүх эрх хуулиар хамгаалагдсан." },
};

export default function Footer() {
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10">
        <h2 className="font-serif text-h1 font-medium leading-tight tracking-[-0.01em] text-paper">
          {t(TEXT.tagline)}
        </h2>

        <div className="mt-12 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm font-sans text-[14px] leading-relaxed text-paper/50">
            {t(TEXT.sub)}
          </p>
          <Link
            to="/booking"
            className="font-utility text-[12px] font-semibold uppercase tracking-[0.14em] text-paper underline decoration-paper/25 underline-offset-8 transition-colors hover:decoration-paper"
          >
            {t(TEXT.inquire)}
          </Link>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ink-line pt-8 text-[12px] text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Khairkhan Expeditions. {t(TEXT.rights)}
          </span>
          <div className="flex gap-7 font-utility uppercase tracking-[0.08em]">
            {TEXT.links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-paper/65 transition-colors"
              >
                {lang === "en" ? l.en : l.mn}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
