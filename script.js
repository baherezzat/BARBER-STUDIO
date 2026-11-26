/* ============================================================
   THE GENTLEMAN — BARBER STUDIO | script.js
   Vanilla JS. يعمل مباشرة بفتح index.html بدون خادم.
   ============================================================ */
"use strict";

/* ---------------- I18N ---------------- */
const I18N = {
  ar: {
    dir: "rtl", pickService:"اختار الخدمة والموعد",
    brandName: "ذا جنتلمان", brandSub: "BARBER STUDIO",
    navHome:"الرئيسية", navServices:"خدماتنا", navHaircuts:"أحدث القصات",
    navHomeService:"الزيارات المنزلية", navGroom:"باقات العريس",
    navGallery:"معرض الصور", navAbout:"من نحن", navContact:"اتصل بنا",
    btnBookNow:"احجز موعدك الآن",
    heroEyebrow:"صالون حلاقة رجالي فاخر — مصر",
    heroTitle:"حلاقة على أصولها",
    heroSub:"من القصّة الكلاسيكية لتحديد الذقن، اختار إطلالتك واحجز حلاقك في الصالون أو في البيت.",
    btnHomeVisit:"احجز زيارة منزلية", btnSalon:"احجز داخل الصالون", btnGroom:"اكتشف باقات العريس",
    trust1:"حلاقون محترفون", trust2:"أدوات معقمة", trust3:"مواعيد مرنة", trust4:"خدمة منزلية مميزة",
    servicesEyebrow:"قائمة الخدمات والأسعار", servicesTitle:"خدماتنا",
    servicesNote:"الأسعار استرشادية وتُؤكّد عند الحجز.",
    haircutsEyebrow:"معرض القصات العالمية", haircutsTitle:"أحدث القصات",
    haircutsNote:"اختر قصتك المفضلة واحجزها مباشرة.",
    hsEyebrow:"الحلاقة المنزلية", hsTitle:"صالونك الخاص... في راحة منزلك",
    hsDesc:"احجز حلاقًا محترفًا ليصل إليك في منزلك أو الفندق أو مكان إقامتك، مع جميع الأدوات اللازمة لتقديم تجربة حلاقة وعناية شخصية متميزة.",
    hsStep1:"اختر الخدمة المطلوبة", hsStep2:"حدد المكان والموعد", hsStep3:"أرسل طلب الحجز",
    hsStep4:"انتظر تأكيد الموعد من الصالون", hsStep5:"استمتع بخدمة الحلاقة في منزلك",
    hsList:["قص الشعر","حلاقة الذقن","تصفيف الشعر","تنظيف البشرة","العناية الشخصية","حلاقة الأطفال","تجهيز العريس","حلاقة أكثر من شخص في الزيارة نفسها"],
    hsCta:"اطلب حلاقًا لحد باب بيتك",
    groomEyebrow:"باقات تجهيز العريس", groomTitle:"في أهم يوم في حياتك... خليك في أفضل إطلالة",
    groomFeatured:"الأكثر طلبًا", groomBook:"احجز باقة العريس",
    galleryEyebrow:"أعمالنا", galleryTitle:"معرض الصور",
    aboutEyebrow:"من نحن", aboutTitle:"على كرسي الجنتلمان",
    aboutText:"نؤمن بأن الحلاقة ليست مجرد خدمة، بل تجربة متكاملة تعكس شخصيتك وأسلوبك. نقدم أحدث قصات الشعر العالمية وخدمات العناية الرجالية بأدوات احترافية، سواء داخل الصالون أو في راحة منزلك.",
    about1:"الاهتمام بأدق التفاصيل", about2:"النظافة والتعقيم", about3:"أساليب حلاقة عصرية",
    about4:"خدمات منزلية مرنة", about5:"تجربة مصممة لكل عميل",
    faqEyebrow:"الأسئلة الشائعة", faqTitle:"عندك سؤال؟",
    contactEyebrow:"تواصل معنا", contactTitle:"اتصل بنا",
    barServices:"الخدمات", barContact:"اتصل بنا", barBook:"احجز الآن",
    slogan:"أناقتك تبدأ من هنا... أينما كنت.", footerNote:"جميع الحقوق محفوظة",
    filterAll:"جميع الخدمات", filterHair:"قصات الشعر", filterBeard:"الذقن",
    filterSkin:"العناية بالبشرة", filterHaircare:"العناية بالشعر",
    filterHome:"الزيارات المنزلية", filterGroom:"باقات العريس",
    addToBooking:"أضف للحجز", added:"تمت الإضافة ✓", minAbbrev:"دقيقة",
    duration:"المدة", price:"السعر",
    bookThisCut:"احجز هذه القصة",
    contactLabels:{ phone:"رقم الهاتف", whatsapp:"واتساب", address:"العنوان", hours:"مواعيد العمل", areas:"مناطق التغطية المنزلية", follow:"تابعنا", maps:"موقعنا على الخرائط", call:"اتصل الآن" },
    /* booking */
    bkTitle:"احجز موعدك",
    steps:["نوع الحجز","الخدمات","التاريخ والوقت","بياناتك","الملخص","الإرسال"],
    typeSalon:"داخل الصالون", typeHome:"زيارة منزلية", typeGroom:"تجهيز العريس", typeGroup:"حجز جماعي",
    chooseServices:"اختر خدمة واحدة أو أكثر",
    emptyServices:"لا توجد خدمات ضمن هذا التصنيف، اختر «جميع الخدمات».",
    next:"التالي", back:"رجوع", cancel:"إلغاء",
    chooseDate:"اختر اليوم المناسب", chooseTime:"اختر الوقت المطلوب",
    sunday:"أحد", monday:"اثنين", tuesday:"ثلاثاء", wednesday:"أربعاء", thursday:"خميس", friday:"جمعة", saturday:"سبت",
    fullName:"الاسم الكامل", phoneNum:"رقم الهاتف المصري", waNum:"رقم واتساب",
    governorate:"المحافظة", region:"المنطقة", addressDetail:"العنوان بالتفصيل",
    peopleCount:"عدد الأشخاص", notes:"ملاحظات إضافية",
    namePh:"مثال: أحمد محمد", phonePh:"01xxxxxxxxx", notesPh:"أي تفاصيل تود إخبارنا بها...",
    errName:"برجاء إدخال الاسم الكامل", errPhone:"برجاء إدخال رقم هاتف صحيح (11 رقمًا يبدأ بـ 01)",
    errAddress:"برجاء إدخال المحافظة والمنطقة والعنوان",
    errServices:"اختر خدمة واحدة على الأقل للمتابعة",
    summaryServices:"الخدمات المختارة", summaryType:"نوع الحجز", summaryDate:"التاريخ",
    summaryTime:"الوقت المطلوب", summaryDuration:"المدة المتوقعة", summarySubtotal:"تكلفة الخدمات",
    summaryTransport:"رسوم الانتقال", summaryDiscount:"الخصم", summaryTotal:"الإجمالي النهائي",
    transportConfirmNote:"تُؤكَّد رسوم هذه المنطقة من الصالون قبل تنفيذ الحجز.",
    sendWhatsApp:"إرسال طلب الحجز عبر واتساب",
    confirmNote:"الموعد يصبح مؤكدًا بعد تواصل الصالون معك. إرسال الطلب يفتح واتساب برسالة منظمة بكل التفاصيل.",
    groupNote:"للحجز الجماعي سيتواصل الصالون معك لترتيب التفاصيل وتأكيد السعر النهائي.",
    waIntro:"مرحبًا، أرغب في حجز موعد حلاقة.",
    waType:"نوع الحجز", waName:"اسم العميل", waPhone:"رقم الهاتف", waServices:"الخدمات المطلوبة",
    waDate:"التاريخ", waTime:"الوقت المطلوب", waArea:"المنطقة", waAddress:"العنوان",
    waPeople:"عدد الأشخاص", waTotal:"إجمالي التكلفة", waNotes:"الملاحظات",
    waOutro:"برجاء تأكيد الموعد.",
    perPerson:"للشخص الواحد", egp:"ج.م"
  },
  en: {
    dir: "ltr", pickService:"Choose service & time",
    brandName: "THE GENTLEMAN", brandSub: "BARBER STUDIO",
    navHome:"Home", navServices:"Services", navHaircuts:"Trending Cuts",
    navHomeService:"Home Visits", navGroom:"Groom Packages",
    navGallery:"Gallery", navAbout:"About", navContact:"Contact",
    btnBookNow:"Book Now",
    heroEyebrow:"Premium Men's Barber Studio — Egypt",
    heroTitle:"The art of a good cut",
    heroSub:"From a scissor cut to a straight-razor finish, book your barber in the studio or at home.",
    btnHomeVisit:"Book a Home Visit", btnSalon:"Book at the Salon", btnGroom:"Explore Groom Packages",
    trust1:"Professional barbers", trust2:"Sterilized tools", trust3:"Flexible timings", trust4:"Premium home service",
    servicesEyebrow:"Services & Pricing", servicesTitle:"Our Services",
    servicesNote:"Prices are indicative and confirmed when booking.",
    haircutsEyebrow:"World's Trending Gallery", haircutsTitle:"Trending Haircuts",
    haircutsNote:"Pick your favorite cut and book it instantly.",
    hsEyebrow:"Home Barber Service", hsTitle:"Your private salon... in the comfort of your home",
    hsDesc:"Book a professional barber to your home, hotel or residence, fully equipped for a premium grooming experience.",
    hsStep1:"Choose your service", hsStep2:"Set location & time", hsStep3:"Send the booking request",
    hsStep4:"Wait for the salon's confirmation", hsStep5:"Enjoy your haircut at home",
    hsList:["Haircuts","Beard trimming","Hair styling","Facial cleanse","Personal care","Kids haircuts","Groom prep","Multiple people in one visit"],
    hsCta:"Request a Barber to Your Door",
    groomEyebrow:"Groom Packages", groomTitle:"On the biggest day of your life... look your absolute best",
    groomFeatured:"Most Popular", groomBook:"Book This Package",
    galleryEyebrow:"Our Work", galleryTitle:"Gallery",
    aboutEyebrow:"About Us", aboutTitle:"In the barber chair",
    aboutText:"We believe a haircut is a complete experience that reflects your personality and style. We offer the world's latest cuts and men's grooming with professional tools — at the salon or in your home.",
    about1:"Attention to the finest details", about2:"Cleanliness & sterilization", about3:"Modern barbering techniques",
    about4:"Flexible home services", about5:"An experience tailored to every client",
    faqEyebrow:"FAQ", faqTitle:"Have a question?",
    contactEyebrow:"Get in touch", contactTitle:"Contact Us",
    barServices:"Services", barContact:"Contact", barBook:"Book Now",
    slogan:"Your elegance starts here... wherever you are.", footerNote:"All rights reserved",
    filterAll:"All Services", filterHair:"Haircuts", filterBeard:"Beard",
    filterSkin:"Skin Care", filterHaircare:"Hair Care",
    filterHome:"Home Visits", filterGroom:"Groom Packages",
    addToBooking:"Add to Booking", added:"Added ✓", minAbbrev:"min",
    duration:"Duration", price:"Price",
    bookThisCut:"Book This Cut",
    contactLabels:{ phone:"Phone", whatsapp:"WhatsApp", address:"Address", hours:"Working Hours", areas:"Home Service Areas", follow:"Follow Us", maps:"Find Us on Maps", call:"Call Now" },
    bkTitle:"Book Your Appointment",
    steps:["Booking Type","Services","Date & Time","Your Details","Summary","Send"],
    typeSalon:"At the Salon", typeHome:"Home Visit", typeGroom:"Groom Prep", typeGroup:"Group Booking",
    chooseServices:"Select one or more services",
    emptyServices:"No services in this category — choose 'All Services'.",
    next:"Next", back:"Back", cancel:"Cancel",
    chooseDate:"Choose a day", chooseTime:"Choose your time",
    sunday:"Sun", monday:"Mon", tuesday:"Tue", wednesday:"Wed", thursday:"Thu", friday:"Fri", saturday:"Sat",
    fullName:"Full Name", phoneNum:"Egyptian Phone Number", waNum:"WhatsApp Number",
    governorate:"Governorate", region:"District", addressDetail:"Detailed Address",
    peopleCount:"Number of People", notes:"Additional Notes",
    namePh:"e.g. Ahmed Mohamed", phonePh:"01xxxxxxxxx", notesPh:"Anything you'd like us to know...",
    errName:"Please enter your full name", errPhone:"Please enter a valid phone (11 digits starting with 01)",
    errAddress:"Please enter governorate, district and address",
    errServices:"Select at least one service to continue",
    summaryServices:"Selected Services", summaryType:"Booking Type", summaryDate:"Date",
    summaryTime:"Requested Time", summaryDuration:"Expected Duration", summarySubtotal:"Services Cost",
    summaryTransport:"Transportation Fee", summaryDiscount:"Discount", summaryTotal:"Grand Total",
    transportConfirmNote:"This area's fee is confirmed by the salon before the booking is executed.",
    sendWhatsApp:"Send Booking Request via WhatsApp",
    confirmNote:"The appointment is confirmed only after the salon contacts you. Sending opens WhatsApp with a fully detailed message.",
    groupNote:"For group bookings, the salon will contact you to arrange details and confirm the final price.",
    waIntro:"Hello, I would like to book a barber appointment.",
    waType:"Booking Type", waName:"Client Name", waPhone:"Phone Number", waServices:"Requested Services",
    waDate:"Date", waTime:"Requested Time", waArea:"Area", waAddress:"Address",
    waPeople:"Number of People", waTotal:"Total Cost", waNotes:"Notes",
    waOutro:"Please confirm the appointment.",
    perPerson:"per person", egp:"EGP"
  }
};

