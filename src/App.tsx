import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  aboutAccordions,
  contactLinks,
  customVideos,
  drainPlans,
  findomCards,
  findomSubnav,
  icons,
  mainVideos,
  navItems,
  socialLinks,
  videoSubnav,
  type LinkItem,
  type NavItem,
  type VideoFile
} from "./content";

const { BadgeDollarSign, ChevronLeft, ExternalLink, FileLock2, Mail, Play } = icons;

const routeMap: Record<string, string> = {
  "/": "home",
  "/videos": "videos",
  "/videos/customs": "customs",
  "/videos/main": "main",
  "/findom": "findom",
  "/findom/auto-drains": "auto-drains",
  "/findom/contracts": "contracts",
  "/about": "about",
  "/contact": "contact",
  "/privacy": "privacy"
};

function usePathname() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleLocation = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleLocation);
    window.addEventListener("hh88:navigate", handleLocation);
    return () => {
      window.removeEventListener("popstate", handleLocation);
      window.removeEventListener("hh88:navigate", handleLocation);
    };
  }, []);

  return path;
}

function navigateTo(href: string) {
  if (href === window.location.pathname) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.history.pushState({}, "", href);
  window.dispatchEvent(new Event("hh88:navigate"));
  window.scrollTo({ top: 0, behavior: "instant" });
}

function routeSection(path: string): NavItem["section"] {
  if (path.startsWith("/videos")) return "videos";
  if (path.startsWith("/findom")) return "findom";
  if (path === "/about") return "about";
  if (path === "/contact" || path === "/privacy") return "contact";
  return "home";
}

function BrandHeader({ path }: { path: string }) {
  const section = routeSection(path);
  const extraItems = path.startsWith("/videos") ? videoSubnav.slice(1) : path.startsWith("/findom") ? findomSubnav.slice(1) : [];
  const allItems = navItems.flatMap((item) => {
    if (item.section === "videos" && extraItems.length && path.startsWith("/videos")) return [item, ...extraItems];
    if (item.section === "findom" && extraItems.length && path.startsWith("/findom")) return [item, ...extraItems];
    return [item];
  });

  return (
    <header className="site-header">
      <button className="money-banner" onClick={() => navigateTo("/")} aria-label="HH88TRANCE home">
        <span className="banner-rule banner-rule-left" />
        <span className="brand-mark">HH88TRANCE</span>
        <span className="banner-rule banner-rule-right" />
      </button>
      <nav className="main-nav" aria-label="Primary navigation">
        {allItems.map((item) => {
          const active =
            item.href === path ||
            (item.href === "/videos" && section === "videos" && path === "/videos") ||
            (item.href === "/findom" && section === "findom" && path === "/findom");
          return <NavButton key={item.href} item={item} active={active} />;
        })}
      </nav>
    </header>
  );
}

function NavButton({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <button className={`nav-link accent-${item.accent}${active ? " active" : ""}`} onClick={() => navigateTo(item.href)}>
      {item.label}
    </button>
  );
}

function AgeGate() {
  const [accepted, setAccepted] = useState(() => localStorage.getItem("hh88-age-ok") === "true");

  if (accepted) return null;

  return (
    <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div className="age-panel">
        <p className="micro-label">Adult content notice</p>
        <h2 id="age-title">18+ Entry Required</h2>
        <p>
          This site is intended for adults and contains adult-oriented audio, video, and financial devotion themes. Enter only if you are
          at least 18 years old and allowed to view this material where you live.
        </p>
        <div className="age-actions">
          <button
            className="primary-button"
            onClick={() => {
              localStorage.setItem("hh88-age-ok", "true");
              setAccepted(true);
            }}
          >
            I am 18+
          </button>
          <a className="secondary-button" href="https://www.google.com">
            Leave
          </a>
        </div>
      </div>
    </div>
  );
}

function Shell({ children, path }: { children: ReactNode; path: string }) {
  return (
    <>
      <div className="space-bg" aria-hidden="true" />
      <BrandHeader path={path} />
      <main>{children}</main>
      <Footer />
      <AgeGate />
    </>
  );
}

function HomePage() {
  return (
    <section className="hero page-shell">
      <p className="capsule">Findom | Hypno | Trance | ASMR | Control Files</p>
      <h1>
        <span>Pressure Engine</span>
        HH88TRANCE
        <span>Obey the Loop</span>
      </h1>
      <p className="hero-copy">
        Adult hypno, ASMR, heavy trance, and findom files built around pressure, repetition, fixation, and ritual surrender. Cold visuals,
        relentless audio, and command-driven pacing for viewers who want the file to take over.
      </p>
      <div className="button-row">
        <button className="primary-button" onClick={() => navigateTo("/videos")}>
          <Play size={18} /> Preview/Buy Videos
        </button>
        <button className="secondary-button" onClick={() => navigateTo("/contact")}>
          Contact HH88TRANCE
        </button>
      </div>
    </section>
  );
}

