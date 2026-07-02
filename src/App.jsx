import React, { useEffect, useState } from "react";
import {
  ArrowRight as LucideArrowRight,
  BookCopy as LucideBookCopy,
  BookOpen as LucideBookOpen,
  ChevronDown as LucideChevronDown,
  ExternalLink as LucideExternalLink,
  FileText as LucideFileText,
  Layers3 as LucideLayers3,
  Menu as LucideMenu,
  MessageCircle as LucideMessageCircle,
  Minus as LucideMinus,
  MonitorPlay as LucideMonitorPlay,
  Moon,
  MoveUpRight as LucideMoveUpRight,
  PackageCheck as LucidePackageCheck,
  Palette as LucidePalette,
  Plane as LucidePlane,
  Play as LucidePlay,
  Plus as LucidePlus,
  Quote as LucideQuote,
  Search as LucideSearch,
  Send as LucideSend,
  ShoppingBag,
  Sparkles as LucideSparkles,
  Star as LucideStar,
  Sun,
  X as LucideX,
} from "lucide-react";
import { getProduct, getProducts } from "./api/shop";
import { mockProducts, shopCategories } from "./data/products";

function SocialTextIcon({ label, size = 16, className = "", style }) {
  return <span className={`text-icon ${className}`} style={{ fontSize: size, ...style }} aria-hidden="true">{label}</span>;
}

const ArrowRight = LucideArrowRight;
const BookCopy = LucideBookCopy;
const BookOpen = LucideBookOpen;
const ChevronDown = LucideChevronDown;
const ExternalLink = LucideExternalLink;
const Facebook = (props) => <SocialTextIcon label="f" {...props} />;
const FileText = LucideFileText;
const Instagram = (props) => <SocialTextIcon label="ig" {...props} />;
const Layers3 = LucideLayers3;
const Linkedin = (props) => <SocialTextIcon label="in" {...props} />;
const Minus = LucideMinus;
const Menu = LucideMenu;
const MessageCircle = LucideMessageCircle;
const MonitorPlay = LucideMonitorPlay;
const MoveUpRight = LucideMoveUpRight;
const PackageCheck = LucidePackageCheck;
const Palette = LucidePalette;
const Plane = LucidePlane;
const Play = LucidePlay;
const Plus = LucidePlus;
const Quote = LucideQuote;
const Search = LucideSearch;
const Send = LucideSend;
const Sparkles = LucideSparkles;
const Star = LucideStar;
const X = LucideX;
const Youtube = LucidePlay;

function FlightPath({ variant = "wide", tone = "dark" }) {
  const paths = {
    hero: {
      viewBox: "0 0 700 620",
      d: "M4 45 C178 19 315 52 385 145 C438 232 367 300 445 365 C516 424 447 470 330 472 C218 474 138 457 61 468",
      plane: { x: 48, y: 478, rotate: -112 },
      start: { x: 4, y: 45 },
      end: { x: 61, y: 468 },
    },
    wide: {
      viewBox: "0 0 900 210",
      d: "M24 102 C151 33 225 148 347 82 C466 18 548 142 664 76 C753 26 809 59 870 31",
      plane: { x: 854, y: 35, rotate: -14 },
      start: { x: 24, y: 102 },
      end: { x: 870, y: 31 },
    },
    services: {
      viewBox: "0 0 1180 660",
      d: "M192 600 L465 600 C505 600 532 575 540 530 C548 487 536 444 532 402 C528 350 524 305 520 276",
      plane: { x: 523, y: 276, rotate: -32 },
      start: { x: 192, y: 600 },
      end: { x: 520, y: 276 },
    },
    corner: {
      viewBox: "0 0 420 360",
      d: "M391 28 C286 54 371 128 282 148 C179 171 256 235 151 251 C92 260 71 301 35 333",
      plane: { x: 37, y: 331, rotate: -125 },
      start: { x: 391, y: 28 },
      end: { x: 35, y: 333 },
    },
  };
  const current = paths[variant] || paths.wide;

  return (
    <div className={`flight-path flight-path-${variant} flight-path-${tone}`} aria-hidden="true">
      <svg viewBox={current.viewBox} preserveAspectRatio="none">
        <path className="flight-route" d={current.d} pathLength="100" />
        <text
          className="flight-plane"
          x={current.plane.x}
          y={current.plane.y}
          transform={`rotate(${current.plane.rotate} ${current.plane.x} ${current.plane.y})`}
        >
          ✈
        </text>
      </svg>
    </div>
  );
}

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about", children: ["About Danajet", "Testimonials", "Transport"] },
  { label: "BookLab", href: "/#services", children: [{ label: "Services", href: "/#services" }, { label: "Request a Project", href: "/request-project" }] },
  { label: "Portfolio", href: "/portfolio", children: [{ label: "View Portfolio", href: "/portfolio" }, { label: "Visit Amazon Store", href: "#amazon" }] },
  { label: "Shop", href: "/shop" },
  { label: "Academy", href: "/courses", children: ["Courses & Tutorials", "Community", "Free Resources"] },
  { label: "Media", href: "/#brands" },
  { label: "Contact", href: "/#contact" },
];

const whatIDo = [
  {
    icon: Palette,
    number: "01",
    title: "Book Formatting & Design",
    copy: "Thoughtful covers and polished interiors that make every page feel intentional.",
  },
  {
    icon: PackageCheck,
    number: "02",
    title: "Book Publishing Support",
    copy: "Friendly, practical guidance from final manuscript to a confidently published book.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "A+ Content & Authur Branding",
    copy: "Creative assets that help authors show up consistently and connect with readers.",
  },
  {
    icon: MonitorPlay,
    number: "04",
    title: "Courses & Tutorials",
    copy: "Clear learning resources for authors ready to grow their publishing skills.",
  },
];

const brands = [
  { icon: BookOpen, name: "BookLab", copy: "Book design, formatting & publishing", code: "BL" },
  { icon: Play, name: "Media", copy: "Storytelling, YouTube & content", code: "ME" },
  { icon: Layers3, name: "Academy", copy: "Courses & learning resources", code: "AC" },
  { icon: Plane, name: "Transport", copy: "A future-facing transport vision", code: "TR" },
];

const books = [
  { title: "Beyond the Horizon", author: "Dana A.", color: "orange", mark: "A practical guide to courageous new beginnings" },
  { title: "The Quiet Idea", author: "M. Cole", color: "teal", mark: "How small thoughts become meaningful work" },
  { title: "Built to Bloom", author: "R. James", color: "coral", mark: "A workbook for purposeful personal growth" },
  { title: "Leading Light", author: "N. Okafor", color: "black", mark: "Create impact with clarity and confidence" },
  { title: "Little Wings", author: "T. Green", color: "sky", mark: "A bright story about finding your own way" },
];

const services = [
  { icon: FileText, title: "Print Book Formatting", copy: "Beautiful, readable interiors ready for print." },
  { icon: BookCopy, title: "Kindle EPUB Formatting", copy: "Responsive ebooks built for smooth reading." },
  { icon: Palette, title: "Children's Book Design", copy: "Playful layouts that support every illustration." },
  { icon: Layers3, title: "Workbook Design", copy: "Clear, engaging pages made for active learning." },
  { icon: PackageCheck, title: "KDP Upload Support", copy: "Careful checks and guidance through publishing." },
  { icon: Sparkles, title: "Full Book Creation Support", copy: "Joined-up support from your first idea onward." },
];

