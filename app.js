// Contact links: fill what is confirmed; empty ones are not rendered.
const CONTACT = {
  github: "https://github.com/Abdullah-Handal",
  email: "mailto:abo269od@gmail.com",
  whatsapp: "https://wa.me/970597448626",
  mostaql: "",
  khamsat: ""
};
const LABELS = {
  whatsapp: { ar: "راسلني على واتساب", en: "Message me on WhatsApp" },
  email: { ar: "البريد الإلكتروني", en: "Email" },
  github: { ar: "GitHub", en: "GitHub" },
  mostaql: { ar: "مستقل", en: "Mostaql" },
  khamsat: { ar: "خمسات", en: "Khamsat" }
};

// Add a project = add one object here. Newest first.
const PROJECTS = [
  { img: "img/url2vid-thumb.png", link: "https://github.com/Abdullah-Handal/url2vid",
    ar: { title: "url2vid", kind: "تطبيق سطح مكتب لتحميل الفيديو", alt: "واجهة url2vid: لصق رابط واختيار الجودة",
      sum: "الصق الرابط، اختر الجودة، ونزّل. يعمل على ويندوز ولينكس.",
      problem: "تحميل فيديو بجودة معيّنة يعني عادةً مواقع مليئة بالإعلانات أو أوامر في الطرفية.",
      does: "يعتمد على yt-dlp. تلصق الرابط فتظهر الجودات من 480p إلى 4K مع حجم كل منها، أو تختار الصوت فقط بصيغة MP3. تُبنى النسخ تلقائياً عبر GitHub Actions.",
      tech: "React وTypeScript للواجهة، Python FastAPI، اختبارات pytest", cta: "الكود على GitHub" },
    en: { title: "url2vid", kind: "Desktop video downloader", alt: "url2vid interface: paste a link and pick a quality",
      sum: "Paste a link, pick a quality, download. Runs on Windows and Linux.",
      problem: "Getting a video in the quality you want usually means ad-filled sites or command-line flags.",
      does: "Built on yt-dlp. Paste a link and see qualities from 480p to 4K with the size of each, or choose audio-only MP3. Releases are built automatically with GitHub Actions.",
      tech: "React and TypeScript UI, Python FastAPI, pytest tests", cta: "Code on GitHub" } },
  { img: "img/fileuploader-thumb.png", link: "https://github.com/Abdullah-Handal/FileUploader",
    ar: { title: "FileUploader", kind: "مشاركة ملف أو نص برابط قصير", alt: "واجهة FileUploader لرفع ملف وإنشاء رابط",
      sum: "ارفع ملفاً حتى 4 جيجابايت أو نصاً، واحصل على رابط قصير ينتهي وحده.",
      problem: "إرسال ملف كبير لشخص ما يعني حساباً وتخزيناً يبقى بعد أن تنتهي الحاجة إليه.",
      does: "يمنحك رابطاً باسم تختاره، ويحذف الملف تلقائياً بعد مدة من 3 ساعات إلى 3 أيام. الواجهة تفتح في نافذة تطبيق عادية.",
      tech: "Python FastAPI، واجهة ويب داخل نافذة أصلية، نسخ لويندوز ولينكس", cta: "الكود على GitHub" },
    en: { title: "FileUploader", kind: "Share a file or text as a short link", alt: "FileUploader interface for uploading a file and creating a link",
      sum: "Upload a file up to 4 GB or some text and get a short link that expires by itself.",
      problem: "Sending a big file to someone means an account, and storage that outlives the need.",
      does: "Gives you a link with a name you choose, and deletes the file automatically after 3 hours to 3 days. The interface opens in a normal app window.",
      tech: "Python FastAPI, web UI in a native window, Windows and Linux builds", cta: "Code on GitHub" } },
  { img: "img/jwp-thumb.png", link: "",
    ar: { title: "JWP", kind: "تطبيق أندرويد للدفع عبر جوال باي", alt: "شاشة تطبيق JWP: اختيار صديق أو تاجر وإدخال الرقم والمبلغ",
      sum: "حوّل المال بفورم صغير بدل كتابة كود USSD طويل بيدك.",
      problem: "التحويل عبر جوال باي يعني كتابة كود طويل فيه الرقم والمبلغ والرمز السري، وأي خطأ صغير يرسل المال للمكان الغلط.",
      does: "تختار صديق أو تاجر، تدخل الرقم أو تختاره من جهات الاتصال أو تمسح QR، وتكتب المبلغ. التطبيق يتحقق من المدخلات، يعرض شاشة تأكيد، يبني الكود ويتصل به، ويعرض رد البوابة. يعرض الرصيد ويصنع QR لطلب الدفع. بالعربية والإنجليزية.",
      tech: "أندرويد أصلي بلغة Java، بدون Gradle أو مكتبات خارجية، يعمل من أندرويد 8" },
    en: { title: "JWP", kind: "Android app for Jawwal Pay transfers", alt: "JWP app screen: choose friend or merchant, enter number and amount",
      sum: "Send money with a short form instead of typing a long USSD code by hand.",
      problem: "A Jawwal Pay transfer means typing a long code with the number, amount and PIN, and one wrong digit sends money to the wrong place.",
      does: "Pick friend or merchant, type the number, choose it from contacts or scan a QR, and enter the amount. The app validates the input, shows a confirmation, builds and dials the code, and shows the gateway's reply. It also shows your balance and makes QR payment requests. Arabic and English.",
      tech: "Native Android in plain Java, no Gradle or third-party libraries, Android 8 and up" } },
  { img: "img/scrape-excel.png", link: "samples/books.xlsx",
    ar: { title: "سحب بيانات إلى Excel", kind: "عينة أتمتة بايثون", alt: "جدول إكسل فيه 1000 كتاب مع التصنيف والسعر والتقييم",
      sum: "1000 كتاب من 50 تصنيفاً، من الموقع إلى ملف إكسل مرتب في دقائق.",
      problem: "نسخ بيانات مئات الصفحات يدوياً يأخذ أياماً ويترك أخطاء.",
      does: "سكربت يمر على كل التصنيفات والصفحات، ويجمع العنوان والسعر والتقييم والتوفر والرابط، ثم يسلّم ملف إكسل بفلاتر وروابط، وورقة ملخص لكل تصنيف، ورسماً بيانياً. مصدر البيانات books.toscrape.com، موقع مخصص للتدريب على السحب.",
      tech: "Python، openpyxl", cta: "حمّل ملف الإكسل" },
    en: { title: "Website data to Excel", kind: "Python automation sample", alt: "Excel sheet with 1000 books, their category, price and rating",
      sum: "1000 books from 50 categories, from the website to a clean Excel file in minutes.",
      problem: "Copying data from hundreds of pages by hand takes days and leaves mistakes.",
      does: "A script walks every category and page, collects title, price, rating, stock and link, and delivers an Excel file with filters and links, a summary sheet per category, and a chart. Data source: books.toscrape.com, a site made for scraping practice.",
      tech: "Python, openpyxl", cta: "Download the Excel file" } },
  { img: "img/arabic-srt.png", link: "samples/wikifundi.ar.srt",
    ar: { title: "تفريغ عربي وملف ترجمة SRT", kind: "عينة تفريغ وترجمة", alt: "لقطة من فيديو عليه ترجمة عربية، وتحتها نص ملف SRT",
      sum: "دقيقة فيديو بالعربية، إلى ترجمة متزامنة بالعربية والإنجليزية.",
      problem: "الفيديو بدون ترجمة يخسر من يشاهد بدون صوت ومن لا يتكلم العربية.",
      does: "تفريغ الكلام وتدقيقه يدوياً، وتقسيمه إلى أسطر قصيرة متزامنة مع الكلام، ونسخة إنجليزية، ونسخة من الفيديو بالترجمة محروقة عليه. الفيديو الأصلي: WikiFundi Intro video Arabic 2، برخصة CC BY-SA 3.0، والترجمة بنفس الرخصة.",
      tech: "Whisper للمسودة الأولى، ثم تدقيق يدوي، وffmpeg", cta: "حمّل ملف SRT" },
    en: { title: "Arabic transcription and SRT", kind: "Subtitles sample", alt: "A video frame with Arabic subtitles, and the SRT file text below it",
      sum: "A minute of Arabic video, turned into timed Arabic and English subtitles.",
      problem: "A video without subtitles loses people watching on mute and people who don't speak Arabic.",
      does: "The speech is transcribed and checked by hand, split into short lines timed to the speech, translated to English, and burned into a copy of the video. Source video: WikiFundi Intro video Arabic 2, CC BY-SA 3.0; the subtitles use the same license.",
      tech: "Whisper for a first draft, then a manual check, and ffmpeg", cta: "Download the SRT file" } },
  { img: "img/support-pay-bot-thumb.png", link: "",
    ar: { title: "بوت دعم العملاء وبوت الدفع", kind: "عمل خاص لعميل، الكود غير منشور", alt: "محادثة مع بوت دعم وبوت دفع على تيليجرام",
      sum: "بوتان على تيليجرام: دعم بلغتين، ودفع يتحقق من الحوالة بنفسه.",
      problem: "فريق صغير يردّ يدوياً على نفس الأسئلة ويراجع كل حوالة بعينه.",
      does: "بوت الدعم بالعربية والإنجليزية بأزرار للأسئلة الشائعة، وللدعم المباشر يحصل كل عميل على موضوع خاص به في مجموعة الفريق. بوت الدفع يعرض QR لـ USDT على شبكة TRC20 ويتحقق من العملية على البلوكتشين عبر TronGrid، ويمنع تكرار نفس العملية، ويدعم QR بنكياً مع مراجعة الإيصال.",
      tech: "python-telegram-bot، TronGrid API" },
    en: { title: "Customer support and payments bots", kind: "Private client work, code not public", alt: "A conversation with a support bot and a payments bot on Telegram",
      sum: "Two Telegram bots: bilingual support, and payments that verify themselves.",
      problem: "A small team answering the same questions by hand and checking every transfer by eye.",
      does: "The support bot works in Arabic and English with FAQ buttons; for live support each customer gets their own topic in the team group. The payments bot shows a USDT (TRC20) QR and verifies the transaction on-chain through TronGrid, rejects a transaction used twice, and also handles a bank QR with receipt review.",
      tech: "python-telegram-bot, TronGrid API" } },
  { img: "img/telegram-bot-thumb.png", link: "",
    ar: { title: "مساعد ذكي على تيليجرام", kind: "عمل خاص، الكود غير منشور", alt: "محادثة مع مساعد ذكي يفهم الرسائل الصوتية",
      sum: "يفهم رسائلك الصوتية بالعربية ويردّ نصاً أو صوتاً.",
      problem: "كتابة الأسئلة الطويلة متعبة، وقراءة الروابط الطويلة أتعب.",
      does: "تُرسل ملاحظة صوتية فيفهمها عبر Whisper ويردّ نصاً أو صوتاً. يلخّص الروابط، ويعمل على مدار الساعة كخدمة على لينكس تعيد تشغيل نفسها إن توقفت.",
      tech: "Python، Whisper، خدمة systemd على لينكس" },
    en: { title: "AI assistant on Telegram", kind: "Private work, code not public", alt: "A conversation with an assistant that understands voice notes",
      sum: "Understands your Arabic voice notes and replies in text or voice.",
      problem: "Typing long questions is tiring, and reading long links is worse.",
      does: "Send a voice note and it understands it with Whisper, then replies in text or voice. It summarizes links and runs 24/7 as a Linux service that restarts itself if it stops.",
      tech: "Python, Whisper, systemd service on Linux" } },
  { img: "img/roastery-thumb.png", link: "https://abdullah-handal.github.io/roastery/",
    ar: { title: "بُنّ الوادي", kind: "نموذج صفحة هبوط عربية", alt: "صفحة هبوط عربية لمحمصة قهوة مع اختيار درجة التحميص",
      sum: "صفحة لمحمصة قهوة خيالية، فيها اختيار تفاعلي لدرجة التحميص.",
      problem: "نموذج يبيّن كيف تبدو صفحة عربية كاملة: من اليمين لليسار، بخط عربي مختار، وتعمل جيداً على الجوال.",
      does: "المحمصة غير حقيقية. تختار درجة التحميص فتتغير الصفحة لتصف الطعم وطريقة التحضير.",
      tech: "HTML وCSS وJavaScript بلا مكتبات", cta: "افتح الصفحة" },
    en: { title: "Bunn Al-Wadi", kind: "Arabic landing page sample", alt: "Arabic landing page for a coffee roastery with a roast-level selector",
      sum: "A page for a fictional coffee roastery, with an interactive roast-level selector.",
      problem: "A sample of a complete Arabic page: right to left, a chosen Arabic typeface, and good on a phone.",
      does: "The roastery is made up. Choose a roast level and the page changes to describe the taste and how to brew it.",
      tech: "HTML, CSS and JavaScript, no libraries", cta: "Open the page" } }
];