/* ---------------- STATE ---------------- */
let LANG = localStorage.getItem("tg-lang") || "ar";
const t = (key) => (I18N[LANG] && I18N[LANG][key] !== undefined ? I18N[LANG][key] : key);

const Booking = {
  step: 1,
  type: null,          // salon | home | groom | group
  services: {},      // id -> qty
  groomPackage: null,
  date: null,        // Date object
  time: null,
  customer: { name:"", phone:"", whatsapp:"", gov:"", region:"", address:"", people:1, notes:"" },
  calCursor: null    // Date for calendar view
};

const needsAddress = () => ["home","groom","group"].includes(Booking.type);
const isHomeBased  = () => ["home","groom","group"].includes(Booking.type);
const getService = (id) => CONFIG.services.find(s => s.id === id);
const getGroom = (id) => CONFIG.groomPackages.find(p => p.id === id);

const money = (n) => {
  const cur = LANG === "ar" ? "ج.م" : "EGP";
  return `${Number(n).toLocaleString(LANG === "ar" ? "ar-EG" : "en-US")} ${cur}`;
};
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function formatDate(d) {
  const days = [t("sunday"),t("monday"),t("tuesday"),t("wednesday"),t("thursday"),t("friday"),t("saturday")];
  const months = LANG==="ar"
    ? ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]
    : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${days[d.getDay()]}، ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/* ---------------- CALCULATIONS ---------------- */
