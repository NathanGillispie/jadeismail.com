"use client"

import { motion } from "framer-motion"
import { Users, Mic, Landmark, Stethoscope, GraduationCap, HeartHandshake, Baby } from "lucide-react"

export default function WorkProcess() {
  const leadership = [
    {
      icon: Users,
      role: "Founder & President",
      org: "WKU STEMPOWERMENT",
      period: "03/2024 – Present",
      color: "from-red-950 to-amber-900",
      points: [
        "Founded and lead a 50+ member student organization supporting underrepresented students in STEM through mentorship, academic support, service, scholarship guidance, and professional development.",
        "Coordinated campus and community outreach, including STEM service events, TRIO advising connections, high school engagement, and leadership development for younger officers.",
      ],
    },
    {
      icon: Mic,
      role: "Senior Member & Team Representative",
      org: "WKU Forensics",
      period: "08/2023 – Present",
      color: "from-red-950 to-amber-900",
      points: [
        "Competed nationally in Speech & Debate for 10 years, earning state, national, and international recognition across public address, interpretation, limited preparation, and duo events.",
        "Earned multiple collegiate national championships, including NFA finalist placements and International Forensics Association championship recognition.",
      ],
    },
    {
      icon: Landmark,
      role: "Inaugural Chair, Action & Opportunity Committee",
      org: "WKU Student Government",
      period: "01/2024 – Present",
      color: "from-red-950 to-amber-900",
      points: [
        "Founded and chaired the committee following campus DEI restructuring, creating a formal SGA space for equity-centered programming, student advocacy, and campus engagement.",
        "Organized initiatives addressing student access, civic education, and community support.",
      ],
    },
    {
      icon: Stethoscope,
      role: "Member",
      org: "AMSA & Alpha Epsilon Delta Pre-Health Society",
      period: "01/2024 – Present",
      color: "from-red-950 to-amber-900",
      points: [
        "Engage in pre-health programming, professional development, service initiatives, and peer networks focused on medical education, clinical exposure, and preparation for health professions.",
      ],
    },
    {
      icon: GraduationCap,
      role: "Lead Instructor",
      org: "Space City Camp for Free Speech",
      period: "06/2023 – Present",
      color: "from-red-950 to-amber-900",
      points: [
        "Led Speech & Debate instruction for underserved students in argument development, delivery, confidence-building, and individualized performance growth.",
      ],
    },
    {
      icon: HeartHandshake,
      role: "Volunteer & Partner",
      org: "Hope Harbor Center for Survivors of Sexual Assault",
      period: "08/2024 – 12/2024",
      color: "from-red-950 to-amber-900",
      points: [
        "Supported campus-community fundraising and awareness efforts, helping connect students to survivor-centered advocacy, education, and local resources.",
      ],
    },
    {
      icon: Baby,
      role: "Volunteer & Partner",
      org: "Potter Children's Home for Disadvantaged Youth",
      period: "01/2025 – 05/2025",
      color: "from-red-950 to-amber-900",
      points: [
        "Organized student-led fundraising, donation efforts, and campus outreach supporting unhoused youth, foster children, and families served by Potter Children's Home.",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Leadership &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Service
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Turning values into action through mentorship, advocacy, and community partnership.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {leadership.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.org} variants={itemVariants}>
                <motion.div
                  className="relative group h-full p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg overflow-hidden"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground leading-tight">{item.org}</h3>
                        <p className="text-sm text-primary font-medium">{item.role}</p>
                        <time className="text-xs text-muted-foreground">{item.period}</time>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="text-sm text-muted-foreground flex gap-3">
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