function VideosLanding() {
  return (
    <section className="split-cards page-shell">
      <h1 className="sr-only">Videos</h1>
      <button className="landing-card custom-card" onClick={() => navigateTo("/videos/customs")}>
        <span>Custom</span>
        <small>Commission Files</small>
      </button>
      <button className="landing-card main-card" onClick={() => navigateTo("/videos/main")}>
        <span>Main</span>
        <small>Files</small>
      </button>
    </section>
  );
}

function VideoPage({ type }: { type: "custom" | "main" }) {
  const videos = type === "custom" ? customVideos : mainVideos;
  return (
    <section className="page-shell listing-page">
      <InfoPanel
        title={type === "custom" ? "Custom Commission Files" : "Main Files"}
        copy={
          type === "custom"
            ? "Custom commission files are paid requests for individual clients or groups. Choose the pressure level, vocal approach, theme, final length up to 30 minutes, and whether the file should grind through repetition or stay tightly scripted."
            : "Main files are HH88TRANCE releases built for immersion, obedience, visual fixation, and repeat playback. Each full file is delivered in full quality through external purchase or subscription services."
        }
        strong={type === "custom" ? "Custom commission files are available to request for $200." : "All listed files are $80 unless marked otherwise."}
      />
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
      </div>
      <button className="sticky-switch" onClick={() => navigateTo(type === "custom" ? "/videos/main" : "/videos/customs")}>
        <ChevronLeft size={18} />
        View {type === "custom" ? "Main Files" : "Custom Commission Files"}
      </button>
    </section>
  );
}

function InfoPanel({ title, copy, strong }: { title: string; copy: string; strong?: string }) {
  return (
    <div className="info-panel">
      <h1>{title}</h1>
      <p>
        {copy} {strong ? <strong>{strong}</strong> : null}
      </p>
    </div>
  );
}

function VideoCard({ video }: { video: VideoFile }) {
  return (
    <article className="video-card">
      <div className={`video-still still-${video.kind}`}>
        <span className="price-pill">{video.price}</span>
        <span className="visual-text">{video.visual}</span>
        <div className="fake-controls">
          <Play size={16} />
          <span>0:00</span>
          <span className="control-line" />
        </div>
      </div>
      <div className="video-body">
        <h2>{video.title}</h2>
        <p className="creator">{video.creator}</p>
        {video.duration ? <span className="duration">{video.duration}</span> : null}
        <p className="meta">{video.meta.join(" | ")}</p>
        <a className="buy-button" href="#pending-video-payment" aria-label={`${video.title} payment link pending`}>
          Buy Now {video.price}
        </a>
      </div>
    </article>
  );
}