function calcTotals() {
  let subtotal = 0, minutes = 0;
  const items = [];
  Object.entries(Booking.services).forEach(([id, qty]) => {
    const s = getService(id);
    if (!s) return;
    subtotal += s.price * qty;
    minutes += s.duration * qty;
    items.push({ name: LANG==="ar" ? s.nameAr : s.nameEn, price: s.price * qty, qty });
  });
  if (Booking.groomPackage) {
    const p = getGroom(Booking.groomPackage);
    const people = Math.max(1, parseInt(Booking.customer.people) || 1);
    subtotal += p.price * people;
    minutes += 90;
    items.push({ name: (LANG==="ar" ? p.nameAr : p.nameEn) + (people > 1 ? ` ×${people}` : ""), price: p.price * people });
  }
  let transport = 0, transportNote = null, transportConfirm = false;
  if (isHomeBased() && Booking.type !== "groom") {
    // groom includes visit already
  }
  if (isHomeBased() && Booking.customer.region) {
    const fee = CONFIG.transportFees.find(f => f.key === Booking.customer.region);
    if (fee) { transport = fee.fee; transportConfirm = fee.confirm; transportNote = LANG==="ar" ? fee.noteAr : fee.noteEn; }
  }
  const total = subtotal + transport;
  return { items, subtotal, minutes, transport, transportNote, transportConfirm, total };
}

/* ---------------- RENDER: SERVICES ---------------- */
const CATEGORIES = [
  { key:"all", i18n:"filterAll" }, { key:"hair", i18n:"filterHair" },
  { key:"beard", i18n:"filterBeard" }, { key:"skin", i18n:"filterSkin" },
  { key:"haircare", i18n:"filterHaircare" }, { key:"home", i18n:"filterHome" }
];
let activeFilter = "all";

function renderFilters() {
  document.getElementById("serviceFilters").innerHTML = CATEGORIES.map(c =>
    `<button class="filter-chip ${c.key===activeFilter?"active":""}" data-filter="${c.key}" role="tab" aria-selected="${c.key===activeFilter}">${t(c.i18n)}</button>`
  ).join("");
}

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  const list = CONFIG.services.filter(s => activeFilter==="all" ? true
    : activeFilter==="home" ? s.home
    : s.cat===activeFilter);
  if (!list.length) { grid.innerHTML = `<p style="color:var(--gray);text-align:center;grid-column:1/-1">${t("emptyServices")}</p>`; return; }
  grid.innerHTML = list.map(s => {
    const name = LANG==="ar" ? s.nameAr : s.nameEn;
    const desc = LANG==="ar" ? s.descAr : s.descEn;
    const qty = Booking.services[s.id] || 0;
    return `<article class="service-card">
      <figure><img src="${s.img}" alt="${esc(name)}" loading="lazy" width="600" height="450" onerror="this.onerror=null;this.src='assets/images/hero/private-studio.webp'"></figure>
      <div class="service-body">
        <h3 class="service-name">${esc(name)}</h3>
        <p class="service-desc">${esc(desc)}</p>
        <div class="service-meta">
          <span class="service-price">${money(s.price)}</span>
          <span class="service-duration">${s.duration} ${t("minAbbrev")}</span>
        </div>
        <button class="service-add" data-add-service="${s.id}">${qty>0 ? `${t("added")} (${qty})` : t("addToBooking")}</button>
      </div>
    </article>`;
  }).join("");
}

