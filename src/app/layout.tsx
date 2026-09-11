import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EMAIL, SITE_URL, links, meta, person } from "@/content/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: meta.title,
    template: `%s — ${person.shortName}`,
  },
  description: meta.description,
  applicationName: person.shortName,
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  keywords: [
    "Andrei Cherecheș",
    "Andrei Petru Cherecheș",
    "Claude Code",
    "agentic development",
    "AI builder",
    "UTCN",
    "Technical University of Cluj-Napoca",
    "Eforah",
    "Dash",
    "Cluj-Napoca",
    "student developer community",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Andrei Petru",
    lastName: "Cherecheș",
    url: SITE_URL,
    siteName: person.shortName,
    title: meta.title,
    description: meta.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#15140f" },
  ],
  colorScheme: "light dark",
};

/** Resolves the theme before first paint so the page never flashes the wrong one. */
const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem("theme");var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","light")}})()`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  alternateName: person.shortName,
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  jobTitle: "Software Engineer",
  description: meta.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cluj-Napoca",
    addressCountry: "RO",
  },
  worksFor: { "@type": "Organization", name: "Eforah", url: links.eforah },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Technical University of Cluj-Napoca",
    url: links.utcn,
  },
  knowsAbout: [
    "Agentic development",
    "Claude Code",
    "Applied AI",
    "Software engineering",
    "Student technology communities",
  ],
  sameAs: [links.linkedin, links.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
