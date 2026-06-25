import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { useLang } from "../LanguageContext.jsx";

const SECTIONS = [
  {
    id: "seasons",
    label: { en: "Weather & Seasons", mn: "Цаг агаар ба улирал" },
    intro: {
      en: "Mongolia has four brutally distinct seasons. Our expeditions run June through early October — the window when the highlands are passable and the light is extraordinary.",
      mn: "Монгол дөрвөн тод ялгаатай улиралтай. Бидний аялалууд зургаадугаар сараас аравдугаар сарын эхэн хүртэл явагддаг — уулархаг газрууд давшигдах, гэрэл гайхалтай байдаг үе.",
    },
    items: [
      {
        term: { en: "June", mn: "Зургадугаар сар" },
        detail: {
          en: "Long days (18+ hours of light), green highland meadows, occasional rain. Coldest mornings of the season.",
          mn: "Урт өдрүүд (18+ цаг гэрэл), ногоон уулын нугачнууд, тунадас зэрэг. Улирлын хамгийн хүйтэн өглөөнүүд.",
        },
      },
      {
        term: { en: "July–August", mn: "7–8-р сар" },
        detail: {
          en: "Peak season. Nadaam festival falls mid-July. Warmest temperatures (12–24 °C in highlands, 25–35 °C in Gobi).",
          mn: "Оргил улирал. Наадам 7-р сарын дунд. Хамгийн дулаан температур (уулархаг газарт 12–24 °C, Говьд 25–35 °C).",
        },
      },
      {
        term: { en: "September", mn: "Есдүгээр сар" },
        detail: {
          en: "Our favourite month. Crowds gone, colours turning, nights crisp. Snow possible at altitude from late September.",
          mn: "Бидний дуртай сар. Олон хүн байхгүй, өнгө эргэж байна, шөнө нь хүйтэн. 9-р сарын сүүлээс өндөрт цас боломжтой.",
        },
      },
      {
        term: { en: "October", mn: "Аравдугаар сар" },
        detail: {
          en: "Early October only. Steppe turns amber. Cold comes fast; expeditions finish by the 15th.",
          mn: "Зөвхөн аравдугаар сарын эхэн. Тал шаргал болно. Хүйтэн хурдан ирдэг; аялалууд 15-ны өдрөөс өмнө дуусдаг.",
        },
      },
    ],
  },
  {
    id: "pack",
    label: { en: "What to Pack", mn: "Юу авч явах" },
    intro: {
      en: "Pack for temperature swings of 20 °C in a single day. Light is the priority — your pack horse carries communal gear. You carry only what you need on your back each day.",
      mn: "Нэг өдрийн дотор 20 °C-ийн температурын хэлбэлзэлд зориулан бэлтгэ. Хөнгөн байх нь гол зорилт — таны морь нийтлэг тоног хэрэгслийг зөөдөг. Та өдөр бүр зөвхөн хэрэгтэй зүйлсээ үүрнэ.",
    },
    items: [
      {
        term: { en: "Layering base", mn: "Дотор давхарга" },
        detail: {
          en: "Merino wool thermals (2 sets). Avoid cotton entirely — it kills in wet cold.",
          mn: "Нарийн ноосон дулаан дотуур хувцас (2 иж бүрдэл). Хөвөнгөөс бүрэн зайлсхий — нойтон хүйтэнд аюултай.",
        },
      },
      {
        term: { en: "Insulation", mn: "Дулаалга" },
        detail: {
          en: "Down jacket rated to at least −5 °C. A lightweight fleece mid-layer for active hours.",
          mn: "Дор хаяж −5 °C хүртэл тохируулсан пуужин хувцас. Идэвхтэй цагуудад зориулсан хөнгөн флис дунд давхарга.",
        },
      },
      {
        term: { en: "Waterproofing", mn: "Усны тусгаарлалт" },
        detail: {
          en: "Hardshell jacket and trousers, minimum 10,000 mm hydrostatic head. Gaiters if trekking above 3,000 m.",
          mn: "Хэт хатуу гадуур цамц, өмд, дор хаяж 10,000 мм гидростатик толгой. 3,000 м-ээс дээш явбал гайтер.",
        },
      },
      {
        term: { en: "Footwear", mn: "Гутал" },
        detail: {
          en: "Leather or synthetic ankle-support hiking boots, broken in before departure. Camp shoes for evenings.",
          mn: "Хөдөлгөөн эхлэхээс өмнө зуурч дассан арьс эсвэл нийлэг шагай тулгуур турист гутал. Оройн цагт зориулсан бааз гутал.",
        },
      },
      {
        term: { en: "Sun & altitude", mn: "Нар ба өндөрлөг" },
        detail: {
          en: "SPF 50+ sunscreen and lip balm (UV is intense at altitude). Sunglasses rated UV400. Altitude sickness medication to discuss with your doctor.",
          mn: "SPF 50+ нарны тос ба уруулын бальзам (өндөрт хэт ягаан туяа хүчтэй). UV400 үнэлгээтэй нарны шил. Алтуурын өвчний эм эмчтэйгээ хэлэлцэ.",
        },
      },
      {
        term: { en: "What we supply", mn: "Бид юу хангах вэ" },
        detail: {
          en: "Expedition-grade sleeping bag, sleeping mat, camp meals, water filtration, and first-aid kit. Do not bring what we already carry.",
          mn: "Экспедицийн зэрэглэлийн унтлагын уут, хэвтэх дэвсгэр, баазын хоол, усны цэвэршүүлэгч, эмийн хайрцаг. Бид аль хэдийн авч явдаг зүйлийг бүү авч яв.",
        },
      },
    ],
  },
  {
    id: "logistics",
    label: { en: "Visas & Logistics", mn: "Виз ба логистик" },
    intro: {
      en: "We handle all in-country logistics from the moment you land at Chinggis Khaan International Airport. What you need to arrange before you arrive:",
      mn: "Та Чингис Хаан олон улсын нисэх онгоцны буудалд буусан цагаас бид улс дотоодын бүх логистикийг зохицуулдаг. Та ирэхээсээ өмнө зохицуулах зүйлс:",
    },
    items: [
      {
        term: { en: "Visa on arrival", mn: "Ирэлтийн виз" },
        detail: {
          en: "Citizens of 60+ countries including the US, EU, UK, Australia, and Japan receive a 30-day visa-free entry. Check with your embassy for current status.",
          mn: "АНУ, ЕХ, Их Британи, Австрали, Япон зэрэг 60 гаруй улсын иргэд 30 хоногийн визгүй нэвтрэлтэй. Одоогийн нөхцөлийг элчин сайдын яамнаасаа лавла.",
        },
      },
      {
        term: { en: "Domestic flights", mn: "Дотоодын нислэгүүд" },
        detail: {
          en: "Most expeditions begin with a domestic MIAT or Hunnu Air flight to a provincial capital (Ölgii, Mörön, Dalanzadgad). We book these for you as part of the package.",
          mn: "Ихэнх аялалууд аймгийн төв рүү MIAT эсвэл Хуннү Эйр дотоодын нислэгээс эхэлдэг (Өлгий, Мөрөн, Даланзадгад). Бид таны хүсэлтийн дагуу эдгээрийг захиалдаг.",
        },
      },
      {
        term: { en: "Travel insurance", mn: "Аяллын даатгал" },
        detail: {
          en: "Mandatory. Policy must cover helicopter evacuation to at least $500,000 USD. We recommend World Nomads or SafetyWing Nomad.",
          mn: "Заавал шаардлагатай. Бодлого нь дор хаяж 500,000 АНУ доллар хүртэл нисдэг тэрэгний нүүлгэн шилжүүлэлтийг хамрах ёстой. Бид World Nomads эсвэл SafetyWing Nomad-ийг санал болгодог.",
        },
      },
      {
        term: { en: "Currency & cash", mn: "Валют ба бэлэн мөнгө" },
        detail: {
          en: "Mongolian Tögrög (MNT). Ulaanbaatar has ATMs; outside the capital, assume cash only. We advise bringing USD or EUR to exchange on arrival.",
          mn: "Монгол төгрөг (MNT). Улаанбаатарт ATM байна; нийслэлийн гадна зөвхөн бэлэн мөнгө гэж бод. Ирэхдээ солилцохоор АНУ доллар эсвэл Евро авч ирэхийг зөвлөдөг.",
        },
      },
      {
        term: { en: "Communications", mn: "Харилцаа холбоо" },
        detail: {
          en: "Mobile coverage ends at most aimag boundaries. We carry a Garmin inReach satellite communicator on all remote routes. Notify family before departure.",
          mn: "Гар утасны хүрэх байдал ихэнх аймгийн хилд дуусна. Бид бүх алслагдсан маршрутад Garmin inReach хиймэл дагуулын харилцаа холбоо авч явдаг. Гарахаасаа өмнө гэр бүлдээ мэдэгд.",
        },
      },
    ],
  },
  {
    id: "etiquette",
    label: { en: "Nomadic Etiquette", mn: "Нүүдэлчдийн соёл, ёс зүй" },
    intro: {
      en: "When you enter a herding family's ger, you are entering the most intimate space in their world. A few things to understand before you arrive at the threshold.",
      mn: "Та малчин гэр бүлийн гэрт орох үед тэдний дэлхийн хамгийн дотны орон зайд орж байна. Босгоонд ирэхээсээ өмнө ойлгох зарим зүйл.",
    },
    items: [
      {
        term: { en: "The threshold", mn: "Босго" },
        detail: {
          en: "Never step on the threshold of a ger. Step over it. This is the single most important rule.",
          mn: "Гэрийн босгыг хэзээ ч гишгэж болохгүй. Тэврэн орно. Энэ бол хамгийн чухал нэг дүрэм.",
        },
      },
      {
        term: { en: "Receiving food & drink", mn: "Хоол, ундаа хүлээн авах" },
        detail: {
          en: "Accept everything offered with both hands or your right hand supported by your left. Refusing food is rude. A small taste is always acceptable.",
          mn: "Санал болгосон бүгдийг хоёр гараараа эсвэл зүүн гараараа дэмжсэн баруун гараараа хүлээн ав. Хоол татгалзах бол эвгүй. Жижиг амталгаа үргэлж хүлээн зөвшөөрдөг.",
        },
      },
      {
        term: { en: "Sitting & moving", mn: "Суух ба хөдлөх" },
        detail: {
          en: "Move around the inside of a ger in a clockwise direction. Sit where you are directed. The western side (khoimor) is reserved for elders.",
          mn: "Гэрийн дотор цагийн зүүний дагуу хөдөл. Заасан газарт сууна. Баруун тал (хоймор) ахмадуудад зориулагдсан.",
        },
      },
      {
        term: { en: "Photography", mn: "Гэрэл зураг" },
        detail: {
          en: "Always ask before photographing people. Many herders are happy to be photographed; some are not. Your guide will help navigate this.",
          mn: "Хүмүүсийн зураг авахаасаа өмнө үргэлж асуу. Олон малчид зурагт ордог дуртай; зарим нь дургүй. Таны хөтөч үүнийг шийдвэрлэхэд тусална.",
        },
      },
      {
        term: { en: "Gifts", mn: "Бэлэг" },
        detail: {
          en: "Small gifts are welcome but never expected. Practical items (tea, sugar, sweets for children) are more appreciated than trinkets.",
          mn: "Жижиг бэлэг тавтай морилно, гэхдээ хэзээ ч шаардахгүй. Практик зүйлс (цай, чихэр, хүүхдэд чихэр) чимэглэлээс илүү үнэлдэг.",
        },
      },
    ],
  },
];