/* ---------------- RENDER: HAIRCUTS ---------------- */
function renderHaircuts() {
  document.getElementById("haircutsGallery").innerHTML = CONFIG.haircuts.map(h => {
    const name = LANG==="ar" ? h.nameAr : h.nameEn;
    const desc = LANG==="ar" ? h.descAr : h.descEn;
    return `<figure class="haircut-item">
      <img src="assets/images/haircuts/${h.slug}.webp" alt="${esc(name)} — ${esc(h.nameEn)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/hero/private-studio.webp'">
      <figcaption class="haircut-info">
        <h3>${esc(name)}${LANG==="ar" ? ` <small lang="en" dir="ltr">${esc(h.nameEn)}</small>` : ""}</h3>
        <p>${esc(desc)}</p>
        <button class="haircut-book" data-book-cut="${h.slug}">${t("bookThisCut")}</button>
      </figcaption>
    </figure>`;
  }).join("");
}

/* ---------------- RENDER: GROOM ---------------- */
function renderGroom() {
  document.getElementById("groomGrid").innerHTML = CONFIG.groomPackages.map(p => {
    const name = LANG==="ar" ? p.nameAr : p.nameEn;
    const items = LANG==="ar" ? p.itemsAr : p.itemsEn;
    return `<article class="groom-card ${p.featured?"featured":""}">
      ${p.featured ? `<span class="groom-badge">${t("groomFeatured")}</span>` : ""}
      <figure><img src="${p.img}" alt="${esc(name)}" loading="lazy" width="700" height="900" onerror="this.onerror=null;this.src='assets/images/hero/private-studio.webp'"></figure>
      <div class="groom-body">
        <h3 class="groom-name">${esc(name)}</h3>
        <p class="groom-price">${money(p.price)} <small>${t("perPerson")}</small></p>
        <ul>${items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>
        <button class="btn ${p.featured?"btn-gold":"btn-outline"} btn-block" data-book-groom="${p.id}">${t("groomBook")}</button>
      </div>
    </article>`;
  }).join("");
}

