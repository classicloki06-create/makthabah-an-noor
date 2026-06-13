/*
  Book catalogue data
  -------------------
  Maintain this file when updating the catalogue.

  To add more books:
  1. Copy one complete book object.
  2. Give it a new unique id.
  3. Replace the placeholder title, author, image, rating, description, and details.
  4. The catalogue and book detail pages will update automatically.

  To replace book images:
  - Add real cover files beside catalogue.html and book.html.
  - Update the image value, for example: image: "my-real-cover.jpg".
*/
const books = [
  {
    id: 1,
    title: "The Sealed Nectar",
    author: "Placeholder Author",
    image: "book1.png",
    rating: 4.8,
    reviews: 124,
    category: "Seerah",
    availability: "Available",
    publisher: "Placeholder Publisher",
    language: "English",
    pages: 450,
    isbn: "000-0000000000",
    year: "2025",
    description:
      "This is placeholder content for the book description. Replace this text with the actual description when adding real books.",
    preview: "A timeless biography of the Prophet \uFDFA",
    topics: ["Seerah", "Islamic History", "Leadership", "Character Development"]
  },
  {
    id: 2,
    title: "Foundations of Aqeedah",
    author: "Placeholder Author",
    image: "book2.png",
    rating: 4.7,
    reviews: 86,
    category: "Aqeedah",
    availability: "Limited Stock",
    publisher: "Placeholder Publisher",
    language: "English",
    pages: 320,
    isbn: "000-0000000001",
    year: "2025",
    description:
      "This is placeholder content for the book description. Replace this text with the actual description when adding real books.",
    preview: "A clear introduction to essential matters of belief",
    topics: ["Aqeedah", "Tawheed", "Faith", "Islamic Creed"]
  },
  {
    id: 3,
    title: "Pathways to Purification",
    author: "Placeholder Author",
    image: "book3.png",
    rating: 4.9,
    reviews: 142,
    category: "Tazkiyah",
    availability: "Available",
    publisher: "Placeholder Publisher",
    language: "English",
    pages: 275,
    isbn: "000-0000000002",
    year: "2025",
    description:
      "This is placeholder content for the book description. Replace this text with the actual description when adding real books.",
    preview: "Practical reflections on sincerity, worship, and inner reform",
    topics: ["Tazkiyah", "Worship", "Character Development", "Spiritual Growth"]
  },
  {
    id: 4,
    title: "Principles of Fiqh",
    author: "Placeholder Author",
    image: "book4.png",
    rating: 4.6,
    reviews: 67,
    category: "Fiqh",
    availability: "Available",
    publisher: "Placeholder Publisher",
    language: "English",
    pages: 390,
    isbn: "000-0000000003",
    year: "2025",
    description:
      "This is placeholder content for the book description. Replace this text with the actual description when adding real books.",
    preview: "A concise guide to worship, rulings, and daily practice",
    topics: ["Fiqh", "Worship", "Daily Practice", "Islamic Law"]
  },
  {
    id: 5,
    title: "Lives of the Companions",
    author: "Placeholder Author",
    image: "book5.png",
    rating: 4.8,
    reviews: 111,
    category: "Islamic History",
    availability: "Out of Stock",
    publisher: "Placeholder Publisher",
    language: "English",
    pages: 520,
    isbn: "000-0000000004",
    year: "2025",
    description:
      "This is placeholder content for the book description. Replace this text with the actual description when adding real books.",
    preview: "Inspiring lessons from the earliest generation of Muslims",
    topics: ["Islamic History", "Seerah", "Companions", "Leadership"]
  },
  {
    id: 6,
    title: "Manners of the Muslim Home",
    author: "Placeholder Author",
    image: "book6.png",
    rating: 4.5,
    reviews: 58,
    category: "Character Development",
    availability: "Available",
    publisher: "Placeholder Publisher",
    language: "English",
    pages: 240,
    isbn: "000-0000000005",
    year: "2025",
    description:
      "This is placeholder content for the book description. Replace this text with the actual description when adding real books.",
    preview: "Gentle guidance for family life, adab, and daily conduct",
    topics: ["Character Development", "Family", "Adab", "Tazkiyah"]
  }
];
