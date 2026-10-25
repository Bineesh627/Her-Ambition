import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://herambition.org"),
  title: "HerAmbition — Lead with Grace & Impact | Women's Leadership & Career Community",
  description:
    "Practical programs and a supportive community empowering women to return to work, rebuild confidence, and lead — on your terms. Join 500+ ambitious women today.",
  keywords: [
    "women leadership",
    "career restart",
    "women in business",
    "executive mentorship for women",
    "women founders accelerator",
    "HerAmbition community",
    "career readiness for women",
    "women empowerment network",
    "women returning to work",
  ],
  authors: [{ name: "HerAmbition Community", url: "https://herambition.org" }],
  creator: "HerAmbition",
  publisher: "HerAmbition",
  category: "Leadership & Professional Development",
  alternates: {
    canonical: "https://herambition.org",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "HerAmbition — Lead with Grace & Impact",
    description:
      "Practical programs and a supportive community empowering women to return to work, rebuild confidence, and lead — on your terms.",
    url: "https://herambition.org",
    siteName: "HerAmbition",
    images: [
      {
        url: "/images/hero-portrait.webp",
        width: 860,
        height: 850,
        alt: "HerAmbition Community & Programs for Ambitious Women",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HerAmbition — Lead with Grace & Impact",
    description:
      "Practical programs and a supportive community empowering women to return to work, rebuild confidence, and lead — on your terms.",
    images: ["/images/hero-portrait.webp"],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://herambition.org/#organization",
        name: "HerAmbition",
        alternateName: "Her Ambition Community",
        url: "https://herambition.org",
        logo: {
          "@type": "ImageObject",
          url: "https://herambition.org/logo-herambition.webp",
          width: 913,
          height: 591,
        },
        image: "https://herambition.org/images/hero-portrait.webp",
        description:
          "HerAmbition is a premier women's leadership and career community empowering women through practical programs, mentorship, and professional networks.",
        founder: {
          "@type": "Person",
          name: "Tabassum Sait",
          jobTitle: "Founder & Chief Mentor",
          description: "HR Practitioner, CIPD Certified, Mentor and Builder of Communities with 15+ years experience across Swiss Re, NHS, and startups.",
        },
        sameAs: [
          "https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4",
          "https://www.instagram.com/herambition.community?stkn=MTZsenJzcTF5Z2NxMQ%3D%3D&utm_source=qr",
          "https://www.linkedin.com",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "community support",
          url: "https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://herambition.org/#website",
        url: "https://herambition.org",
        name: "HerAmbition",
        publisher: {
          "@id": "https://herambition.org/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": "https://herambition.org/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is HerAmbition?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "HerAmbition is a transformative community and career platform dedicated to women's leadership, career restarts, executive growth, and entrepreneurship. We provide practical 4-6 week cohort programs, 1-on-1 mentorship, and a peer network to help women lead on their terms.",
            },
          },
          {
            "@type": "Question",
            name: "How can I join the HerAmbition community?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can join the HerAmbition WhatsApp community directly through our official invite link at https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4, connecting immediately with over 500+ ambitious women.",
            },
          },
          {
            "@type": "Question",
            name: "What programs are offered by HerAmbition?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "HerAmbition offers three specialized pathways: 1) The Becoming (Career Strategy & Workforce Return), 2) HerInfluence (Executive Presence & Leadership Development), and 3) The FoundHer (Entrepreneurship & Venture Scaling).",
            },
          },
          {
            "@type": "Question",
            name: "Who is eligible to join HerAmbition programs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "HerAmbition welcomes women at every stage of their professional journey—whether restarting after a career break, accelerating into senior executive and director positions, or founding their own business venture.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Career Readiness Track?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Career Readiness is a hands-on program focusing on Resume & LinkedIn makeovers, executive interview preparation, career trajectory clarity, and ongoing mentorship support.",
            },
          },
        ],
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "The Becoming",
        description:
          "Career strategy and restart program designed for women returning to the workforce or realigning their professional trajectory.",
        timeToComplete: "P4W/P6W",
        provider: {
          "@id": "https://herambition.org/#organization",
        },
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "HerInfluence",
        description:
          "Executive presence and leadership development accelerator for mid-to-senior women professionals.",
        timeToComplete: "P4W/P6W",
        provider: {
          "@id": "https://herambition.org/#organization",
        },
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "The FoundHer",
        description:
          "Entrepreneurship and business scaling accelerator for aspiring and early-stage female founders.",
        timeToComplete: "P4W/P6W",
        provider: {
          "@id": "https://herambition.org/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1E1C1A] selection:bg-[#B44A63] selection:text-white">
        {children}
      </body>
    </html>
  );
}