/* ---------------- RENDER: GALLERY + LIGHTBOX ---------------- */
let lbIndex = 0;
function renderGallery() {
  document.getElementById("galleryGrid").innerHTML = CONFIG.gallery.map((g,i) =>
    `<figure class="masonry-item" data-lb="${i}" tabindex="0" role="button" aria-label="${esc(LANG==="ar"?g.ar:g.en)}">
      <img src="${g.img}" alt="${esc(LANG==="ar"?g.ar:g.en)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/hero/private-studio.webp'">
      <figcaption>${esc(LANG==="ar"?g.ar:g.en)}</figcaption>
    </figure>`).join("");
}
function openLightbox(i) {
  lbIndex = i;
  const item = CONFIG.gallery[i];
  const img = document.getElementById("lightboxImg");
  img.src = item.img;
  img.alt = LANG==="ar" ? item.ar : item.en;
  img.onerror = () => { img.onerror=null; img.src="assets/images/hero/private-studio.webp"; };
  document.getElementById("lightbox").classList.add("open");
  document.getElementById("lightbox").setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.getElementById("lightbox").setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
function stepLightbox(d) {
  openLightbox((lbIndex + d + CONFIG.gallery.length) % CONFIG.gallery.length);
}

/* ---------------- RENDER: FAQ ---------------- */
function renderFaq() {
  document.getElementById("faqList").innerHTML = CONFIG.faq.map((f,i) =>
    `<div class="acc-item ${i%2?"alt":""}">
      <button class="acc-btn" aria-expanded="false">${esc(LANG==="ar"?f.qAr:f.qEn)}</button>
      <div class="acc-panel"><p>${esc(LANG==="ar"?f.aAr:f.aEn)}</p></div>
    </div>`).join("");
}

/* ---------------- RENDER: CONTACT ---------------- */
const ICONS = {
  phone:'<svg class="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  wa:'<svg class="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.4-.1.7.1.3.7 1.2 1.5 1.9 1 .9 1.9 1.2 2.2 1.3.3.1.5.1.6-.1s.7-.8.9-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.5.2.5.3 0 .1 0 .7-.4 1.3Z"/></svg>',
  pin:'<svg class="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock:'<svg class="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  map:'<svg class="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></svg>',
  share:'<svg class="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.3 10.8 7.4-4.3M8.3 13.2l7.4 4.3"/></svg>'
};

function renderContact() {
  const L = I18N[LANG].contactLabels;
  const cards = [
    { icon:ICONS.phone, h:L.phone, body:`<a href="tel:${CONFIG.phone}">${CONFIG.phone}</a>` },
    { icon:ICONS.wa, h:L.whatsApp, body:`<a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">${CONFIG.whatsapp}</a>` },
    { icon:ICONS.pin, h:L.address, body:`<p>${esc(LANG==="ar"?CONFIG.address.ar:CONFIG.address.en)}</p>` },
    { icon:ICONS.clock, h:L.hours, body:`<p>${esc(LANG==="ar"?CONFIG.workingHours.ar:CONFIG.workingHours.en)}</p>` },
    { icon:ICONS.map, h:L.areas, body:`<p>${esc(LANG==="ar"?CONFIG.areas.ar:CONFIG.areas.en)}</p>` },
    { icon:ICONS.share, h:L.follow, body:`<p><a href="${CONFIG.social.facebook}" target="_blank" rel="noopener">Facebook</a> · <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener">Instagram</a> · <a href="${CONFIG.social.tiktok}" target="_blank" rel="noopener">TikTok</a></p><p><a href="${CONFIG.social.maps}" target="_blank" rel="noopener">${L.maps}</a></p>` }
  ];
  document.getElementById("contactGrid").innerHTML = cards.map(c =>
    `<div class="contact-card">${c.icon}<h3>${c.h}</h3>${c.body}
      ${c.h===L.phone ? `<a class="btn btn-outline" style="margin-top:.8rem;padding:.4rem 1rem;font-size:.85rem" href="tel:${CONFIG.phone}">${L.call}</a>` : ""}
    </div>`).join("");

  const social = [
    { url: CONFIG.social.facebook, label:"Facebook", svg:'<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.7-1.6h1.5V4.2c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.8 1.4-3.8 3.9v2h-2.6V13H9v8h4.5Z"/></svg>' },
    { url: CONFIG.social.instagram, label:"Instagram", svg:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>' },
    { url: CONFIG.social.tiktok, label:"TikTok", svg:'<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.4 2.1 1.8 3.5 4 3.7v3c-1.6 0-3-.5-4-1.3v6.6a5.9 5.9 0 1 1-5.9-5.9c.3 0 .7 0 1 .1v3.1a2.9 2.9 0 1 0 2 2.7V3h2.9Z"/></svg>' },
    { url: CONFIG.social.maps, label:"Google Maps", svg:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>' }
  ];
  document.getElementById("footerSocial").innerHTML = social.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}">${s.svg}</a>`).join("");

  document.getElementById("mobileWhatsApp").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(LANG==="ar"?"مرحبًا، أرغب في الاستفسار عن حجز موعد.":"Hello, I'd like to ask about booking an appointment.")}`;
}

/* ================= BOOKING MODAL ================= */
const modal = document.getElementById("bookingModal");

function openBooking(opts = {}) {
  if (opts.type) Booking.type = opts.type;
  if (opts.serviceId) { Booking.services = { [opts.serviceId]: 1 }; }
  if (opts.cutSlug) {
    const s = getService("fade");
    Booking.services = s ? { fade: 1 } : {};
    Booking.cutNote = opts.cutSlug;
  }
  if (opts.groomId) { Booking.type = "groom"; Booking.groomPackage = opts.groomId; }
  if (opts.step) Booking.step = opts.step;
  if (!Booking.calCursor) Booking.calCursor = new Date();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  renderBooking();
}
function closeBooking() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

function resetBooking() {
  Booking.step = 1; Booking.type = null; Booking.services = {};
  Booking.groomPackage = null; Booking.date = null; Booking.time = null;
  Booking.customer = { name:"", phone:"", whatsapp:"", gov:"", region:"", address:"", people:1, notes:"" };
}

function renderStepsBar() {
  document.getElementById("bkSteps").innerHTML = I18N[LANG].steps.map((s,i) => {
    const n = i+1;
    const cls = n === Booking.step ? "active" : n < Booking.step ? "done" : "";
    return `<li class="${cls}">${n}. ${esc(s)}</li>`;
  }).join("");
}

const TYPE_ICON = {
  salon:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 20V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"/><path d="M3 20h18M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>',
  home:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
  groom:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="m7 8 3 2-3 2 3 2-3 2M17 8l-3 2 3 2-3 2 3 2"/><circle cx="12" cy="12" r="9"/></svg>',
  group:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 2.5-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.4"/><path d="M17.5 14.4c2.4.4 4 2 4 4.6"/></svg>'
};

function renderBooking() {
  renderStepsBar();
  const body = document.getElementById("bkBody");
  const foot = document.getElementById("bkFoot");
  const err = `<p class="bk-error" id="bkErr"></p>`;

  /* ---- STEP 1: type ---- */
  if (Booking.step === 1) {
    const types = [
      { key:"salon", label:t("typeSalon") }, { key:"home", label:t("typeHome") },
      { key:"groom", label:t("typeGroom") }, { key:"group", label:t("typeGroup") }
    ];
    body.innerHTML = `<div class="bk-types">${types.map(tp =>
      `<button class="bk-type ${Booking.type===tp.key?"selected":""}" data-bk-type="${tp.key}">
        ${TYPE_ICON[tp.key]}<span>${esc(tp.label)}</span></button>`).join("")}</div>${err}`;
    foot.innerHTML = `<span></span><button class="btn btn-gold" data-bk-next>${t("next")}</button>`;
  }

  /* ---- STEP 2: services ---- */
  if (Booking.step === 2) {
    let html = `<p style="font-size:.9rem;color:var(--gray);margin-bottom:.8rem">${t("chooseServices")}</p>`;
    if (Booking.type === "groom") {
      html += CONFIG.groomPackages.map(p => {
        const name = LANG==="ar" ? p.nameAr : p.nameEn;
        return `<div class="bk-svc">
          <img src="${p.img}" alt="${esc(name)}" onerror="this.onerror=null;this.src='assets/images/hero/private-studio.webp'">
          <div class="bk-svc-info"><strong>${esc(name)}</strong><small>${money(p.price)} ${t("perPerson")}</small></div>
          <label style="display:flex;align-items:center;gap:.4rem;font-size:.85rem">
            <input type="radio" name="groompkg" value="${p.id}" ${Booking.groomPackage===p.id?"checked":""}> ${esc(t("groomBook"))}
          </label>
        </div>`;
      }).join("");
    } else {
      html += CONFIG.services
        .filter(s => Booking.type==="home" || Booking.type==="group" ? true : true)
        .map(s => {
          const name = LANG==="ar" ? s.nameAr : s.nameEn;
          const qty = Booking.services[s.id] || 0;
          return `<div class="bk-svc">
            <img src="${s.img}" alt="${esc(name)}" onerror="this.onerror=null;this.src='assets/images/hero/private-studio.webp'">
            <div class="bk-svc-info"><strong>${esc(name)}</strong><small>${money(s.price)} · ${s.duration} ${t("minAbbrev")}</small></div>
            <div class="qty">
              <button data-qty="${s.id}|-1" aria-label="minus">−</button>
              <span>${qty}</span>
              <button data-qty="${s.id}|1" aria-label="plus">+</button>
            </div>
          </div>`;
        }).join("");
    }
    body.innerHTML = html + err;
    foot.innerHTML = `<button class="btn btn-outline" data-bk-back>${t("back")}</button>
      <button class="btn btn-gold" data-bk-next>${t("next")}</button>`;
  }

  /* ---- STEP 3: date & time ---- */
  if (Booking.step === 3) {
    body.innerHTML = `<p class="bk-label" style="margin-top:0">${t("chooseDate")}</p><div id="calWrap"></div>
      <p class="bk-label">${t("chooseTime")}</p><div class="slots" id="slotsWrap"></div>${err}`;
    renderCalendar();
    renderSlots();
    foot.innerHTML = `<button class="btn btn-outline" data-bk-back>${t("back")}</button>
      <button class="btn btn-gold" data-bk-next>${t("next")}</button>`;
  }

  /* ---- STEP 4: customer ---- */
  if (Booking.step === 4) {
    const c = Booking.customer;
    const addrBlock = needsAddress() ? `
      <div class="bk-grid2">
        <div class="bk-field"><label>${t("governorate")}</label>
          <select id="fGov" data-cust="gov">
            <option value="">—</option>
            ${["الجيزة","القاهرة","القليوبية","الإسكندرية","السادس من أكتوبر","الشيخ زايد","أخرى"].map(g=>`<option ${c.gov===g?"selected":""}>${g}</option>`).join("")}
          </select></div>
        <div class="bk-field"><label>${t("region")}</label>
          <select id="fRegion" data-cust="region">
            <option value="">—</option>
            ${CONFIG.transportFees.map(f=>`<option value="${f.key}" ${c.region===f.key?"selected":""}>${esc(LANG==="ar"?f.noteAr:f.noteEn)}</option>`).join("")}
          </select></div>
      </div>
      <div class="bk-field"><label>${t("addressDetail")}</label>
        <input id="fAddress" data-cust="address" value="${esc(c.address)}" placeholder="${LANG==="ar"?"اسم الشارع ورقم العقار والدور...":"Street, building no., floor..."}"></div>` : "";
    body.innerHTML = `
      <div class="bk-grid2">
        <div class="bk-field"><label>${t("fullName")} *</label>
          <input id="fName" data-cust="name" value="${esc(c.name)}" placeholder="${t("namePh")}"></div>
        <div class="bk-field"><label>${t("phoneNum")} *</label>
          <input id="fPhone" data-cust="phone" inputmode="tel" value="${esc(c.phone)}" placeholder="${t("phonePh")}"></div>
      </div>
      <div class="bk-grid2">
        <div class="bk-field"><label>${t("waNum")}</label>
          <input id="fWA" data-cust="whatsapp" inputmode="tel" value="${esc(c.whatsapp || c.phone)}" placeholder="${t("phonePh")}"></div>
        <div class="bk-field"><label>${t("peopleCount")}</label>
          <input id="fPeople" data-cust="people" type="number" min="1" max="20" value="${esc(c.people)}"></div>
      </div>
      ${addrBlock}
      <div class="bk-field"><label>${t("notes")}</label>
        <textarea id="fNotes" data-cust="notes" rows="3" placeholder="${t("notesPh")}">${esc(c.notes)}</textarea></div>
      ${err}`;
    foot.innerHTML = `<button class="btn btn-outline" data-bk-back>${t("back")}</button>
      <button class="btn btn-gold" data-bk-next>${t("next")}</button>`;
  }

  /* ---- STEP 5: summary ---- */
  if (Booking.step === 5) {
    const calc = calcTotals();
    const typeLabel = { salon:t("typeSalon"), home:t("typeHome"), groom:t("typeGroom"), group:t("typeGroup") }[Booking.type];
    const rows = [
      [t("summaryType"), esc(typeLabel)],
      [t("summaryServices"), calc.items.length ? esc(calc.items.map(i=>`${i.name}${i.qty>1?` ×${i.qty}`:""}`).join("، ")) : "—"],
      [t("summaryDate"), Booking.date ? esc(formatDate(Booking.date)) : "—"],
      [t("summaryTime"), esc(Booking.time || "—")],
      [t("summaryDuration"), `${calc.minutes} ${t("minAbbrev")}`],
      [t("summarySubtotal"), money(calc.subtotal)]
    ];
    if (isHomeBased()) rows.push([t("summaryTransport"), calc.transport ? money(calc.transport) : (calc.transportConfirm ? "—" : "0")]);
    rows.push([`<strong>${t("summaryTotal")}</strong>`, `<strong>${money(calc.total)}</strong>`]);
    body.innerHTML = `<div class="summary"><table>${rows.map(r=>`<tr class="${r[0].includes(t("summaryTotal"))?"total":""}"><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table></div>
      ${calc.transportConfirm ? `<p class="bk-hint">◆ ${t("transportConfirmNote")}</p>` : ""}
      <p class="bk-hint">${Booking.type==="group" ? t("groupNote") : t("confirmNote")}</p>`;
    foot.innerHTML = `<button class="btn btn-outline" data-bk-back>${t("back")}</button>
      <button class="btn btn-gold" data-bk-send>${t("sendWhatsApp")}</button>`;
  }
}

/* ---- calendar ---- */
function renderCalendar() {
  const wrap = document.getElementById("calWrap");
  if (!wrap) return;
  if (!Booking.calCursor) Booking.calCursor = new Date();
  const cur = new Date(Booking.calCursor.getFullYear(), Booking.calCursor.getMonth(), 1);
  const today = new Date(); today.setHours(0,0,0,0);
  const y = cur.getFullYear(), m = cur.getMonth();
  const monthName = formatDate(new Date(y,m,1)).split("،")[1] || formatDate(new Date(y,m,1));
  const dows = [t("sunday"),t("monday"),t("tuesday"),t("wednesday"),t("thursday"),t("friday"),t("saturday")];
  let html = `<div class="cal-head">
    <button data-cal-nav="-1" ${m===today.getMonth()&&y===today.getFullYear()?"disabled":""} aria-label="prev">‹</button>
    <strong>${esc(monthName)}</strong>
    <button data-cal-nav="1" aria-label="next">›</button></div>
    <div class="cal-grid">${dows.map(d=>`<span class="dow">${d}</span>`).join("")}`;
  const firstDow = new Date(y,m,1).getDay();
  const daysIn = new Date(y,m+1,0).getDate();
  for (let i=0;i<firstDow;i++) html += `<span></span>`;
  const maxDate = new Date(today); maxDate.setDate(maxDate.getDate() + CONFIG.maxAdvanceDays);
  for (let d=1; d<=daysIn; d++) {
    const date = new Date(y,m,d);
    const disabled = date < today || date > maxDate || !CONFIG.workingDays.includes(date.getDay());
    const sel = Booking.date && date.getTime()===Booking.date.getTime();
    html += `<button class="cal-day ${sel?"selected":""}" data-cal-day="${y}-${m}-${d}" ${disabled?"disabled":""}>${d}</button>`;
  }
  wrap.innerHTML = html + "</div>";
}

function parseSlotTime(slot) {
  const m = slot.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return null;
  let h = parseInt(m[1]); const min = parseInt(m[2]);
  if (/pm/i.test(m[3]) && h !== 12) h += 12;
  if (/am/i.test(m[3]) && h === 12) h = 0;
  return { h, min };
}

function renderSlots() {
  const wrap = document.getElementById("slotsWrap");
  if (!wrap) return;
  const now = new Date();
  const isToday = Booking.date && Booking.date.toDateString() === now.toDateString();
  wrap.innerHTML = CONFIG.timeSlots.map(slot => {
    let disabled = !Booking.date;
    if (Booking.date && isToday) {
      const tt = parseSlotTime(slot);
      const slotDate = new Date(Booking.date); slotDate.setHours(tt.h, tt.min, 0, 0);
      const lead = new Date(now.getTime() + CONFIG.bookingNoticeMinutes*60000);
      disabled = slotDate <= lead;
    }
    return `<button class="slot ${Booking.time===slot?"selected":""}" data-slot="${slot}" ${disabled?"disabled":""}>${slot}</button>`;
  }).join("");
}

/* ---- validation & nav ---- */
function setErr(msg) { const e = document.getElementById("bkErr"); if (e) e.textContent = msg; }

function canProceed() {
  if (Booking.step === 1 && !Booking.type) { setErr(t("errServices")); return false; }
  if (Booking.step === 2) {
    const hasSvc = Object.values(Booking.services).some(q=>q>0);
    if (Booking.type==="groom" ? !Booking.groomPackage : !hasSvc) { setErr(t("errServices")); return false; }
  }
  if (Booking.step === 3) {
    if (!Booking.date) { setErr(t("chooseDate")); return false; }
    if (!Booking.time) { setErr(t("chooseTime")); return false; }
  }
  if (Booking.step === 4) {
    const c = Booking.customer;
    document.querySelectorAll("[data-cust]").forEach(el => { c[el.dataset.cust] = el.value.trim(); });
    c.people = Math.max(1, parseInt(c.people) || 1);
    if (!c.name || c.name.trim().length < 3) { setErr(t("errName")); document.getElementById("fName").classList.add("invalid"); return false; }
    if (!/^01[0-9]{9}$/.test(c.phone.replace(/\s/g,""))) { setErr(t("errPhone")); document.getElementById("fPhone").classList.add("invalid"); return false; }
    if (needsAddress() && (!c.gov || !c.region || !c.address)) { setErr(t("errAddress")); return false; }
  }
  return true;
}

/* ---- WhatsApp send ---- */
function buildWaMessage() {
  const calc = calcTotals();
  const c = Booking.customer;
  const typeLabel = { salon:t("typeSalon"), home:t("typeHome"), groom:t("typeGroom"), group:t("typeGroup") }[Booking.type];
  const svcNames = calc.items.map(i=>`${i.name}${i.qty>1?` x${i.qty}`:""}`).join("، ");
  const regionFee = CONFIG.transportFees.find(f=>f.key===c.region);
  const regionLabel = regionFee ? (LANG==="ar"?regionFee.noteAr:regionFee.noteEn) : (c.gov || "—");
  const lines = [
    t("waIntro"), "",
    `${t("waType")}: ${typeLabel}`,
    `${t("waName")}: ${c.name}`,
    `${t("waPhone")}: ${c.phone}`,
    `${t("waServices")}: ${svcNames || "—"}`,
    `${t("waDate")}: ${formatDate(Booking.date)}`,
    `${t("waTime")}: ${Booking.time}`
  ];
  if (needsAddress()) {
    lines.push(`${t("waArea")}: ${c.gov} — ${regionLabel}`);
    lines.push(`${t("waAddress")}: ${c.address}`);
  }
  lines.push(`${t("waPeople")}: ${c.people}`);
  lines.push(`${t("waTotal")}: ${calc.total} ${t("egp")}${calc.transportConfirm ? " (" + t("transportConfirmNote") + ")" : ""}`);
  if (c.notes) lines.push(`${t("waNotes")}: ${c.notes}`);
  if (Booking.cutNote) {
    const cut = CONFIG.haircuts.find(h=>h.slug===Booking.cutNote);
    if (cut) lines.push(`${LANG==="ar"?"القصة المطلوبة":"Requested cut"}: ${LANG==="ar"?cut.nameAr:cut.nameEn} (${cut.nameEn})`);
  }
  lines.push("", t("waOutro"));
  return lines.join("\n");
}

/* ================= EVENT DELEGATION ================= */
document.addEventListener("click", (e) => {
  const q = (sel) => e.target.closest(sel);

  const mode = q("[data-mode-choice]");
  if (mode) {
    const entry = mode.closest(".booking-entry");
    entry.dataset.mode = mode.dataset.modeChoice;
    entry.querySelector(".session-book").dataset.bookingType = entry.dataset.mode;
    entry.querySelectorAll("[data-mode-choice]").forEach(b => b.setAttribute("aria-pressed", String(b === mode)));
    return;
  }
  if (q("[data-nav]")) {
    revealPanel(q("[data-nav]").hash);
    document.getElementById("navDrawer").classList.remove("open");
    document.getElementById("hamburger").classList.remove("open");
    document.body.style.overflow = "";
    return;
  }
  if (q("[data-open-booking]")) {
    const btn = q("[data-open-booking]");
    if (btn.dataset.bookingType && Booking.type !== btn.dataset.bookingType) resetBooking();
    openBooking({ type: btn.dataset.bookingType || null, step: btn.dataset.bookingType ? 2 : 1 });
    return;
  }
  if (q("[data-close-booking]")) { closeBooking(); return; }
  if (q("[data-book-cut]")) {
    const slug = q("[data-book-cut]").dataset.bookCut;
    openBooking({ type:"salon", cutSlug:slug, serviceId:"fade", step:2 });
    return;
  }
  if (q("[data-book-groom]")) {
    openBooking({ groomId: q("[data-book-groom]").dataset.bookGroom, step:2 });
    return;
  }
  if (q("[data-add-service]")) {
    const id = q("[data-add-service]").dataset.addService;
    Booking.services[id] = (Booking.services[id]||0) + 1;
    renderServices();
    return;
  }
  const filter = q("[data-filter]");
  if (filter) { activeFilter = filter.dataset.filter; renderFilters(); renderServices(); return; }

  const accBtn = q(".acc-btn");
  if (accBtn) {
    const item = accBtn.parentElement;
    const panel = item.querySelector(".acc-panel");
    const open = item.classList.toggle("open");
    accBtn.setAttribute("aria-expanded", open);
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0";
    return;
  }

  const lbItem = q("[data-lb]");
  if (lbItem) { openLightbox(+lbItem.dataset.lb); return; }
  if (q("[data-close-lightbox]")) { closeLightbox(); return; }
  if (q("#lbPrev")) { stepLightbox(-1); return; }
  if (q("#lbNext")) { stepLightbox(1); return; }

  const bkType = q("[data-bk-type]");
  if (bkType) {
    Booking.type = bkType.dataset.bkType;
    Booking.step = 1;
    document.querySelectorAll(".bk-type").forEach(b=>b.classList.toggle("selected", b===bkType));
    setErr("");
    return;
  }
  const qtyBtn = q("[data-qty]");
  if (qtyBtn) {
    const [id, d] = qtyBtn.dataset.qty.split("|");
    Booking.services[id] = Math.max(0, (Booking.services[id]||0) + (+d));
    if (!Booking.services[id]) delete Booking.services[id];
    renderBooking();
    return;
  }
  const groomRadio = q("input[name=groompkg]");
  if (groomRadio) {
    Booking.groomPackage = document.querySelector("input[name=groompkg]:checked").value;
    return;
  }
  const calNav = q("[data-cal-nav]");
  if (calNav && !calNav.disabled) {
    Booking.calCursor = new Date(Booking.calCursor.getFullYear(), Booking.calCursor.getMonth() + (+calNav.dataset.calNav), 1);
    renderCalendar();
    return;
  }
  const calDay = q("[data-cal-day]");
  if (calDay && !calDay.disabled) {
    const [y,m,d] = calDay.dataset.calDay.split("-").map(Number);
    Booking.date = new Date(y,m,d);
    Booking.time = null;
    renderCalendar(); renderSlots();
    setErr("");
    return;
  }
  const slot = q("[data-slot]");
  if (slot && !slot.disabled) {
    Booking.time = slot.dataset.slot;
    document.querySelectorAll(".slot").forEach(s=>s.classList.toggle("selected", s===slot));
    setErr("");
    return;
  }
  if (q("[data-bk-back]")) { Booking.step = Math.max(1, Booking.step-1); renderBooking(); return; }
  if (q("[data-bk-next]")) { if (canProceed()) { Booking.step = Math.min(5, Booking.step+1); renderBooking(); } return; }
  if (q("[data-bk-send]")) {
    const calc = calcTotals();
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(buildWaMessage())}`;
    window.open(url, "_blank", "noopener");
    return;
  }

  const hamburger = q("#hamburger");
  if (hamburger) {
    const open = document.getElementById("navDrawer").classList.toggle("open");
    hamburger.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
    return;
  }
});

document.addEventListener("change", (e) => {
  const cust = e.target.closest("[data-cust]");
  if (cust) Booking.customer[cust.dataset.cust] = cust.value.trim();
  if (e.target.name === "groompkg") Booking.groomPackage = e.target.value;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox(); closeBooking();
    document.getElementById("navDrawer").classList.remove("open");
    document.getElementById("hamburger").classList.remove("open");
    document.body.style.overflow = "";
  }
  if (document.getElementById("lightbox").classList.contains("open")) {
    if (e.key === "ArrowLeft") stepLightbox(LANG==="ar" ? 1 : -1);
    if (e.key === "ArrowRight") stepLightbox(LANG==="ar" ? -1 : 1);
  }
});

/* ---------- header scroll & active nav ---------- */
window.addEventListener("scroll", () => {
  document.getElementById("siteHeader").classList.toggle("scrolled", window.scrollY > 30);
}, { passive:true });

const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav a")];
window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  let current = "home";
  sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}, { passive:true });

/* ---------- language ---------- */
function applyI18n() {
  document.documentElement.lang = LANG;
  document.documentElement.dir = I18N[LANG].dir;
  document.getElementById("langToggle").textContent = LANG === "ar" ? "EN" : "ع";
  document.title = LANG === "ar"
    ? "ذا جنتلمان — حلاقة رجالية فاخرة | حجز زيارات منزلية وباقات العريس"
    : "THE GENTLEMAN — Premium Barber Studio | Home Visits & Groom Packages";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = I18N[LANG][el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  });
  renderFilters(); renderServices(); renderHaircuts();
  renderContact();
  if (modal.classList.contains("open")) renderBooking();
}
document.getElementById("langToggle").addEventListener("click", () => {
  LANG = LANG === "ar" ? "en" : "ar";
  localStorage.setItem("tg-lang", LANG);
  applyI18n();
});

/* ---------- init ---------- */
applyI18n();

function revealPanel(hash) {
  const panel = document.getElementById((hash || "").slice(1));
  if (panel && panel.matches("details.compact-panel")) panel.open = true;
}
window.addEventListener("hashchange", () => revealPanel(location.hash));
revealPanel(location.hash);
