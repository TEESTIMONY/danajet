import React, { useEffect, useState } from "react";
import {
  ArrowRight as LucideArrowRight,
  BarChart3,
  BookCopy as LucideBookCopy,
  BookOpen as LucideBookOpen,
  Boxes,
  ChevronDown as LucideChevronDown,
  ClipboardList,
  Download,
  Edit3,
  Eye,
  ExternalLink as LucideExternalLink,
  FileText as LucideFileText,
  Image as ImageIcon,
  Inbox,
  Layers3 as LucideLayers3,
  LayoutDashboard,
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
  PlusCircle,
  Quote as LucideQuote,
  Save,
  Search as LucideSearch,
  Send as LucideSend,
  Settings,
  ShoppingBag,
  Sparkles as LucideSparkles,
  Star as LucideStar,
  Sun,
  Trash2,
  Upload,
  Users,
  X as LucideX,
} from "lucide-react";
import { getProduct, getProducts } from "./api/shop";
import { mockProducts, shopCategories } from "./data/products";

function BrandIcon({ label, children, className = "", size = 18 }) {
  return (
    <svg
      className={`brand-social-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <title>{label}</title>
      {children}
    </svg>
  );
}

const ArrowRight = LucideArrowRight;
const BookCopy = LucideBookCopy;
const BookOpen = LucideBookOpen;
const ChevronDown = LucideChevronDown;
const ExternalLink = LucideExternalLink;
const Facebook = (props) => (
  <BrandIcon label="Facebook" {...props}>
    <path d="M14 8.35V6.9c0-.7.22-1.08 1.12-1.08H16.5V3.2c-.67-.09-1.43-.14-2.1-.14-2.08 0-3.51 1.27-3.51 3.61v1.68H8.55v2.94h2.34V21h2.89v-9.71h2.4l.37-2.94H14Z" />
  </BrandIcon>
);
const FileText = LucideFileText;
const Instagram = (props) => (
  <BrandIcon label="Instagram" {...props}>
    <path d="M7.8 2.75h8.4A5.06 5.06 0 0 1 21.25 7.8v8.4a5.06 5.06 0 0 1-5.05 5.05H7.8a5.06 5.06 0 0 1-5.05-5.05V7.8A5.06 5.06 0 0 1 7.8 2.75Zm0 1.8A3.25 3.25 0 0 0 4.55 7.8v8.4a3.25 3.25 0 0 0 3.25 3.25h8.4a3.25 3.25 0 0 0 3.25-3.25V7.8a3.25 3.25 0 0 0-3.25-3.25H7.8Zm4.2 3.23a4.22 4.22 0 1 1 0 8.44 4.22 4.22 0 0 1 0-8.44Zm0 1.8a2.42 2.42 0 1 0 0 4.84 2.42 2.42 0 0 0 0-4.84Zm4.48-2.86a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08Z" />
  </BrandIcon>
);
const Layers3 = LucideLayers3;
const Linkedin = (props) => (
  <BrandIcon label="LinkedIn" {...props}>
    <path d="M5.35 8.88h3.06V21H5.35V8.88ZM6.89 3a1.78 1.78 0 1 1 0 3.56 1.78 1.78 0 0 1 0-3.56Zm4.04 5.88h2.93v1.65h.04c.41-.78 1.41-1.89 2.9-1.89 3.1 0 3.67 2.04 3.67 4.69V21h-3.06v-6.8c0-1.62-.03-3.71-2.26-3.71-2.27 0-2.62 1.77-2.62 3.59V21h-3.06V8.88Z" />
  </BrandIcon>
);
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
const Youtube = (props) => (
  <BrandIcon label="YouTube" {...props}>
    <path d="M21.58 7.18a3 3 0 0 0-2.11-2.13C17.62 4.55 12 4.55 12 4.55s-5.62 0-7.47.5a3 3 0 0 0-2.11 2.13A31.25 31.25 0 0 0 1.92 12c0 1.62.17 3.25.5 4.82a3 3 0 0 0 2.11 2.13c1.85.5 7.47.5 7.47.5s5.62 0 7.47-.5a3 3 0 0 0 2.11-2.13c.33-1.57.5-3.2.5-4.82 0-1.62-.17-3.25-.5-4.82ZM10.05 15.2V8.8L15.6 12l-5.55 3.2Z" />
  </BrandIcon>
);

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

const adminNavItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "books", label: "Books & Shop", icon: ShoppingBag },
  { id: "courses", label: "Courses", icon: MonitorPlay },
  { id: "portfolio", label: "Portfolio", icon: ImageIcon },
  { id: "reviews", label: "Reviews", icon: Users },
  { id: "requests", label: "Project Requests", icon: Inbox },
  { id: "featured", label: "Featured Work", icon: Star },
  { id: "settings", label: "Site Controls", icon: Settings },
];

const adminProjectRequests = [
  { name: "Maya Brooks", service: "Children's Book Design", budget: "$1,000 - $5,000", stage: "Manuscript complete", status: "New", date: "Jul 2, 2026" },
  { name: "Richard Adams", service: "KDP Upload Support", budget: "Under $1,000", stage: "Needs publishing help", status: "Reviewing", date: "Jul 1, 2026" },
  { name: "NLS Rwanda", service: "Educational Materials", budget: "$5,000 - $10,000", stage: "Project in progress", status: "Quoted", date: "Jun 29, 2026" },
  { name: "Tangie Cokes", service: "Full Book Creation", budget: "$1,000 - $5,000", stage: "Idea stage", status: "Contacted", date: "Jun 27, 2026" },
];

const adminApiMap = [
  "GET /api/admin/books/",
  "POST /api/admin/courses/",
  "PATCH /api/admin/portfolio/:id/",
  "GET /api/admin/project-requests/",
  "POST /api/admin/media/upload/",
];

function AdminMetricCard({ icon: Icon, label, value, copy }) {
  return (
    <article className="admin-metric-card">
      <span><Icon size={22} /></span>
      <div>
        <strong>{value}</strong>
        <p>{label}</p>
      </div>
      <small>{copy}</small>
    </article>
  );
}

function AdminSectionHeader({ eyebrow, title, copy, action }) {
  return (
    <div className="admin-section-header">
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <span>{copy}</span>}
      </div>
      {action}
    </div>
  );
}

function AdminActionButton({ children, variant = "dark", icon: Icon = PlusCircle, onClick }) {
  return (
    <button className={`admin-action admin-action-${variant}`} type="button" onClick={onClick}>
      <Icon size={16} /> {children}
    </button>
  );
}

function AdminEmptyState({ title = "No matching items", copy = "Try another search or add a new item." }) {
  return (
    <div className="admin-empty-state">
      <Boxes size={24} />
      <strong>{title}</strong>
      <span>{copy}</span>
    </div>
  );
}

function downloadAdminReport(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function AdminBooksPanel({ products, onAddProduct, onDeleteProduct, onToggleFeatured, query }) {
  const visibleProducts = products.filter((product) =>
    `${product.title} ${product.author} ${product.category_label}`.toLowerCase().includes(query)
  );

  return (
    <section className="admin-panel">
      <AdminSectionHeader
        eyebrow="Shop manager"
        title="Books and product catalog"
        copy="Add, edit, delete, publish, unpublish, update pricing, stock, covers, descriptions, Amazon links, and product categories."
        action={<AdminActionButton onClick={onAddProduct}>Add New Book</AdminActionButton>}
      />
      <div className="admin-table">
        <div className="admin-table-row admin-table-head"><span>Product</span><span>Category</span><span>Price</span><span>Stock</span><span>Status</span><span>Actions</span></div>
        {visibleProducts.map((product) => (
          <div className="admin-table-row" key={product.id}>
            <span><strong>{product.title}</strong><small>{product.author}</small></span>
            <span>{product.category_label}</span>
            <span>{formatPrice(product)}</span>
            <span>{product.inventory}</span>
            <span><mark>{product.is_featured ? "Featured" : "Draft-ready"}</mark></span>
            <span className="admin-row-actions">
              <button type="button" onClick={() => onToggleFeatured(product.id)} aria-label={`Toggle ${product.title} featured status`}><Eye size={15} /></button>
              <button type="button" onClick={() => onToggleFeatured(product.id)} aria-label={`Edit ${product.title}`}><Edit3 size={15} /></button>
              <button type="button" onClick={() => onDeleteProduct(product.id)} aria-label={`Delete ${product.title}`}><Trash2 size={15} /></button>
            </span>
          </div>
        ))}
      </div>
      {visibleProducts.length === 0 && <AdminEmptyState copy="No books match your current search." />}
    </section>
  );
}

function AdminCoursesPanel({ courses, onAddCourse, onEditCourse, onDeleteCourse, onToggleCourseStatus, query }) {
  const visibleCourses = courses.filter((course) =>
    `${course.title} ${course.category} ${course.status}`.toLowerCase().includes(query)
  );

  return (
    <section className="admin-panel">
      <AdminSectionHeader
        eyebrow="Academy manager"
        title="Courses, tutorials, templates, and embeds"
        copy="Control course titles, categories, prices, waitlist status, media thumbnails, video embeds, Canva links, downloadable files, and access notes."
        action={<AdminActionButton onClick={onAddCourse}>Add Course</AdminActionButton>}
      />
      <div className="admin-card-grid">
        {visibleCourses.map((course, index) => (
          <article className="admin-content-card" key={course.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{course.title}</h3>
            <p>{course.category}</p>
            <div><mark>{course.status}</mark><small>{course.price} waitlist</small></div>
            <footer>
              <button type="button" onClick={() => onEditCourse(course)}><Edit3 size={15} /> Edit</button>
              <button type="button" onClick={() => onToggleCourseStatus(course.id)}>Status</button>
              <button type="button"><Upload size={15} /> Media</button>
              <button type="button" onClick={() => onDeleteCourse(course.id)}><Trash2 size={15} /> Delete</button>
            </footer>
          </article>
        ))}
      </div>
      {visibleCourses.length === 0 && <AdminEmptyState copy="No courses match your current search." />}
    </section>
  );
}

function AdminPortfolioPanel({ portfolioItems, onAddPortfolioItem, onEditPortfolioItem, onDeletePortfolioItem, query }) {
  const visiblePortfolioItems = portfolioItems.filter((project) =>
    `${project.title} ${project.category} ${project.client || ""} ${project.status || ""}`.toLowerCase().includes(query)
  );

  return (
    <section className="admin-panel">
      <AdminSectionHeader
        eyebrow="Portfolio manager"
        title="Portfolio projects and case studies"
        copy="Add new work, update thumbnails, categories, project descriptions, embedded links, client notes, and visibility."
        action={<AdminActionButton onClick={onAddPortfolioItem}>Add Portfolio Item</AdminActionButton>}
      />
      <div className="admin-portfolio-grid">
        {visiblePortfolioItems.map((project) => (
          <article className="admin-portfolio-card" key={project.id}>
            <img src={`/assets/portfolio/page-${project.image}.jpg`} alt="" />
            <div>
              <h3>{project.title}</h3>
              <p>{portfolioCategories.find((category) => category.id === project.category)?.label}</p>
              {(project.client || project.status) && <small>{project.client || "Portfolio item"} - {project.status || "Draft"}</small>}
            </div>
            <span>
              <button type="button" onClick={() => onEditPortfolioItem(project)} aria-label={`Edit ${project.title}`}><Edit3 size={15} /></button>
              <button type="button" onClick={() => onDeletePortfolioItem(project.id)} aria-label={`Delete ${project.title}`}><Trash2 size={15} /></button>
            </span>
          </article>
        ))}
      </div>
      {visiblePortfolioItems.length === 0 && <AdminEmptyState copy="No portfolio projects match your current search." />}
    </section>
  );
}

function AdminReviewsPanel({ reviews, onAddReview, onEditReview, onDeleteReview, query }) {
  const visibleReviews = reviews.filter((review) =>
    `${review.name} ${review.role} ${review.quote} ${review.ctaLabel || ""}`.toLowerCase().includes(query)
  );

  return (
    <section className="admin-panel">
      <AdminSectionHeader
        eyebrow="Social proof"
        title="Reviews and testimonials"
        copy="Manage rating, review text, author name, role, profile picture, CTA label, Amazon/Canva links, and display order."
        action={<AdminActionButton onClick={onAddReview}>Add Review</AdminActionButton>}
      />
      <div className="admin-review-list">
        {visibleReviews.map((review) => (
          <article className="admin-review-row" key={review.id || review.name}>
            <ReviewerAvatar review={review} />
            <div><strong>{review.name}</strong><small>{review.role}</small><p>{review.quote}</p></div>
            <span>{review.rating || 5}.0 <Star size={14} fill="currentColor" /></span>
            <button type="button" onClick={() => onEditReview(review)} aria-label={`Edit review from ${review.name}`}><Edit3 size={15} /></button>
            <button type="button" onClick={() => onDeleteReview(review.id)} aria-label={`Delete review from ${review.name}`}><Trash2 size={15} /></button>
          </article>
        ))}
      </div>
      {visibleReviews.length === 0 && <AdminEmptyState copy="No reviews match your current search." />}
    </section>
  );
}

function AdminRequestsPanel({ requests, onCycleRequestStatus, onDownloadRequest, onDownloadAllRequests, query }) {
  const visibleRequests = requests.filter((request) =>
    `${request.name} ${request.service} ${request.budget} ${request.stage} ${request.status}`.toLowerCase().includes(query)
  );

  return (
    <section className="admin-panel">
      <AdminSectionHeader
        eyebrow="Inbox"
        title="Project requests and reports"
        copy="Receive submissions, filter by status, assign follow-up, download report files, and track each request through the project pipeline."
        action={<AdminActionButton icon={Download} onClick={onDownloadAllRequests}>Download All</AdminActionButton>}
      />
      <div className="admin-request-board">
        {visibleRequests.map((request) => (
          <article className="admin-request-card" key={`${request.name}-${request.date}`}>
            <div><strong>{request.name}</strong><mark>{request.status}</mark></div>
            <p>{request.service}</p>
            <span>{request.budget}</span>
            <small>{request.stage} - {request.date}</small>
            <footer>
              <button type="button" onClick={() => onCycleRequestStatus(request.name)}>Open Request</button>
              <button type="button" onClick={() => onCycleRequestStatus(request.name)}>Next Status</button>
              <button type="button" onClick={() => onDownloadRequest(request)}><Download size={14} /> Report</button>
            </footer>
          </article>
        ))}
      </div>
      {visibleRequests.length === 0 && <AdminEmptyState copy="No requests match your current search." />}
    </section>
  );
}

function AdminFeaturedPanel({ highlights, onAddHighlight, onEditHighlight, onDeleteHighlight, query }) {
  const visibleHighlights = highlights
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.toLowerCase().includes(query));

  return (
    <section className="admin-panel">
      <AdminSectionHeader
        eyebrow="Homepage controls"
        title="Featured work highlights"
        copy="Edit the homepage featured work list, reorder items, add new client names, and control what appears above the portfolio."
        action={<AdminActionButton onClick={onAddHighlight}>Add Highlight</AdminActionButton>}
      />
      <div className="admin-feature-list">
        {visibleHighlights.map(({ item, index }) => (
          <article key={`${item}-${index}`}>
            <span>{index + 1}</span>
            <strong>{item}</strong>
            <button type="button" onClick={() => onEditHighlight(index)} aria-label={`Edit featured work ${index + 1}`}><Edit3 size={15} /></button>
            <button type="button" onClick={() => onDeleteHighlight(index)}><Trash2 size={15} /></button>
          </article>
        ))}
      </div>
      {visibleHighlights.length === 0 && <AdminEmptyState copy="No featured work items match your current search." />}
    </section>
  );
}

function AdminSettingsPanel({ settings, onUpdateSetting, onSaveSettings }) {
  return (
    <section className="admin-panel">
      <AdminSectionHeader
        eyebrow="API ready"
        title="Future Django REST API connections"
        copy="Frontend-only for now. These cards show the backend endpoints this dashboard is designed to connect with later."
        action={<AdminActionButton icon={Save} onClick={onSaveSettings}>Save Draft</AdminActionButton>}
      />
      <div className="admin-api-grid">
        {adminApiMap.map((endpoint) => <code key={endpoint}>{endpoint}</code>)}
      </div>
      <div className="admin-editor-grid">
        <label>Site announcement<input value={settings.announcement} onChange={(event) => onUpdateSetting("announcement", event.target.value)} /></label>
        <label>Primary CTA<input value={settings.primaryCta} onChange={(event) => onUpdateSetting("primaryCta", event.target.value)} /></label>
        <label>Amazon Store URL<input value={settings.amazonUrl} onChange={(event) => onUpdateSetting("amazonUrl", event.target.value)} /></label>
        <label>Contact Email<input value={settings.email} onChange={(event) => onUpdateSetting("email", event.target.value)} /></label>
      </div>
    </section>
  );
}

function AdminModal({ title, eyebrow, children, onClose, footer }) {
  return (
    <div className="admin-modal-backdrop" role="presentation">
      <section className="admin-modal" role="dialog" aria-modal="true" aria-labelledby="admin-modal-title">
        <header>
          <div>
            <p>{eyebrow}</p>
            <h2 id="admin-modal-title">{title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close popup"><X size={20} /></button>
        </header>
        <div className="admin-modal-body">{children}</div>
        <footer>{footer}</footer>
      </section>
    </div>
  );
}

function AdminDashboardPage() {
  const [activeAdminSection, setActiveAdminSection] = useState("overview");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeAdminModal, setActiveAdminModal] = useState(null);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [editingPortfolioId, setEditingPortfolioId] = useState(null);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editingHighlightIndex, setEditingHighlightIndex] = useState(null);
  const [adminSearch, setAdminSearch] = useState("");
  const [adminNotice, setAdminNotice] = useState("Local dashboard changes are not connected to Django yet.");
  const [adminProducts, setAdminProducts] = useState(() => mockProducts.slice(0, 6));
  const [adminCourses, setAdminCourses] = useState(() =>
    courseCategories.flatMap((category, categoryIndex) =>
      category.items.map((title, itemIndex) => ({
        id: `course-${categoryIndex}-${itemIndex}`,
        title,
        category: category.title,
        price: "$0",
        status: "Coming soon",
      }))
    ).slice(0, 8)
  );
  const [adminPortfolioItems, setAdminPortfolioItems] = useState(() =>
    projects.slice(0, 9).map((project, index) => ({ ...project, id: `portfolio-${index}` }))
  );
  const [adminReviews, setAdminReviews] = useState(() => testimonials.map((review, index) => ({ ...review, id: `review-${index}`, rating: 5 })));
  const [adminRequests, setAdminRequests] = useState(adminProjectRequests);
  const [adminHighlights, setAdminHighlights] = useState(featuredWorkHighlights);
  const [adminSettings, setAdminSettings] = useState({
    announcement: "Worked with authors worldwide",
    primaryCta: "Start a Project",
    amazonUrl: "https://amazon.com/",
    email: "hello@danajet.com",
  });
  const [bookDraft, setBookDraft] = useState({
    title: "",
    author: "",
    category_label: "",
    price: "",
    inventory: "",
    amazonUrl: "",
    description: "",
  });
  const [courseDraft, setCourseDraft] = useState({
    title: "",
    category: "Book Design & Publishing",
    price: "$0",
    status: "Draft",
    embedUrl: "",
    description: "",
  });
  const [portfolioDraft, setPortfolioDraft] = useState({
    title: "",
    category: "children",
    image: "03",
    client: "",
    status: "Draft",
    embedUrl: "",
    description: "",
  });
  const [reviewDraft, setReviewDraft] = useState({
    name: "",
    role: "",
    quote: "",
    rating: 5,
    service: "amazon",
    project: "",
    ctaLabel: "View on Amazon",
    ctaUrl: "",
    image: "",
  });
  const [highlightDraft, setHighlightDraft] = useState("");

  const normalizedAdminSearch = adminSearch.trim().toLowerCase();
  const showAdminNotice = (message) => setAdminNotice(message);

  const resetBookDraft = () => {
    setBookDraft({
      title: "",
      author: "",
      category_label: "",
      price: "",
      inventory: "",
      amazonUrl: "",
      description: "",
    });
  };

  const resetCourseDraft = () => {
    setCourseDraft({
      title: "",
      category: "Book Design & Publishing",
      price: "$0",
      status: "Draft",
      embedUrl: "",
      description: "",
    });
  };

  const resetPortfolioDraft = () => {
    setPortfolioDraft({
      title: "",
      category: "children",
      image: "03",
      client: "",
      status: "Draft",
      embedUrl: "",
      description: "",
    });
  };

  const resetReviewDraft = () => {
    setReviewDraft({
      name: "",
      role: "",
      quote: "",
      rating: 5,
      service: "amazon",
      project: "",
      ctaLabel: "View on Amazon",
      ctaUrl: "",
      image: "",
    });
  };

  const handleOpenBookModal = () => {
    resetBookDraft();
    setActiveAdminModal("book");
  };

  const handleOpenCourseModal = () => {
    resetCourseDraft();
    setEditingCourseId(null);
    setActiveAdminModal("course");
  };

  const handleOpenEditCourseModal = (course) => {
    setCourseDraft({
      title: course.title || "",
      category: course.category || "Book Design & Publishing",
      price: course.price || "$0",
      status: course.status || "Draft",
      embedUrl: course.embedUrl || "",
      description: course.description || "",
    });
    setEditingCourseId(course.id);
    setActiveAdminModal("course");
  };

  const handleOpenPortfolioModal = () => {
    resetPortfolioDraft();
    setEditingPortfolioId(null);
    setActiveAdminModal("portfolio");
  };

  const handleOpenEditPortfolioModal = (project) => {
    setPortfolioDraft({
      title: project.title || "",
      category: project.category || "children",
      image: project.image || "03",
      client: project.client || "",
      status: project.status || "Draft",
      embedUrl: project.embedUrl || "",
      description: project.description || "",
    });
    setEditingPortfolioId(project.id);
    setActiveAdminModal("portfolio");
  };

  const handleOpenReviewModal = () => {
    resetReviewDraft();
    setEditingReviewId(null);
    setActiveAdminModal("review");
  };

  const handleOpenEditReviewModal = (review) => {
    setReviewDraft({
      name: review.name || "",
      role: review.role || "",
      quote: review.quote || "",
      rating: review.rating || 5,
      service: review.service || "amazon",
      project: review.project || "",
      ctaLabel: review.ctaLabel || "View on Amazon",
      ctaUrl: review.ctaUrl || "",
      image: review.image || "",
    });
    setEditingReviewId(review.id);
    setActiveAdminModal("review");
  };

  const handleOpenHighlightModal = () => {
    setHighlightDraft("");
    setEditingHighlightIndex(null);
    setActiveAdminModal("highlight");
  };

  const handleOpenEditHighlightModal = (index) => {
    setHighlightDraft(adminHighlights[index] || "");
    setEditingHighlightIndex(index);
    setActiveAdminModal("highlight");
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const nextId = adminProducts.reduce((highest, product) => Math.max(highest, Number(product.id) || 0), 0) + 1;
    const title = bookDraft.title.trim() || `New Book ${nextId}`;
    setAdminProducts((current) => [
      {
        id: nextId,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `new-book-${nextId}`,
        title,
        subtitle: bookDraft.description.trim() || "Draft product waiting for details",
        category: "guides",
        category_label: bookDraft.category_label.trim() || "Draft book",
        author: bookDraft.author.trim() || "Danajet BookLab",
        price: bookDraft.price.trim().replace("$", "") || "0.00",
        currency: "USD",
        rating: 0,
        review_count: 0,
        inventory: Number(bookDraft.inventory) || 0,
        is_featured: false,
        cover: "orange",
        accent: "#000000",
        amazonUrl: bookDraft.amazonUrl,
      },
      ...current,
    ]);
    setActiveAdminModal(null);
    showAdminNotice(`${title} added locally.`);
  };

  const handleDeleteProduct = (id) => {
    setAdminProducts((current) => current.filter((product) => product.id !== id));
    showAdminNotice("Book removed from the local admin list.");
  };

  const handleToggleFeaturedProduct = (id) => {
    setAdminProducts((current) => current.map((product) => (
      product.id === id ? { ...product, is_featured: !product.is_featured } : product
    )));
    showAdminNotice("Book featured status changed locally.");
  };

  const handleAddCourse = (event) => {
    event.preventDefault();
    const title = courseDraft.title.trim() || "New Course Draft";
    if (editingCourseId) {
      setAdminCourses((current) => current.map((course) => (
        course.id === editingCourseId
          ? {
              ...course,
              title,
              category: courseDraft.category,
              price: courseDraft.price.trim() || "$0",
              status: courseDraft.status,
              embedUrl: courseDraft.embedUrl,
              description: courseDraft.description,
            }
          : course
      )));
      setActiveAdminModal(null);
      setEditingCourseId(null);
      showAdminNotice(`${title} updated locally.`);
      return;
    }

    const id = `course-draft-${Date.now()}`;
    setAdminCourses((current) => [{
      id,
      title,
      category: courseDraft.category,
      price: courseDraft.price.trim() || "$0",
      status: courseDraft.status,
      embedUrl: courseDraft.embedUrl,
      description: courseDraft.description,
    }, ...current]);
    setActiveAdminModal(null);
    showAdminNotice(`${title} added locally.`);
  };

  const handleDeleteCourse = (id) => {
    setAdminCourses((current) => current.filter((course) => course.id !== id));
    showAdminNotice("Course removed locally.");
  };

  const handleToggleCourseStatus = (id) => {
    const statuses = ["Draft", "Coming soon", "Published"];
    setAdminCourses((current) => current.map((course) => {
      if (course.id !== id) return course;
      const nextStatus = statuses[(statuses.indexOf(course.status) + 1) % statuses.length];
      return { ...course, status: nextStatus };
    }));
    showAdminNotice("Course status changed locally.");
  };

  const handleSavePortfolioItem = (event) => {
    event.preventDefault();
    const title = portfolioDraft.title.trim() || "New Portfolio Draft";
    const savedItem = {
      title,
      category: portfolioDraft.category,
      image: portfolioDraft.image.trim().replace(/^page-/i, "").replace(/\.jpg$/i, "") || "03",
      client: portfolioDraft.client.trim(),
      status: portfolioDraft.status,
      embedUrl: portfolioDraft.embedUrl.trim(),
      description: portfolioDraft.description.trim(),
    };

    if (editingPortfolioId) {
      setAdminPortfolioItems((current) => current.map((project) => (
        project.id === editingPortfolioId ? { ...project, ...savedItem } : project
      )));
      setActiveAdminModal(null);
      setEditingPortfolioId(null);
      showAdminNotice(`${title} updated locally.`);
      return;
    }

    setAdminPortfolioItems((current) => [{ id: `portfolio-draft-${Date.now()}`, ...savedItem }, ...current]);
    setActiveAdminModal(null);
    showAdminNotice(`${title} added locally.`);
  };

  const handleDeletePortfolioItem = (id) => {
    setAdminPortfolioItems((current) => current.filter((project) => project.id !== id));
    showAdminNotice("Portfolio item removed locally.");
  };

  const handleSaveReview = (event) => {
    event.preventDefault();
    const name = reviewDraft.name.trim() || "New Reviewer";
    const savedReview = {
      name,
      role: reviewDraft.role.trim() || "Client Role",
      quote: reviewDraft.quote.trim() || "Draft testimonial text waiting for client approval.",
      rating: Math.min(5, Math.max(1, Number(reviewDraft.rating) || 5)),
      service: reviewDraft.service,
      project: reviewDraft.project.trim(),
      ctaLabel: reviewDraft.ctaLabel.trim() || "View Project",
      ctaUrl: reviewDraft.ctaUrl.trim(),
      image: reviewDraft.image.trim(),
    };

    if (editingReviewId) {
      setAdminReviews((current) => current.map((review) => (
        review.id === editingReviewId ? { ...review, ...savedReview } : review
      )));
      setActiveAdminModal(null);
      setEditingReviewId(null);
      showAdminNotice(`${name}'s review updated locally.`);
      return;
    }

    setAdminReviews((current) => [{ id: `review-draft-${Date.now()}`, ...savedReview }, ...current]);
    setActiveAdminModal(null);
    showAdminNotice(`${name}'s review added locally.`);
  };

  const handleDeleteReview = (id) => {
    setAdminReviews((current) => current.filter((review) => review.id !== id));
    showAdminNotice("Review removed locally.");
  };

  const handleCycleRequestStatus = (name) => {
    const statuses = ["New", "Reviewing", "Quoted", "Contacted", "Closed"];
    setAdminRequests((current) => current.map((request) => {
      if (request.name !== name) return request;
      const nextStatus = statuses[(statuses.indexOf(request.status) + 1) % statuses.length];
      return { ...request, status: nextStatus };
    }));
    showAdminNotice("Request status changed locally.");
  };

  const handleDownloadRequest = (request) => {
    downloadAdminReport(
      `${request.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-request.txt`,
      `Danajet Project Request\n\nClient: ${request.name}\nService: ${request.service}\nBudget: ${request.budget}\nStage: ${request.stage}\nStatus: ${request.status}\nDate: ${request.date}\n`
    );
    showAdminNotice(`Report downloaded for ${request.name}.`);
  };

  const handleDownloadAllRequests = () => {
    downloadAdminReport(
      "danajet-project-requests-report.txt",
      adminRequests.map((request) => `${request.date} | ${request.name} | ${request.service} | ${request.budget} | ${request.stage} | ${request.status}`).join("\n")
    );
    showAdminNotice("All project requests report downloaded.");
  };

  const handleSaveHighlight = (event) => {
    event.preventDefault();
    const value = highlightDraft.trim() || "New Featured Work";

    if (editingHighlightIndex !== null) {
      setAdminHighlights((current) => current.map((item, itemIndex) => (itemIndex === editingHighlightIndex ? value : item)));
      setActiveAdminModal(null);
      setEditingHighlightIndex(null);
      showAdminNotice("Featured work item updated locally.");
      return;
    }

    setAdminHighlights((current) => [...current, value]);
    setActiveAdminModal(null);
    showAdminNotice("Featured work item added locally.");
  };

  const handleDeleteHighlight = (index) => {
    setAdminHighlights((current) => current.filter((_, itemIndex) => itemIndex !== index));
    showAdminNotice("Featured work item removed locally.");
  };

  const handleUpdateSetting = (key, value) => {
    setAdminSettings((current) => ({ ...current, [key]: value }));
  };

  const renderAdminPanel = () => {
    if (activeAdminSection === "books") return <AdminBooksPanel products={adminProducts} onAddProduct={handleOpenBookModal} onDeleteProduct={handleDeleteProduct} onToggleFeatured={handleToggleFeaturedProduct} query={normalizedAdminSearch} />;
    if (activeAdminSection === "courses") return <AdminCoursesPanel courses={adminCourses} onAddCourse={handleOpenCourseModal} onEditCourse={handleOpenEditCourseModal} onDeleteCourse={handleDeleteCourse} onToggleCourseStatus={handleToggleCourseStatus} query={normalizedAdminSearch} />;
    if (activeAdminSection === "portfolio") return <AdminPortfolioPanel portfolioItems={adminPortfolioItems} onAddPortfolioItem={handleOpenPortfolioModal} onEditPortfolioItem={handleOpenEditPortfolioModal} onDeletePortfolioItem={handleDeletePortfolioItem} query={normalizedAdminSearch} />;
    if (activeAdminSection === "reviews") return <AdminReviewsPanel reviews={adminReviews} onAddReview={handleOpenReviewModal} onEditReview={handleOpenEditReviewModal} onDeleteReview={handleDeleteReview} query={normalizedAdminSearch} />;
    if (activeAdminSection === "requests") return <AdminRequestsPanel requests={adminRequests} onCycleRequestStatus={handleCycleRequestStatus} onDownloadRequest={handleDownloadRequest} onDownloadAllRequests={handleDownloadAllRequests} query={normalizedAdminSearch} />;
    if (activeAdminSection === "featured") return <AdminFeaturedPanel highlights={adminHighlights} onAddHighlight={handleOpenHighlightModal} onEditHighlight={handleOpenEditHighlightModal} onDeleteHighlight={handleDeleteHighlight} query={normalizedAdminSearch} />;
    if (activeAdminSection === "settings") return <AdminSettingsPanel settings={adminSettings} onUpdateSetting={handleUpdateSetting} onSaveSettings={() => showAdminNotice("Settings draft saved locally.")} />;

    return (
      <>
        <div className="admin-metrics">
          <AdminMetricCard icon={ShoppingBag} value={adminProducts.length} label="Shop products" copy="Books ready for catalog control" />
          <AdminMetricCard icon={MonitorPlay} value={adminCourses.length} label="Courses & tutorials" copy="Waitlist and embed-ready items" />
          <AdminMetricCard icon={ImageIcon} value={adminPortfolioItems.length} label="Portfolio items" copy="Grouped by service category" />
          <AdminMetricCard icon={Inbox} value={adminRequests.length} label="Project requests" copy="New submissions mock inbox" />
        </div>
        <div className="admin-dashboard-grid">
          <AdminRequestsPanel requests={adminRequests} onCycleRequestStatus={handleCycleRequestStatus} onDownloadRequest={handleDownloadRequest} onDownloadAllRequests={handleDownloadAllRequests} query={normalizedAdminSearch} />
          <AdminFeaturedPanel highlights={adminHighlights} onAddHighlight={handleOpenHighlightModal} onEditHighlight={handleOpenEditHighlightModal} onDeleteHighlight={handleDeleteHighlight} query={normalizedAdminSearch} />
        </div>
      </>
    );
  };

  return (
    <div className={`admin-page ${isSidebarCollapsed ? "admin-sidebar-collapsed" : ""}`}>
      <aside className="admin-sidebar">
        <div className="admin-sidebar-top">
          <BrandMark />
          <button
            className="admin-sidebar-toggle"
            type="button"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            aria-label={isSidebarCollapsed ? "Expand admin sidebar" : "Collapse admin sidebar"}
            aria-expanded={!isSidebarCollapsed}
          >
            <Menu size={18} />
          </button>
        </div>
        <nav aria-label="Admin dashboard navigation">
          {adminNavItems.map(({ id, label, icon: Icon }) => (
            <button
              className={activeAdminSection === id ? "is-active" : ""}
              type="button"
              onClick={() => setActiveAdminSection(id)}
              key={id}
            >
              <Icon size={18} /> <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="admin-sidebar-note">
          <strong>Django REST ready</strong>
          <span>Frontend mockup only. No backend writes yet.</span>
        </div>
      </aside>
      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <p>Danajet Admin</p>
            <h1>Website control dashboard</h1>
          </div>
          <div className="admin-topbar-actions">
            <label><Search size={17} /><input value={adminSearch} onChange={(event) => setAdminSearch(event.target.value)} placeholder="Search content, requests, clients..." /></label>
            <a href="/" target="_blank" rel="noreferrer"><Eye size={16} /> View Site</a>
          </div>
        </header>
        <div className="admin-notice" role="status"><ClipboardList size={16} /> {adminNotice}</div>
        {renderAdminPanel()}
      </main>
      {activeAdminModal === "book" && (
        <AdminModal
          eyebrow="Shop manager"
          title="Add new book"
          onClose={() => setActiveAdminModal(null)}
          footer={(
            <>
              <button type="button" onClick={() => setActiveAdminModal(null)}>Cancel</button>
              <button type="submit" form="admin-book-form"><Save size={16} /> Add Book</button>
            </>
          )}
        >
          <form className="admin-modal-form" id="admin-book-form" onSubmit={handleAddProduct}>
            <label>Book Title<input value={bookDraft.title} onChange={(event) => setBookDraft((draft) => ({ ...draft, title: event.target.value }))} placeholder="Little Wings, Big Dreams" autoFocus /></label>
            <label>Author / Brand<input value={bookDraft.author} onChange={(event) => setBookDraft((draft) => ({ ...draft, author: event.target.value }))} placeholder="Daniel the Booksmith" /></label>
            <label>Category<input value={bookDraft.category_label} onChange={(event) => setBookDraft((draft) => ({ ...draft, category_label: event.target.value }))} placeholder="Children's Book" /></label>
            <label>Price<input value={bookDraft.price} onChange={(event) => setBookDraft((draft) => ({ ...draft, price: event.target.value }))} placeholder="14.99" /></label>
            <label>Inventory<input value={bookDraft.inventory} onChange={(event) => setBookDraft((draft) => ({ ...draft, inventory: event.target.value }))} placeholder="25" /></label>
            <label>Amazon / Store Link<input value={bookDraft.amazonUrl} onChange={(event) => setBookDraft((draft) => ({ ...draft, amazonUrl: event.target.value }))} placeholder="https://..." /></label>
            <label className="admin-modal-wide">Short Description<textarea value={bookDraft.description} onChange={(event) => setBookDraft((draft) => ({ ...draft, description: event.target.value }))} placeholder="Describe the book for the shop page." /></label>
            <div className="admin-upload-box"><Upload size={20} /><strong>Upload cover or product images</strong><span>Frontend placeholder for Django media upload</span></div>
          </form>
        </AdminModal>
      )}
      {activeAdminModal === "course" && (
        <AdminModal
          eyebrow="Academy manager"
          title={editingCourseId ? "Edit course or tutorial" : "Add course or tutorial"}
          onClose={() => {
            setActiveAdminModal(null);
            setEditingCourseId(null);
          }}
          footer={(
            <>
              <button type="button" onClick={() => {
                setActiveAdminModal(null);
                setEditingCourseId(null);
              }}>Cancel</button>
              <button type="submit" form="admin-course-form"><Save size={16} /> {editingCourseId ? "Save Changes" : "Add Course"}</button>
            </>
          )}
        >
          <form className="admin-modal-form" id="admin-course-form" onSubmit={handleAddCourse}>
            <label>Course Title<input value={courseDraft.title} onChange={(event) => setCourseDraft((draft) => ({ ...draft, title: event.target.value }))} placeholder="Book Idea Blueprint" autoFocus /></label>
            <label>Category<select value={courseDraft.category} onChange={(event) => setCourseDraft((draft) => ({ ...draft, category: event.target.value }))}>{courseCategories.map((category) => <option value={category.title} key={category.title}>{category.title}</option>)}</select></label>
            <label>Price<input value={courseDraft.price} onChange={(event) => setCourseDraft((draft) => ({ ...draft, price: event.target.value }))} placeholder="$0" /></label>
            <label>Status<select value={courseDraft.status} onChange={(event) => setCourseDraft((draft) => ({ ...draft, status: event.target.value }))}><option>Draft</option><option>Coming soon</option><option>Published</option></select></label>
            <label className="admin-modal-wide">Embedded Link<input value={courseDraft.embedUrl} onChange={(event) => setCourseDraft((draft) => ({ ...draft, embedUrl: event.target.value }))} placeholder="YouTube, Vimeo, Canva, Gumroad, etc." /></label>
            <label className="admin-modal-wide">Course Description<textarea value={courseDraft.description} onChange={(event) => setCourseDraft((draft) => ({ ...draft, description: event.target.value }))} placeholder="What will students learn?" /></label>
            <div className="admin-upload-box"><Upload size={20} /><strong>Upload thumbnail or course files</strong><span>Frontend placeholder for Django media upload</span></div>
          </form>
        </AdminModal>
      )}
      {activeAdminModal === "portfolio" && (
        <AdminModal
          eyebrow="Portfolio manager"
          title={editingPortfolioId ? "Edit portfolio item" : "Add portfolio item"}
          onClose={() => {
            setActiveAdminModal(null);
            setEditingPortfolioId(null);
          }}
          footer={(
            <>
              <button type="button" onClick={() => {
                setActiveAdminModal(null);
                setEditingPortfolioId(null);
              }}>Cancel</button>
              <button type="submit" form="admin-portfolio-form"><Save size={16} /> {editingPortfolioId ? "Save Changes" : "Add Portfolio"}</button>
            </>
          )}
        >
          <form className="admin-modal-form" id="admin-portfolio-form" onSubmit={handleSavePortfolioItem}>
            <label>Project Title<input value={portfolioDraft.title} onChange={(event) => setPortfolioDraft((draft) => ({ ...draft, title: event.target.value }))} placeholder="Children's Book Cover Collection" autoFocus /></label>
            <label>Category<select value={portfolioDraft.category} onChange={(event) => setPortfolioDraft((draft) => ({ ...draft, category: event.target.value }))}>{portfolioCategories.filter((category) => category.id !== "all").map((category) => <option value={category.id} key={category.id}>{category.label}</option>)}</select></label>
            <label>Image Number<input value={portfolioDraft.image} onChange={(event) => setPortfolioDraft((draft) => ({ ...draft, image: event.target.value }))} placeholder="03" /></label>
            <label>Client / Brand<input value={portfolioDraft.client} onChange={(event) => setPortfolioDraft((draft) => ({ ...draft, client: event.target.value }))} placeholder="Tangie Cokes" /></label>
            <label>Status<select value={portfolioDraft.status} onChange={(event) => setPortfolioDraft((draft) => ({ ...draft, status: event.target.value }))}><option>Draft</option><option>Visible</option><option>Featured</option><option>Archived</option></select></label>
            <label>Embedded / Project Link<input value={portfolioDraft.embedUrl} onChange={(event) => setPortfolioDraft((draft) => ({ ...draft, embedUrl: event.target.value }))} placeholder="Amazon, Canva, YouTube, Behance, etc." /></label>
            <label className="admin-modal-wide">Project Description<textarea value={portfolioDraft.description} onChange={(event) => setPortfolioDraft((draft) => ({ ...draft, description: event.target.value }))} placeholder="Add project notes, deliverables, client instructions, or case study details." /></label>
            <div className="admin-upload-box"><Upload size={20} /><strong>Upload portfolio image or files</strong><span>Frontend placeholder for Django media upload</span></div>
          </form>
        </AdminModal>
      )}
      {activeAdminModal === "review" && (
        <AdminModal
          eyebrow="Social proof"
          title={editingReviewId ? "Edit review" : "Add review"}
          onClose={() => {
            setActiveAdminModal(null);
            setEditingReviewId(null);
          }}
          footer={(
            <>
              <button type="button" onClick={() => {
                setActiveAdminModal(null);
                setEditingReviewId(null);
              }}>Cancel</button>
              <button type="submit" form="admin-review-form"><Save size={16} /> {editingReviewId ? "Save Changes" : "Add Review"}</button>
            </>
          )}
        >
          <form className="admin-modal-form" id="admin-review-form" onSubmit={handleSaveReview}>
            <label>Reviewer Name<input value={reviewDraft.name} onChange={(event) => setReviewDraft((draft) => ({ ...draft, name: event.target.value }))} placeholder="Tangie Cokes" autoFocus /></label>
            <label>Role / Title<input value={reviewDraft.role} onChange={(event) => setReviewDraft((draft) => ({ ...draft, role: event.target.value }))} placeholder="Children's Book Author" /></label>
            <label>Rating<select value={reviewDraft.rating} onChange={(event) => setReviewDraft((draft) => ({ ...draft, rating: event.target.value }))}><option value="5">5 Stars</option><option value="4">4 Stars</option><option value="3">3 Stars</option><option value="2">2 Stars</option><option value="1">1 Star</option></select></label>
            <label>Button Type<select value={reviewDraft.service} onChange={(event) => setReviewDraft((draft) => ({ ...draft, service: event.target.value }))}><option value="amazon">Amazon</option><option value="canva">Canva</option><option value="website">Website</option></select></label>
            <label>Button Label<input value={reviewDraft.ctaLabel} onChange={(event) => setReviewDraft((draft) => ({ ...draft, ctaLabel: event.target.value }))} placeholder="View on Amazon" /></label>
            <label>Button Link<input value={reviewDraft.ctaUrl} onChange={(event) => setReviewDraft((draft) => ({ ...draft, ctaUrl: event.target.value }))} placeholder="https://..." /></label>
            <label>Project Name<input value={reviewDraft.project} onChange={(event) => setReviewDraft((draft) => ({ ...draft, project: event.target.value }))} placeholder="Children's book project" /></label>
            <label>Profile Image Path<input value={reviewDraft.image} onChange={(event) => setReviewDraft((draft) => ({ ...draft, image: event.target.value }))} placeholder="/assets/reviews/name.jpg" /></label>
            <label className="admin-modal-wide">Review Text<textarea value={reviewDraft.quote} onChange={(event) => setReviewDraft((draft) => ({ ...draft, quote: event.target.value }))} placeholder="Paste the client's testimonial here." /></label>
            <div className="admin-upload-box"><Upload size={20} /><strong>Upload reviewer headshot</strong><span>Frontend placeholder for Django media upload</span></div>
          </form>
        </AdminModal>
      )}
      {activeAdminModal === "highlight" && (
        <AdminModal
          eyebrow="Homepage controls"
          title={editingHighlightIndex !== null ? "Edit featured work" : "Add featured work"}
          onClose={() => {
            setActiveAdminModal(null);
            setEditingHighlightIndex(null);
          }}
          footer={(
            <>
              <button type="button" onClick={() => {
                setActiveAdminModal(null);
                setEditingHighlightIndex(null);
              }}>Cancel</button>
              <button type="submit" form="admin-highlight-form"><Save size={16} /> {editingHighlightIndex !== null ? "Save Changes" : "Add Highlight"}</button>
            </>
          )}
        >
          <form className="admin-modal-form" id="admin-highlight-form" onSubmit={handleSaveHighlight}>
            <label className="admin-modal-wide">Featured Work Title<input value={highlightDraft} onChange={(event) => setHighlightDraft(event.target.value)} placeholder="MISA Educational Series" autoFocus /></label>
            <div className="admin-upload-box"><Upload size={20} /><strong>Optional supporting image</strong><span>Frontend placeholder for Django media upload</span></div>
          </form>
        </AdminModal>
      )}
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
  if (path === "/admin") {
    document.title = "Admin Dashboard | Danajet";
    return <AdminDashboardPage />;
  }

  document.title = "Danajet | Helping Authors Make Their Books Soar";
  return <HomePage />;
}

export default App;
