"use client"

import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "./aceternity/text-generate-effect"
import { SilkBackground } from "./aceternity/silk-background"
import { resumePath } from "@/lib/site"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <SilkBackground>
      <section
        className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20 relative"
        id="main-content"
      >
        <div className="w-full max-w-5xl mx-auto mb-12 relative z-10">
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

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            aria-hidden="true"
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10 flex-1 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <motion.div variants={itemVariants} className="mb-6 inline-block"> */}
            {/* <motion.div */}
            {/*   className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-medium border border-primary/30 flex items-center gap-2" */}
            {/*   animate={{ scale: [1, 1.05, 1] }} */}
            {/*   transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} */}
            {/* > */}
            {/*   <Sparkles className="w-4 h-4" aria-hidden="true" /> */}
            {/*   world */}
            {/* </motion.div> */}
          {/* </motion.div> */}

          <motion.h1
            variants={itemVariants}
            className="hero-name font-hero text-6xl sm:text-7xl lg:text-8xl mb-6 text-balance"
          >
            <span className="hero-name-text">Jade G. Ismail</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground mb-4 text-balance font-semibold"
          >
            Pre-Medical Student & Researcher
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12">
            <TextGenerateEffect
              words="Honors pre-medical student with an APA-accepted publication and experience spanning clinical care, behavioral health, activism, and public speaking. Focused on health equity and evidence-based, patient-centered care."
              className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
              duration={0.05}
              filter={true}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Experience
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href={resumePath}
              download="JADEISMAILCV.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary/50 rounded-lg font-medium hover:bg-primary/10 hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <Download className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "12", label: "National Forensics Titles" },
              { value: "APA", label: "Published Manuscript" },
              { value: "150", label: "Students Mentored" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary transition-colors"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </SilkBackground>
  )
}
