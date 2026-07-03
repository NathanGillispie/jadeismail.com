import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"
import { siteUrl } from "@/lib/site"

const playfair = localFont({
  src: "./fonts/Playfair_9pt-Medium.ttf",
  weight: "500",
  variable: "--font-playfair",
})

const cormorantUnicase = localFont({
  src: "./fonts/CormorantUnicase-Medium.ttf",
  weight: "500",
  variable: "--font-cormorant",
})

const monteCarlo = localFont({
  src: "./fonts/MonteCarlo-Regular.ttf",
  weight: "400",
  variable: "--font-monte-carlo",
})

export const metadata: Metadata = {
  title: "Jade G. Ismail | Pre-Medical Student & Researcher | Portfolio",
  description:
    "Honors pre-medical student and researcher with an APA-accepted publication and experience spanning clinical care, behavioral health, activism, and public speaking. Focused on health equity and patient-centered care.",
  keywords: [
    "Pre-Medical Student",
    "Medical Researcher",
    "Clinical Medical Assistant",
    "Psychiatric Health Technician",
    "Health Equity",
    "Psychological Sciences",
    "Western Kentucky University",
    "Bowling Green KY",
    "Jade Ismail",
    "Jade G. Ismail",
    "Jade Ismail portfolio",
    "Jade Ismail pre-med",
    "Jade Ismail researcher",
  ],
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jade G. Ismail | Pre-Medical Student & Researcher",
    description:
      "Honors pre-medical student and researcher focused on health equity, clinical care, and evidence-based, patient-centered medicine.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jade G. Ismail | Pre-Medical Student & Researcher",
    description:
      "Honors pre-medical student and researcher focused on health equity, clinical care, and evidence-based, patient-centered medicine.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jade G. Ismail",
              url: siteUrl,
              jobTitle: "Pre-Med Student & Researcher",
              email: "isjademail@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bowling Green",
                addressRegion: "KY",
                addressCountry: "US",
              },
              alumniOf: "Western Kentucky University",
              knowsAbout: [
                "Clinical Medicine",
                "Behavioral Health",
                "Health Equity",
                "Psychological Sciences",
                "Medical Research",
                "Public Speaking",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorantUnicase.variable} ${monteCarlo.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
