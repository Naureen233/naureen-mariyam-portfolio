import { ExternalLink, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { SiLinkedin } from "react-icons/si";

// ─── DATA ────────────────────────────────────────────────────────────────────

const SKILLS = [
  "SEO Content Writing",
  "Copywriting",
  "Blogging",
  "Website Content",
  "Social Media Content",
  "Ad Copywriting",
  "LinkedIn Content",
  "Keyword Research",
];

const SERVICES = [
  {
    num: "01",
    title: "SEO Blog Writing",
    body: "Blogs that rank on Google and resonate with real people. Strong keyword research, natural writing, engaging and easy to understand.",
  },
  {
    num: "02",
    title: "Website Copywriting",
    body: "Compelling homepage, about, and landing page copy that communicates your value and converts visitors into clients.",
  },
  {
    num: "03",
    title: "Social Media Content",
    body: "Scroll-stopping captions, LinkedIn articles, and Quora answers that build your brand presence and community engagement.",
  },
  {
    num: "04",
    title: "Ad Copywriting",
    body: "High-converting ad copies for Instagram, Facebook, and Google Ads — short, punchy, and laser-focused on your audience.",
  },
  {
    num: "05",
    title: "Ghostwriting",
    body: "I write in your voice so you get all the credit. LinkedIn articles, thought leadership pieces, and blog posts under your name.",
  },
  {
    num: "06",
    title: "Product Descriptions",
    body: "Product descriptions that grab attention for e-commerce stores and brand websites — benefit-focused and conversion-ready.",
  },
];

type PortfolioCategory = "all" | "blog" | "social" | "copy";

const PORTFOLIO = [
  {
    cat: "blog" as PortfolioCategory,
    type: "Blog · Tech",
    title: "Benefits of Managed IT Services",
    client: "JachOOs Systems, Dubai",
    href: "https://jachoos.systems/it-services/benefits-of-managed-it-services/",
  },
  {
    cat: "blog" as PortfolioCategory,
    type: "Blog · Health & Wellness",
    title: "Ayurvedic Treatments for Stress and Anxiety",
    client: "AyurdharA Ayurvedic",
    href: "https://ayurdhara.in/blog/ayurvedic-treatments-for-stress-and-anxiety/",
  },
  {
    cat: "blog" as PortfolioCategory,
    type: "Blog · Finance",
    title: "How to Apply for a Business Loan",
    client: "FinanceKart",
    href: "https://financekart.in/blog/how-to-apply-for-business-loan/",
  },
  {
    cat: "blog" as PortfolioCategory,
    type: "Blog · Tech",
    title: "What is Cloud Computing?",
    client: "TechSoft Solutions",
    href: "https://techsoftsolutions.in/blog/what-is-cloud-computing/",
  },
  {
    cat: "social" as PortfolioCategory,
    type: "Social Media",
    title: "LinkedIn Growth Series — 5 Posts",
    client: "Personal Brand Client",
    href: "#",
  },
  {
    cat: "copy" as PortfolioCategory,
    type: "Copywriting",
    title: "Homepage Copy Rewrite",
    client: "E-commerce Brand",
    href: "#",
  },
];

const EXPERIENCE = [
  {
    date: "Jan 2024 – Present",
    company: "Kognics Technology",
    role: "Junior Content Writer",
    points: [
      "Write SEO-optimised blog posts and articles",
      "Develop website copy and landing page content",
      "Conduct keyword research using SEMrush and Google Search Console",
      "Collaborate with design and marketing teams on campaigns",
    ],
  },
  {
    date: "Jun 2023 – Dec 2023",
    company: "Digital Agency, Kochi",
    role: "Digital Marketing Executive",
    points: [
      "Managed social media accounts for 5+ clients",
      "Created content calendars and caption copy",
      "Ran Facebook and Instagram ad campaigns",
      "Monitored analytics and prepared performance reports",
    ],
  },
  {
    date: "Jan 2022 – May 2023",
    company: "StartupHub Kochi",
    role: "Content Copywriter Trainee",
    points: [
      "Wrote product descriptions and ad copies",
      "Assisted in email marketing campaigns",
      "Learned SEO fundamentals and on-page optimisation",
    ],
  },
];

const TOOLS = [
  "Google Docs",
  "Microsoft Word",
  "SEMrush",
  "Ahrefs",
  "Google Search Console",
  "Yoast SEO",
  "Canva",
  "Grammarly",
  "ChatGPT (for research)",
  "WordPress",
  "Notion",
  "Google Analytics",
];

const CERTS = [
  { issuer: "HubSpot", name: "Content Marketing Certification" },
  { issuer: "Google", name: "Google Analytics Individual Qualification" },
  { issuer: "HubSpot", name: "SEO Certification" },
  { issuer: "Coursera", name: "Creative Writing Specialisation" },
  { issuer: "SEMrush", name: "SEO Fundamentals" },
  { issuer: "Google", name: "Digital Marketing Certificate" },
  { issuer: "LinkedIn Learning", name: "Copywriting Foundations" },
  { issuer: "IPCS Digital", name: "Professional Diploma in Digital Marketing" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function applyStyles(el: HTMLElement, styles: Record<string, string>) {
  for (const [k, v] of Object.entries(styles)) {
    (el.style as unknown as Record<string, string>)[k] = v;
  }
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Nav() {
  const hireOn = (e: React.SyntheticEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.background = "var(--ink)";
  };
  const hireOff = (e: React.SyntheticEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.background = "var(--terracotta)";
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.2rem 5%",
        background: "rgba(250,247,242,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <a
        href="#home"
        className="font-playfair text-terracotta font-bold no-underline"
        style={{ fontSize: "1.3rem" }}
        data-ocid="nav.link"
      >
        Naureen Mariyam
      </a>
      <ul
        className="hidden md:flex gap-9 list-none"
        style={{ alignItems: "center" }}
      >
        {(["#about", "#services", "#portfolio", "#experience"] as const).map(
          (href, i) => (
            <li key={href}>
              <a
                href={href}
                className="no-underline text-ink text-xs font-medium tracking-widest uppercase transition-colors hover:text-terracotta"
                data-ocid={`nav.${["about", "services", "portfolio", "experience"][i]}.link`}
              >
                {["About", "Services", "Portfolio", "Experience"][i]}
              </a>
            </li>
          ),
        )}
        <li>
          <a
            href="#contact"
            className="no-underline text-white font-semibold text-xs tracking-widest uppercase px-5 py-2 transition-all"
            style={{ background: "var(--terracotta)", borderRadius: "2px" }}
            onMouseOver={hireOn}
            onFocus={hireOn}
            onMouseOut={hireOff}
            onBlur={hireOff}
            data-ocid="nav.hire.button"
          >
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

function HoverButton({
  href,
  className,
  baseStyle,
  hoverStyle,
  outStyle,
  children,
  ocid,
}: {
  href: string;
  className?: string;
  baseStyle: React.CSSProperties;
  hoverStyle: Record<string, string>;
  outStyle: Record<string, string>;
  children: React.ReactNode;
  ocid?: string;
}) {
  const on = (e: React.SyntheticEvent<HTMLElement>) => {
    applyStyles(e.currentTarget as HTMLElement, hoverStyle);
  };
  const off = (e: React.SyntheticEvent<HTMLElement>) => {
    applyStyles(e.currentTarget as HTMLElement, outStyle);
  };
  return (
    <a
      href={href}
      className={className}
      style={baseStyle}
      onMouseOver={on}
      onFocus={on}
      onMouseOut={off}
      onBlur={off}
      data-ocid={ocid}
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "8rem 5% 4rem",
        gap: "4rem",
        background: "var(--cream)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(196,98,45,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div className="animate-fade-up">
        <span
          className="inline-block text-terracotta font-semibold tracking-widest uppercase border border-terracotta px-3 py-1 mb-6"
          style={{ fontSize: "0.75rem", borderRadius: "2px" }}
        >
          ✦ Content Writer in Kochi
        </span>
        <h1
          className="font-playfair font-black mb-4"
          style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", lineHeight: 1.08 }}
        >
          Words that <em style={{ color: "var(--terracotta)" }}>work</em> for
          your brand
        </h1>
        <p
          className="font-light mb-10"
          style={{
            fontSize: "1.05rem",
            color: "var(--warm-mid)",
            lineHeight: 1.7,
            maxWidth: 480,
          }}
        >
          Hi, I&apos;m Naureen Mariyam — a content writer and copywriter based
          in Kochi with 1.5 years of experience crafting SEO-friendly blogs,
          website copy, and social media content that actually converts.
        </p>
        <div className="flex gap-4 flex-wrap">
          <HoverButton
            href="#portfolio"
            className="inline-block text-white font-semibold transition-all"
            baseStyle={{
              background: "var(--terracotta)",
              padding: "0.85rem 2rem",
              borderRadius: "2px",
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
            hoverStyle={{
              background: "var(--ink)",
              transform: "translateY(-2px)",
            }}
            outStyle={{
              background: "var(--terracotta)",
              transform: "translateY(0)",
            }}
            ocid="hero.primary_button"
          >
            View My Work
          </HoverButton>
          <HoverButton
            href="#contact"
            className="inline-block font-semibold transition-all"
            baseStyle={{
              background: "transparent",
              color: "var(--ink)",
              padding: "0.85rem 2rem",
              border: "1.5px solid var(--ink)",
              borderRadius: "2px",
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
            hoverStyle={{
              background: "var(--ink)",
              color: "var(--cream)",
              transform: "translateY(-2px)",
            }}
            outStyle={{
              background: "transparent",
              color: "var(--ink)",
              transform: "translateY(0)",
            }}
            ocid="hero.secondary_button"
          >
            Let&apos;s Talk
          </HoverButton>
        </div>
      </div>

      <div className="animate-fade-up-delay flex justify-center items-center">
        <div style={{ position: "relative", width: 360, height: 420 }}>
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              width: "100%",
              height: "100%",
              border: "2px solid var(--gold)",
              borderRadius: 4,
              zIndex: 0,
            }}
          />
          <img
            src="/assets/uploads/IMG-20260113-WA0002-1.jpg"
            alt="Naureen Mariyam"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -18,
              right: -18,
              zIndex: 2,
              background: "var(--terracotta)",
              color: "#fff",
              padding: "1rem 1.2rem",
              borderRadius: 4,
              fontSize: "0.8rem",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            <span
              className="font-playfair font-black block"
              style={{ fontSize: "1.4rem" }}
            >
              1.5
            </span>
            Years
            <br />
            Experience
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #home { grid-template-columns: 1fr !important; text-align: center; gap: 3rem; }
          #home > div:nth-child(3) { order: -1; }
          #home > div:nth-child(3) > div { width: 260px !important; height: 300px !important; }
        }
      `}</style>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { num: "20+", label: "Articles Written" },
    { num: "10+", label: "Brands Served" },
    { num: "5+", label: "Niches Covered" },
    { num: "8+", label: "Certifications" },
  ];
  return (
    <div
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{
            flex: 1,
            maxWidth: 200,
            padding: "2rem 1.5rem",
            textAlign: "center",
            borderRight:
              i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}
        >
          <span
            className="font-playfair font-black block"
            style={{ fontSize: "2.2rem", color: "var(--gold)" }}
          >
            {s.num}
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function SkillTag({ label }: { label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      style={{
        background: hov ? "var(--terracotta)" : "var(--cream)",
        color: hov ? "#fff" : "var(--ink)",
        border: hov
          ? "1px solid var(--terracotta)"
          : "1px solid var(--border-color)",
        padding: "0.4rem 1rem",
        borderRadius: "2px",
        fontSize: "0.8rem",
        fontWeight: 500,
        cursor: "default",
        transition: "all 0.2s",
      }}
      onMouseOver={() => setHov(true)}
      onFocus={() => setHov(true)}
      onMouseOut={() => setHov(false)}
      onBlur={() => setHov(false)}
    >
      {label}
    </span>
  );
}

function About() {
  const education = [
    {
      years: "2020 – 2021",
      degree: "Professional Diploma in Digital Marketing",
      school: "IPCS Digital, Kaloor, Kochi",
    },
    {
      years: "2018 – 2020",
      degree: "Master of Commerce (M.Com)",
      school: "Mohammed Sathak College, Chennai",
    },
    {
      years: "2015 – 2018",
      degree: "B.Com (Computer Application)",
      school: "Mohammed Sathak College, Chennai",
    },
  ];
  return (
    <section
      id="about"
      style={{
        background: "var(--light-warm)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
        padding: "5rem 5%",
      }}
    >
      <div>
        <span
          className="text-terracotta font-semibold tracking-widest uppercase block mb-3"
          style={{ fontSize: "0.72rem" }}
        >
          About Me
        </span>
        <h2
          className="font-playfair font-black mb-5"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
        >
          From numbers to <em style={{ color: "var(--terracotta)" }}>words</em>{" "}
          — I followed my heart
        </h2>
        <blockquote
          className="font-playfair italic"
          style={{
            fontSize: "1.5rem",
            color: "var(--terracotta)",
            lineHeight: 1.5,
            borderLeft: "3px solid var(--gold)",
            paddingLeft: "1.5rem",
            margin: "1.5rem 0",
          }}
        >
          &ldquo;I&apos;m a content writer in Kochi who can make your content
          come to life. I won&apos;t ghost you.&rdquo;
        </blockquote>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "var(--warm-mid)",
          }}
        >
          I&apos;m an M.Com graduate who chose words over spreadsheets — and
          never looked back. After completing a Professional Diploma in Digital
          Marketing from IPCS Digital, I&apos;ve worked as a Junior Content
          Writer, Digital Marketing Executive, and Content Copywriter Trainee
          across Kochi&apos;s top tech parks and beyond.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {SKILLS.map((skill) => (
            <SkillTag key={skill} label={skill} />
          ))}
        </div>
      </div>

      <div>
        <span
          className="text-terracotta font-semibold tracking-widest uppercase block mb-4"
          style={{ fontSize: "0.72rem" }}
        >
          Education
        </span>
        <div className="flex flex-col gap-6">
          {education.map((edu) => (
            <div key={edu.degree}>
              <div
                className="text-terracotta font-semibold tracking-widest uppercase"
                style={{ fontSize: "0.75rem" }}
              >
                {edu.years}
              </div>
              <div
                className="font-playfair font-bold"
                style={{ fontSize: "1.1rem" }}
              >
                {edu.degree}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--warm-mid)" }}>
                {edu.school}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #about { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseOver={() => setHov(true)}
      onFocus={() => setHov(true)}
      onMouseOut={() => setHov(false)}
      onBlur={() => setHov(false)}
      style={{
        background: hov ? "var(--ink)" : "var(--cream)",
        padding: "2.5rem 2rem",
        transition: "background 0.25s",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      <span
        className="font-playfair font-black block mb-3"
        style={{
          fontSize: "3rem",
          color: hov ? "rgba(255,255,255,0.1)" : "var(--border-color)",
          transition: "color 0.25s",
        }}
      >
        {num}
      </span>
      <div
        className="font-playfair font-bold mb-3"
        style={{
          fontSize: "1.3rem",
          color: hov ? "var(--gold)" : "var(--ink)",
          transition: "color 0.25s",
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: hov ? "rgba(255,255,255,0.7)" : "var(--warm-mid)",
          transition: "color 0.25s",
        }}
      >
        {body}
      </p>
    </div>
  );
}

function Services() {
  return (
    <section
      id="services"
      style={{ background: "var(--cream)", padding: "5rem 5%" }}
    >
      <span
        className="text-terracotta font-semibold tracking-widest uppercase block mb-3"
        style={{ fontSize: "0.72rem" }}
      >
        What I Do
      </span>
      <h2
        className="font-playfair font-black mb-3"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
      >
        Services that move the needle
      </h2>
      <p
        className="mb-10"
        style={{
          color: "var(--warm-mid)",
          fontSize: "1rem",
          maxWidth: 560,
          lineHeight: 1.75,
        }}
      >
        End-to-end content solutions — from ideation to SEO-optimised delivery.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5px",
          background: "var(--border-color)",
          border: "1.5px solid var(--border-color)",
        }}
      >
        {SERVICES.map((svc) => (
          <ServiceCard key={svc.num} {...svc} />
        ))}
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof PORTFOLIO)[number];
  index: number;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseOver={() => setHov(true)}
      onFocus={() => setHov(true)}
      onMouseOut={() => setHov(false)}
      onBlur={() => setHov(false)}
      style={{
        border: hov
          ? "1.5px solid var(--terracotta)"
          : "1.5px solid var(--border-color)",
        borderRadius: 4,
        padding: "1.8rem",
        background: "var(--cream)",
        transition: "all 0.25s",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? "0 12px 40px rgba(196,98,45,0.12)" : "none",
        overflow: "hidden",
      }}
      data-ocid={`portfolio.item.${index}`}
    >
      <span
        className="block font-semibold tracking-widest uppercase text-terracotta mb-2"
        style={{ fontSize: "0.7rem" }}
      >
        {item.type}
      </span>
      <div
        className="font-playfair font-bold mb-2"
        style={{ fontSize: "1.05rem", lineHeight: 1.35 }}
      >
        {item.title}
      </div>
      <div
        className="mb-4"
        style={{ fontSize: "0.8rem", color: "var(--warm-mid)" }}
      >
        {item.client}
      </div>
      {item.href !== "#" ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-read-link inline-flex items-center gap-1 text-terracotta font-semibold no-underline"
          style={{ fontSize: "0.82rem", letterSpacing: "0.03em" }}
          data-ocid={`portfolio.link.${index}`}
        >
          Read Article <ExternalLink size={12} />
        </a>
      ) : (
        <span
          className="inline-flex items-center gap-1 text-terracotta font-semibold"
          style={{ fontSize: "0.82rem", letterSpacing: "0.03em", opacity: 0.5 }}
        >
          Private Project
        </span>
      )}
    </div>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");

  const cats: { key: PortfolioCategory; label: string }[] = [
    { key: "all", label: "All" },
    { key: "blog", label: "Blogs" },
    { key: "social", label: "Social Media" },
    { key: "copy", label: "Copywriting" },
  ];

  const filtered =
    activeFilter === "all"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.cat === activeFilter);

  return (
    <section
      id="portfolio"
      style={{ background: "var(--light-warm)", padding: "5rem 5%" }}
    >
      <span
        className="text-terracotta font-semibold tracking-widest uppercase block mb-3"
        style={{ fontSize: "0.72rem" }}
      >
        My Work
      </span>
      <h2
        className="font-playfair font-black mb-3"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
      >
        Published across the web
      </h2>
      <p
        className="mb-8"
        style={{
          color: "var(--warm-mid)",
          fontSize: "1rem",
          maxWidth: 560,
          lineHeight: 1.75,
        }}
      >
        Live articles, blog posts, and ad copies across multiple industries and
        brands.
      </p>
      <div className="flex gap-2 flex-wrap mb-10">
        {cats.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActiveFilter(c.key)}
            style={{
              padding: "0.45rem 1.1rem",
              border:
                activeFilter === c.key
                  ? "1.5px solid var(--terracotta)"
                  : "1.5px solid var(--border-color)",
              background:
                activeFilter === c.key ? "var(--terracotta)" : "transparent",
              borderRadius: "2px",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              cursor: "pointer",
              textTransform: "uppercase",
              color: activeFilter === c.key ? "#fff" : "var(--warm-mid)",
              transition: "all 0.2s",
            }}
            data-ocid={`portfolio.${c.key}.tab`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((p, i) => (
          <PortfolioCard key={p.title} item={p} index={i + 1} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      style={{ background: "var(--light-warm)", padding: "5rem 5%" }}
    >
      <span
        className="text-terracotta font-semibold tracking-widest uppercase block mb-3"
        style={{ fontSize: "0.72rem" }}
      >
        Work History
      </span>
      <h2
        className="font-playfair font-black mb-10"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
      >
        Experience
      </h2>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: "var(--border-color)",
          }}
        />
        {EXPERIENCE.map((exp, i) => (
          <div
            key={exp.company}
            style={{
              paddingLeft: "2.5rem",
              marginBottom: i < EXPERIENCE.length - 1 ? "3rem" : 0,
              position: "relative",
            }}
            data-ocid={`experience.item.${i + 1}`}
          >
            <div
              style={{
                position: "absolute",
                left: -5,
                top: 6,
                width: 12,
                height: 12,
                background: "var(--terracotta)",
                borderRadius: "50%",
                border: "2px solid var(--light-warm)",
              }}
            />
            <div
              className="text-terracotta font-semibold tracking-widest uppercase mb-1"
              style={{ fontSize: "0.75rem" }}
            >
              {exp.date}
            </div>
            <div
              className="font-playfair font-bold mb-1"
              style={{ fontSize: "1.2rem" }}
            >
              {exp.company}
            </div>
            <div
              className="font-medium mb-3"
              style={{ fontSize: "0.85rem", color: "var(--warm-mid)" }}
            >
              {exp.role}
            </div>
            <ul style={{ listStyle: "none" }}>
              {exp.points.map((pt) => (
                <li
                  key={pt}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--warm-mid)",
                    lineHeight: 1.7,
                    paddingLeft: "1rem",
                    position: "relative",
                    marginBottom: "0.3rem",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--terracotta)",
                      fontSize: "0.8rem",
                    }}
                  >
                    →
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolPill({ label }: { label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseOver={() => setHov(true)}
      onFocus={() => setHov(true)}
      onMouseOut={() => setHov(false)}
      onBlur={() => setHov(false)}
      style={{
        background: hov ? "var(--terracotta)" : "rgba(255,255,255,0.07)",
        border: hov
          ? "1px solid var(--terracotta)"
          : "1px solid rgba(255,255,255,0.12)",
        padding: "0.7rem 1.4rem",
        borderRadius: 100,
        fontSize: "0.9rem",
        fontWeight: 500,
        cursor: "default",
        transition: "all 0.2s",
      }}
    >
      {label}
    </span>
  );
}

function ToolsSection() {
  return (
    <section
      id="tools"
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "5rem 5%",
      }}
    >
      <span
        className="font-semibold tracking-widest uppercase block mb-3"
        style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)" }}
      >
        My Toolkit
      </span>
      <h2
        className="font-playfair font-black mb-3"
        style={{
          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
          lineHeight: 1.15,
          color: "var(--cream)",
        }}
      >
        Tools I work with
      </h2>
      <p
        className="mb-10"
        style={{
          fontSize: "1rem",
          color: "rgba(255,255,255,0.5)",
          maxWidth: 560,
          lineHeight: 1.75,
        }}
      >
        The software and platforms I rely on to deliver quality content, every
        time.
      </p>
      <div className="flex flex-wrap gap-4">
        {TOOLS.map((tool) => (
          <ToolPill key={tool} label={tool} />
        ))}
      </div>
    </section>
  );
}

function CertCard({
  cert,
  index,
}: {
  cert: (typeof CERTS)[number];
  index: number;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseOver={() => setHov(true)}
      onFocus={() => setHov(true)}
      onMouseOut={() => setHov(false)}
      onBlur={() => setHov(false)}
      style={{
        background: "var(--light-warm)",
        border: hov
          ? "1.5px solid var(--gold)"
          : "1.5px solid var(--border-color)",
        padding: "1.5rem",
        borderRadius: 4,
        transition: "all 0.2s",
      }}
      data-ocid={`certifications.item.${index}`}
    >
      <div
        className="text-terracotta font-semibold tracking-widest uppercase mb-2"
        style={{ fontSize: "0.72rem" }}
      >
        {cert.issuer}
      </div>
      <div style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.4 }}>
        {cert.name}
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <section
      id="certifications"
      style={{ background: "var(--cream)", padding: "5rem 5%" }}
    >
      <span
        className="text-terracotta font-semibold tracking-widest uppercase block mb-3"
        style={{ fontSize: "0.72rem" }}
      >
        Credentials
      </span>
      <h2
        className="font-playfair font-black mb-10"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
      >
        Certifications
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {CERTS.map((cert, i) => (
          <CertCard key={cert.name} cert={cert} index={i + 1} />
        ))}
      </div>
    </section>
  );
}

function ContactButton({
  href,
  isExternal,
  className,
  baseStyle,
  hoverStyle,
  outStyle,
  children,
  ocid,
}: {
  href: string;
  isExternal?: boolean;
  className?: string;
  baseStyle: React.CSSProperties;
  hoverStyle: Record<string, string>;
  outStyle: Record<string, string>;
  children: React.ReactNode;
  ocid?: string;
}) {
  const on = (e: React.SyntheticEvent<HTMLElement>) => {
    applyStyles(e.currentTarget as HTMLElement, hoverStyle);
  };
  const off = (e: React.SyntheticEvent<HTMLElement>) => {
    applyStyles(e.currentTarget as HTMLElement, outStyle);
  };
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
      style={baseStyle}
      onMouseOver={on}
      onFocus={on}
      onMouseOut={off}
      onBlur={off}
      data-ocid={ocid}
    >
      {children}
    </a>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--terracotta)",
        color: "#fff",
        textAlign: "center",
        padding: "6rem 5%",
      }}
    >
      <span
        style={{
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.6)",
          display: "block",
          marginBottom: "0.8rem",
        }}
      >
        Get In Touch
      </span>
      <h2
        className="font-playfair font-black mb-5"
        style={{
          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
          lineHeight: 1.15,
          color: "#fff",
        }}
      >
        Let&apos;s create something great
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: "1rem",
          maxWidth: 500,
          margin: "0 auto 2.5rem",
          lineHeight: 1.75,
        }}
      >
        Looking for a content writer in Kochi? Whether it&apos;s a blog, website
        copy, or social media content — I&apos;d love to help you tell your
        story.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <ContactButton
          href="mailto:naureenmariyam@gmail.com"
          className="inline-block font-bold transition-all"
          baseStyle={{
            background: "#fff",
            color: "var(--terracotta)",
            padding: "0.9rem 2.2rem",
            borderRadius: "2px",
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
          hoverStyle={{
            background: "var(--ink)",
            color: "#fff",
            transform: "translateY(-2px)",
          }}
          outStyle={{
            background: "#fff",
            color: "var(--terracotta)",
            transform: "translateY(0)",
          }}
          ocid="contact.email.button"
        >
          Send me an Email
        </ContactButton>
        <ContactButton
          href="https://www.linkedin.com/in/naureen-mariyam/"
          isExternal
          className="inline-flex items-center gap-2 font-bold transition-all"
          baseStyle={{
            background: "transparent",
            color: "#fff",
            padding: "0.9rem 2.2rem",
            border: "2px solid rgba(255,255,255,0.6)",
            borderRadius: "2px",
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
          hoverStyle={{
            borderColor: "#fff",
            background: "rgba(255,255,255,0.1)",
            transform: "translateY(-2px)",
          }}
          outStyle={{
            borderColor: "rgba(255,255,255,0.6)",
            background: "transparent",
            transform: "translateY(0)",
          }}
          ocid="contact.linkedin.button"
        >
          <SiLinkedin size={16} />
          Connect on LinkedIn
        </ContactButton>
      </div>
      <div className="flex justify-center gap-12 mt-12 flex-wrap">
        <a
          href="mailto:naureenmariyam@gmail.com"
          className="contact-info-link flex items-center gap-2 no-underline"
          style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" }}
        >
          <Mail size={16} />
          naureenmariyam@gmail.com
        </a>
        <span
          className="flex items-center gap-2"
          style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" }}
        >
          <MapPin size={16} />
          Kochi, Kerala, India
        </span>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "rgba(255,255,255,0.4)",
        textAlign: "center",
        padding: "2rem",
        fontSize: "0.8rem",
      }}
    >
      <p>© {year} Naureen Mariyam. Crafted with words ♥</p>
      <p style={{ marginTop: "0.5rem" }}>
        Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--gold)", textDecoration: "none" }}
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <ToolsSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
