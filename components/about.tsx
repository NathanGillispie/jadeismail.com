"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { HeartPulse, Microscope, Scale, Megaphone, Users } from "lucide-react"

function AboutPhoto({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none md:mx-0 ${className}`}>
      <Image
        src="/about_me.webp"
        alt="Jade G. Ismail"
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, 384px"
      />
    </div>
  )
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: "Clinical Care",
      description:
        "Behavioral health, cardiology, and emergency experience spanning safety monitoring, triage, EKGs, and crisis de-escalation.",
      icon: <HeartPulse size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Research",
      description:
        "APA in-press publication and honors research at the intersection of biology, identity, bias, and access.",
      icon: <Microscope size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Health Equity",
      description:
        "Committed to patient rights, policy, and evidence-based approaches that close the gap between need and access.",
      icon: <Scale size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Advocacy",
      description:
        "LGBTQ+ advocacy and equity-centered programming through student government and community partnerships.",
      icon: <Megaphone size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Leadership",
      description:
        "Founder and president of a 50+ member STEM organization supporting underrepresented students.",
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Communication",
      description:
        "A decade in speech and debate with state, national, and international championship recognition.",
      icon: <Megaphone size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <AboutPhoto className="mt-8 md:hidden" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 flex flex-col md:flex-row md:gap-12 md:items-start">
            <div className="flex-1 max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am an honors pre-medical student at{" "}
              <span className="font-semibold text-foreground">Western Kentucky University</span> pursuing a B.S. in
              Psychological Sciences and a B.S. in Minority Medicine &amp; Health Equity, a self-design major I created
              to explore disparities in the healthcare system.
              My path to medicine is shaped by a commitment to patient-centered care and the belief that disadvantaged communities deserve
              to be seen fully, treated with reaspect, and researched with integrity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a{" "}
              <span className="font-semibold text-foreground">Certified Clinical Medical Assistant</span> with experience in inpatient psychiatry, outpatient cardiology, and emergency medicine,
              I&apos;ve learned how successful physicians require both skill and compassion. My undergraduate research highlights my
              interest in the intersections of biology, identity, bias, and access. This includes my honors thesis on
              transgender identity and social rejection as well as my work on GLP-1 receptor agonists and gender-affirming
              hormone therapy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond the clinic and classroom, I turned my values into service by founding{" "}
              <span className="font-semibold text-foreground">WKU STEMPOWERMENT</span>, leading advocacy intiatives
              through Student Government, and drawing on ten years of competitive Speech and Debate. I want to practice medicine as both a science
              and a muscle that I continuously strengthen through scholastic curiosity and a dedication to equity.
            </p>
            </div>
            <div className="hidden md:block flex-shrink-0 w-72 lg:w-80">
              <AboutPhoto />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <h3 className="text-2xl font-bold mb-8 text-foreground">My Passions</h3>
            <HoverEffect items={highlights} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
