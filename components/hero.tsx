import type { CSSProperties, ReactNode } from "react"
import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"
import { resumePath } from "@/lib/site"

function SilkBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl silk-blob-1" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/25 via-primary/15 to-transparent rounded-full blur-3xl silk-blob-2" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-accent/20 via-secondary/15 to-transparent rounded-full blur-3xl silk-blob-3" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-tl from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl silk-blob-4" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

function TextGenerateEffect({
  words,
  className = "",
  wordDelayMs = 50,
}: {
  words: string
  className?: string
  wordDelayMs?: number
}) {
  const wordsArray = words.split(" ")

  return (
    <p className={className}>
      {wordsArray.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className="word-reveal drop-shadow-lg"
          style={{ "--word-delay": `${idx * wordDelayMs}ms` } as CSSProperties}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  )
}

export default function Hero() {
  const stats = [
    { value: "12", label: "National Forensics Titles" },
    { value: "APA", label: "Published Manuscript" },
    { value: "150", label: "Students Mentored" },
  ]

  return (
    <SilkBackground>
      <section
        className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative"
        id="main-content"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            aria-hidden="true"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center w-full relative z-10">
          <div className="w-full max-w-5xl lg:max-w-2xl mx-auto mb-4">
            <div className="relative aspect-[4/3] w-full rounded-4xl">
              <div className="absolute inset-0 hero-image-fade" aria-hidden="true">
                <Image
                  src="/hero.webp"
                  alt=""
                  fill
                  className="object-cover object-[center_33%] scale-105 blur-md"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
              <div className="absolute inset-0 hero-image-fade">
                <Image
                  src="/hero.webp"
                  alt="Jade G. Ismail"
                  fill
                  priority
                  className="object-cover object-[center_33%] rounded-3xl"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="hero-name font-hero text-6xl sm:text-7xl lg:text-8xl mb-6 text-balance fade-in-up-on-load"
              style={{ "--stagger": 0 } as CSSProperties}
            >
              <span className="hero-name-text">Jade G. Ismail</span>
            </h1>

            <p
              className="text-xl sm:text-2xl text-muted-foreground mb-4 text-balance font-semibold fade-in-up-on-load"
              style={{ "--stagger": 1 } as CSSProperties}
            >
              Pre-Medical Student & Researcher
            </p>

            <div className="mb-12 fade-in-up-on-load" style={{ "--stagger": 2 } as CSSProperties}>
              <TextGenerateEffect
                words="Honors pre-medical student with an APA-accepted publication and experience spanning clinical care, behavioral health, activism, and public speaking. Focused on health equity and evidence-based, patient-centered care."
                className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
                wordDelayMs={50}
              />
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up-on-load"
              style={{ "--stagger": 3 } as CSSProperties}
            >
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover-scale-btn"
              >
                View My Experience
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={resumePath}
                download="JADEISMAILCV.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary/50 rounded-lg font-medium hover:bg-primary/10 hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover-scale-btn"
              >
                Download CV
                <Download className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto fade-in-up-on-load"
              style={{ "--stagger": 4 } as CSSProperties}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary transition-colors hover-scale-stat"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SilkBackground>
  )
}
