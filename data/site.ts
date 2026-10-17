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
  { label: "Packages", href: "/products" },
];

export const contactDetails = {
  email: "grindupdigital@gmail.com",
  phoneDisplay: "+94 71 72 95 202",
  phoneHref: "+94717295202",
};

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/1BdFnYaJdY/?mibextid=wwXIfr" },
  { label: "Instagram", href: "https://www.facebook.com/share/1BdFnYaJdY/?mibextid=wwXIfr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/grind-up-digital/" },
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
  {
    title: "Online Computer Spare Parts Management System",
    category: "SaaS",
    slug: "online-computer-spare-parts-management-system",
    text: "A workflow-focused software solution designed for spare parts operations and efficient business management.",
    metric: "Business software",
    accent: "from-cyan via-brand to-zinc-950",
    
  },
  {
    title: "Brand Post Concept 01",
    category: "Posts",
    slug: "brand-post-concept-01",
    text: "A polished social post concept designed to build strong visual identity and brand recognition.",
    metric: "Social creative",
    accent: "from-brand via-coral to-ink",
    image: "/portfolio/1.jpg",
  },
  {
    title: "Webinar Flyer 1-1 v2",
    category: "Posts",
    slug: "webinar-flyer-1-1-v2",
    text: "Promotional webinar flyer variant.",
    metric: "Promotional asset",
    accent: "from-brand via-cyan to-white",
    image: "/portfolio/webinar-flyer-1-1-v2.png",
  },
  {
    title: "Brand Post Concept 04",
    category: "Posts",
    slug: "brand-post-concept-04",
    text: "A clean visual composition for short-form content with strong conversion cues.",
    metric: "Conversion post",
    accent: "from-brand via-cyan to-white",
    image: "/portfolio/4.png",
  },
  {
    title: "Brand Post Concept 05",
    category: "Posts",
    slug: "brand-post-concept-05",
    text: "A bold brand-forward social asset designed to stand out in a crowded feed.",
    metric: "Brand awareness",
    accent: "from-zinc-900 via-coral to-white",
    image: "/portfolio/5.png",
  },
  {
    title: "Brand Post Concept 07",
    category: "Posts",
    slug: "brand-post-concept-07",
    text: "A structured post layout built for polished, repeatable publishing across channels.",
    metric: "Content system",
    accent: "from-ink via-brand to-white",
    image: "/portfolio/7.jpg",
  },
  {
    title: "Brand Post Concept 02",
    category: "Posts",
    slug: "brand-post-concept-02",
    text: "A campaign-ready post design focused on clarity, tone, and audience engagement.",
    metric: "Campaign content",
    accent: "from-zinc-900 via-brand to-white",
    image: "/portfolio/2.png",
  },
  {
    title: "Brand Post Concept 03",
    category: "Posts",
    slug: "brand-post-concept-03",
    text: "A product and story-led social layout built for consistent brand storytelling.",
    metric: "Storytelling asset",
    accent: "from-ink via-zinc-800 to-cyan",
    image: "/portfolio/3.png",
  },
  {
    title: "Brand Post Concept 06",
    category: "Posts",
    slug: "brand-post-concept-06",
    text: "A premium-looking post concept that supports both visual storytelling and engagement.",
    metric: "Visual campaign",
    accent: "from-brand via-white to-cyan",
    image: "/portfolio/6.png",
  },
  {
    title: "Brand Post Concept 08",
    category: "Posts",
    slug: "brand-post-concept-08",
    text: "A creative social post concept developed to keep messaging clear and memorable.",
    metric: "Audience reach",
    accent: "from-cyan via-white to-brand",
    image: "/portfolio/8.png",
  },
  {
    title: "Brand Post Concept 09",
    category: "Posts",
    slug: "brand-post-concept-09",
    text: "A flexible post concept suited for product education, launches, and community content.",
    metric: "Launch content",
    accent: "from-zinc-950 via-brand to-cyan",
    image: "/portfolio/9.png",
  },
  {
    title: "Brand Post Concept 10",
    category: "Posts",
    slug: "brand-post-concept-10",
    text: "A refined social asset designed for brand trust, consistency, and strong first impressions.",
    metric: "Brand presence",
    accent: "from-white via-cyan to-brand",
    image: "/portfolio/10.png",
  },
  {
    title: "Automotive Showcase 01",
    category: "Videos",
    slug: "automotive-showcase-01",
    orientation: "portrait",
    image: "/videos/showcase/showcase-1.jpg",
    video: "/videos/showcase/showcase-1.mp4",
  },
  {
    title: "Webinar Campaign Ad",
    category: "Videos",
    slug: "webinar-campaign-ad",
    orientation: "portrait",
    image: "/videos/showcase/showcase-4.jpg",
    video: "/videos/showcase/showcase-4.mp4",
  },
  {
    title: "Automotive Showcase 02",
    category: "Videos",
    slug: "automotive-showcase-02",
    orientation: "portrait",
    image: "/videos/showcase/showcase-2.jpg",
    video: "/videos/showcase/showcase-2.mp4",
  },
  {
    title: "MC Automic Video 02",
    category: "Videos",
    slug: "mc-automic-video-02",
    client: "MC Automic",
    orientation: "portrait",
    image: "/videos/showcase/showcase-3.jpg",
    video: "/videos/showcase/showcase-3.mp4",
  },
  {
    title: "MC Automic Video 01",
    category: "Videos",
    slug: "mc-automic-video-01",
    client: "MC Automic",
    orientation: "portrait",
    image: "/videos/portfolio/mc-automic-video-01.jpg",
    video: "/videos/portfolio/mc-automic-video-01.mp4",
  },
  {
    title: "IWS Brand Showreel",
    category: "Videos",
    slug: "iws-brand-showreel",
    client: "IWS",
    orientation: "landscape",
    image: "/videos/portfolio/iws-brand-showreel.jpg",
    video: "/videos/portfolio/iws-brand-showreel.mp4",
  },
  {
    title: "Volvo Showroom Video",
    category: "Videos",
    slug: "volvo-showroom-video",
    client: "Volvo",
    orientation: "landscape",
    image: "/videos/portfolio/volvo-showroom-video.jpg",
    video: "/videos/portfolio/volvo-showroom-video.mp4",
  },
  {
    title: "Complicated Apes Podcast",
    category: "Videos",
    slug: "complicated-apes-podcast",
    client: "Complicated Apes",
    orientation: "landscape",
    image: "https://img.youtube.com/vi/s4p5aB9M60Y/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=s4p5aB9M60Y",
  },
  {
    title: "CellExpress Video 01",
    category: "Videos",
    slug: "cellexpress-video-01",
    client: "CellExpress",
    orientation: "portrait",
    image: "/videos/showcase/showcase-5.jpg",
    video: "/videos/showcase/showcase-5.mp4",
  },
  {
    title: "CellExpress Video 02",
    category: "Videos",
    slug: "cellexpress-video-02",
    client: "CellExpress",
    orientation: "portrait",
    image: "/videos/portfolio/cellexpress-video-02.jpg",
    video: "/videos/portfolio/cellexpress-video-02.mp4",
  },
  {
    title: "STEM Link UI/UX Campaign",
    category: "Videos",
    slug: "stem-link-uiux-campaign",
    client: "STEM Link",
    orientation: "portrait",
    image: "/videos/portfolio/stem-link-uiux-campaign.jpg",
    video: "/videos/portfolio/stem-link-uiux-campaign.mp4",
  },
  {
    title: "STEM Link Cybersecurity Campaign 01",
    category: "Videos",
    slug: "stem-link-cybersecurity-campaign-01",
    client: "STEM Link",
    orientation: "portrait",
    image: "/videos/portfolio/stem-link-cybersecurity-campaign-01.jpg",
    video: "/videos/portfolio/stem-link-cybersecurity-campaign-01.mp4",
  },
  {
    title: "STEM Link Cybersecurity Campaign 02",
    category: "Videos",
    slug: "stem-link-cybersecurity-campaign-02",
    client: "STEM Link",
    orientation: "portrait",
    image: "/videos/portfolio/stem-link-cybersecurity-campaign-02.jpg",
    video: "/videos/portfolio/stem-link-cybersecurity-campaign-02.mp4",
  },
  {
    title: "Shak Tea Commercial",
    category: "Videos",
    slug: "shak-tea-commercial",
    client: "Shak Tea",
    orientation: "landscape",
    image: "https://img.youtube.com/vi/45AyAZBGGU4/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=45AyAZBGGU4",
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
      "4 reels",
      "8 flyers",
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
      "8 reels",
      "12 flyers",
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
      "15 reels",
      "20 flyers",
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

// Homepage results marquee, shown in this order starting from the left.
// The right-hand stat is the outcome that matters most for each video (likes, shares, leads, sales, sign-ups...).
// TODO: replace "—" stats with real figures.
export type ShowcaseVideo = {
  src: string;
  poster: string;
  category: string;
  stats: { value: string; label: string }[];
};

export const showcaseVideos: ShowcaseVideo[] = [
  {
    src: "/videos/showcase/showcase-1.mp4",
    poster: "/videos/showcase/showcase-1.jpg",
    category: "Automotive",
    stats: [
      { value: "150K+", label: "Total views" },
      { value: "#1", label: "On client's channel" },
    ],
  },
  {
    src: "/videos/showcase/showcase-2.mp4",
    poster: "/videos/showcase/showcase-2.jpg",
    category: "Automotive",
    stats: [
      { value: "10K+", label: "Views" },
      { value: "—", label: "Likes" },
    ],
  },
  {
    src: "/videos/showcase/showcase-3.mp4",
    poster: "/videos/showcase/showcase-3.jpg",
    category: "Automotive",
    stats: [
      { value: "5K+", label: "Total views" },
      { value: "+450%", label: "Reach gain" },
    ],
  },
  {
    src: "/videos/showcase/showcase-5.mp4",
    poster: "/videos/showcase/showcase-5.jpg",
    category: "Mobile Retail",
    stats: [
      { value: "50K+", label: "Total views" },
      { value: "10+", label: "Sales" },
    ],
  },
  {
    src: "/videos/showcase/showcase-4.mp4",
    poster: "/videos/showcase/showcase-4.jpg",
    category: "Education",
    stats: [
      { value: "#1", label: "Campaign performer" },
      { value: "100+", label: "Webinar sign-ups" },
    ],
  },
];
