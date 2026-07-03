"use client"

import { motion } from "framer-motion"
import { HeartPulse, Microscope, Megaphone, Award, GraduationCap, Trophy } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Clinical",
      icon: HeartPulse,
      skills: ["Patient Triage", "Vitals & EKG", "Crisis De-escalation", "Clinical Charting", "Group Therapy", "EMR Management"],
      color: "from-red-300 to-green-800",
    },
    {
      title: "Research & Analysis",
      icon: Microscope,
      skills: ["Research Design", "Data Analysis", "Conjoint Analysis", "Literature Synthesis", "Scientific Writing", "APA Publication"],
      color: "from-red-300 to-green-800",
    },
    {
      title: "Advocacy & Communication",
      icon: Megaphone,
      skills: ["Public Speaking", "Health Education", "LGBTQ+ Advocacy", "Patient Rights & Policy", "Mentorship", "Spanish (Proficient)"],
      color: "from-red-300 to-green-800",
    },
    {
      title: "Certifications",
      icon: Award,
      skills: [
        "Certified Clinical Medical Assistant",
        "CITI Human Subjects Research",
        "CITI Responsible Conduct of Research",
        "MS Word Specialist",
        "MS PowerPoint Specialist",
      ],
      color: "from-red-300 to-green-800",
    },
  ]

  const education = [
    {
      school: "Western Kentucky University",
      location: "Bowling Green, KY",
      period: "08/2023 – 05/2027",
      details: [
        "B.S. in Psychological Sciences — 4.0 Departmental GPA, Thesis-Track Honors Degree",
        "B.S. in Minority Medicine & Health Equity — 3.95 GPA, Mahurin Honors College Self-Design Major",
      ],
    },
    {
      school: "United States Career Institute",
      location: "Clinical Medical Assistant Certification Program",
      period: "06/2025 – 07/2025",
      details: ["Certified by the National Healthcareer Association on July 4, 2025."],
    },
  ]

  const honors = [
    "Holle Award for Excellence in Forensics, University of Alabama — $10,000 national award (2025)",
    "International Forensics Association Global Champion, Dublin, Ireland (2024)",
    "Cherry Presidential Scholarship — $64,000 WKU academic merit scholarship",
    "National Forensics Association National Champion (2024–2026)",
    "Asynchronous National Tournament Champion — Informative Speaking & Prose Interpretation (2026)",
    "NSDA Student of the Year (2023) & National Champion (2022)",
    "2x Outstanding Public Service Award, WKU (2025–2026)",
    "Seat at the Table: Outstanding Leadership Award, WKU Black Alumni Association (2026)",
    "Faculty-Undergraduate Student Engagement Grant — $3,500 research funding (2024)",
  ]

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <motion.div
                  className="relative h-full p-6 bg-card rounded-lg border border-border overflow-hidden group cursor-pointer"
                  whileHover={{ y: -8, borderColor: "var(--primary)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                    </motion.div>

                    <ul className="space-y-3">
                      {category.skills.map((skill, idx) => (
                        <motion.li
                          key={skill}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05, duration: 0.4 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-7 h-7 text-primary" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div key={edu.school} className="p-6 bg-card rounded-lg border border-border">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h4 className="font-bold text-foreground">{edu.school}</h4>
                  <time className="text-sm text-muted-foreground">{edu.period}</time>
                </div>
                <p className="text-sm text-primary font-medium mb-4">{edu.location}</p>
                <ul className="space-y-2">
                  {edu.details.map((d) => (
                    <li key={d} className="text-sm text-muted-foreground flex gap-3">
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-7 h-7 text-primary" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-foreground">Honors, Awards & Grants</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {honors.map((honor) => (
              <div
                key={honor}
                className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors flex gap-3"
              >
                <Award className="w-4 h-4 text-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">{honor}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