const portfolioCategories = [
  { id: "all", label: "All work" },
  { id: "children", label: "Children's & activity" },
  { id: "covers", label: "Book covers" },
  { id: "epub", label: "EPUB books" },
  { id: "workbooks", label: "Workbooks & journals" },
  { id: "aplus", label: "A+ content" },
  { id: "interiors", label: "Book interiors" },
  { id: "pdf", label: "PDF designs" },
];

const projects = [
  { category: "children", title: "The Ultimate Tanzania Activity Book", image: "03" },
  { category: "children", title: "Mindfulness Coloring Book", image: "04" },
  { category: "children", title: "The Ultimate Senegal Activity Book", image: "05" },
  { category: "children", title: "Pawtastic Dog Breed Word Search", image: "06" },
  { category: "children", title: "The Ultimate Ghana Activity Book", image: "07" },
  { category: "children", title: "Anxiety Relief Coloring Book", image: "08" },
  { category: "children", title: "Adulting Coloring Book", image: "09" },
  { category: "children", title: "The Ultimate South Africa Activity Book", image: "10" },
  { category: "children", title: "Super Cool Facts for Smart Kids", image: "11" },
  { category: "covers", title: "Children's Book Cover Collection", image: "13" },
  { category: "covers", title: "Wellness & Lifestyle Cover Collection", image: "14" },
  { category: "covers", title: "Contemporary Romance Cover Collection", image: "15" },
  { category: "covers", title: "Thriller & Mystery Cover Collection", image: "16" },
  { category: "covers", title: "Activity Book Cover Collection", image: "17" },
  { category: "covers", title: "Romance Cover Collection", image: "18" },
  { category: "covers", title: "Educational Cover Collection", image: "19" },
  { category: "epub", title: "Kindle Fire E-reader Preview", image: "21" },
  { category: "epub", title: "Kindle Tablet EPUB Preview", image: "22" },
  { category: "epub", title: "Kindle Mobile EPUB Preview", image: "23" },
  { category: "workbooks", title: "The Voice of Forgiveness Journal", image: "25" },
  { category: "workbooks", title: "Manifest Your Dream Life Workbook", image: "26" },
  { category: "workbooks", title: "Social Emotional Learning Workbook", image: "27" },
  { category: "workbooks", title: "Journey Better Workbook", image: "28" },
  { category: "aplus", title: "Start Growing Gracefully", image: "30" },
  { category: "aplus", title: "Gods, Monsters, and Heroes", image: "31" },
  { category: "aplus", title: "The Ultimate Ghana Activity Book", image: "32" },
  { category: "aplus", title: "A Perfect Wedding", image: "33" },
  { category: "aplus", title: "Pawtastic Dog Breed", image: "34" },
  { category: "aplus", title: "Anxiety Relief Coloring Book", image: "35" },
  { category: "aplus", title: "Unlocking the Heavens", image: "36" },
  { category: "aplus", title: "The Ultimate Tanzania Activity Book", image: "37" },
  { category: "interiors", title: "Why We Get Cancer", image: "39" },
  { category: "interiors", title: "The Rise of Revenge", image: "40" },
  { category: "interiors", title: "Inspiring Soccer Stories for Kids", image: "41" },
  { category: "interiors", title: "Interesting Facts & Myths", image: "42" },
  { category: "interiors", title: "3D: The Power of Your Spirit", image: "43" },
  { category: "pdf", title: "Dubai Real Estate Guide", image: "45" },
  { category: "pdf", title: "Construction Company Profile", image: "46" },
];

const featuredWorkHighlights = [
  "MISA Educational Series",
  "Tangie's Children's Books",
  "Ricardo's Amazon Bestselling Educational Books",
  "Jimmy's Sports Betting Book",
  "NLS Rwanda Educational Materials",
];

const requestServiceOptions = [
  "Interior Book Formatting",
  "Children's Book Design",
  "Book Cover Design",
  "Front & Back Cover Design",
  "PDF Design & Layout",
  "Kindle eBook Formatting",
  "Hardcover Formatting",
  "Paperback Formatting",
  "Workbook Design",
  "A+ Content Design",
  "Promotional Book Trailer",
  "Publishing Assistance",
  "Full Book Creation",
  "Other (Please specify)",
];

const projectStageOptions = [
  "I only have an idea",
  "My manuscript is in progress",
  "My manuscript is complete",
  "My book has already been published and needs updates",
  "I need help publishing my book",
];

const bookSizeOptions = [
  "5 x 8 inches",
  "5.5 x 8.5 inches",
  "6 x 9 inches",
  "8 x 10 inches",
  "8.5 x 8.5 inches",
  "8.5 x 11 inches",
  "Other (Please specify)",
];

