export const TOURS = [
  {
    id: "altai-peaks",
    slug: "altai-peaks",
    name: { en: "Altai Peaks Expedition", mn: "Алтай таван богд" },
    tagline: { en: "Western Mongolia", mn: "Баруун захын Монгол" },
    region: { en: "Western Mongolia", mn: "Баруун захын Монгол" },
    days: 12,
    price: 2500,
    difficulty: { en: "Demanding", mn: "Бэрхшээл ихтэй" },
    heroImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop",
    summary: {
      en: "Trekking among permanently snow-capped summits on the Kazakh frontier — one of the last truly wild corners of Central Asia.",
      mn: "Казахын хилийн дагуух мөнх цасан оргилуудын дунд алхах адал явдал — Төв Азийн хамгийн зэрлэг булангуудын нэг.",
    },
    highlights: {
      en: [
        "Potanin Glacier",
        "Tavan Bogd base camp",
        "Kazakh eagle hunters",
        "Pack horse trekking",
      ],
      mn: [
        "Потаниний мөсөн гол",
        "Таван богдын бааз",
        "Казахын бүргэд барих уламжлал",
        "Морин аялал",
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { en: "Ulaanbaatar — Ölgii", mn: "Улаанбаатар — Өлгий" },
        desc: {
          en: "Domestic flight west to Bayan-Ölgii province. Transfer to the expedition base village, gear check, and evening briefing.",
          mn: "Баян-Өлгий аймаг руу дотоодын нислэг. Экспедицийн бааз тосгон руу шилжих, тоног хэрэгслийн шалгалт, орой товч мэдээлэл.",
        },
      },
      {
        day: 2,
        title: {
          en: "Final prep · Horse trek begins",
          mn: "Эцсийн бэлтгэл · Морин аялал эхлэх",
        },
        desc: {
          en: "Pack animals loaded before dawn. The first valley opens wide — a corridor of granite walls and alpine meadows dotted with Kazakh yurts.",
          mn: "Тэмээ морь үүр цайхаас өмнө бэлэн болно. Үзэх хөндий маш гоё харагддаг — хана, уулын нуга, Казак гэр, айлууд.",
        },
      },
      {
        day: 3,
        title: {
          en: "Potanin Glacier approach",
          mn: "Потаниний мөсөн голд ойртох",
        },
        desc: {
          en: "Ascend toward Mongolia's longest glacier. The scale becomes impossible to describe — you simply walk into it.",
          mn: "Монголын хамгийн урт мөсөн гол руу өгсөнө. Үгээр хэлэхийн аргагүй байгальтай — та зүгээр л диваажинг мэдэрнэ.",
        },
      },
      {
        day: 4,
        title: { en: "Tavan Bogd base camp", mn: "Таван богдын бааз" },
        desc: {
          en: "Establish high camp beneath the five sacred peaks. On a clear evening you can see Russia and China from one ridge.",
          mn: "Таван богд оргилын доор жижиг бааж барина. Цэлмэг орой өндөр толгодын оройгоос Орос, Хятадыг харж болно.",
        },
      },
      {
        day: 5,
        title: { en: "Acclimatisation hike", mn: "Дасан зохицох явган аялал" },
        desc: {
          en: "A ridge walk above 3,800 m with panoramic views across three countries. Afternoon photography session at the glacier terminus.",
          mn: "3800 метрийн өндөрт гурван улс орныг хамарсан панорам харагдацтай нуруугаар алхах. Өдрийн хоёрдугаар хагаст мөсөн голын эцэст фото хуралдаан.",
        },
      },
      {
        day: 6,
        title: {
          en: "Rest & cultural exchange",
          mn: "Амрах & соёлын солилцоо",
        },
        desc: {
          en: "Rest day in camp. Visit a Kazakh eagle hunter family — a chance to hold a golden eagle and hear the old migration songs.",
          mn: "Баазад амрах өдөр. Казах бүргэдчин гэр бүлд зочлох — алтан бүргэдийг гартаа барих, хуучин нүүдлийн дуунуудыг сонсох боломж.",
        },
      },
      {
        day: 7,
        title: { en: "Return traverse", mn: "Буцаах гатлага" },
        desc: {
          en: "Descend via the southern moraine, crossing the Ak River at the lowest ford before making camp in a willow stand.",
          mn: "Урд морен дагаж буух, тал газрын буланд хуурсан хавсарлагатай бааз байгуулахаасаа өмнө Ак голыг хамгийн нам гатлагаар гатлана.",
        },
      },
      {
        day: 8,
        title: { en: "Valley to valley", mn: "Хөндийгөөс хөндий рүү" },
        desc: {
          en: "A long riding day through high summer pastures, passing herds of yaks and the sound of bells that follow you for miles.",
          mn: "Өндөр зуны бэлчээрээр урт унах өдөр, яктай сүрэг, миль миль дагасан хонхны дуугаар өнгөрнө.",
        },
      },
      {
        day: 9,
        title: { en: "Lake Khoton", mn: "Хотон нуур" },
        desc: {
          en: "Camp beside the turquoise lake that sits at the foot of the glaciated range. Evening: reflections of snow on still water.",
          mn: "Мөсөн нурууны бэлд оршдог цэнхэр нуурын хажуугаар бааз. Орой: тайван усанд цасны тусгал.",
        },
      },
      {
        day: 10,
        title: { en: "Final ridge crossing", mn: "Эцсийн нурууг гатлах" },
        desc: {
          en: "The last high pass of the route at 3,500 m. Behind you, the peaks. Ahead, the steppe begins to soften into rolling grassland.",
          mn: "Маршрутын 3500 метрийн хамгийн сүүлчийн өндөр даваа. Ард нь оргилууд. Урд нь тал нь бэлчин нуга болж зөөлдөнө.",
        },
      },
      {
        day: 11,
        title: { en: "Return to Ölgii", mn: "Өлгий рүү буцах" },
        desc: {
          en: "Final morning on horseback. Farewell dinner with the guide team in the evening — airag, grilled mutton, and the stories that will only make sense later.",
          mn: "Морин дээр эцсийн өглөө. Орой гид багийнхантай үдийн хоол — айраг, шарсан хонины мах, дараа нь л утгатай болох түүхүүд.",
        },
      },
      {
        day: 12,
        title: { en: "Ölgii — Ulaanbaatar", mn: "Өлгий — Улаанбаатар" },
        desc: {
          en: "Morning flight home. The Altai will stay with you longer than the photographs do.",
          mn: "Өглөөний нислэгээр нутаг. Алтай нь гэрэл зургаас урт удаан дурсагдах болно.",
        },
      },
    ],
  },
  {
    id: "gobi-crossing",
    slug: "gobi-crossing",
    name: { en: "Gobi Desert Crossing", mn: "Говийн элсэн манхан" },
    tagline: { en: "South Gobi", mn: "Өмнөд Говь" },
    region: { en: "South Gobi", mn: "Өмнөд Говь" },
    days: 8,
    price: 1850,
    difficulty: { en: "Moderate", mn: "Дунд зэрэг" },
    heroImage:
      "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2000&auto=format&fit=crop",
    summary: {
      en: "Singing dunes, vulture canyons, and silence that goes on for hours. The Gobi asks nothing of you and gives everything.",
      mn: "Дуут манхан, ёлийн ам, хавцал үзнэ. Говь чамаас юу ч шаардахгүй, бүгдийг өгдөг.",
    },
    highlights: {
      en: [
        "Khongoryn Els singing dunes",
        "Yolyn Am ice canyon",
        "Flaming Cliffs (Bayanzag)",
        "Bactrian camel trek",
      ],
      mn: [
        "Хонгорын Элс дуулдаг манхан",
        "Ёлын амны мөсөн хавцал",
        "Шатаж буй хад (Баянзаг)",
        "Бактрийн тэмээний аялал",
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          en: "Ulaanbaatar — Dalanzadgad",
          mn: "Улаанбаатар — Даланзадгад",
        },
        desc: {
          en: "Flight south into the Gobi's gateway town. The landscape shift is immediate — the air thins, the colours warm.",
          mn: "Говийн үүд хотруу нислэг. Гадаад орчин шууд өөрчлөгдөнө — агаар нимгэрч, өнгүүд дулааралдана.",
        },
      },
      {
        day: 2,
        title: { en: "Yolyn Am canyon", mn: "Ёлын ам" },
        desc: {
          en: "A gorge that holds ice deep into midsummer. The walls narrow to arm-span width in places. Ibex sometimes watch from above.",
          mn: "Зуны дунд хүртэл мөс хадгалдаг хавцал. Хана зарим газарт гарын зайд хүрэтлээ нарийсдаг. Янгир заримдаа дээрээс харна.",
        },
      },
      {
        day: 3,
        title: { en: "Khongoryn Els dunes", mn: "Хонгорын Элс" },
        desc: {
          en: "Climb the singing dunes at golden hour. The sound the sand makes underfoot is unlike anything else on earth.",
          mn: "Алтан цагт дуулдаг манхан авирах. Элс хөлийн доор гаргадаг дуу нь газар дэлхийн өөр юутай ч адилгүй.",
        },
      },
      {
        day: 4,
        title: { en: "Camel trekking day", mn: "Тэмээний аялал" },
        desc: {
          en: "Cross open Gobi gravel plains on Bactrian camel. The rhythm slows you down in exactly the right way.",
          mn: "Бактрийн тэмээгээр нээлттэй Говийн хайрган тал гатлана. Хэмнэл нь чамайг яг зөв аргаар удаашруулна.",
        },
      },
      {
        day: 5,
        title: {
          en: "Flaming Cliffs — Bayanzag",
          mn: "Шатаж буй хад — Баянзаг",
        },
        desc: {
          en: "The cliffs Roy Chapman Andrews first dug for dinosaur eggs. At sunset the sandstone ignites — you understand the name immediately.",
          mn: "Рой Чэпмэн Эндрюс анхлан үлэг гүрвэлийн өндөг малтсан хад. Нарны жаргалтад зэс чулуу гал авалцдаг — та нэрийг шууд ойлгоно.",
        },
      },
      {
        day: 6,
        title: {
          en: "Local nomad camp visit",
          mn: "Орон нутгийн нүүдэлчдийн бааз айлчлал",
        },
        desc: {
          en: "A morning with a Gobi herder family: milking camels, learning to make aaruul, and tea that tastes of salt and distance.",
          mn: "Говийн малчин гэр бүлтэй өглөө: тэмээний сүү саах, аарул хийж сурах, давс, зайн амттай цай.",
        },
      },
      {
        day: 7,
        title: {
          en: "Open desert — free day",
          mn: "Нээлттэй цөл — чөлөөт өдөр",
        },
        desc: {
          en: "A rest day with no agenda. Walk as far as you want, sit as long as you like. The Gobi rewards those who slow down.",
          mn: "Хөтөлбөргүй амрах өдөр. Хүссэнээрээ алхаж, хүссэн хэр удаан суу. Говь удааширдаг хүмүүсийг урамшуулдаг.",
        },
      },
      {
        day: 8,
        title: {
          en: "Dalanzadgad — Ulaanbaatar",
          mn: "Даланзадгад — Улаанбаатар",
        },
        desc: {
          en: "Morning return flight. The Gobi light in the porthole window is the last thing you see before the city.",
          mn: "Өглөөний буцах нислэг. Иллюминаторт харагдах Говийн гэрэл хот руу орохоосоо өмнө таны харах сүүлчийн зүйл.",
        },
      },
    ],
  },
  {
    id: "khuvsgul-lake",
    slug: "khuvsgul-lake",
    name: { en: "Khuvsgul Lake Retreat", mn: "Хөвсгөл далайн аялал" },
    tagline: { en: "Northern Mongolia", mn: "Хойд Монгол" },
    region: { en: "Northern Mongolia", mn: "Хойд Монгол" },
    days: 5,
    price: 1400,
    difficulty: { en: "Easy", mn: "Хялбар" },
    heroImage:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2000&auto=format&fit=crop",
    summary: {
      en: "Asia's second-largest freshwater reserve, ringed by taiga and the last reindeer herders. A stillness that follows you home.",
      mn: "Азийн цэнгэг усны хоёр дахь том нөөц, тайгаар хүрээлэгдсэн, сүүлийн цагаан бугачдын бааз. Гэртээ дагалдан ирэх нам гүм.",
    },
    highlights: {
      en: [
        "Tsaatan reindeer herders",
        "Kayaking the lake",
        "Taiga forest rides",
        "Shaman ceremony",
      ],
      mn: [
        "Цаатан цагаан бугачид",
        "Нуурт каяк",
        "Тайгын ой дотуур морин аялал",
        "Бөөгийн зан үйл",
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { en: "Flight to Mörön", mn: "Мөрөн рүү нислэг" },
        desc: {
          en: "Transfer by jeep to the lake's southern shore. The water shifts colour as you approach — grey, then green, then an impossible blue.",
          mn: "Нуурын урд эрэг рүү жийп машинаар шилжих. Ойртох тусам усны өнгө өөрчлөгдөнө — саарал, дараа нь ногоон, дараа нь боломжгүй цэнхэр.",
        },
      },
      {
        day: 2,
        title: {
          en: "Visit a Tsaatan reindeer camp",
          mn: "Цаатан цагаан бугачдад зочлох",
        },
        desc: {
          en: "Meet Mongolia's last reindeer-herding community high in the taiga. Stay overnight in an ortz, the traditional tent of the forest people.",
          mn: "Тайгын өндөрт Монголын сүүлийн цагаан бугачид нийгэмлэгтэй уулзах. Ой дотрын хүмүүсийн уламжлалт тент болох ортцод хонох.",
        },
      },
      {
        day: 3,
        title: { en: "Lake crossing by kayak", mn: "Нуурыг каякаар гатлах" },
        desc: {
          en: "A guided paddle along the western shore, where the taiga comes down to the water's edge and otters work the shallows.",
          mn: "Тайга усны ирмэг хүрч, халиунууд гүехэн хэсгийг эзэмшдэг баруун эргийн дагуу удирдагдсан загас барих аялал.",
        },
      },
      {
        day: 4,
        title: {
          en: "Taiga horse ride & shaman visit",
          mn: "Тайгын морин аялал ба бөөтэй уулзах",
        },
        desc: {
          en: "Ride into old-growth forest with a local guide. In the afternoon, witness an introductory shaman ceremony — a quiet, slow ritual of smoke and drums.",
          mn: "Орон нутгийн гидтэй хамт хуучин ойд унах. Өдрийн хоёрдугаар хагаст оршил бөөгийн зан үйлийг харах — утаа, бөмбөрийн нам гүм, удаан зан үйл.",
        },
      },
      {
        day: 5,
        title: { en: "Return to Ulaanbaatar", mn: "Улаанбаатар руу буцах" },
        desc: {
          en: "A slow morning on the lakeshore, then the jeep road south to Mörön and the flight home.",
          mn: "Нуурын эрэгт удаан өглөө, дараа нь Мөрөн рүү жийп замаар хойд зүгт, нутаг руу нислэг.",
        },
      },
    ],
  },
];

export const getTourBySlug = (slug) => TOURS.find((t) => t.slug === slug);
