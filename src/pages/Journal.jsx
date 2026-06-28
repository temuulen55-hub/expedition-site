import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { useLang } from "../LanguageContext.jsx";

const ARTICLES = [
  {
    category: { en: "Field Notes", mn: "Тэмдэглэл" },
    title: {
      en: "What the Kazakh Eagle Hunters Know",
      mn: "Казах бүргэдчид юу мэддэг вэ",
    },
    date: { en: "October 2024", mn: "2024 оны аравдугаар сар" },
    readTime: "7",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "A morning with Altangerel and his eagle on the frozen slopes of Tavan Bogd — and what patience looks like when it involves a 6kg bird of prey.",
      mn: "Алтангэрэлтэй болон түүний бүргэдтэй хамт Таван Богдын мөсөн хажуу дахь өглөө — 6 кг жинтэй шувуутай тэвчээр хэрхэн харагддаг вэ.",
    },
    body: {
      en: `The eagle weighs six kilograms. Altangerel carries it on his left forearm for hours without seeming to notice. That is the first thing you understand about eagle hunting — the physical discipline required before anything dramatic happens.

We were at 3,200 metres, two days out from Ölgii. The morning had started at minus twelve and warmed, if that is the right word, to minus four by ten o'clock. Altangerel had been hunting with eagles since he was eleven. His current bird, a female golden eagle named Kök Shubar — Blue Dapple — has been with him for six years and will be returned to the wild in two more.

The relationship between a Kazakh eagle hunter and his bird is not what you expect from a working partnership. There is no obvious warmth. What there is instead is mutual attention — a quality of presence from both sides that resembles, more than anything else, professional respect. The bird reads him. He reads her. When she locks onto something in the scrubland below, he feels it through the leather of the glove before he sees it.

We waited on that ridge for four hours. The eagle caught nothing. Altangerel seemed unbothered. On the ride back to camp he explained, through our translator, that a poor hunting day and a good hunting day feel almost the same to him. "I am already outside," he said. "That is the main thing."

Spend enough time with people who live this way and you start to notice what they are not doing: they are not measuring the day against an expected outcome. The ridge, the cold, the waiting — these are not inconveniences to be survived on the way to something better. They are the point.

It is the kind of thing that sounds like a motivational poster until you are actually out there, at altitude, at minus twelve, and you start to feel it in your bones rather than just understand it with your head.`,
      mn: `Бүргэд зургаан кг жинтэй. Алтангэрэл үүнийг зүүн гарын доод тавган дээрээ цагаар барьж явдаг — ядарч байгаа юм шиг огт харагдахгүй. Бүргэд барих тухай анхдагч ойлголт энэ: ямар нэгэн гайхамшиг болохоос өмнө шаарддаг биеийн сахилга бат.

Бид 3200 метрийн өндөрт, Өлгийгөөс хоёр өдрийн алсад байсан. Өглөө нь хасах арван хоёроос эхэлж, аргагүй дулааран, арван цагт хасах дөрөвт хүрсэн. Алтангэрэл арван нэгэн настайгаасаа бүргэдтэй ан агнасан. Одоогийн бүргэд нь — Көк Шубар, буюу Цэнхэр Манхан гэдэг алтан бүргэд эм нь — зургаан жил хамт байсан бөгөөд хоёр жилийн дараа зэрлэгт буцаана.

Казах бүргэдч болон шувуудын хоорондын харилцаа таны хүлээснийхтэй адилгүй. Ойр дотно дулаан байдал харагдахгүй. Харин хоёр талаас харилцан анхаарал байдаг — ажил мэргэжлийн хүндэтгэлтэй адилхан байцаалтын чанар. Шувуу түүнийг уншдаг. Тэр шувуугаа уншдаг. Доорх бутнаас ямар нэгэн зүйлийг зогсоох үед тэр нь харахаасаа өмнө гарын бээлийн арьсаар мэдэрдэг.

Бид тэр нурууд дөрвөн цаг хүлээсэн. Бүргэд юу ч барьсангүй. Алтангэрэл ямар ч санаа зовоогүй мэт харагдсан. Баазруу буцаж яваад манай орчуулагчаар дамжуулан тайлбарлав: "Ан тааруухан болсон өдөр болон сайн ан болсон өдөр хоёр ялгаа бараг байдаггүй." "Гадаа байна," гэж хэлсэн. "Энэ бол гол зүйл."

Иймэрхүү амьдрал уусан хүмүүстэй тодорхой хугацаа зарцуулахаар тэднийг юу хийхгүй байгааг анзаараад эхэлдэг: тэд өдрийг хүлээгдэж буй үр дүнтэй харьцуулдаггүй. Нуруу, хүйтэн, хүлээлт — эдгээр нь илүү сайн зүйл рүү очих замын саад биш. Эдгээр нь учир шалтгаан юм.`,
    },
  },
  {
    category: { en: "Landscape", mn: "Газар нутаг" },
    title: {
      en: "The Gobi at Its Quietest",
      mn: "Говь хамгийн нам гүм байхдаа",
    },
    date: { en: "August 2024", mn: "2024 оны наймдугаар сар" },
    readTime: "5",
    image:
      "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "Day seven of eight in the desert. No agenda. Just sand and the kind of silence that takes two days to stop fighting.",
      mn: "Найм хоногийн долоо дахь өдөр. Хөтөлбөр байхгүй. Зөвхөн элс, хоёр өдрийн тэмцсэний дараа л зогсдог нам гүм.",
    },
    body: {
      en: `Day seven is a rest day. That was always the plan, but what a rest day means in the Gobi is different from what the word suggests anywhere else.

There is no town, no café, no option to default to anything familiar. There is the tent, the sand, the extraordinary sky, and whatever relationship you choose to have with all of it. Most of our guests spend the first half of this day not quite knowing what to do. By the afternoon, something has shifted.

The Gobi is not silent. That is the first thing you notice once you stop trying to fill it. There is wind — not always, but when it comes it moves the dune crests and the sound is something between breathing and white noise. There are insects at ground level if you look. At night there are more stars than you can process and a coyness that exists in every place with that much unpolluted sky.

What the desert asks of you is attention without agenda. It is not relaxing in any conventional sense — at least not at first. It is closer to what happens in meditation when you stop waiting for something to happen and start noticing what is actually there.

By day seven, most people are somewhere in that territory. The ones who resist it longest are usually the ones who need it most.

We run this day the same way every year. No programme. Breakfast at whatever hour people want it. Everything else entirely optional. It is the day guests most frequently mention afterwards, not because anything happened, but because of what did not.`,
      mn: `Долоо дахь өдөр бол амрах өдөр. Энэ нь үргэлж төлөвлөгдсөн байдаг, гэхдээ Говийн "амрах өдөр" гэдэг нь өөр газарт энэ үг илэрхийлдэгтэй ялгаатай.

Хот байхгүй, кафе байхгүй, ямар нэгэн танил зүйл рүү буцах боломж байхгүй. Майхан, элс, гайхамшигт тэнгэр байдаг — мөн эдгээртэй хэрхэн харилцахыг өөрөө сонгодог. Ихэнх зочид энэ өдрийн эхний хагасыг юу хийхийг мэдэхгүй өнгөрдөг. Үдийн дараа ямар нэгэн зүйл өөрчлөгдөнө.

Говь чимээгүй биш. Тэнд дүүргэхийг оролдохоо больсны дараа анзаарагдах анхны зүйл энэ. Салхи бий — байнга биш, гэхдээ ирэх үед манханы оройг хөдөлгөж, амьсгалах болон цагаан чимээний хоорондын дуу гарна. Эрэлхийлбэл газарт шавжнууд байна. Шөнө нь тэр олон тэргэдэн боловсруулж чадахгүй одод болон ийм их бохирдоогүй тэнгэртэй бүх газарт байдаг даруухан байдал байна.

Цөлийн таны эрэлхийлдэг зүйл нь хөтөлбөргүй анхаарал юм. Энэ нь ямар ч уламжлалт утгаараа тайвшируулах биш — наад зах нь эхэндээ. Энэ нь ямар нэгэн зүйл болохыг хүлээхээ больж, бодитоор байгааг нь анзаарч эхлэх үед медитацид болдогтой ойрхон.

Долоо дахь өдрийн гэхэд ихэнх хүмүүс тэр газарт хаа нэгтэй байдаг. Хамгийн урт тэсэрдэг нь ихэвчлэн хамгийн их хэрэгтэй нь байдаг.

Бид энэ өдрийг жил бүр адил аргаар явуулдаг. Хөтөлбөр байхгүй. Хүмүүс хүссэн цагтаа өглөөний хоол. Бусад бүх зүйл бүрэн сонголттой. Зочид дараа нь хамгийн их дурддаг өдөр нь тэнд яг юу болсноос биш, юу болоогүйгээс шалтгаалдаг.`,
    },
  },
  {
    category: { en: "Behind the Routes", mn: "Маршрутын ард" },
    title: {
      en: "How We Scout a New Itinerary",
      mn: "Шинэ маршрут хэрхэн тагнадаг вэ",
    },
    date: { en: "June 2024", mn: "2024 оны зургаадугаар сар" },
    readTime: "9",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "Before any guest sets foot on a new route, we do it twice — once in the wrong season, once again to be sure. An honest account.",
      mn: "Ямар ч зочин шинэ маршрутад хэдийч гараагүй байхад бид хоёр удаа явдаг — нэгийг нь буруу улиралд, нөгөөг нь итгэлтэй болохын тулд.",
    },
    body: {
      en: `The Orkhon Valley route took three years to finalise. That is not unusual for us. Here is what that process looks like.

Year one: we go in October, the wrong time for the route as we intend to run it in summer. The point is not to experience the route at its best — it is to understand the land under difficult conditions. Where do the river crossings become unmanageable? Where does the ground turn to mud that will stop a pack horse? Where are the emergency exit points if weather comes in hard? You only learn this by being there when conditions are bad.

Year two: we go in July, which is when guests will come. We run the route as guests would run it, staying in the same campsites, riding the same distances. We time the days not to be heroic but to be comfortable — there is a difference between what a guide can do and what a guest should be asked to do. We also visit the family who will host guests on day five and spend three days explaining what the arrangement involves. This is not a transaction. It is a relationship we will maintain for however many years the route runs.

Year three: final changes. A new campsite on the Orkhon, better positioned for the waterfall. A shorter day four to allow more time at Erdene Zuu without rushing. A logistics change to ensure fresh horses are waiting at the valley's midpoint.

Then, and only then, does a guest come.

We do not run routes we have not walked. We do not walk routes once and call that enough. The work that goes into a Temuulen itinerary is largely invisible to the people who travel it — which is, of course, exactly the point.`,
      mn: `Орхоны хөндийн маршрутыг эцэслэхэд гурван жил зарцуулсан. Энэ бол бидний хувьд ер бусын биш. Энэ процесс ямар харагддагийг тайлбарлая.

Нэгдүгээр жил: Бид аравдугаар сард явна — зуны аялалд зориулан бэлдэж буй маршрутад буруу цаг. Зорилго нь хамгийн сайн нөхцөлд туршлага дарж авах биш — хүнд нөхцөлд газрыг ойлгох явдал. Гол гатлалтууд хаана удирдах боломжгүй болдог вэ? Газар хаана шавар болж ачааны морь зогсдог вэ? Цаг агаар хүчтэй орж ирвэл яаралтай гарах цэгүүд хаана байдаг вэ? Эдгээрийг зөвхөн нөхцөл муу байх үед тэнд байснаар мэддэг.

Хоёрдугаар жил: Зочид ирэх зургадугаар сард явна. Маршрутыг зочид туулах шиг туулна — ижил буудал дээр хонож, ижил зай унана. Өдрийг баатарлагаар биш таатайгаар цагалбарлана — гид хийж чадах зүйл болон зочдоос хийхийг хүсэх зүйлийн хооронд ялгаа бий. Тавдугаар өдөр зочдыг хүлээн авах гэр бүлийг бас очиж гурван өдөр цагийг юу агуулдагийг тайлбарлана. Энэ нь гэрээний харилцаа биш. Маршрут хэдэн жил үргэлжлэхийг мэдэхгүй боловч хадгалах харилцаа.

Гуравдугаар жил: Эцсийн өөрчлөлтүүд. Орхон дээр хүрхрээний ойрхон шинэ буудал. Эрдэнэ Зуугт яаралгүй их цаг гаргахын тулд дөрөвдүгээр өдрийг богиносгох. Хөндийн дунд цэгт шинэ морьд хүлээж байгааг хангах логистикийн өөрчлөлт.

Тэгсний дараа, зөвхөн тэгсний дараа зочин ирдэг.

Яваагүй маршрутыг бид ажиллуулдаггүй. Нэг удаа явж хангалттай гэдэг үг хэлдэггүй. Хайрхан аялалд орсон ажил нь аяллыг туулж буй хүмүүст ихэвчлэн харагдахгүй — мэдээж яг энэ нь гол зүйл.`,
    },
  },
];

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    span: "row-span-2",
    cap: { en: "Altai summits at first light", mn: "Алтайн оргилууд — эрт өглөө" },
    loc: { en: "Western Mongolia", mn: "Баруун Монгол" },
  },
  {
    src: "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1600&auto=format&fit=crop",
    span: "",
    cap: { en: "Khongoryn Els, golden hour", mn: "Хонгорын Элс — алтан цаг" },
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
    cap: { en: "Pack horses, high valley", mn: "Ачааны морьд — өндөр хөндий" },
    loc: { en: "Altai Region", mn: "Алтайн бүс" },
  },
  {
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
    span: "",
    cap: { en: "Orkhon Waterfall at peak flow", mn: "Орхоны хүрхрээ — оргилтдоо" },
    loc: { en: "Central Mongolia", mn: "Төв Монгол" },
  },
  {
    src: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1600&auto=format&fit=crop",
    span: "",
    cap: { en: "Camp at altitude, Tavan Bogd", mn: "Таван Богд — өндөр бааз" },
    loc: { en: "Bayan-Ölgii", mn: "Баян-Өлгий" },
  },
];

