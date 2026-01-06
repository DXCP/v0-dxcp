"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Section {
  id: string
  label: string
}

interface ScrollProgressNavProps {
  sections: Section[]
}

export function ScrollProgressNav({ sections }: ScrollProgressNavProps) {
  const [activeSection, setActiveSection] = React.useState<string>(sections[0]?.id || "")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <nav
      className="fixed top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3"
      style={{ right: "24px" }}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group p-1"
          aria-label={section.label}
          title={section.label}
        >
          <div
            className={cn(
              "rounded-full transition-all duration-300",
              activeSection === section.id
                ? "w-3 h-3 bg-primary"
                : "w-2 h-2 bg-muted-foreground/40 group-hover:bg-primary/60 group-hover:scale-125",
            )}
          />
        </button>
      ))}
    </nav>
  )
}