const budgetOptions = ["Under $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "Above $10,000"];
const timelineOptions = ["ASAP", "Within 1 week", "Within 2-4 weeks", "1-3 months", "Flexible"];
const referralOptions = ["Google Search", "Amazon Books", "YouTube", "Tiktok", "Facebook", "Referral", "Previous Client", "Other"];
const contactMethodOptions = ["WhatsApp", "Email"];
const manuscriptOptions = ["Yes, I will upload it now", "Yes, I will send it later", "No, I am still working on it"];

const shopPathways = [
  {
    icon: BookOpen,
    title: "Books",
    copy: "Discover storybooks, coloring books, workbooks, educational resources, and publications by Daniel the Booksmith.",
    action: "Browse Books",
    href: "#books",
  },
  {
    icon: Layers3,
    title: "Courses & Tutorials",
    copy: "Practical guides, mini-courses, tutorials, templates, and publishing resources designed to help creators and authors succeed.",
    action: "Explore Courses",
    href: "/courses",
  },
];

const courseCategories = [
  {
    title: "Book Design & Publishing",
    icon: "📘",
    items: [
      "Book Idea Blueprint (How I Generate Winning Book Ideas)",
      "EPUB Made Easy (Convert Any Book into a Clickable EPUB)",
      "ChatGPT for Book Creators (Getting Better Results for Design & Publishing)",
      "A+ Content Secrets (Designing High-Converting Amazon A+ Content)",
      "KDP Error Fixer (Solving Common Amazon Publishing Problems)",
      "KDP Compliance Guide (Understanding Amazon's Publishing Requirements)",
      "Perfect Margins (Preparing Books for Print & Publication)",
      "Book Design in Canva (Creating Professional Book Interiors)",
      "The Danajet Design Process (My Complete Book Creation Workflow)",
      "Children's Book Blueprint (From Idea to Published Book)",
    ],
  },
  {
    title: "Masterclasses",
    icon: "🎓",
    items: [
      "Paperback & Kindle Formatting Masterclass",
      "Canva Book Design Masterclass",
      "Amazon KDP Publishing Masterclass",
    ],
  },
  {
    title: "Content & Marketing",
    icon: "🎬",
    items: [
      "Book Trailer Studio (Creating Promotional Book Trailers)",
      "Storytelling Video Editing (TikTok & YouTube for Authors)",
      "Flyer Design System (My Method for Designing Social Media Graphics)",
      "Cover Design Masterclass (Designing Front & Back Covers That Sell)",
    ],
  },
  {
    title: "Premium Services",
    icon: "🤝",
    items: [
      "Publish With Me (Live Book Formatting & Publishing Support)",
    ],
  },
  {
    title: "Templates & Resources",
    icon: "📂",
    items: [
      "Book Interior Layout Templates",
      "KDP Publishing Checklist",
      "A+ Content Planning Template",
      "Book Launch Planner",
      "Children's Book Planning Workbook",
    ],
  },
];

const academyHeroSlides = [
  {
    eyebrow: "Danajet Academy",
    title: "Learn book design, publishing, and creative workflows.",
    copy: "Join practical courses built for authors, educators, and creators who want publish-ready books without the confusion.",
    action: "Browse Courses",
    href: "#courses",
    image: "/assets/profile-image-new-hero.png",
    theme: "orange",
  },
  {
    eyebrow: "KDP & Formatting",
    title: "Create books that are ready for Amazon and print.",
    copy: "Get step-by-step help with margins, EPUB files, covers, A+ content, and the publishing details that slow authors down.",
    action: "Explore Publishing",
    href: "#courses",
    image: "/assets/hero-books-cutout.png",
    theme: "teal",
  },
  {
    eyebrow: "Templates & Resources",
    title: "Build faster with checklists, planners, and layouts.",
    copy: "Grab simple resources for book launches, children's book planning, interiors, and creator-friendly publishing systems.",
    action: "View Resources",
    href: "#courses",
    image: "/assets/danajet-books-flight-hero.png",
    theme: "dark",
  },
];

const testimonials = [
  {
    quote: "He is very skilled. I had a very pleased experience working with him, and as long you convey your idea to him and send him examples of what you are looking for, he will do an awesome job.",
    name: "Richard Bass",
    role: "Amazon Bestselling Educational Author",
    service: "amazon",
    project: "Educational book project",
    ctaLabel: "View on Amazon",
    ctaUrl: "https://a.co/d/0bznxH3L",
    image: "/assets/reviews/richard-bass.jpg",
  },
  {
    quote: "He is very skilled. I had a very pleased experience working with him, and as long you convey your idea to him and send him examples of what you are looking for, he will do an awesome job.",
    name: "Jesi Washington",
    role: "Education Professional",
    service: "canva",
    project: "Education design project",
    ctaLabel: "View on Canva",
    ctaUrl: "https://canva.link/3oggxou00to7ds8",
    image: "/assets/reviews/jesi-washington.jpg",
  },
  {
    quote: "He is very skilled. I had a very pleased experience working with him, and as long you convey your idea to him and send him examples of what you are looking for, he will do an awesome job.",
    name: "Crystal Jones",
    role: "Recipe Books Author",
    service: "amazon",
    project: "Recipe book project",
    ctaLabel: "View on Amazon",
    ctaUrl: "https://a.co/d/0aVn71TB",
    image: "/assets/reviews/crystal-jones.jpg",
  },
  {
    quote: "He is very skilled. I had a very pleased experience working with him, and as long you convey your idea to him and send him examples of what you are looking for, he will do an awesome job.",
    name: "Jimmy Sweeney",
    role: "Author",
    service: "amazon",
    project: "Book project",
    ctaLabel: "View on Amazon",
    ctaUrl: "",
  },
  {
    quote: "He is very skilled. I had a very pleased experience working with him, and as long you convey your idea to him and send him examples of what you are looking for, he will do an awesome job.",
    name: "Natasha Noel",
    role: "Founder, Faith Work Production",
    service: "amazon",
    project: "Book project",
    ctaLabel: "View on Amazon",
    ctaUrl: "",
    image: "/assets/reviews/natasha-noel.jpg",
  },
  {
    quote: "He's my go-to guy! Thank you so much for always helping me bring out the best in my books. Thank you for supporting me from beginning to end!",
    name: "Tangie Cokes",
    role: "Children's Book Author",
    service: "amazon",
    project: "Children's book project",
    ctaLabel: "View on Amazon",
    ctaUrl: "https://a.co/d/04GeWzMr",
    image: "/assets/reviews/tangie-cokes.jpg",
  },
];

const reviewCategories = [
  { id: "all", label: "All reviews" },
  { id: "amazon", label: "Amazon books" },
  { id: "canva", label: "Canva projects" },
];

function ReviewerAvatar({ review }) {
  const initials = review.name.split(" ").map((part) => part[0]).join("");

  if (review.image) {
    return <img className="reviewer-avatar" src={review.image} alt={`${review.name} headshot`} loading="lazy" />;
  }

  return <span>{initials}</span>;
}

function BrandMark({ light = false }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="/" aria-label="Danajet home">
      <img src="/assets/danajet-logo-black-clean.png" alt="Danajet" />
    </a>
  );
}

const CART_KEY = "danajet-shop-cart";

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function addToCart(product, quantity = 1) {
  const cart = readCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: product.id, slug: product.slug, title: product.title, price: product.price, quantity });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("danajet-cart-updated"));
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("danajet-theme") || "light";
  });

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(readCart().reduce((total, item) => total + item.quantity, 0));
    };

    updateCartCount();
    window.addEventListener("danajet-cart-updated", updateCartCount);
    return () => window.removeEventListener("danajet-cart-updated", updateCartCount);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("danajet-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <div className="announcement">
        <span><Star size={14} fill="currentColor" /> Worked with authors, educators, and publishers worldwide.</span>
        <a href="/request-project">Let's work together <ArrowRight size={14} /></a>
      </div>
      <header className="site-header">
        <div className="header-inner container">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <div className="nav-item" key={item.label}>
                <a href={item.href}>{item.label}{item.children && <ChevronDown size={14} />}</a>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map((child) => {
                      const childLabel = typeof child === "string" ? child : child.label;
                      const childHref = typeof child === "string" ? item.href : child.href;

                      return <a href={childHref} key={childLabel}>{childLabel}</a>;
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-actions">
            <a className="login-link" href="#login">Login</a>
            <a className="cart-link" href="/shop#cart" aria-label={`Shopping bag with ${cartCount} items`}>
              <ShoppingBag size={18} /><span>{cartCount}</span>
            </a>
            <a className="button button-small" href="/request-project">Start a Project <MoveUpRight size={16} /></a>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => <a href={item.href} onClick={() => setIsOpen(false)} key={item.label}>{item.label}</a>)}
            <a href="#login" onClick={() => setIsOpen(false)}>Login</a>
            <a href="/shop#cart" onClick={() => setIsOpen(false)}>Shopping bag ({cartCount})</a>
            <a className="button" href="/request-project" onClick={() => setIsOpen(false)}>Start a Project</a>
          </nav>
        )}
      </header>
      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <Sun size={22} aria-hidden="true" /> : <Moon size={22} aria-hidden="true" />}
      </button>
    </>
  );
}

function SectionHeading({ eyebrow, title, copy, action }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-heading-side">
        {copy && <p>{copy}</p>}
        {action}
      </div>
    </div>
  );
}