const TEXT = {
  title: { en: "The Journal", mn: "Аяллын тэмдэглэл" },
  sub: {
    en: "Field notes, landscape essays, and honest accounts from the routes.",
    mn: "Маршрутаас ирсэн тэмдэглэл, газар нутгийн эссэ, үнэн дүрслэл.",
  },
  articles: { en: "Articles", mn: "Нийтлэлүүд" },
  photos: { en: "From the Field", mn: "Газраас" },
  readMore: { en: "Read more", mn: "Дэлгэрэнгүй" },
  collapse: { en: "Collapse", mn: "Хураах" },
  readTime: { en: "min read", mn: "минут унших" },
};

export default function Journal() {
  const { lang } = useLang();
  const t = (dict) => dict[lang] ?? dict.en;
  const [expanded, setExpanded] = useState(null);

  return (
    <div>
      {/* ─── HEADER ─── */}
      <section className="px-6 pt-20 pb-16 sm:px-10 border-b border-line">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h1 className="font-serif text-display font-medium leading-[0.98] tracking-[-0.02em] text-ink">
              {t(TEXT.title)}
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="mt-5 max-w-md">
            <p className="font-sans text-lede text-earth">{t(TEXT.sub)}</p>
          </Reveal>
        </div>
      </section>

      {/* ─── ARTICLES ─── */}
      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-earth/50 mb-12">
              {t(TEXT.articles)}
            </p>
          </Reveal>

          <div className="space-y-0 border-t border-line">
            {ARTICLES.map((article, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <article className="border-b border-line">
                  {/* Article header — always visible */}
                  <div className="grid gap-6 py-10 lg:grid-cols-[1fr_340px]">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="font-utility text-[10px] font-semibold uppercase tracking-[0.14em] text-steppe">
                          {t(article.category)}
                        </span>
                        <span className="font-utility text-[10px] text-earth/40 uppercase tracking-[0.1em]">
                          {t(article.date)} · {article.readTime} {t(TEXT.readTime)}
                        </span>
                      </div>
                      <h2 className="font-serif text-h2 font-medium text-ink leading-snug">
                        {t(article.title)}
                      </h2>
                      <p className="mt-4 font-sans text-[15px] leading-relaxed text-earth max-w-2xl">
                        {t(article.excerpt)}
                      </p>
                      <button
                        onClick={() =>
                          setExpanded(expanded === i ? null : i)
                        }
                        className="mt-6 font-utility text-[11px] font-semibold uppercase tracking-[0.12em] text-steppe underline decoration-steppe/30 underline-offset-6 transition-colors hover:decoration-steppe"
                      >
                        {expanded === i ? t(TEXT.collapse) : t(TEXT.readMore)} →
                      </button>
                    </div>

                    {/* Thumbnail */}
                    <div className="relative h-[220px] lg:h-full min-h-[180px] overflow-hidden bg-paper-dim">
                      <img
                        src={article.image}
                        alt={t(article.title)}
                        loading={i > 0 ? "lazy" : "eager"}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Expandable body */}
                  <AnimatePresence initial={false}>
                    {expanded === i && (
                      <motion.div
                        key="body"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-2xl pb-14">
                          {t(article.body)
                            .split("\n\n")
                            .map((para, j) => (
                              <p
                                key={j}
                                className={`font-sans text-[15px] leading-[1.85] text-earth ${
                                  j === 0 ? "first-letter:text-[1.5em] first-letter:font-serif first-letter:font-medium first-letter:text-ink first-letter:float-left first-letter:mr-1 first-letter:leading-none" : "mt-6"
                                }`}
                              >
                                {para}
                              </p>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO GRID ─── */}
      <section className="px-6 pb-28 sm:px-10 border-t border-line pt-20">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.16em] text-earth/50 mb-12">
              {t(TEXT.photos)}
            </p>
          </Reveal>

          <div className="grid auto-rows-[260px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {PHOTOS.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 0.07} className={p.span}>
                <figure className="group relative h-full w-full overflow-hidden bg-paper-dim">
                  <motion.img
                    src={p.src}
                    alt={t(p.cap)}
                    loading={i > 2 ? "lazy" : "eager"}
                    className="h-full w-full scale-100 object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/85 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
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
      </section>
    </div>
  );
}
