import Image from "next/image";

const storyMoments = [
  {
    id: 1,
    title: "तप्ती रेत पर दादी का सपना",
    description:
      "राजस्थान की धूप में तपती धरती पर दादी ने ठंडक का सपना बोया। बर्फ़ का घर बनाने की उनकी जिद ने गर्म हवाओं को चुनौती दी।",
    accent: "रेगिस्तान में शीतल कल्पना",
  },
  {
    id: 2,
    title: "शरारती बंदर की दोस्ती",
    description:
      "पेड़ से कूदकर उतरा बंदर दादी का साथी बन गया। दोनों ने मिलकर गोल–गोल जादुई बर्फ़ के ब्लॉक बनाए और एक नई दोस्ती गढ़ी।",
    accent: "मस्ती और मेहनत का संगम",
  },
  {
    id: 3,
    title: "बर्फ़ का महल और रंगोली",
    description:
      "चमकती सफेद दीवारें, छत पर बंदर की पूँछ की सफाई और दादी की बनाई बर्फ़ की रंगोली—सबने राजस्थान में ठंडी छाया फैला दी।",
    accent: "राजसी छाँव का जादू",
  },
];

const bricks = [
  "सहयोग",
  "हँसी",
  "जादू",
  "दोस्ती",
  "ठंडक",
  "हिम्मत",
  "रंगोली",
  "छाछ",
  "राजसी",
  "खुशियाँ",
  "सपना",
  "मिलजुल",
];

const sparkles = [
  "top-20 left-[8%]",
  "top-8 left-1/2",
  "top-32 right-[14%]",
  "top-1/3 left-[22%]",
  "top-1/2 right-[32%]",
  "top-[68%] left-[12%]",
  "top-[72%] right-[18%]",
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden pb-24 pt-16">
      <div className="aurora absolute -left-[20%] -top-[10%] h-[40rem] w-[40rem] animate-float opacity-70"></div>
      <div className="aurora absolute right-[-15%] top-[35%] h-[36rem] w-[36rem] animate-float-slow opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(148,197,246,0.28),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(244,253,255,0.22),transparent_55%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/85 via-slate-900/0"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10 lg:px-14">
        <header className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="story-panel ice-shimmer relative flex flex-1 flex-col gap-6 rounded-3xl p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-sky-100">
              AI CARTOON TALE
            </span>
            <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              “राजस्थान की तपती धूप में दादी का बर्फ़ का महल”
            </h1>
            <p className="max-w-xl text-balance text-lg text-slate-100/90 sm:text-xl">
              दादी और उनके नन्हे साथी बंदर ने तपते रेगिस्तान में ठंडक की दुनिया
              रच दी। यह कहानी है हिम्मत, दोस्ती और जादुई बर्फ़ के महल की, जहाँ
              शाम होते-होते छाछ की चुस्कियाँ गर्मी को भुला देती हैं।
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/30 bg-white/10 p-4 text-center shadow-lg shadow-sky-400/20">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-100/80">
                  तापमान
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">46°C → 12°C</p>
              </div>
              <div className="rounded-2xl border border-white/30 bg-white/10 p-4 text-center shadow-lg shadow-cyan-400/20">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-100/80">
                  बर्फ़ ब्लॉक
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">108</p>
              </div>
              <div className="rounded-2xl border border-white/30 bg-white/10 p-4 text-center shadow-lg shadow-indigo-400/20">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-100/80">
                  दोस्ती मीटर
                </p>
                <div className="mt-3 flex items-center justify-center gap-1 text-white">
                  <span className="text-lg">दादी</span>
                  <span aria-hidden="true" className="text-sky-100">
                    ×
                  </span>
                  <span className="text-lg">बंदर</span>
                  <span className="ml-2 rounded-full bg-sky-200/20 px-3 py-1 text-xs font-semibold text-sky-100">
                    अटूट
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="frosted ice-shimmer relative mx-auto aspect-square max-w-[22rem] overflow-hidden rounded-[2.5rem] p-6 shadow-xl shadow-sky-800/40 sm:max-w-[26rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_60%)]"></div>
              <Image
                src="/story/dadi-mandar.svg"
                alt="दादी और बंदर बर्फ़ के ब्लॉक बनाते हुए"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </header>

        <section className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] border border-white/10"></div>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="flex flex-col gap-10">
              {storyMoments.map((moment) => (
                <div
                  key={moment.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-8 transition duration-500 hover:translate-y-[-4px] hover:border-sky-200/40 hover:bg-slate-900/60"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-200/80 via-cyan-300/40 to-transparent opacity-0 duration-500 group-hover:opacity-100"></div>
                  <div className="flex flex-col gap-3 pl-4 sm:pl-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-100/70">
                      {moment.accent}
                    </span>
                    <h2 className="text-pretty text-2xl font-semibold text-white sm:text-3xl">
                      {moment.title}
                    </h2>
                    <p className="text-base leading-relaxed text-slate-100/80">
                      {moment.description}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-sky-200/10 blur-3xl transition duration-500 group-hover:bg-sky-200/20"></div>
                </div>
              ))}
            </div>
            <div className="relative pt-8 lg:pt-0">
              <div className="frosted ice-shimmer relative isolate mx-auto flex max-w-[22rem] flex-col items-center gap-8 overflow-hidden rounded-[2.5rem] p-8">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/10 opacity-70"></div>
                <div className="relative h-56 w-full">
                  <Image
                    src="/story/ice-palace.svg"
                    alt="चमकता बर्फ़ का महल"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-white/90">
                  {bricks.map((brick) => (
                    <span
                      key={brick}
                      className="ice-brick rounded-full px-4 py-1.5 shadow-md shadow-sky-500/20 backdrop-blur"
                    >
                      {brick}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-panel relative overflow-hidden rounded-[2.5rem] p-10 sm:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_60%)] opacity-80"></div>
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                शाम की ठंडक में दादी-बंदर की छाछ पार्टी
              </h2>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-sky-100/90">
                <span className="h-2 w-2 rounded-full bg-sky-200"></span>
                राजस्थान • जादुई शाम
              </div>
            </div>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-100/85">
              बर्फ़ की दीवारों पर हल्की-हल्की नमी चमक रही थी। दादी ने अपने हाथों से
              रंगोली के पैटर्न बनाए और बंदर ने अपनी पूँछ से छत पर जमी बूँदों को
              साफ किया। दोनों ने ठंडी छाछ के प्याले हाथ में लिए, और महल की
              फिसलन भरी फर्श पर हँसते-हँसते बैठ गए। रेगिस्तान की लू अब सिर्फ
              बाहर की बात रह गई थी—अंदर तो जैसे हिमालय उतर आया हो।
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-100/70">
                  ठंडी रस्में
                </p>
                <p className="mt-4 text-lg text-white">
                  पहली ईंट पर दादी ने मंत्र फूँका—“बर्फीली छाँव की रक्षा हो।”
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-100/70">
                  बंदर की चाल
                </p>
                <p className="mt-4 text-lg text-white">
                  पूँछ से बनती बर्फ की झाड़ू, हर कोने को चमका दे।
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-100/70">
                  राजसी साज
                </p>
                <p className="mt-4 text-lg text-white">
                  दरवाज़े पर बर्फ की रंगोली, बीच में मोरपंखी नक्षत्र।
                </p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-sky-200/15 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 left-16 h-48 w-48 rounded-full bg-cyan-200/20 blur-3xl"></div>
        </section>
      </div>

      {sparkles.map((position, index) => (
        <div
          key={index}
          className={`sparkle-dot sparkle-pulse absolute ${position}`}
        ></div>
      ))}
    </main>
  );
}