function BookCover({ book, index }) {
  return (
    <article className="book-card">
      <div className="book-stage">
        <div className={`book-cover book-${book.color}`}>
          <span className="book-kicker">DANAJET EDITION</span>
          <h3>{book.title}</h3>
          <span className="cover-plane"><Plane size={26} /></span>
          <p>{book.author}</p>
        </div>
        <span className="book-index">0{index + 1}</span>
      </div>
      <div className="book-info">
        <div>
          <h3>{book.title}</h3>
          <p>{book.mark}</p>
        </div>
        <div className="book-actions">
          <a href="/request-project">Order from me <ArrowRight size={15} /></a>
          <a href="#amazon">Amazon <ExternalLink size={14} /></a>
        </div>
      </div>
    </article>
  );
}

function formatPrice(product) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: product.currency || "USD",
  }).format(Number(product.price));
}

function ProductArtwork({ product, view = "front" }) {
  return (
    <div className={`shop-artwork shop-artwork-${view} cover-${product.cover}`} style={{ "--product-accent": product.accent }}>
      <div className="shop-book">
        <span className="shop-book-kicker">DANAJET BOOKLAB</span>
        <h3>{product.title}</h3>
        <Plane size={25} />
        <p>{product.author}</p>
      </div>
      {view !== "front" && <div className="shop-book-shadow" />}
      {view === "detail" && <div className="shop-page-sample"><span /><span /><span /></div>}
    </div>
  );
}

function ShopProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="shop-product-card">
      <a className="shop-product-image" href={`/shop/${product.slug}`}>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <ProductArtwork product={product} />
      </a>
      <div className="shop-product-info">
        <p>{product.category_label}</p>
        <a href={`/shop/${product.slug}`}><h3>{product.title}</h3></a>
        <div className="product-rating"><Star size={13} /> {product.rating} <span>({product.review_count})</span></div>
        <div className="product-card-bottom">
          <div className="product-price">
            <strong>{formatPrice(product)}</strong>
            {product.compare_at_price && <del>${product.compare_at_price}</del>}
          </div>
          <button type="button" onClick={handleAdd} aria-label={`Add ${product.title} to bag`}>
            {added ? <PackageCheck size={18} /> : <ShoppingBag size={18} />}
          </button>
        </div>
      </div>
    </article>
  );
}

function courseSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function CourseWaitlistCard({ title, category, icon }) {
  const [added, setAdded] = useState(false);
  const product = {
    id: `course-${courseSlug(title)}`,
    slug: `courses/${courseSlug(title)}`,
    title,
    price: 0,
  };

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="course-product-card">
      <div className="course-thumbnail" aria-hidden="true">
        <div className="course-thumbnail-brand">DANAJET ACADEMY</div>
        <div className="course-thumbnail-mark">
          <span>{icon}</span>
          <strong>{category}</strong>
        </div>
        <img src="/assets/profile-image-new-cutout.png" alt="" />
      </div>
      <h3>{title}</h3>
      <p>Danajet Academy · Daniel the Booksmith</p>
      <div className="course-rating">
        <span>4.9</span>
        <span className="course-stars"><Star size={12} /><Star size={12} /><Star size={12} /><Star size={12} /><Star size={12} /></span>
        <span>(Coming soon)</span>
      </div>
      <div className="course-product-bottom">
        <div className="course-price">
          <strong>$0</strong>
          <del>$49</del>
        </div>
        <button type="button" onClick={handleAdd} aria-label={`Add ${title} to cart`}>
          {added ? <PackageCheck size={17} /> : <ShoppingBag size={17} />}
          <span>{added ? "Added" : "Add to Cart"}</span>
        </button>
      </div>
    </article>
  );
}