const TEXT = {
  eyebrow: { en: "Khairkhan Expeditions", mn: "Хайрхан Экспедишн" },
  title: { en: "Essential Field Guide", mn: "Аяллын гарын авлага" },
  sub: {
    en: "Everything we wish someone had told us before our first time in the field.",
    mn: "Анх талд гарахаасаа өмнө хэн нэгэн хэлсэн бол гэж хүсдэг бүх зүйл.",
  },
  expand: { en: "Read more", mn: "Цааш унших" },
  collapse: { en: "Close", mn: "Хаах" },
};

function AccordionItem({ section, isOpen, onToggle, t }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-8 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-baseline gap-5">
          <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.12em] text-earth/40 w-8">
            {String(SECTIONS.indexOf(section) + 1).padStart(2, "0")}
          </span>
          <span className="font-serif text-[22px] font-medium text-ink group-hover:text-steppe transition-colors">
            {t(section.label)}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 ml-4 font-sans text-[22px] font-light text-earth leading-none select-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 pl-13 sm:pl-[52px]">
              <p className="font-sans text-[15px] leading-relaxed text-earth max-w-2xl mb-10">
                {t(section.intro)}
              </p>
              <dl className="space-y-7">
                {section.items.map((item, i) => (
                  <div key={i} className="grid gap-2 sm:grid-cols-[200px_1fr]">
                    <dt className="font-utility text-[11px] font-semibold uppercase tracking-[0.1em] text-ink pt-0.5">
                      {t(item.term)}
                    </dt>
                    <dd className="font-sans text-[14px] leading-relaxed text-earth">
                      {t(item.detail)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Guide() {
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;
  const [openId, setOpenId] = useState("seasons");

  return (
    <div className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <Reveal>
          <span className="font-utility text-[11px] font-semibold uppercase tracking-[0.2em] text-earth/50">
            {t(TEXT.eyebrow)}
          </span>
          <h1 className="mt-4 font-serif text-display font-medium leading-[0.97] tracking-[-0.02em] text-ink">
            {t(TEXT.title)}
          </h1>
        </Reveal>
        <Reveal delay={0.15} className="mt-6 max-w-lg">
          <p className="font-sans text-lede text-earth">{t(TEXT.sub)}</p>
        </Reveal>

        {/* Accordion */}
        <div className="mt-24 border-t border-line">
          {SECTIONS.map((section) => (
            <Reveal key={section.id} delay={0.04}>
              <AccordionItem
                section={section}
                isOpen={openId === section.id}
                onToggle={() =>
                  setOpenId((prev) => (prev === section.id ? null : section.id))
                }
                t={t}
              />
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.1} className="mt-20 border-t border-line pt-10">
          <p className="font-sans text-[13px] text-earth/60 max-w-xl leading-relaxed">
            {lang === "en"
              ? "This guide is updated before each season. If something here contradicts what your expedition briefing document says, the briefing document is correct."
              : "Энэхүү гарын авлагыг улирал бүрийн өмнө шинэчилдэг. Хэрэв энд байгаа зүйл таны экспедицийн товч танилцуулах баримт бичигтэй зөрчилдвөл, товч танилцуулах баримт бичиг зөв."}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
