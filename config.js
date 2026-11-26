/* ============================================================
   THE GENTLEMAN — BARBER STUDIO | config.js
   كل بيانات الموقع القابلة للتعديل موجودة هنا فقط.
   عدّل هذه القيم دون الحاجة لتغيير HTML.
   ============================================================ */

const CONFIG = {

  /* ---------- الهوية ---------- */
  salonName: { ar: "ذا جنتلمان — استوديو الحلاقة", en: "THE GENTLEMAN — BARBER STUDIO" },
  slogan: { ar: "أناقتك تبدأ من هنا... أينما كنت.", en: "Your elegance starts here... wherever you are." },
  currency: { ar: "ج.م", en: "EGP" },

  /* ---------- التواصل (بيانات تجريبية — استبدلها) ---------- */
  phone: "+201012345678",
  whatsapp: "201012345678",           // دولي بدون + أو مسافات
  address: { ar: "١٢ شارع التحرير، الدقي، الجيزة", en: "12 El-Tahrir St., Dokki, Giza" },
  workingHours: {
    ar: "يوميًا من 10 صباحًا حتى 10 مساءً",
    en: "Daily 10:00 AM – 10:00 PM"
  },
  areas: { ar: "الجيزة • القاهرة • أكتوبر • مدينة نصر • المعادي • التجمع", en: "Giza • Cairo • October City • Nasr City • Maadi • New Cairo" },
  social: {
    facebook: "https://facebook.com/thegentleman.barber",
    instagram: "https://instagram.com/thegentleman.barber",
    tiktok: "https://tiktok.com/@thegentleman.barber",
    maps: "https://maps.google.com/?q=Dokki+Giza"
  },

  /* ---------- ساعات العمل ومواعيد الطلب ---------- */
  workingDays: [0,1,2,3,4,5,6],      // أيام العمل (0 = الأحد)
  timeSlots: [
    "10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM",
    "04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM","09:00 PM","10:00 PM"
  ],
  bookingNoticeMinutes: 120,         // أقل مهلة قبل الموعد بالدقائق
  maxAdvanceDays: 14,              // الحجز مسبقًا حتى كذا يوم

  /* ---------- رسوم الانتقال المنزلية (حسب المنطقة) ---------- */
  transportFees: [
    { key: "giza",      fee: 50,  noteAr: "الجيزة والدقي والعجوزة", noteEn: "Giza, Dokki, Agouza",           confirm: false },
    { key: "cairo",     fee: 80,  noteAr: "وسط القاهرة والمعادي",   noteEn: "Downtown Cairo, Maadi",          confirm: false },
    { key: "nasr",      fee: 100, noteAr: "مدينة نصر والتجمع",      noteAr2: "", noteEn: "Nasr City, New Cairo", confirm: false },
    { key: "october",   fee: 120, noteAr: "أكتوبر والشيخ زايد",     noteEn: "6th October, Sheikh Zayed",      confirm: true  },
    { key: "other",     fee: 0,   noteAr: "مناطق أخرى — تحتاج تأكيد السعر من الصالون", noteEn: "Other areas — price confirmed by the salon", confirm: true }
  ],
  homeVisitMinTotal: 0,              // يمكن ضبط حد أدنى للطلب المنزلي

  /* ---------- الخدمات (تجريبية — عدّل بحرية) ---------- */
  services: [
    { id:"classic",   cat:"hair",    price:150, duration:30, home:false, img:"assets/images/services/classic-cut.webp",
      nameAr:"قص شعر كلاسيكي", nameEn:"Classic Haircut",
      descAr:"قصة كلاسيكية أنيقة تناسب إطلالتك اليومية.", descEn:"An elegant classic cut for your everyday look." },
    { id:"fade",      cat:"hair",    price:200, duration:40, home:false, img:"assets/images/services/fade-cut.webp",
      nameAr:"قص شعر تدريج Fade", nameEn:"Fade Haircut",
      descAr:"تدريج احترافي بأحدث تقنيات الحلاقة.", descEn:"Professional fade with the latest techniques." },
    { id:"styling",   cat:"hair",    price:100, duration:20, home:true,  img:"assets/images/services/styling.webp",
      nameAr:"تصفيف الشعر", nameEn:"Hair Styling",
      descAr:"تصفيف نهائي بمنتجات عالمية.", descEn:"Final styling with premium products." },
    { id:"beard",     cat:"beard",   price:80,  duration:20, home:true,  img:"assets/images/services/beard-trim.webp",
      nameAr:"تهذيب الذقن", nameEn:"Beard Trim",
      descAr:"تهذيب وتشكيل دقيق للحية.", descEn:"Precise beard shaping and detailing." },
    { id:"hairbeard", cat:"beard",   price:250, duration:60, home:false, img:"assets/images/services/hair-beard.webp",
      nameAr:"حلاقة الشعر والذقن", nameEn:"Haircut + Beard",
      descAr:"باقة متكاملة للشعر والذقن معًا.", descEn:"A complete hair and beard package." },
    { id:"facial",    cat:"skin",    price:250, duration:40, home:true,  img:"assets/images/services/facial.webp",
      nameAr:"تنظيف البشرة", nameEn:"Facial Cleanse",
      descAr:"تنظيف عميق ومنعش للبشرة.", descEn:"Deep refreshing facial cleanse." },
    { id:"mask",      cat:"skin",    price:150, duration:25, home:true,  img:"assets/images/services/face-mask.webp",
      nameAr:"ماسك وترطيب الوجه", nameEn:"Face Mask & Moisture",
      descAr:"ترطيب وماسك ينعش ملامحك.", descEn:"Mask and moisture to refresh your look." },
    { id:"haircare",  cat:"hair",    price:350, duration:45, home:true,  img:"assets/images/services/hair-care.webp",
      nameAr:"عناية متكاملة بالشعر", nameEn:"Complete Hair Care",
      descAr:"علاج وتغذية متكاملة للشعر.", descEn:"Full hair treatment and nourishment." },
    { id:"kids",      cat:"hair",    price:120, duration:30, home:true,  img:"assets/images/services/kids.webp",
      nameAr:"حلاقة الأطفال", nameEn:"Kids Haircut",
      descAr:"حلاقة مريحة وآمنة للأطفال.", descEn:"A comfortable, safe haircut for kids." },
    { id:"homesingle",cat:"home",    price:350, duration:45, home:true,  img:"assets/images/services/home-haircut.webp",
      nameAr:"حلاقة شعر منزلية", nameEn:"Home Haircut Visit",
      descAr:"حلاق محترف يصل إليك بأدواته كاملة.", descEn:"A professional barber at your door, fully equipped." },
    { id:"homefull",  cat:"home",    price:450, duration:60, home:true,  img:"assets/images/services/home-full.webp",
      nameAr:"حلاقة شعر وذقن منزلية", nameEn:"Home Haircut + Beard",
      descAr:"زيارة منزلية متكاملة للشعر والذقن.", descEn:"Complete home visit for hair and beard." }
  ],

  /* ---------- أحدث القصات ---------- */
  haircuts: [
    { id:"textured",   slug:"textured-crop",nameEn:"Textured Crop",      nameAr:"قصة بملمس",              descAr:"حجم وملمس طبيعي لشعرك.", descEn:"Natural volume and movement." },
    { id:"taperfade",  slug:"taper-fade",   nameEn:"Taper Fade",          nameAr:"تدريج تيبِر",            descAr:"تدريج ناعم عند خط الشعر والرقبة.", descEn:"A soft fade at the hairline and neck." },
    { id:"mullet",     slug:"modern-mullet",nameEn:"Modern Mullet",      nameAr:"موليت عصري",             descAr:"جرأة عصرية بطول خفيف في الخلف.", descEn:"A modern twist with length at the back." },
    { id:"burstfade", slug:"burst-fade", nameEn:"Burst Fade", nameAr:"بيرست فيد", descAr:"تدريج دائري حول الأذن مع طول طبيعي في الأعلى والخلف.", descEn:"A curved fade around the ear with natural length on top and at the back." },
    { id:"curtainfringe", slug:"curtain-fringe", nameEn:"Curtain Fringe", nameAr:"كيرتن فرينج", descAr:"فرق وسطي وخصلات أمامية متدفقة لإطلالة عصرية ناعمة.", descEn:"A center part with flowing fringe for a modern, effortless look." },
    { id:"modernquiff", slug:"modern-quiff", nameEn:"Modern Quiff", nameAr:"كويف عصري", descAr:"حجم طبيعي وملمس مرن في المقدمة مع جوانب مرتبة.", descEn:"Natural volume and flexible texture at the front with neatly cut sides." },
    { id:"frenchcrop", slug:"french-crop",  nameEn:"French Crop",        nameAr:"قصة فرنسية",             descAr:"قصة قصيرة عصرية مع خصلات أمامية.", descEn:"A short modern cut with textured fringe." },
    { id:"curlyfade",  slug:"curly-fade",   nameEn:"Curly Fade",         nameAr:"تدريج للشعر الكيرلي",    descAr:"تدريج يبرز جمال الشعر المجعد.", descEn:"A fade that highlights natural curls." },
    { id:"lowfade",    slug:"low-fade",     nameEn:"Low Fade",            nameAr:"تدريج منخفض",           descAr:"تدريج يبدأ أسفل الاذن لإطلالة هادئة وأنيقة.", descEn:"Fade starting below the ear for a clean subtle look." },
    { id:"midfade",    slug:"mid-fade",     nameEn:"Mid Fade",            nameAr:"تدريج متوسط",            descAr:"توازن مثالي بين الجرأة والأناقة.", descEn:"The perfect balance of bold and clean." },
    { id:"highfade",   slug:"high-fade",    nameEn:"High Fade",           nameAr:"تدريج عالٍ",             descAr:"تدريج واضح يمنحك إطلالة عصرية جريئة.", descEn:"A sharp high-contrast modern look." },
    { id:"skinfade",   slug:"skin-fade",    nameEn:"Skin Fade",           nameAr:"تدريج للجلد",            descAr:"انتقال سلس من الشعر للجلد بحدّة مثالية.", descEn:"A smooth transition down to the skin." },
    { id:"buzz",       slug:"buzz-cut",     nameEn:"Buzz Cut",            nameAr:"قصة عسكرية",             descAr:"قصة قصيرة عملية وواثقة.", descEn:"A practical, confident short cut." },
    { id:"slickback",  slug:"slick-back",   nameEn:"Slick Back",          nameAr:"شعر ممشط للخلف",          descAr:"إطلالة كلاسيكية فاخرة ممشطة للخلف.", descEn:"A classic luxurious swept-back style." },
    { id:"sidepart",   slug:"side-part",    nameEn:"Side Part",          nameAr:"فرق جانبي",              descAr:"فرق جانبي أنيق يناسب المناسبات والعمل.", descEn:"A neat side part for work and occasions." },
    { id:"pompadour",  slug:"pompadour",    nameEn:"Pompadour",           nameAr:"بومبادور",               descAr:"حجم فاخر في المقدمة بروح السبعينات.", descEn:"Full-volume front with a retro soul." },
    { id:"gentleman",  slug:"gentleman-cut",nameEn:"Classic Gentleman",   nameAr:"قصة الجنتلمان",          descAr:"القصة الكلاسيكية التي لا تفقد بريقها.", descEn:"The timeless classic that never fades." }
  ],

  /* ---------- باقات العريس ---------- */
  groomPackages: [
    { id:"essential", featured:false, price:750, img:"assets/images/groom/groom-essential.webp",
      nameEn:"Essential Groom", nameAr:"الباقة الأساسية",
      itemsAr:["قص شعر احترافي","حلاقة وتهذيب الذقن","تصفيف الشعر","زيارة منزلية"],
      itemsEn:["Professional haircut","Beard trim & shave","Hair styling","Home visit"] },
    { id:"premium", featured:true, price:1250, img:"assets/images/groom/groom-premium.webp",
      nameEn:"Premium Groom", nameAr:"الباقة المميزة",
      itemsAr:["جميع خدمات الباقة الأساسية","تنظيف البشرة","ماسك وترطيب الوجه","إزالة شعر الوجه","تجهيز نهائي للشعر والذقن"],
      itemsEn:["All Essential services","Facial cleanse","Face mask & moisture","Facial hair removal","Final hair & beard finish"] },
    { id:"royal", featured:false, price:1850, img:"assets/images/groom/groom-royal.webp",
      nameEn:"Royal Groom", nameAr:"الباقة الملكية",
      itemsAr:["جميع خدمات الباقة المميزة","عناية متكاملة بالشعر والبشرة","استشارة لاختيار الإطلالة المناسبة","زيارة منزلية أو للفندق","وقت إضافي مخصص للعريس","إمكانية إضافة أصدقاء وأقارب بتكلفة إضافية"],
      itemsEn:["All Premium services","Complete hair & skin care","Style consultation","Home or hotel visit","Extra dedicated time","Add friends & relatives for extra fee"] }
  ],

  /* ---------- الخصومات ---------- */
  discounts: [
    { code:"WELCOME10", percent:10, ar:"خصم ترحيبي ١٠٪", en:"Welcome discount 10%" }
  ],

  /* ---------- أسئلة شائعة ---------- */
  faq: [
    { qAr:"كيف أحجز زيارة منزلية؟", aAr:"اختر «زيارة منزلية» من نظام الحجز، حدد الخدمات والتاريخ والوقت وأدخل عنوانك، ثم أرسل الطلب عبر واتساب وسيتواصل معك الصالون للتأكيد.",
      qEn:"How do I book a home visit?", aEn:"Choose 'Home Visit' in the booking system, pick services, date and time, enter your address, then send the request via WhatsApp." },
    { qAr:"هل الحلاق يحضر جميع الأدوات؟", aAr:"نعم، يصل الحلاق بكامل أدواته الاحترافية المعقمة، ولا يحتاج منك سوى مكان مناسب للجلوس.",
      qEn:"Does the barber bring all tools?", aEn:"Yes, the barber arrives fully equipped with sterilized professional tools." },
    { qAr:"هل يمكن حجز أكثر من شخص؟", aAr:"بالتأكيد. يمكنك زيادة عدد الأشخاص عند الحجز، وتُقدَّم حلاقة أكثر من شخص في الزيارة نفسها.",
      qEn:"Can I book for more than one person?", aEn:"Yes. Increase the number of people in the booking; multiple haircuts can be done in one visit." },
    { qAr:"هل تشمل الخدمة الفنادق؟", aAr:"نعم، تغطي الزيارات المنزلية المنازل والفنادق وأماكن الإقامة ضمن مناطق الخدمة.",
      qEn:"Do you serve hotels?", aEn:"Yes, home visits cover homes, hotels and residences within our service areas." },
    { qAr:"هل توجد رسوم انتقال؟", aAr:"نعم، تُضاف رسوم انتقال حسب المنطقة تظهر تلقائيًا في ملخص الحجز، وبعض المناطق البعيدة يتم تأكيد سعرها من الصالون.",
      qEn:"Are there transportation fees?", aEn:"Yes, a per-area fee is added automatically in the summary; distant areas are confirmed by the salon." },
    { qAr:"كيف يتم تأكيد الموعد؟", aAr:"بعد إرسال الطلب عبر واتساب، يتواصل معك الصالون لتأكيد الموعد. الحجز يصبح مؤكدًا فقط بعد هذا التواصل.",
      qEn:"How is the appointment confirmed?", aEn:"After sending the WhatsApp request, the salon contacts you to confirm. The booking is confirmed only after that." },
    { qAr:"هل يمكن تعديل أو إلغاء الحجز؟", aAr:"نعم، تواصل مع الصالون عبر واتساب أو الهاتف لتعديل أو إلغاء موعدك قبل الموعد بوقت كافٍ.",
      qEn:"Can I modify or cancel?", aEn:"Yes, contact the salon via WhatsApp or phone to modify or cancel with sufficient notice." },
    { qAr:"ما الخدمات الموجودة في باقة العريس؟", aAr:"تتدرج الباقات من الأساسية حتى الملكية وتشمل القص والذقن والبشرة والتصفيف، مع زيارة منزلية واستشارة إطلالة في الباقة الملكية.",
      qEn:"What do groom packages include?", aEn:"Packages range from Essential to Royal, covering cuts, beard, skin and styling, with home visits and style consultation in Royal." }
  ],

  /* ---------- معرض الصور ---------- */
  gallery: [
    { img:"assets/images/gallery/salon-1.webp",   ar:"الاستوديو", en:"The Studio" },
    { img:"assets/images/gallery/salon-2.webp",   ar:"كرسي الحلاقة", en:"Barber Chair" },
    { img:"assets/images/gallery/tools-1.webp",  ar:"أدوات احترافية", en:"Pro Tools" },
    { img:"assets/images/gallery/beard-1.webp",   ar:"العناية بالذقن", en:"Beard Care" },
    { img:"assets/images/gallery/groom-1.webp",   ar:"تجهيز العريس", en:"Groom Prep" },
    { img:"assets/images/gallery/home-1.webp",   ar:"خدمة منزلية", en:"Home Service" },
    { img:"assets/images/gallery/before-after-1.webp", ar:"قبل وبعد", en:"Transformation" },
    { img:"assets/images/gallery/home-2.webp",   ar:"زيارة منزلية", en:"Home Visit" },
    { img:"assets/images/gallery/salon-3.webp",   ar:"أجواء دافئة", en:"Warm Ambience" }
  ]
};