function FindomLanding() {
  return (
    <section className="page-shell findom-landing">
      <p className="capsule">Financial Domination</p>
      <h1>Submit to the Process</h1>
      <p className="lead">
        Structured tribute systems, recurring drains, and contract status pages for adult financial devotion with clear boundaries and off-site
        processing.
      </p>
      <div className="feature-grid">
        {findomCards.map(({ title, description, href, cta, Icon }) => (
          <article className="feature-card" key={title}>
            <div className="icon-box">
              <Icon size={31} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="primary-button small" onClick={() => navigateTo(href)}>
              {cta} <span aria-hidden="true">→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function AutoDrainsPage() {
  return (
    <section className="page-shell drains-page">
      <h1>
        <span>Auto</span>
        <BadgeDollarSign size={54} />
        <em>Drains</em>
      </h1>
      <p className="drain-tagline">Automatic. Recurring. External.</p>
      <div className="drain-list">
        {drainPlans.map((plan) => (
          <article className="drain-row" key={plan.name}>
            <div>
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>
            </div>
            <div className="drain-price">
              <strong>{plan.price}</strong>
              <span>{plan.cadence}</span>
              <small>External checkout pending</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContractsPage() {
  return (
    <section className="page-shell centered-card-page">
      <div className="status-card">
        <div className="icon-box">
          <FileLock2 size={35} />
        </div>
        <h1>Drafting Terms</h1>
        <p>Agreement templates are currently being reviewed. No signatures, payments, or identity documents are collected on this site.</p>
        <span className="status-pill">Under Construction</span>
        <button className="secondary-button" onClick={() => navigateTo("/findom")}>
          <ChevronLeft size={18} /> Return to Findom
        </button>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="page-shell about-page">
      <h1>HH88TRANCE</h1>
      <p className="subhead">Findom | Hypno | Trance | ASMR | Music | Ritual | Devotion | Control</p>
      <div className="text-card">
        <p>
          HH88TRANCE is an adult hypnotic video and audio creator specializing in findom, hypno, trance, and ASMR files with dark,
          repetitive visuals, controlled pacing, and an intentionally severe tone.
        </p>
        <p>Work is designed around immersion, pressure, repetition, and a controlled adult fantasy experience that feels heavier than casual entertainment.</p>
        <p>On this site you will find:</p>
        <Accordion />
      </div>
      <h2 className="section-title">Why the Files Work</h2>
      <div className="text-card two-column">
        <p>Repetition, contrast, music, and visual fixation create a focused rhythm that makes each file feel ritualized.</p>
        <p>Custom commissions let clients request structure, tone, pacing, and themes while keeping delivery and payment off-site.</p>
      </div>
    </section>
  );
}

function Accordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {aboutAccordions.map((item, index) => (
        <div className="accordion-item" key={item.title}>
          <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            {item.title}
            <span aria-hidden="true">⌄</span>
          </button>
          {open === index ? <p>{item.body}</p> : null}
        </div>
      ))}
    </div>
  );
}

function ContactPage() {
  return (
    <section className="page-shell contact-page">
      <h1>Links & Commissions</h1>
      <p className="subhead">Pay & Send Links | Contact Links | Custom Video Commission Form</p>
      <LinkSection title="Send Tribute Links" links={contactLinks} />
      <LinkSection title="Contact via DMs or Email" links={socialLinks} />
      <div className="text-card contact-note">
        <Mail size={22} />
        <p>
          Commission forms should include preferred style, vocal direction, video theme, length, repetition notes, budget, timeline, and any
          boundaries. Final payment and file delivery happen through external providers.
        </p>
      </div>
    </section>
  );
}

function LinkSection({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <section className="link-section">
      <h2>{title}</h2>
      <div className="link-list">
        {links.map((link) => (
          <a className="link-row" href={link.href} key={link.label} aria-disabled={link.pending}>
            <span>{link.label}</span>
            {link.pending ? <small>Pending URL</small> : null}
            <ExternalLink size={22} />
          </a>
        ))}
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <section className="page-shell privacy-page">
      <h1>Privacy Policy</h1>
      <p className="subhead">HH88TRANCE</p>
      <p className="privacy-intro">
        Your privacy is important. This policy outlines how this static site handles personal information for adult-oriented content,
        commissions, and external purchase links.
      </p>
      {[
        ["Purchases", "Payment processing is handled through external providers. This site does not store card details or process payments directly."],
        [
          "Commissions",
          "Commission requests may include contact information, project details, budget, and timeline. Use only the information needed to evaluate and discuss the request."
        ],
        ["Sends", "Tribute and subscription links point to third-party services. Their privacy and billing terms apply once you leave this site."],
        ["Age Gate", "The 18+ notice stores a local browser preference only. It is not sent to a server by this static site."]
      ].map(([title, body]) => (
        <article className="text-card privacy-card" key={title}>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      ))}
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="page-shell centered-card-page">
      <div className="status-card">
        <h1>Page Not Found</h1>
        <p>The requested page is not part of the HH88TRANCE route set.</p>
        <button className="primary-button" onClick={() => navigateTo("/")}>
          Return Home
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <button onClick={() => navigateTo("/privacy")}>Privacy Policy</button>
      <span>18+ only</span>
      <span>Payments handled off-site</span>
    </footer>
  );
}

export function App() {
  const path = usePathname();
  const page = useMemo(() => {
    switch (routeMap[path]) {
      case "home":
        return <HomePage />;
      case "videos":
        return <VideosLanding />;
      case "customs":
        return <VideoPage type="custom" />;
      case "main":
        return <VideoPage type="main" />;
      case "findom":
        return <FindomLanding />;
      case "auto-drains":
        return <AutoDrainsPage />;
      case "contracts":
        return <ContractsPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "privacy":
        return <PrivacyPage />;
      default:
        return <NotFoundPage />;
    }
  }, [path]);

  return (
    <>
      <Shell path={path}>{page}</Shell>
      <SpeedInsights />
    </>
  );
}
