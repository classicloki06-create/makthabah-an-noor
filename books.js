/*
  MAKTABAH AN NOOR product catalogue
  ----------------------------------
  Maintain products here. The catalogue page, product detail page, cart,
  and WhatsApp checkout all read from this array.

  To add more products:
  1. Copy one complete object.
  2. Give it a new unique id.
  3. Replace title, author, image, format, description, and product details.
  4. The layout automatically supports additional products.

  To replace product images:
  - Add real cover/product images beside these HTML files.
  - Update image, for example: image: "manhaj-as-salikin.jpg".

  For uncertain bibliographic details, use "Available on request" instead
  of guessing. This keeps the storefront accurate and easy to update.
*/
const books = [
  {
    id: 1,
    title: "Manhaj As-Salikin",
    author: "Shaykh Abd al-Rahman ibn Nasir as-Sa'di",
    image: "book1.png",
    productType: "Islamic Book",
    format: "Print Book",
    digital: false,
    category: "Fiqh",
    availability: "Available",
    publisher: "Available on request",
    language: "English",
    pages: "Available on request",
    isbn: "Available on request",
    year: "Available on request",
    description:
      "A concise fiqh work by Shaykh Abd al-Rahman ibn Nasir as-Sa'di, known for presenting practical rulings in a direct and accessible manner. Suitable for readers who want a structured introduction to worship and everyday jurisprudence.",
    preview: "A concise fiqh guide for worship, transactions, and daily practice.",
    topics: ["Fiqh", "Worship", "Daily Practice", "Islamic Law", "Purification"]
  },
  {
    id: 2,
    title: "Difference Between the Salah of Men and Women",
    author: "Author not listed",
    image: "book2.png",
    productType: "Islamic Book",
    format: "Print Book",
    digital: false,
    category: "Fiqh",
    availability: "Available",
    publisher: "Available on request",
    language: "English",
    pages: "Available on request",
    isbn: "Available on request",
    year: "Available on request",
    description:
      "A focused title addressing juristic discussions around how salah is performed by men and women. It is best listed with the exact edition details once the physical stock copy is confirmed.",
    preview: "A focused fiqh resource on salah practice and related rulings.",
    topics: ["Fiqh", "Salah", "Worship", "Women", "Daily Practice"]
  },
  {
    id: 3,
    title: "Bid'ah",
    author: "Author not listed",
    image: "book3.png",
    productType: "Islamic Book",
    format: "Print Book",
    digital: false,
    category: "Aqeedah",
    availability: "Available",
    publisher: "Available on request",
    language: "English",
    pages: "Available on request",
    isbn: "Available on request",
    year: "Available on request",
    description:
      "A study of religious innovation and adherence to the Qur'an and Sunnah. This product entry can be updated with the exact author, translator, and publisher when the stocked edition is finalized.",
    preview: "A clear resource on religious innovation and following the Sunnah.",
    topics: ["Aqeedah", "Sunnah", "Bid'ah", "Islamic Creed", "Tazkiyah"]
  },
  {
    id: 4,
    title: "Warning Against Heresies",
    author: "Author not listed",
    image: "book4.png",
    productType: "Islamic Book",
    format: "Print Book",
    digital: false,
    category: "Aqeedah",
    availability: "Limited Stock",
    publisher: "Available on request",
    language: "English",
    pages: "Available on request",
    isbn: "Available on request",
    year: "Available on request",
    description:
      "A cautionary aqeedah title centered on protecting belief and worship from unsound religious ideas. Edition-specific bibliographic details should be added from the actual copy before publication.",
    preview: "A compact aqeedah title about preserving sound belief.",
    topics: ["Aqeedah", "Sunnah", "Heresies", "Creed", "Knowledge"]
  },
  {
    id: 5,
    title: "The Veil of Honor",
    author: "Author not listed",
    image: "book5.png",
    productType: "Islamic Book",
    format: "Print Book",
    digital: false,
    category: "Character Development",
    availability: "Available",
    publisher: "Available on request",
    language: "English",
    pages: "Available on request",
    isbn: "Available on request",
    year: "Available on request",
    description:
      "A modesty-focused Islamic title discussing honor, dignity, and the spiritual purpose of hijab and personal conduct. Replace this summary with edition-specific copy once the stocked publication is confirmed.",
    preview: "Reflections on modesty, dignity, hijab, and Islamic character.",
    topics: ["Modesty", "Hijab", "Character Development", "Tazkiyah", "Family"]
  },
  {
    id: 6,
    title: "Biography of Shaykh Albani",
    author: "Author not listed",
    image: "book6.png",
    productType: "Islamic Book",
    format: "Print Book",
    digital: false,
    category: "Biography",
    availability: "Available",
    publisher: "Available on request",
    language: "English",
    pages: "Available on request",
    isbn: "Available on request",
    year: "Available on request",
    description:
      "A biographical work about Shaykh Muhammad Nasir al-Din al-Albani, the Albanian hadith scholar known for his work in hadith verification and Islamic scholarship in the twentieth century.",
    preview: "A biography of the influential hadith scholar Shaykh al-Albani.",
    topics: ["Biography", "Hadith", "Scholars", "Islamic History", "Knowledge"]
  },
  {
    id: 7,
    title: "Biography of Aisha (Radiyallahu Anha)",
    author: "Author not listed",
    image: "book1.png",
    productType: "Islamic Book",
    format: "Print Book",
    digital: false,
    category: "Biography",
    availability: "Available",
    publisher: "Available on request",
    language: "English",
    pages: "Available on request",
    isbn: "Available on request",
    year: "Available on request",
    description:
      "A biography of Aisha bint Abi Bakr, Mother of the Believers, remembered in Sunni tradition for her knowledge, intelligence, narration of hadith, and important role in early Islamic history.",
    preview: "A life study of Aisha bint Abi Bakr, Mother of the Believers.",
    topics: ["Biography", "Seerah", "Hadith", "Women in Islam", "Islamic History"]
  },
  {
    id: 8,
    title: "Islamic Journal",
    author: "MAKTABAH AN NOOR",
    image: "book2.png",
    productType: "Journal",
    format: "Physical Journal",
    digital: false,
    category: "Journals",
    availability: "Available",
    publisher: "MAKTABAH AN NOOR",
    language: "English",
    pages: "Varies by edition",
    isbn: "Not applicable",
    year: "2026",
    description:
      "A guided Islamic journal for reflections, goals, gratitude, worship notes, and personal reminders. Designed as a practical companion for consistent spiritual growth.",
    preview: "A guided journal for reflection, gratitude, goals, and worship notes.",
    topics: ["Journals", "Tazkiyah", "Reflection", "Goals", "Character Development"]
  },
  {
    id: 9,
    title: "Salah Tracker",
    author: "MAKTABAH AN NOOR",
    image: "book3.png",
    productType: "Digital Product",
    format: "Digital Product",
    digital: true,
    category: "Digital Resources",
    availability: "Available",
    publisher: "MAKTABAH AN NOOR",
    language: "English",
    pages: "Digital template",
    isbn: "Not applicable",
    year: "2026",
    description:
      "A digital salah tracking resource for monitoring daily prayers and building consistency. Downloads are not delivered automatically; access is provided manually after payment confirmation.",
    preview: "A digital tracker for daily salah consistency and accountability.",
    topics: ["Salah", "Digital Resources", "Planners", "Accountability", "Worship"]
  },
  {
    id: 10,
    title: "Ramadan Planner",
    author: "MAKTABAH AN NOOR",
    image: "book4.png",
    productType: "Digital Product",
    format: "Digital Product",
    digital: true,
    category: "Planners",
    availability: "Available",
    publisher: "MAKTABAH AN NOOR",
    language: "English",
    pages: "Digital template",
    isbn: "Not applicable",
    year: "2026",
    description:
      "A Ramadan planning resource for goals, worship routines, Qur'an reading, duas, reflections, and daily progress. Digital access is sent manually after payment confirmation.",
    preview: "A Ramadan planner for worship goals, Qur'an reading, and reflection.",
    topics: ["Ramadan", "Planners", "Digital Resources", "Quran Studies", "Worship"]
  },
  {
    id: 11,
    title: "Quran Tracking Journal",
    author: "MAKTABAH AN NOOR",
    image: "book5.png",
    productType: "Digital Product",
    format: "Digital Product",
    digital: true,
    category: "Quran Studies",
    availability: "Available",
    publisher: "MAKTABAH AN NOOR",
    language: "English",
    pages: "Digital template",
    isbn: "Not applicable",
    year: "2026",
    description:
      "A Qur'an tracking journal for reading progress, revision, reflections, and memorization goals. Digital access is handled manually after payment confirmation.",
    preview: "A Qur'an progress journal for reading, revision, and reflection.",
    topics: ["Quran Studies", "Digital Resources", "Journals", "Memorization", "Reflection"]
  },
  {
    id: 12,
    title: "Islamic Bookmark",
    author: "MAKTABAH AN NOOR",
    image: "book6.png",
    productType: "Bookmark",
    format: "Physical Product",
    digital: false,
    category: "Character Development",
    availability: "Available",
    publisher: "MAKTABAH AN NOOR",
    language: "English",
    pages: "Not applicable",
    isbn: "Not applicable",
    year: "2026",
    description:
      "A thoughtfully designed Islamic bookmark for daily reading, study circles, Qur'an reading, and gifting. Ideal as an affordable companion item for book orders.",
    preview: "A beautiful Islamic bookmark for reading, study, and gifting.",
    topics: ["Bookmarks", "Reading", "Gifts", "Study", "Character Development"]
  }
];
