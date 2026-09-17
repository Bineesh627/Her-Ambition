import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://herambition.org"),
  title: "HerAmbition — Lead with Grace & Impact | Women's Leadership & Career Community",
  description:
    "Practical programs, a supportive community and real opportunities to help you restart, grow and lead, on your terms.",
  keywords: [
    "women leadership",
    "career restart",
    "women in business",
    "executive coaching",
    "women founders",
    "HerAmbition",
  ],
  authors: [{ name: "HerAmbition Community" }],
  openGraph: {
    title: "HerAmbition — Lead with Grace & Impact",
    description:
      "Practical programs, a supportive community and real opportunities to help you restart, grow and lead, on your terms.",
    url: "https://herambition.org",
    siteName: "HerAmbition",
    images: [
      {
        url: "/images/hero-portrait.png",
        width: 800,
        height: 600,
        alt: "HerAmbition Community & Programs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HerAmbition — Lead with Grace & Impact",
    description:
      "Practical programs, a supportive community and real opportunities to help you restart, grow and lead, on your terms.",
    images: ["/images/hero-portrait.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HerAmbition",
              url: "https://herambition.org",
              logo: "https://herambition.org/images/hero-portrait.png",
              description:
                "Practical programs, a supportive community and real opportunities to help you restart, grow and lead, on your terms.",
              sameAs: [
                "https://www.linkedin.com",
                "https://www.instagram.com",
                "https://www.youtube.com",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1E1C1A] selection:bg-[#B44A63] selection:text-white">
        {children}
      </body>
    </html>
  );
}