const SERVICES = [
  { ar: ["بوتات تيليجرام", "دعم عملاء، دفع، حجوزات، مساعدين بالذكاء الاصطناعي."], en: ["Telegram bots", "Customer support, payments, bookings, AI assistants."] },
  { ar: ["أتمتة بايثون وسحب البيانات", "سكربتات تجمع البيانات من المواقع وتسلّمها في ملف إكسل جاهز."], en: ["Python automation and scraping", "Scripts that collect data from websites and hand it over as a ready Excel file."] },
  { ar: ["مواقع وصفحات هبوط", "عربية من اليمين لليسار، سريعة، وتعمل على الجوال."], en: ["Websites and landing pages", "Arabic right to left, fast, and working on phones."] },
  { ar: ["تطبيقات أندرويد بسيطة", "تطبيق واحد لمهمة واحدة واضحة."], en: ["Simple Android apps", "One app for one clear job."] },
  { ar: ["تفريغ صوتي وترجمة نصية", "تفريغ المقاطع العربية إلى نص وملفات ترجمة للفيديو."], en: ["Arabic transcription and subtitles", "Turning Arabic audio into text and subtitle files for video."] }
];

const CHAT = [
  { w: "me", ar: "السلام عليكم، حوّلت 50 USDT", en: "Hi, I sent 50 USDT" },
  { w: "bot", ar: "وعليكم السلام. أرسل رقم العملية (TXID) من فضلك.", en: "Hi. Please send the transaction ID (TXID)." },
  { w: "me", ar: "a91f…c07e", en: "a91f…c07e", dir: "ltr" },
  { w: "bot", typing: 1700, ar: "أتحقق من العملية على الشبكة.", en: "Checking the transaction on the network." },
  { w: "bot", ar: "وصلت 50 USDT على TRC20، والعملية لم تُستخدم من قبل. تم تفعيل اشتراكك.", en: "50 USDT arrived on TRC20, and this transaction hasn't been used before. Your subscription is active." }
];

