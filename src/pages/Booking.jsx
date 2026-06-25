import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { useLang } from "../LanguageContext.jsx";
import { TOURS } from "../data/tours.js";

const TEXT = {
  title: { en: "Inquiry & Booking", mn: "Захиалга, асуулт" },
  sub: {
    en: "We reply to every inquiry within 24 hours. Tell us which expedition calls to you and we'll build the rest around that.",
    mn: "Бид таны хүсэлтэд 24 цагийн дотор хариу өгнө. Аль аялал таныг дуудаж байгааг хэлвэл бид үлдсэнийг тойруулан бүтээнэ.",
  },
  fields: {
    name: {
      label: { en: "Full Name", mn: "Нэр" },
      placeholder: { en: "Your name", mn: "Таны нэр" },
    },
    email: {
      label: { en: "Email Address", mn: "И-мэйл" },
      placeholder: { en: "your@email.com", mn: "your@email.com" },
    },
    expedition: { label: { en: "Expedition Interest", mn: "Сонирхсон аялал" } },
    dates: {
      label: { en: "Desired Dates", mn: "Аяллын хугацаа" },
      placeholder: { en: "e.g. July 2026", mn: "ж.нь. 2026 оны 7-р сар" },
    },
    guests: {
      label: { en: "Number of Guests", mn: "Хүн" },
      placeholder: { en: "1–8", mn: "1–8" },
    },
    message: {
      label: { en: "Message", mn: "Мессеж" },
      placeholder: {
        en: "Any questions, special requirements, or context that helps us plan…",
        mn: "Асуулт, тусгай шаардлага, эсвэл бидэнд төлөвлөлтөд туслах мэдээлэл…",
      },
    },
  },
  submit: { en: "Submit Request", mn: "Захиалга илгээх" },
  any: { en: "Any / Undecided", mn: "Аль ч / Шийдээгүй" },
  thanks: {
    heading: { en: "Thank you.", mn: "Баярлалаа." },
    sub: { en: "Request received.", mn: "Хүсэлт хүлээн авлаа." },
    body: {
      en: "Our expedition planning team will be in touch shortly with availability.",
      mn: "Экспедицийн төлөвлөлтийн баг тун удахгүй боломжтой огнооны талаар холбоо барина.",
    },
  },
};

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  children,
  as: Tag = "input",
}) {
  return (
    <div className="group relative border-b border-line pb-3 pt-8 transition-colors focus-within:border-steppe">
      <label
        htmlFor={name}
        className="absolute top-0 left-0 font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-earth transition-colors group-focus-within:text-steppe"
      >
        {label}
      </label>
      {children ??
        (Tag === "textarea" ? (
          <textarea
            id={name}
            name={name}
            rows={4}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full resize-none bg-transparent font-sans text-[16px] text-ink outline-none placeholder:text-earth/30"
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-transparent font-sans text-[16px] text-ink outline-none placeholder:text-earth/30"
          />
        ))}
    </div>
  );
}

export default function Booking() {
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;

  const [form, setForm] = useState({
    name: "",
    email: "",
    expedition: "",
    dates: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const f = TEXT.fields;

  return (
    <div className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-[820px]">
        <Reveal>
          <h1 className="font-serif text-display font-medium leading-[0.98] tracking-[-0.02em] text-ink">
            {t(TEXT.title)}
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mt-6 max-w-xl">
          <p className="font-sans text-lede text-earth">{t(TEXT.sub)}</p>
        </Reveal>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 border border-steppe bg-paper-dim p-12"
          >
            <p className="font-serif text-h1 font-medium text-ink">
              {t(TEXT.thanks.heading)}
            </p>
            <p className="mt-1 font-serif text-lede italic text-earth">
              {t(TEXT.thanks.sub)}
            </p>
            <p className="mt-6 max-w-md font-sans text-[14px] leading-relaxed text-earth">
              {t(TEXT.thanks.body)}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-20 space-y-0">
            <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-12">
              <Field
                label={t(f.name.label)}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t(f.name.placeholder)}
                required
              />
              <Field
                label={t(f.email.label)}
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t(f.email.placeholder)}
                required
              />
            </div>

            {/* Expedition select */}
            <Field label={t(f.expedition.label)} name="expedition">
              <select
                id="expedition"
                name="expedition"
                value={form.expedition}
                onChange={handleChange}
                className="w-full bg-transparent font-sans text-[16px] text-ink outline-none appearance-none cursor-pointer"
              >
                <option value="">{t(TEXT.any)}</option>
                {TOURS.map((tour) => (
                  <option key={tour.id} value={tour.id}>
                    {t(tour.name)}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-12">
              <Field
                label={t(f.dates.label)}
                name="dates"
                value={form.dates}
                onChange={handleChange}
                placeholder={t(f.dates.placeholder)}
              />
              <Field
                label={t(f.guests.label)}
                name="guests"
                type="number"
                min="1"
                max="8"
                value={form.guests}
                onChange={handleChange}
                placeholder={t(f.guests.placeholder)}
              />
            </div>

            <Field
              label={t(f.message.label)}
              name="message"
              as="textarea"
              value={form.message}
              onChange={handleChange}
              placeholder={t(f.message.placeholder)}
            />

            <div className="pt-14">
              <button
                type="submit"
                className="bg-earth text-paper px-8 py-4 font-sans text-[13px] uppercase tracking-[0.1em] transition-colors hover:bg-ink"
              >
                {t(TEXT.submit)}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
