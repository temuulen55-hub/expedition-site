import { useLang } from "../LanguageContext.jsx";
import Reveal from "../components/Reveal.jsx";

const TEXT = {
  eyebrow: { en: "Get in touch", mn: "Холбоо барих" },
  title: { en: "Contact", mn: "Холбоо барих" },
  addressTitle: { en: "Headquarters", mn: "Төв оффис" },
  address: {
    en: "Sukhbaatar District\nUlaanbaatar, 14200\nMongolia",
    mn: "Сүхбаатар дүүрэг\nУлаанбаатар, 14200\nМонгол улс",
  },
  directTitle: { en: "Direct", mn: "Шууд холбогдох" },
  socialTitle: { en: "Follow the Journey", mn: "Аяллыг дагах" },
};

export default function Contact() {
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;

  return (
    <div className="grid min-h-[calc(100vh-88px)] lg:grid-cols-2">
      {/* LEFT: Aesthetic Image */}
      <div className="relative hidden h-full min-h-[500px] w-full lg:block">
        <img
          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2400&auto=format&fit=crop"
          alt="Mongolian landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      {/* RIGHT: Typography Contact Info */}
      <div className="flex flex-col justify-center bg-paper px-6 py-24 sm:px-16 lg:px-24">
        <div className="max-w-md">
          <Reveal>
            <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.2em] text-earth/50">
              {t(TEXT.eyebrow)}
            </span>
            <h1 className="mt-4 font-serif text-display font-medium leading-none tracking-[-0.02em] text-ink">
              {t(TEXT.title)}
            </h1>
          </Reveal>

          <div className="mt-20 space-y-16">
            <Reveal delay={0.1}>
              <div>
                <h2 className="font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-earth">
                  {t(TEXT.addressTitle)}
                </h2>
                <p className="mt-4 whitespace-pre-line font-sans text-[15px] leading-relaxed text-ink">
                  {t(TEXT.address)}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-earth">
                  {t(TEXT.directTitle)}
                </h2>
                <div className="mt-4 flex flex-col gap-2 font-sans text-[15px] text-ink">
                  <a
                    href="mailto:hello@khairkhan.com"
                    className="w-fit hover:text-steppe transition-colors"
                  >
                    temuulen.iphone5@gmail.com
                  </a>
                  <a
                    href="tel:+97699112233"
                    className="w-fit hover:text-steppe transition-colors"
                  >
                    +976 9999 9999
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div>
                <h2 className="font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-earth">
                  {t(TEXT.socialTitle)}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  <a
                    href="https://instagram.com/temulenni"
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit font-serif text-[28px] text-ink transition-all hover:text-steppe hover:tracking-wide"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/temuulenn0503"
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit font-serif text-[28px] text-ink transition-all hover:text-steppe hover:tracking-wide"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://temuulenenkhbold.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit font-serif text-[28px] text-ink transition-all hover:text-steppe hover:tracking-wide"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