function CourseCatalog({ showHeading = true }) {
  return (
    <div className="course-catalog">
      {showHeading && (
        <SectionHeading
          eyebrow="Courses & Tutorials"
          title={<>Build better books with <span className="orange-text">practical learning.</span></>}
          copy="Join the waitlist for mini-courses, templates, tutorials, and publishing resources from Danajet BookLab."
        />
      )}
      <div className="course-category-stack">
        {courseCategories.map((category) => (
          <section className="course-category" key={category.title}>
            <div className="course-category-heading">
              <span>{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="course-product-grid">
              {category.items.map((item) => (
                <CourseWaitlistCard title={item} category={category.title} icon={category.icon} key={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function AcademyHeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = academyHeroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % academyHeroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (direction) => {
    setActiveSlide((current) => (current + direction + academyHeroSlides.length) % academyHeroSlides.length);
  };

  return (
    <section className={`academy-hero academy-hero-${slide.theme}`}>
      <div className="container">
        <a className="portfolio-back academy-back" href="/shop"><ArrowRight size={16} /> Back to shop</a>
      </div>
      <div className="container academy-hero-shell">
        <button className="academy-slide-arrow academy-slide-prev" type="button" onClick={() => goToSlide(-1)} aria-label="Previous academy slide">
          <ArrowRight size={22} />
        </button>
        <div className="academy-slide-card">
          <p>{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <span>{slide.copy}</span>
          <a href={slide.href}>{slide.action} <ArrowRight size={15} /></a>
        </div>
        <div className="academy-slide-visual" aria-hidden="true">
          <div className="academy-slide-shape" />
          <img src={slide.image} alt="" />
        </div>
        <button className="academy-slide-arrow academy-slide-next" type="button" onClick={() => goToSlide(1)} aria-label="Next academy slide">
          <ArrowRight size={22} />
        </button>
        <div className="academy-slide-dots" aria-label="Academy slides">
          {academyHeroSlides.map((item, index) => (
            <button
              className={index === activeSlide ? "is-active" : ""}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show ${item.eyebrow} slide`}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopPage() {
  const [products, setProducts] = useState(mockProducts);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filteredProducts = products
    .filter((product) => activeCategory === "all" || product.category === activeCategory)
    .filter((product) => `${product.title} ${product.subtitle} ${product.author}`.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-low") return Number(a.price) - Number(b.price);
      if (sortBy === "price-high") return Number(b.price) - Number(a.price);
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return Number(b.is_featured) - Number(a.is_featured);
    });

  return (
    <div className="shop-page">
      <Header />
      <main>
        <section className="shop-hero">
          <div className="container shop-hero-inner">
            <div>
              <p className="eyebrow">Danajet bookshop</p>
              <h1>Books for bright ideas and <em>brave beginnings.</em></h1>
              <p>Thoughtful stories, journals, guides, and workbooks made to encourage learning, creativity, and meaningful growth.</p>
            </div>
            <div className="shop-hero-art" aria-hidden="true">
              <ProductArtwork product={products[0] || mockProducts[0]} view="stack" />
            </div>
          </div>
        </section>

        <section className="shop-pathways" aria-label="Shop sections">
          <div className="container shop-pathway-grid">
            {shopPathways.map(({ icon: Icon, ...pathway }) => (
              <a className="shop-pathway-card" href={pathway.href} key={pathway.title}>
                <Icon size={34} />
                <div>
                  <h2>{pathway.title}</h2>
                  <p>{pathway.copy}</p>
                </div>
                <span>{pathway.action} <ArrowRight size={17} /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="shop-benefits">
          <div className="container">
            <span><PackageCheck size={20} /><div><strong>Carefully made</strong><small>Reader-friendly books and workbooks</small></div></span>
            <span><Plane size={20} /><div><strong>Worldwide delivery</strong><small>Shipping options at checkout</small></div></span>
            <span><Star size={20} /><div><strong>Author-led shop</strong><small>Books created with purpose</small></div></span>
          </div>
        </section>

        <section className="section shop-catalog" id="books">
          <div className="container">
            <div className="shop-catalog-heading">
              <div><p className="eyebrow">Browse the collection</p><h2>Find your next good read.</h2></div>
              <p>{filteredProducts.length} products</p>
            </div>
            <div className="shop-toolbar">
              <div className="shop-category-tabs">
                {shopCategories.map((category) => (
                  <button
                    className={activeCategory === category.id ? "is-active" : ""}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    key={category.id}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <label className="shop-search">
                <Search size={18} />
                <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search books" />
              </label>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort products">
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="title">Title</option>
              </select>
            </div>
            <div className="shop-grid">
              {filteredProducts.map((product) => <ShopProductCard product={product} key={product.id} />)}
            </div>
          </div>
        </section>

        <section className="section courses-section" id="courses-tutorials">
          <div className="container">
            <CourseCatalog />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function CoursesPage() {
  return (
    <div className="courses-page">
      <Header />
      <main>
        <AcademyHeroCarousel />
        <section className="section courses-section" id="courses">
          <div className="container">
            <CourseCatalog showHeading={false} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ProductDetailPage({ slug }) {
  const [product, setProduct] = useState(mockProducts.find((item) => item.slug === slug));
  const [quantity, setQuantity] = useState(1);
  const [activeView, setActiveView] = useState("front");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    getProduct(slug).then(setProduct);
  }, [slug]);

  if (!product) {
    return (
      <div><Header /><main className="product-not-found"><h1>Book not found.</h1><a className="button" href="/shop">Back to shop</a></main><Footer /></div>
    );
  }

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };
  const sameCategory = mockProducts.filter((item) => item.id !== product.id && item.category === product.category);
  const related = [
    ...sameCategory,
    ...mockProducts.filter((item) => item.id !== product.id && item.category !== product.category),
  ].slice(0, 3);

  return (
    <div className="product-page">
      <Header />
      <main>
        <div className="container product-breadcrumbs"><a href="/shop">Shop</a><span>/</span><span>{product.title}</span></div>
        <section className="container product-detail">
          <div className="product-gallery">
            <div className="product-thumbnails">
              {["front", "stack", "detail"].map((view) => (
                <button className={activeView === view ? "is-active" : ""} type="button" onClick={() => setActiveView(view)} key={view}>
                  <ProductArtwork product={product} view={view} />
                </button>
              ))}
            </div>
            <div className="product-main-image"><ProductArtwork product={product} view={activeView} /></div>
          </div>
          <div className="product-summary">
            <p className="eyebrow">{product.category_label}</p>
            <h1>{product.title}</h1>
            <p className="product-subtitle">{product.subtitle}</p>
            <div className="product-rating product-rating-large"><Star size={16} /> {product.rating} <a href="#reviews">{product.review_count} reviews</a></div>
            <div className="product-detail-price">
              <strong>{formatPrice(product)}</strong>
              {product.compare_at_price && <del>${product.compare_at_price}</del>}
            </div>
            <p className="product-description">{product.description}</p>
            <div className="product-purchase">
              <div className="quantity-control" aria-label="Quantity">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus /></button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus /></button>
              </div>
              <button className="button product-add-button" type="button" onClick={handleAdd}>
                {added ? <>Added to bag <PackageCheck size={18} /></> : <>Add to bag <ShoppingBag size={18} /></>}
              </button>
            </div>
            <div className="product-stock"><span /> In stock and ready to ship</div>
            <div className="product-feature-list">
              {product.features.map((feature) => <span key={feature}><PackageCheck size={16} />{feature}</span>)}
            </div>
          </div>
        </section>

        <section className="product-story-band">
          <div className="container">
            <div><p className="eyebrow">Inside the book</p><h2>Made to feel useful, welcoming, and worth returning to.</h2></div>
            <div className="product-spread"><ProductArtwork product={product} view="detail" /></div>
          </div>
        </section>

        <section className="section related-products">
          <div className="container">
            <div className="shop-catalog-heading"><div><p className="eyebrow">You may also like</p><h2>Keep exploring.</h2></div><a className="text-link" href="/shop">View all books <ArrowRight /></a></div>
            <div className="shop-grid">{related.map((item) => <ShopProductCard product={item} key={item.id} />)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function PortfolioCard({ project, index, onOpen }) {
  const category = portfolioCategories.find((item) => item.id === project.category)?.label;
  const preview = (
    <>
      <img src={`/assets/portfolio/page-${project.image}.jpg`} alt={`${project.title} portfolio presentation`} loading="lazy" />
      <span><MoveUpRight size={19} /></span>
    </>
  );

  return (
    <article className="project-card portfolio-card">
      {onOpen ? (
        <button className="portfolio-preview" type="button" onClick={() => onOpen(project)} aria-label={`View ${project.title}`}>
          {preview}
        </button>
      ) : (
        <a className="portfolio-preview" href="/portfolio" aria-label={`View ${project.title} in the full portfolio`}>
          {preview}
        </a>
      )}
      <div className="project-meta">
        <div>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div><p>{category}</p><h3>{project.title}</h3></div>
        </div>
        {onOpen ? (
          <button type="button" onClick={() => onOpen(project)} aria-label={`Open ${project.title}`}><MoveUpRight /></button>
        ) : (
          <a href="/portfolio" aria-label="Open full portfolio"><MoveUpRight /></a>
        )}
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandMark light />
          <p>Helping authors create, publish, and share professional books while building educational resources, media projects, and future innovations.</p>
          <div className="socials">
            <a href="#youtube" aria-label="YouTube"><Youtube /></a>
            <a href="#instagram" aria-label="Instagram"><Instagram /></a>
            <a href="#facebook" aria-label="Facebook"><Facebook /></a>
            <a href="#linkedin" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
        <div><h3>Explore</h3><a href="/about">About</a><a href="/shop">Shop</a><a href="/courses">Academy</a><a href="/#brands">Media</a><a href="/reviews">Testimonials</a></div>
        <div><h3>BookLab</h3><a href="/#services">Book formatting</a><a href="/#services">Book design</a><a href="/#services">KDP support</a><a href="/#services">EPUB formatting</a><a href="/portfolio">Portfolio</a></div>
        <div><h3>More Services</h3><a href="/#services">Children's books</a><a href="/#services">Workbook design</a><a href="/#services">A+ content design</a><a href="/#services">Book trailers</a></div>
        <div><h3>Contact</h3><a href="mailto:hello@danajet.com">hello@danajet.com</a><a href="#whatsapp"><MessageCircle size={15} /> WhatsApp</a><a href="#youtube">YouTube</a><a href="#instagram">Instagram</a><a href="#tiktok">TikTok</a></div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Danajet Nig. Ltd. All Rights Reserved. Powered by Danajet.</p>
        <div><a href="#privacy">Privacy Policy</a><a href="#terms">Terms & Conditions</a></div>
      </div>
    </footer>
  );
}

function AboutStory() {
  const focusAreas = [
    {
      name: "BookLab",
      text: "Book formatting, book design, Amazon KDP publishing support, workbooks, A+ content, and book trailers.",
    },
    {
      name: "Media",
      text: "Storytelling, digital content, and creative projects designed to inspire and connect with audiences.",
    },
    {
      name: "Academy",
      text: "Practical learning for book creation, publishing, design, and digital creativity.",
    },
    {
      name: "Transport",
      text: "A future-facing dream for transportation, mobility, and solutions that move people forward.",
    },
  ];

  return (
    <div className="about-story">
      <aside className="about-profile-panel">
        <div className="about-photo">
          <img src="/assets/danajet-about-cutout.png" alt="Daniel, founder of Danajet" />
        </div>
        <div className="about-profile-note">
          <span>Founder and Creative Lead</span>
          <strong>Daniel - Danajet</strong>
          <p>Helping authors, learners, and creative brands turn ideas into polished work.</p>
        </div>
      </aside>

      <div className="about-content">
        <div className="about-intro">
          <p className="eyebrow">About Daniel & Danajet</p>
          <h2>Built for authors, learners, and ideas ready for the world.</h2>
          <p className="about-lede">I'm Daniel, the founder and creative mind behind Danajet. My work brings together book design, publishing support, storytelling, education, and long-term innovation under one clear creative vision.</p>
        </div>

        <div className="about-body-grid">
          <div className="about-main-copy">
            <p>My journey started with a passion for creativity, storytelling, and helping ideas come to life. What began as a love for designing and creating has grown into a brand dedicated to helping authors transform their manuscripts into professional, publish-ready books.</p>
            <p>Danajet is more than one service. It is a growing ecosystem for creativity, education, media, and future innovation, with each part created to help people present their work with more confidence and clarity.</p>
            <blockquote>
              <span>Core belief</span>
              Great ideas deserve to be seen, experienced, and shared with the world.
            </blockquote>
            <p>Whether you're an author with a manuscript waiting to become a beautiful book, a learner seeking new skills, or a reader exploring my creations, I invite you to be part of the <strong>Danajet journey.</strong></p>
          </div>

          <div className="about-side-note">
            <span>What guides the work</span>
            <p>Clean design, useful storytelling, practical education, and professional delivery from concept to final presentation.</p>
          </div>
        </div>

        <div className="about-focus-grid" aria-label="Danajet focus areas">
          {focusAreas.map((area, index) => (
            <article className="about-focus-card" key={area.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>Danajet {area.name}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>

        <div className="about-cta">
          <span>Let's create something meaningful together.</span>
          <a className="button" href="/request-project">Request a Project <Send size={17} /></a>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <main>
        <section className="portfolio-page-hero about-page-hero">
          <div className="container">
            <a className="portfolio-back" href="/"><ArrowRight size={16} /> Back to home</a>
            <p className="eyebrow">About Danajet</p>
            <h1>About Daniel & <em>Danajet.</em></h1>
            <p>Turning ideas into books, stories into impact, and dreams into reality.</p>
            <div className="about-hero-details" aria-label="Danajet strengths">
              <span>Book Design</span>
              <span>Publishing Support</span>
              <span>Creative Education</span>
              <span>Media Projects</span>
            </div>
          </div>
        </section>
        <section className="section about-page-section">
          <div className="container">
            <AboutStory />
          </div>
        </section>
        <section className="final-cta">
          <FlightPath variant="hero" tone="dark" />
          <div className="container final-cta-inner">
            <p className="eyebrow">Your next chapter starts here</p>
            <h2>Ready to create something meaningful?</h2>
            <a className="button" href="/request-project">Request a Project <Send size={17} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function RequestProjectPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="request-page">
      <Header />
      <main>
        <section className="request-hero">
          <FlightPath variant="wide" tone="dark" />
          <div className="container request-hero-inner">
            <a className="portfolio-back" href="/"><ArrowRight size={16} /> Back to home</a>
            <p className="eyebrow">Danajet BookLab request form</p>
            <h1>Let's Make Your Book <em>Soar.</em></h1>
            <p>Ready to turn your manuscript into a professional, publish-ready book? Tell me about your project below, and let's begin the journey together.</p>
          </div>
        </section>

        <section className="section request-section">
          <div className="container request-layout">
            <aside className="request-sidebar">
              <p className="eyebrow">Before we begin</p>
              <h2>Your project details help me prepare the right creative path.</h2>
              <p>Share as much as you can. If something is not ready yet, choose the closest option and we can refine it together.</p>
              <div className="request-note">
                <strong>Confidentiality</strong>
                <p>Your manuscript and project details will be treated with complete confidentiality and will never be shared with third parties.</p>
              </div>
            </aside>

            {isSubmitted ? (
              <div className="request-success" role="status">
                <Plane size={42} />
                <h2>Your Book Is Ready for Takeoff!</h2>
                <p>Welcome aboard the Danajet BookLab journey.</p>
                <p>Thank you for submitting your project request. I will personally review your details and contact you through your preferred method shortly.</p>
                <strong>Let's make your book soar!</strong>
                <a className="button" href="/">Return Home <ArrowRight size={17} /></a>
              </div>
            ) : (
              <form className="request-form" onSubmit={handleSubmit}>
                <div className="form-grid two-columns">
                  <label className="form-field">
                    <span>Full Name <b>*</b></span>
                    <small>Please enter your full name.</small>
                    <input name="fullName" type="text" required />
                  </label>
                  <label className="form-field">
                    <span>Email Address <b>*</b></span>
                    <small>Enter your best email address.</small>
                    <input name="email" type="email" required />
                  </label>
                </div>

                <label className="form-field">
                  <span>Phone Number <em>(Optional)</em></span>
                  <small>Include your country code.</small>
                  <input name="phone" type="tel" placeholder="+1" />
                </label>

                <fieldset className="form-fieldset">
                  <legend>What Service Do You Need? <b>*</b></legend>
                  <small>Select all that apply.</small>
                  <div className="option-grid">
                    {requestServiceOptions.map((option) => (
                      <label className="option-box" key={option}>
                        <span>{option}</span>
                        <input name="services" type="checkbox" value={option} />
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="form-field">
                  <span>Tell Me About Your Project <b>*</b></span>
                  <small>Add your book details, goals, instructions, and ideas.</small>
                  <textarea
                    name="projectDetails"
                    required
                    placeholder="Tell me about your book, your goals, your book cover ideas, your interior pages ideas, your instructions and anything else I should know about your project."
                  />
                </label>

                <fieldset className="form-fieldset">
                  <legend>What Stage Is Your Project Currently In? <b>*</b></legend>
                  <div className="option-grid single-column">
                    {projectStageOptions.map((option) => (
                      <label className="option-box" key={option}>
                        <span>{option}</span>
                        <input name="projectStage" type="radio" value={option} required />
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="form-grid two-columns">
                  <label className="form-field">
                    <span>Preferred Book Size</span>
                    <select name="bookSize" defaultValue="">
                      <option value="" disabled>Select an option</option>
                      {bookSizeOptions.map((option) => <option value={option} key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label className="form-field">
                    <span>Estimated Budget</span>
                    <select name="budget" defaultValue="">
                      <option value="" disabled>Select an option</option>
                      {budgetOptions.map((option) => <option value={option} key={option}>{option}</option>)}
                    </select>
                  </label>
                </div>

                <div className="form-grid two-columns">
                  <label className="form-field">
                    <span>Expected Timeline</span>
                    <select name="timeline" defaultValue="">
                      <option value="" disabled>Select an option</option>
                      {timelineOptions.map((option) => <option value={option} key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label className="form-field">
                    <span>How Did You Hear About Danajet BookLab?</span>
                    <select name="referral" defaultValue="">
                      <option value="" disabled>Select an option</option>
                      {referralOptions.map((option) => <option value={option} key={option}>{option}</option>)}
                    </select>
                  </label>
                </div>

                <fieldset className="form-fieldset">
                  <legend>Preferred Contact Method <b>*</b></legend>
                  <small>How would you like me to contact you?</small>
                  <div className="option-grid two-options">
                    {contactMethodOptions.map((option) => (
                      <label className="option-box" key={option}>
                        <span>{option}</span>
                        <input name="contactMethod" type="checkbox" value={option} />
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="form-fieldset">
                  <legend>Do You Have Your Manuscript Ready?</legend>
                  <div className="option-grid single-column">
                    {manuscriptOptions.map((option) => (
                      <label className="option-box" key={option}>
                        <span>{option}</span>
                        <input name="manuscriptReady" type="radio" value={option} />
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="form-field file-field">
                  <span>File Upload <em>(Optional)</em></span>
                  <small>Upload your manuscript or existing files. Accepted files: Word Document (.doc/.docx), PDF, Images.</small>
                  <input name="files" type="file" accept=".doc,.docx,.pdf,image/*" multiple />
                </label>

                <p className="request-confidentiality">Your manuscript and project details will be treated with complete confidentiality and will never be shared with third parties.</p>

                <button className="button request-submit" type="submit">Start My Book Journey <Send size={17} /></button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  const featuredProjects = [projects[0], projects[10], projects[20], projects[24], projects[31], projects[36]];

  return (
    <div>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-portrait-field" aria-hidden="true" />
          <img
            className="hero-profile"
            src="/assets/danjet-profile-cutout-alpha-final.png"
            alt="Danajet founder"
          />
          <div className="hero-confetti" aria-hidden="true">
            <span /><span /><span />
          </div>
          <FlightPath variant="hero" tone="dark" />
          <div className="hero-inner container">
            <div className="hero-copy">
              <p className="eyebrow"><span>Danajet BookLab</span> Your book, ready for takeoff</p>
              <h1><span>Helping</span><span>Authors</span><span>Make Their</span><em>Books Soar!</em></h1>
              <p className="hero-description">
                Personal book formatting, design, and publishing support that helps your message reach more readers.
              </p>
              <div className="hero-actions">
                <a className="button" href="/request-project">Request a Project <Send size={17} /></a>
                <a className="text-link" href="#books">Shop My Books <ArrowRight size={17} /></a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true">
                  <span>AK</span><span>DO</span><span>LM</span>
                </div>
                <p><strong>5.0 client rating</strong><br />Books created with care</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section what-section" id="about">
          <div className="container">
            <SectionHeading
              eyebrow="What I do"
              title={<>Everything your book needs to <span className="orange-text">fly further<span className="black-punctuation">.</span></span></>}
              copy="Creative and practical support for authors at every stage, made personal and refreshingly straightforward."
            />
            <div className="service-grid">
              {whatIDo.map(({ icon: Icon, ...item }) => (
                <a className="service-card" href="#services" key={item.title}>
                  <div className="card-top"><span>{item.number}</span><Icon size={25} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <span className="round-arrow"><ArrowRight /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="brands-section" id="brands">
          <div className="brand-sticker-field" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="container">
            <p className="eyebrow light-eyebrow">One vision, four destinations</p>
            <div className="brands-intro">
              <h2>Meet the Danajet brands.</h2>
              <p>Publishing is where we begin. Learning, media, and future innovation are where the journey continues.</p>
            </div>
            <div className="brand-grid">
              {brands.map(({ icon: Icon, ...brand }) => (
                <a href="/request-project" className="brand-card" key={brand.name}>
                  <span className="brand-code">{brand.code}</span>
                  <Icon size={30} />
                  <h3>Danajet-{brand.name}</h3>
                  <p>{brand.copy}</p>
                  <MoveUpRight size={18} className="brand-arrow" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section books-section" id="books">
          <FlightPath variant="corner" tone="orange" />
          <div className="container">
            <SectionHeading
              eyebrow="Featured books"
              title={<>Fresh stories. <span className="orange-text">Beautifully made.</span></>}
              copy="Explore books designed to inform, inspire, and stay with you long after the final page."
              action={<a className="text-link" href="/shop">Visit the shop <ArrowRight size={17} /></a>}
            />
            <div className="book-grid">
              {books.map((book, index) => <BookCover book={book} index={index} key={book.title} />)}
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <FlightPath variant="services" tone="dark" />
          <div className="container">
            <div className="services-layout">
              <div className="services-sticky">
                <p className="eyebrow">BookLab services</p>
                <h2>Your story deserves a <span className="orange-text">polished arrival</span>.</h2>
                <p>From raw manuscript to reader-ready book, choose the support you need or bring the whole project aboard.</p>
                <a className="button" href="/request-project">Request a Project <ArrowRight size={17} /></a>
              </div>
              <div className="services-list">
                {services.map(({ icon: Icon, ...service }, index) => (
                  <a href="/request-project" className="service-row" key={service.title}>
                    <span className="service-number">0{index + 1}</span>
                    <span className="service-icon"><Icon size={22} /></span>
                    <span><strong>{service.title}</strong><small>{service.copy}</small></span>
                    <MoveUpRight size={19} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section work-section" id="portfolio">
          <div className="container">
            <SectionHeading
              eyebrow="Featured work"
              title={<>A glimpse of work, <span className="orange-text">made to stand out.</span></>}
              copy="A small selection from the full Danajet portfolio across publishing, content, and document design."
              action={<a className="button button-outline" href="/portfolio">View Full Portfolio <ArrowRight size={17} /></a>}
            />
            <div className="featured-work-list" aria-label="Featured work highlights">
              {featuredWorkHighlights.map((item) => (
                <div className="featured-work-item" key={item}>
                  <BookOpen size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="project-grid portfolio-grid">
              {featuredProjects.map((project, index) => (
                <PortfolioCard project={project} index={index} key={`${project.category}-${project.image}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section" id="testimonials">
          <FlightPath variant="corner" tone="light" />
          <div className="container">
            <div className="testimonial-heading">
              <p className="eyebrow light-eyebrow">Client stories</p>
              <h2>Kind words from people whose ideas took flight.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.slice(0, 3).map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <Quote size={32} />
                  <p>{testimonial.quote}</p>
                  <div className="testimonial-person">
                    <ReviewerAvatar review={testimonial} />
                    <div><strong>{testimonial.name}</strong><small>{testimonial.role}</small></div>
                  </div>
                </article>
              ))}
            </div>
            <a className="light-link" href="/reviews">See More Reviews <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <FlightPath variant="hero" tone="dark" />
          <div className="container final-cta-inner">
            <p className="eyebrow">Your next chapter starts here</p>
            <h2>Ready to bring your book ideas to life?</h2>
            <p>Tell me what you're creating, where you are in the process, and where you want your book to go.</p>
            <div className="hero-actions">
              <a className="button" href="/request-project">Start a Project <Send size={17} /></a>
              <a className="button button-outline" href="/shop">Shop My Books <BookOpen size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandMark light />
            <p>Helping authors create, publish, and share professional books while building educational resources, media projects, and future innovations.</p>
            <div className="socials">
              <a href="#youtube" aria-label="YouTube"><Youtube /></a>
              <a href="#instagram" aria-label="Instagram"><Instagram /></a>
              <a href="#facebook" aria-label="Facebook"><Facebook /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
          <div><h3>Explore</h3><a href="/about">About</a><a href="#books">Shop</a><a href="/courses">Academy</a><a href="#brands">Media</a><a href="#testimonials">Testimonials</a></div>
          <div><h3>BookLab</h3><a href="#services">Book formatting</a><a href="#services">Book design</a><a href="#services">KDP support</a><a href="#services">EPUB formatting</a><a href="#portfolio">Portfolio</a></div>
          <div><h3>More Services</h3><a href="#services">Children's books</a><a href="#services">Workbook design</a><a href="#services">A+ content design</a><a href="#services">Book trailers</a></div>
          <div><h3>Contact</h3><a href="mailto:hello@danajet.com">hello@danajet.com</a><a href="#whatsapp"><MessageCircle size={15} /> WhatsApp</a><a href="#youtube">YouTube</a><a href="#instagram">Instagram</a><a href="#tiktok">TikTok</a></div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Danajet Nig. Ltd. All Rights Reserved. Powered by Danajet.</p>
          <div><a href="#privacy">Privacy Policy</a><a href="#terms">Terms & Conditions</a></div>
        </div>
      </footer>
    </div>
  );
}

function PortfolioPage() {
  const [activePortfolio, setActivePortfolio] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = activePortfolio === "all"
    ? projects
    : projects.filter((project) => project.category === activePortfolio);

  return (
    <div className="portfolio-page">
      <Header />
      <main>
        <section className="portfolio-page-hero">
          <div className="container">
            <a className="portfolio-back" href="/"><ArrowRight size={16} /> Back to home</a>
            <p className="eyebrow">Danajet portfolio</p>
            <h1>Books made to <em>stand out.</em></h1>
            <p>Explore selected client projects across book covers, interiors, activity books, workbooks, EPUB layouts, A+ content, and professional PDF design.</p>
          </div>
        </section>

        <section className="section work-section portfolio-page-work">
          <div className="container">
            <div className="portfolio-filters" aria-label="Filter portfolio projects">
              {portfolioCategories.map((category) => (
                <button
                  className={activePortfolio === category.id ? "is-active" : ""}
                  type="button"
                  aria-pressed={activePortfolio === category.id}
                  onClick={() => setActivePortfolio(category.id)}
                  key={category.id}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="portfolio-count">{visibleProjects.length} projects</div>
            <div className="project-grid portfolio-grid">
              {visibleProjects.map((project, index) => (
                <PortfolioCard project={project} index={index} onOpen={setSelectedProject} key={`${project.category}-${project.image}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <FlightPath variant="hero" tone="dark" />
          <div className="container final-cta-inner">
            <p className="eyebrow">Have a project in mind?</p>
            <h2>Let’s make your book the next standout.</h2>
            <a className="button" href="/request-project">Start a Project <Send size={17} /></a>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={selectedProject.title}>
          <button className="lightbox-backdrop" type="button" onClick={() => setSelectedProject(null)} aria-label="Close portfolio image" />
          <div className="lightbox-content">
            <button className="lightbox-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close"><X size={24} /></button>
            <img src={`/assets/portfolio/page-${selectedProject.image}.jpg`} alt={`${selectedProject.title} portfolio presentation`} />
            <div>
              <p>{portfolioCategories.find((category) => category.id === selectedProject.category)?.label}</p>
              <h3>{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

function ReviewsPage() {
  const [activeReviewCategory, setActiveReviewCategory] = useState("all");
  const visibleReviews = activeReviewCategory === "all"
    ? testimonials
    : testimonials.filter((review) => review.service === activeReviewCategory);

  return (
    <div className="reviews-page">
      <Header />
      <main>
        <section className="reviews-hero">
          <FlightPath variant="wide" tone="light" />
          <div className="container reviews-hero-inner">
            <div>
              <a className="reviews-back" href="/"><ArrowRight size={16} /> Back to home</a>
              <p className="eyebrow light-eyebrow">Client stories</p>
              <h1>Kind words from ideas that <em>took flight.</em></h1>
            </div>
            <div className="reviews-intro">
              <p>Authors, educators, and creators share what it felt like to turn an early idea into a polished, reader-ready book.</p>
              <div className="reviews-rating-summary">
                <strong>5.0</strong>
                <span><span className="reviews-stars">★★★★★</span><small>Average client rating</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="section reviews-collection">
          <div className="container">
            <div className="reviews-toolbar">
              <div className="review-filters" aria-label="Filter client reviews">
                {reviewCategories.map((category) => (
                  <button
                    className={activeReviewCategory === category.id ? "is-active" : ""}
                    type="button"
                    aria-pressed={activeReviewCategory === category.id}
                    onClick={() => setActiveReviewCategory(category.id)}
                    key={category.id}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <span>{visibleReviews.length} client stories</span>
            </div>

            <div className="reviews-grid">
              {visibleReviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-card-top">
                    <span className="reviews-stars">★★★★★</span>
                  </div>
                  <blockquote>{review.quote}</blockquote>
                  <div className="testimonial-person">
                    <ReviewerAvatar review={review} />
                    <div><strong>{review.name}</strong><small>{review.role}</small></div>
                  </div>
                  {review.ctaUrl ? (
                    <a className="review-link" href={review.ctaUrl} target="_blank" rel="noreferrer">
                      {review.ctaLabel} <ArrowRight size={15} />
                    </a>
                  ) : (
                    <span className="review-link review-link-disabled">{review.ctaLabel}</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-cta">
          <div className="container">
            <p className="eyebrow">Your story could be next</p>
            <h2>Ready to create a book you are proud to share?</h2>
            <a className="button" href="/request-project">Start a Project <Send size={17} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const productMatch = path.match(/^\/shop\/([^/]+)$/);

  if (productMatch) {
    document.title = "Book Details | Danajet Shop";
    return <ProductDetailPage slug={decodeURIComponent(productMatch[1])} />;
  }
  if (path === "/shop") {
    document.title = "Shop Books | Danajet";
    return <ShopPage />;
  }
  if (path === "/courses") {
    document.title = "Courses & Tutorials | Danajet Academy";
    return <CoursesPage />;
  }
  if (path === "/portfolio") {
    document.title = "Portfolio | Danajet BookLab";
    return <PortfolioPage />;
  }
  if (path === "/about") {
    document.title = "About Daniel & Danajet";
    return <AboutPage />;
  }
  if (path === "/request-project") {
    document.title = "Request a Project | Danajet BookLab";
    return <RequestProjectPage />;
  }
  if (path === "/reviews") {
    document.title = "Client Reviews | Danajet";
    return <ReviewsPage />;
  }

  document.title = "Danajet | Helping Authors Make Their Books Soar";
  return <HomePage />;
}

export default App;
