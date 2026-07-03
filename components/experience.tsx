"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const groups = [
    {
      heading: "Clinical Employment",
      items: [
        {
          title: "Psychiatric Mental Health Technician",
          company: "Rivendell Behavioral Health Hospital",
          period: "07/2025 – Present",
          highlights: [
            "Coordinate with psychiatric providers, licensed social workers, and counselors to gain insight into acute health care and treatment planning.",
            "Facilitate de-escalation strategies during behavioral crises to support patient and staff safety.",
            "Monitor patients to ensure safety and clinical stability at all times.",
            "Lead therapeutic group sessions to enhance social and coping mechanisms.",
            "Draft precise clinical logs documenting daily observed mental states.",
          ],
        },
        {
          title: "Medical Assistant",
          company: "Southern Kentucky Heart Institute",
          period: "06/2025 – 07/2025",
          highlights: [
            "Performed EKG readings, collected vital signs, and conducted patient triage.",
            "Managed electronic medical records ensuring accuracy and data compliance.",
          ],
        },
        {
          title: "Emergency Department Technician Volunteer",
          company: "Med Center Health",
          period: "01/2025 – 07/2025",
          highlights: [
            "Assisted with patient coordination, vital signs, inventory management, and supply stocking in the Emergency Department.",
            "Shadowed ER providers to gain insight into acute medical assistance.",
          ],
        },
      ],
    },
    {
      heading: "Non-Clinical Employment",
      items: [
        {
          title: "Global Belonging & Inclusion Intern",
          company: "MilliporeSigma (Merck KGaA)",
          period: "05/2026 – Present",
          highlights: [
            "Support global Belonging & Inclusion initiatives across the Americas region.",
            "Assist with healthcare and biotech-focused outreach, communications, and engagement programming.",
            "Collaborate with B&I leaders to strengthen inclusive workplace culture.",
          ],
        },
        {
          title: "Public Address Coach & Writing Instructor",
          company: "Privately Operated",
          period: "05/2023 – Present",
          highlights: [
            "Mentor students to refine oratorical delivery and public engagement.",
            "Instruct diverse groups in advanced rhetorical devices and structure.",
            "Facilitate workshops on persuasive writing techniques for academics.",
          ],
        },
        {
          title: "Literary Interpretation & Public Address Instructor",
          company: "UNC Chapel Hill — Institute for Speech & Debate",
          period: "06/2023 – 07/2025",
          highlights: [
            "Taught students effective public speaking under the Institute for Speech & Debate.",
            "Created course materials and led lectures on speech preparation, delivery, and audience engagement.",
          ],
        },
        {
          title: "Public Speaking Lead Instructor",
          company: "Stanford University",
          period: "07/2024",
          highlights: [
            "Created a comprehensive curriculum teaching speech writing and public address.",
            "Worked with students from many parts of the globe to grow confidence in academic and professional communication.",
          ],
        },
      ],
    },
    {
      heading: "Research, Publications & Presentations",
      items: [
        {
          title: "Honors Thesis Research, Psychological Sciences",
          company:
            "\"Attraction with an Asterisk: A Conjoint Analysis of Desirability, Bias, and Political Judgments Toward Transgender Women in Relationship Decision-Making\"",
          period: "08/2023 – Present",
          highlights: [
            "Conducted an independent conjoint analysis examining how transgender identity, attractiveness, personality, moral values, and criminal history influenced heterosexual men's romantic, sexual, and overall partner evaluations.",
            "In Press, the American Psychological Association, Journal of Sexual Orientation and Gender Diversity.",
            "Secured $3,500 in undergraduate research funding and presented at the APS Global Summit, SPSP Annual Convention, and WKU Student Scholar Showcase.",
          ],
        },
        {
          title: "Honors Curriculum Research, Biological Epidemiology",
          company: "\"Post-Weight-Loss Psychological Asymmetries in the Era of GLP-1 Receptor Agonists\"",
          period: "08/2024 – Present",
          highlights: [
            "Examining GLP-1 receptor agonist mechanisms and the ethical, public health, and access implications of GLP-1 therapies.",
          ],
        },
        {
          title: "Honors Curriculum Research, Molecular Biology",
          company: "Estrogenic & Antiandrogenic Signaling in Gender-Affirming Hormone Therapy",
          period: "01/2026 – 05/2026",
          highlights: [
            "Synthesized molecular, clinical, and epidemiological literature on estrogenic and antiandrogenic signaling in transfeminine gender-affirming hormone therapy.",
            "Analyzed estradiol activity, androgen suppression, receptor signaling, endocrine feedback, and downstream physiological outcomes.",
          ],
        },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Clinical &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {groups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-2xl font-bold mb-8 text-foreground">{group.heading}</h3>
              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {group.items.map((exp, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <motion.div
                      className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                      whileHover={{ paddingLeft: 32 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-bold text-lg text-foreground">{exp.title}</h4>
                          <p className="text-primary font-medium text-pretty">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          <time>{exp.period}</time>
                        </div>
                      </div>

                      <ul className="space-y-2 mt-4">
                        {exp.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-muted-foreground flex gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                          >
                            <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                              •
                            </span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
