import {
  BadgeDollarSign,
  ChevronLeft,
  ClipboardSignature,
  ExternalLink,
  FileLock2,
  Mail,
  Play,
  WalletCards
} from "lucide-react";
import type { ComponentType } from "react";

export type Accent = "red" | "blue" | "steel" | "amber" | "white" | "cyan";

export type NavItem = {
  label: string;
  href: string;
  section: "home" | "videos" | "findom" | "about" | "contact";
  accent: Accent;
};

export type VideoFile = {
  title: string;
  creator: string;
  meta: string[];
  price: string;
  duration?: string;
  kind: "custom" | "main";
  visual: string;
};

export type LinkItem = {
  label: string;
  href: string;
  pending?: boolean;
};

export type AccordianItem = {
  title: string;
  body: string;
};

export type DrainPlan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", section: "home", accent: "red" },
  { label: "Videos", href: "/videos", section: "videos", accent: "cyan" },
  { label: "Findom", href: "/findom", section: "findom", accent: "steel" },
  { label: "About", href: "/about", section: "about", accent: "steel" },
  { label: "Contact", href: "/contact", section: "contact", accent: "amber" }
];

export const videoSubnav: NavItem[] = [
  { label: "Videos", href: "/videos", section: "videos", accent: "cyan" },
  { label: "Customs", href: "/videos/customs", section: "videos", accent: "red" },
  { label: "Main", href: "/videos/main", section: "videos", accent: "red" }
];

export const findomSubnav: NavItem[] = [
  { label: "Findom", href: "/findom", section: "findom", accent: "steel" },
  { label: "Auto-Drains", href: "/findom/auto-drains", section: "findom", accent: "red" },
  { label: "Contracts", href: "/findom/contracts", section: "findom", accent: "amber" }
];

export const customVideos: VideoFile[] = [
  {
    title: "Custom 4 - MTX",
    creator: "HH88TRANCE (Commissioned)",
    meta: ["Trance", "Pressure ritual", "Spoken word", "Unique audio"],
    price: "$80.00",
    kind: "custom",
    visual: "custom 4"
  },
  {
    title: "Custom 3 - CDL",
    creator: "HH88TRANCE (Commissioned)",
    meta: ["Trance", "Identity pressure", "Soft spoken", "Unique audio"],
    price: "$80.00",
    kind: "custom",
    visual: "custom 3"
  },
  {
    title: "Custom 2 - Ritual",
    creator: "HH88TRANCE (Commissioned)",
    meta: ["Hypno", "ASMR", "Identity loop", "Quiet vocals", "Unique audio"],
    price: "$80.00",
    kind: "custom",
    visual: "custom 2"
  },
  {
    title: "Custom 1 - Power",
    creator: "HH88TRANCE (Commissioned)",
    meta: ["Trance", "Visual loop", "Affirmation file", "Full quality"],
    price: "$80.00",
    kind: "custom",
    visual: "custom 1"
  }
];

export const mainVideos: VideoFile[] = [
  {
    title: "File 11",
    creator: "HH88TRANCE",
    meta: ["Hypno", "Intox loop", "Findom", "Soft spoken", "Unique audio"],
    duration: "1 hour max length",
    price: "$80.00",
    kind: "main",
    visual: "file 11"
  },
  {
    title: "File 10",
    creator: "HH88TRANCE",
    meta: ["Hypno", "Heavy trance", "Full quality", "Keep forever"],
    duration: "1 hour max length",
    price: "$80.00",
    kind: "main",
    visual: "file 10"
  },
  {
    title: "File 9",
    creator: "HH88TRANCE",
    meta: ["ASMR", "Visual spiral", "Deep audio", "Soft spoken"],
    duration: "1 hour max length",
    price: "$80.00",
    kind: "main",
    visual: "file 9"
  },
  {
    title: "File 8",
    creator: "HH88TRANCE",
    meta: ["Trance", "Music", "Looped visuals", "Full quality"],
    duration: "1 hour max length",
    price: "$80.00",
    kind: "main",
    visual: "file 8"
  }
];

export const contactLinks: LinkItem[] = [
  { label: "$2.99 forever Stripe subscription", href: "#pending-stripe-subscription", pending: true },
  { label: "Cash App", href: "#pending-cashapp", pending: true },
  { label: "Any amount Stripe send", href: "#pending-stripe-send", pending: true },
  { label: "Throne", href: "#pending-throne", pending: true },
  { label: "Patreon - unlock all full audio files", href: "#pending-patreon", pending: true }
];

export const socialLinks: LinkItem[] = [
  { label: "Main X account", href: "#pending-main-x", pending: true },
  { label: "Backup X account", href: "#pending-backup-x", pending: true },
  { label: "Email for commissions", href: "mailto:commissions@example.com", pending: true }
];

export const aboutAccordions: AccordianItem[] = [
  {
    title: "What you will watch",
    body: "Dark adult trance, ASMR, and music-driven audio/video files built around ritual, repetition, devotion, and hard visual fixation."
  },
  {
    title: "How you will buy the full files",
    body: "Preview cards lead to external payment or delivery services. The site does not process cards or store payment data."
  },
  {
    title: "How you will commission a custom file",
    body: "Use the contact links to describe style, vocal direction, theme, length, repetition preference, and budget. Approved commissions are handled off-site."
  }
];

export const drainPlans: DrainPlan[] = [
  {
    name: "Drip Drain",
    price: "$2.99",
    cadence: "/ Week",
    description: "Slow recurring tribute that keeps the ritual active week after week."
  },
  {
    name: "Good Boy Drain",
    price: "$4.99",
    cadence: "/ Week",
    description: "A steady recurring tribute for followers who want stricter commitment."
  },
  {
    name: "Devoted Drain",
    price: "$2.99",
    cadence: "/ Daily",
    description: "A daily recurring send built for consistent financial devotion."
  },
  {
    name: "Loyal Leak",
    price: "$4.99",
    cadence: "/ Daily",
    description: "A higher-frequency tribute for a more disciplined routine."
  }
];

export const findomCards: Array<{
  title: string;
  description: string;
  href: string;
  cta: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}> = [
  {
    title: "Auto-Drains",
    description: "Set up automated recurring tributes through external providers. This site does not collect payment details.",
    href: "/findom/auto-drains",
    cta: "Configure Drain",
    Icon: WalletCards
  },
  {
    title: "Contracts",
    description: "Review structured devotion terms and future agreement options before anything is signed.",
    href: "/findom/contracts",
    cta: "View Contracts",
    Icon: ClipboardSignature
  }
];

export const icons = {
  BadgeDollarSign,
  ChevronLeft,
  ExternalLink,
  FileLock2,
  Mail,
  Play
};