const $ = (s, r = document) => r.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const params = new URLSearchParams(location.search);
let lang = ["ar", "en"].includes(params.get("lang")) ? params.get("lang") : (localStorage.getItem("lang") || "ar");
if (!["ar", "en"].includes(lang)) lang = "ar";

function el(tag, attrs = {}, text) {
  const e = document.createElement(tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (text != null) e.textContent = text;
  return e;
}

function renderContact() {
  document.querySelectorAll("[data-contact]").forEach(box => {
    box.textContent = "";
    const order = box.dataset.contact === "hero" ? ["whatsapp", "email", "github"] : ["whatsapp", "email", "github", "mostaql", "khamsat"];
    let first = true;
    order.filter(k => CONTACT[k]).forEach(k => {
      const a = el("a", { href: CONTACT[k], class: first ? "btn btn-main" : "btn", rel: "noopener" }, LABELS[k][lang]);
      first = false;
      box.append(a);
    });
  });
}

function renderProjects() {
  const root = $("#projects"); root.textContent = "";
  const T = lang === "ar"
    ? { problem: "المشكلة", does: "ماذا يفعل", tech: "التقنيات", more: "التفاصيل" }
    : { problem: "The problem", does: "What it does", tech: "Built with", more: "Details" };
  PROJECTS.forEach(p => {
    const d = p[lang];
    const art = el("article", { class: "proj" });
    const fig = el("div", { class: "proj-img" });
    fig.append(el("img", { src: p.img, alt: d.alt, width: 1200, height: 675, loading: "lazy" }));
    const body = el("div", { class: "proj-body" });
    body.append(el("p", { class: "kind" }, d.kind), el("h3", {}, d.title), el("p", {}, d.sum));
    const det = el("details");
    det.append(el("summary", {}, T.more));
    const dl = el("dl");
    [["problem", d.problem], ["does", d.does], ["tech", d.tech]].forEach(([k, v]) => {
      dl.append(el("dt", {}, T[k]), el("dd", {}, v));
    });
    det.append(dl);
    body.append(det);
    if (p.link) body.append(el("a", { class: "btn", href: p.link, rel: "noopener" }, d.cta));
    art.append(fig, body);
    root.append(art);
  });
}

function renderServices() {
  const ul = $("#service-list"); ul.textContent = "";
  SERVICES.forEach(s => {
    const li = el("li"); const [t, d] = s[lang];
    li.append(el("b", {}, t), el("span", {}, d));
    ul.append(li);
  });
}

let timers = [];
function playChat() {
  timers.forEach(clearTimeout); timers = [];
  const th = $("#thread"); th.textContent = "";
  let t = 400;
  CHAT.forEach(m => {
    const li = el("li", { class: "msg " + m.w });
    li.append(el("p", m.dir ? { dir: m.dir } : {}, m[lang]));
    const show = () => { th.append(li); th.scrollTop = th.scrollHeight; };
    if (reduce) { show(); return; }
    if (m.w === "bot") {
      const dots = el("li", { class: "msg bot typing", "aria-hidden": "true" });
      dots.append(el("p", {}, "..."));
      timers.push(setTimeout(() => { th.append(dots); }, t));
      t += m.typing || 900;
      timers.push(setTimeout(() => { dots.remove(); show(); }, t));
    } else {
      timers.push(setTimeout(show, t));
    }
    t += 1100;
  });
}

function applyLang() {
  const root = document.documentElement;
  root.lang = lang; root.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-en]").forEach(e => {
    if (e.dataset.ar == null) e.dataset.ar = e.textContent;
    e.textContent = lang === "en" ? e.dataset.en : e.dataset.ar;
  });
  document.querySelectorAll("[data-en-aria]").forEach(e => {
    if (e.dataset.arAria == null) e.dataset.arAria = e.getAttribute("aria-label");
    e.setAttribute("aria-label", lang === "en" ? e.dataset.enAria : e.dataset.arAria);
  });
  const b = $("#lang");
  b.textContent = lang === "ar" ? "EN" : "عربي";
  b.lang = lang === "ar" ? "en" : "ar";
  b.setAttribute("aria-label", lang === "ar" ? "English" : "العربية");
  document.title = lang === "ar" ? "عبدالله | مطوّر بوتات تيليجرام وأدوات بايثون" : "Abdullah | Telegram bots and Python tools developer";
  $('meta[name="description"]').content = lang === "ar"
    ? "عبدالله، مطوّر مستقل من فلسطين: بوتات تيليجرام، أدوات بايثون وسحب بيانات إلى إكسل، ومواقع عربية."
    : "Abdullah, a freelance developer in Palestine: Telegram bots, Python tools and scraping to Excel, and Arabic websites.";
  renderContact(); renderProjects(); renderServices(); playChat();
}

$("#lang").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", lang);
  history.replaceState(null, "", location.pathname + location.hash);
  applyLang();
});
$("#replay").addEventListener("click", playChat);
$("#year").textContent = "© " + new Date().getFullYear();
applyLang();
