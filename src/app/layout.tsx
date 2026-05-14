import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import CursorEffect from "@/components/shared/CursorEffect";
import BackgroundEffects from "@/components/shared/BackgroundEffects";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Pro Lead Maker — Pre-Qualified B2B Leads That Actually Convert",
    template: "%s | Pro Lead Maker",
  },
  description: siteConfig.description,
  keywords: [
    "B2B lead generation",
    "signal-based prospecting",
    "prospect list building",
    "cold email outreach",
    "email verification",
    "LinkedIn lead generation",
    "data enrichment",
    "pre-qualified leads",
    "outreach-ready data",
    "lead intelligence",
    "sales prospecting",
    "free sample leads",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.founder,
  applicationName: siteConfig.name,
  category: "Business Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Pro Lead Maker — Pre-Qualified B2B Leads That Actually Convert",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pro Lead Maker — Pre-Qualified B2B Leads That Actually Convert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@proleadmaker",
    title:
      "Pro Lead Maker — Pre-Qualified B2B Leads That Actually Convert",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/Logo.png`,
    image: `${siteConfig.url}/images/Team-Founder.jpg`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      url: siteConfig.social.founderLinkedin,
    },
    foundingDate: "2019",
    areaServed: "Worldwide",
    priceRange: "$$",
    serviceType: [
      "Signal-Based Lead Generation",
      "B2B Lead Intelligence",
      "Prospect List Building",
      "Data Enrichment",
      "Email Verification",
      "LinkedIn Prospecting",
      "Cold Email Infrastructure",
      "Email Warmup",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "430",
      bestRating: "5",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.upworkAgency,
      siteConfig.social.upworkPersonal,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://calendly.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://wa.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-ink-900">
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[400] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-purple focus:text-white focus:shadow-lg focus:outline-none"
        >
          Skip to content
        </a>

        <BackgroundEffects />
        <CursorEffect />
        <Navbar />
        <main id="main-content" className="relative z-10 pt-[72px]">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />

        {/* Google Analytics — loaded after content for performance */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.ga}');
          `}
        </Script>
      </body>
    </html>
  );
}
