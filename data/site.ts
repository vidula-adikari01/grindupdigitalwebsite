import {
  BadgeCheck,
  Brush,
  Clapperboard,
  Compass,
  LayoutTemplate,
  Megaphone,
  PenTool,
  PlaySquare,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Products", href: "/products" },
];

export const contactDetails = {
  email: "grindupdigital@gmail.com",
  phoneDisplay: "+94 71 72 95 202",
  phoneHref: "+94717295202",
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/grindupdigital/" },
  { label: "TikTok", href: "https://www.tiktok.com/@grindupdigital" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/grindupdigital" },
  { label: "Facebook", href: "https://www.facebook.com/grindupdigital" },
];

export const services = [
  {
    title: "Social Media Content",
    text: "Content calendars, post concepts, captions, and repeatable design systems for consistent publishing.",
    icon: Megaphone,
  },
  {
    title: "Video Production",
    text: "Short-form edits, campaign videos, founder content, product explainers, and launch-ready creative.",
    icon: Clapperboard,
  },
  {
    title: "Branding",
    text: "Identity, messaging, creative direction, and templates that make your business feel credible.",
    icon: Brush,
  },
  {
    title: "Web Design",
    text: "Modern websites and landing pages that explain your value clearly and convert attention.",
    icon: LayoutTemplate,
  },
  {
    title: "Digital Strategy",
    text: "Practical plans for visibility, positioning, content, and channel growth without guesswork.",
    icon: Compass,
  },
];

export const strategySteps = [
  {
    key: "audit",
    title: "Audit",
    text: "We map what is weak, missing, inconsistent, or confusing in your online presence.",
  },
  {
    key: "build",
    title: "Build",
    text: "We create the content, video, brand assets, website sections, and campaign materials.",
  },
  {
    key: "scale",
    title: "Scale",
    text: "We turn your presence into a repeatable system that earns trust and keeps momentum.",
  },
];

export const workItems = [
  {
    title: "Launch Content Kit",
    category: "Posts",
    slug: "posts",
    text: "A confident post system for a startup moving from scattered ideas to consistent visibility.",
    metric: "30-day calendar",
    accent: "from-brand via-coral to-ink",
  },
  {
    title: "Founder Video Series",
    category: "Videos",
    slug: "videos",
    text: "Short-form videos shaped around trust, clarity, education, and founder-led growth.",
    metric: "12 video cuts",
    accent: "from-ink via-brand-deep to-cyan",
  },
  {
    title: "Credibility Brand Refresh",
    category: "Branding",
    slug: "branding",
    text: "A sharper identity system for a growing business ready to look premium and reliable.",
    metric: "Visual toolkit",
    accent: "from-lime via-white to-brand",
  },
  {
    title: "Conversion Landing Page",
    category: "Web",
    slug: "web",
    text: "A polished landing page designed to turn cold traffic into qualified conversations.",
    metric: "Lead-focused",
    accent: "from-white via-cyan to-brand",
  },
  {
    title: "Dimuthu Foundation",
    category: "Web",
    slug: "dimuthu-foundation",
    text: "A Sri Lankan donation and NGO website built to communicate care, trust, and community impact.",
    metric: "NGO website",
    accent: "from-sky-200 via-cyan to-brand",
    image: "/portfolio/dimuthu-foundation-hero.png",
    href: "https://dimuthufoundation.org/?cmp_bypass=9fad397199a05773bf4ea282a0a551c1",
  },
  {
    title: "Prism Film",
    category: "Web",
    slug: "prism-film",
    text: "A Chinese-based car paint protection film brand website with bold product storytelling.",
    metric: "PPF brand site",
    accent: "from-zinc-950 via-blue-700 to-white",
    image: "/portfolio/prism-film-hero.png",
    href: "https://www.prismfilm.net/",
  },
];

export const products = [
  {
    key: "starter",
    name: "Starter",
    stage: "Testing the market",
    text: "For founders and lean teams that need consistent creative while validating demand.",
    highlighted: false,
    includes: [
      "8 short-form reels/month",
      "15 static designs",
      "Monthly strategy call",
      "Basic performance report",
    ],
  },
  {
    key: "growth",
    name: "Growth",
    stage: "Actively running ads",
    text: "The core growth package for brands that need stronger output, testing, and decision-making rhythm.",
    highlighted: true,
    includes: [
      "16 reels/month",
      "30 static designs",
      "A/B ad creative testing",
      "Bi-weekly calls + strategy",
      "Full performance dashboard",
    ],
  },
  {
    key: "performance",
    name: "Performance",
    stage: "Scaling revenue",
    text: "For brands ready to connect creative production, ad management, funnel insight, and performance upside.",
    highlighted: false,
    includes: [
      "Unlimited creatives",
      "Ad account management",
      "Monthly funnel gap audit",
      "Weekly strategy sessions",
      "Base fee + performance bonus",
    ],
  },
];

export const proofPoints = [
  { value: "10+", label: "client brands shaped" },
  { value: "5", label: "core creative services" },
  { value: "1", label: "joined-up growth system" },
];

export const homeHighlights = [
  { icon: Sparkles, label: "Modern creative direction" },
  { icon: BadgeCheck, label: "Credibility-first execution" },
  { icon: PlaySquare, label: "Video and content built to ship" },
  { icon: PenTool, label: "Brand systems, not one-off posts" },
];
